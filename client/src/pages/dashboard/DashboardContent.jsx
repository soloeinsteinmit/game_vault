import { Select, SelectItem } from "@nextui-org/select";
import React, { useEffect, useRef, useState } from "react";
import { platforms, order_by } from "../../data/client_data";
import GameCard from "../../components/GameCard";
import axios from "axios";
import { Button } from "@nextui-org/button";
import GameSkeleton from "../../components/GameSkeleton";

import { RiSignalWifiErrorLine } from "react-icons/ri";
import { fetchGamesList } from "../../../../server/api/rawg_api_data";

const DashboardContent = () => {
  const [gamesResult, setGamesResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextUrl, setNextUrl] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1); // Track the current page

  const loader = useRef(null); // Ref for the loader div

  const rawgApiKey = import.meta.env.VITE_RAWG_API_KEY;
  /* const response = await axios.get(
          `https://api.rawg.io/api/games?key=${rawgApiKey}`
        ); */
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

  if (error)
    return (
      <div className="flex flex-col gap-5 my-10 items-center justify-center ">
        <div className="flex items-center justify-center p-5 rounded-full bg-danger-100">
          <RiSignalWifiErrorLine className="text-7xl text-danger" />
        </div>
        <p className="text-4xl font-bold text-danger">An error occured⛔☹️</p>
        <span className="text-danger"> Error: {error.message}</span>
      </div>
    );

  return (
    <div className="w-full flex flex-col gap-5 pb-20">
      <p className="flex flex-col text-4xl font-extrabold">
        Top Picks{" "}
        <span className="text-base font-normal">Based on ratings</span>
      </p>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
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
        <div className="w-full columns-3 space-y-5">
          {[...Array(6)].map((_, index) => (
            <GameSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="w-full columns-3 space-y-5">
          {gamesResult.map((game, index) => (
            <GameCard
              key={`${game.id}-${index}`}
              gameImage={game.background_image}
              platforms={getPlatformSlugs(game.parent_platforms)}
              metascore={game.metacritic}
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
      <div className="flex items-center w-full justify-center">
        {/* Loader component */}
        {/*  <div
          ref={loader}
          style={{ margin: "auto", textAlign: "center", padding: "10px" }}
        >
          {loading && <p>Loading more...</p>}
        </div> */}
        <Button ref={loader} isLoading={loading} onClick={loadMoreGames}>
          Load more games
          {/* {loading && "Loading more games..."} */}
        </Button>
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

/*   useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games?key=${rawgApiKey}&page=${page}`
        );
        setData(response.data);
        setGamesResult((prevGames) => [...prevGames, ...response.data.results]);
        setNextUrl(response.data.next);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchGames();
  }, [page]); */ // Trigger fetchGames when page changes

// Function to handle scrolling
/*  const handleScroll = () => {
    if (
      loader.current &&
      window.innerHeight + window.scrollY >= document.body.offsetHeight
    ) {
      // Reached the bottom of the page
      setPage((prevPage) => prevPage + 1); // Increment page to load more data
    }
  }; */

/* useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); */
