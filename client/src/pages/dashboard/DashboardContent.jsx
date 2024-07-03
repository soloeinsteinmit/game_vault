import { Select, SelectItem } from "@nextui-org/select";
import React, { useEffect, useRef, useState } from "react";
import { platforms, order_by } from "../../data/client_data";
import GameCard from "../../components/GameCard";

import GameSkeleton from "../../components/GameSkeleton";

import {
  fetchGamesList,
  fetchNextPageData,
} from "../../../../server/api/rawg_api_data";
import ErrorComponent from "../../components/ErrorComponent";
import { Spinner } from "@nextui-org/spinner";

const DashboardContent = () => {
  const [gamesResult, setGamesResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextUrl, setNextUrl] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1); // Track the current page

  const loader = useRef(null); // Ref for the loader div

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const data = await fetchGamesList();
        setData(data);
        setGamesResult(data.results);
        setNextUrl(data.next);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchGames();
  }, []); // Empty dependency array means this effect runs once after the initial render.

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      try {
        const response = await fetchNextPageData("games", page);
        setData(response.data);
        setGamesResult((prevGames) => [...prevGames, ...response.results]);
        setNextUrl(response.next);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchGames();
  }, [page]);

  const handleScroll = () => {
    if (
      loader.current &&
      window.innerHeight + window.scrollY >= document.body.offsetHeight
    ) {
      // Reached the bottom of the page
      setPage((prevPage) => prevPage + 1); // Increment page to load more data
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (error) return <ErrorComponent errorMessage={error.message} />;

  return (
    <div className="w-full flex flex-col gap-5 pb-20 lg-tab:px-10 sm-scard-tab:px-8 mobile:px-5">
      <p className="flex flex-col text-4xl font-extrabold sm-scard-tab:text-center">
        Top Picks{" "}
        <span className="text-base font-normal">Based on ratings</span>
      </p>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4 mobile:mt-0 sm-scard-tab:justify-center">
        <Select label="Order by:" className="max-w-xs" size="sm" radius="md">
          {order_by.map((order) => (
            <SelectItem key={order.key}>{order.label}</SelectItem>
          ))}
        </Select>
        <Select label="Platform" className="max-w-xs" size="sm" radius="md">
          {platforms.map((platform) => (
            <SelectItem key={platform.id}>{platform.label}</SelectItem>
          ))}
        </Select>
      </div>
      {loading && gamesResult.length === 0 ? (
        <div className="w-full columns-3 lg-tab:columns-2 xxs-tab:columns-1 space-y-5">
          {[...Array(6)].map((_, index) => (
            <GameSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="w-full columns-3 lg-tab:columns-2 xxs-tab:columns-1 desktop-large-1700:columns-4 space-y-5">
          {gamesResult.map((game, index) => (
            <GameCard
              key={`${game.id}-${index}`}
              gameImage={game.background_image}
              platforms={getPlatformSlugs(game.parent_platforms)}
              metascore={getMetascore(game.metacritic)}
              gameName={game.name}
              added={game.added}
              status={getHighestCountTitle(game.ratings)}
              releaseDate={game.released}
              genres={getNamesArray(game.genres)}
              rank={game.rating_top}
            />
          ))}
        </div>
      )}
      <div
        ref={loader}
        className="flex items-center w-full justify-center pb-20"
      >
        {loading && <Spinner size="lg" />}
        {/*  <Button ref={loader} isLoading={loading} onClick={loadMoreGames}>
          Load more...
         
        </Button> */}
      </div>
    </div>
  );
};

export default DashboardContent;

function getHighestCountTitle(ratings) {
  return ratings.reduce(
    (max, rating) => (rating.count > max.count ? rating : max),
    ratings[0]
  ).title;
}

function getNamesArray(genres) {
  return genres.map((genre) => genre.name);
}

function getPlatformSlugs(parent_platforms) {
  return parent_platforms.map((item) => item.platform.slug);
}
const getMetascore = (metacritic) => {
  return metacritic ?? 0;
};

/* 

  const loadMoreGames = async () => {
    setLoading(true);
    try {
      const response = await axios.get(nextUrl);
      setData(response.data);
      setGamesResult((prevGames) => [...prevGames, ...response.data.results]);
      setNextUrl(response.data.next);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

*/
