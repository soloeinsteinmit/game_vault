import React, { useEffect, useState, useRef } from "react";
import {
  fetchNextPageData,
  fetchPlatformsList,
} from "../../../../../server/api/rawg_api_data";
import ErrorComponent from "../../../components/ErrorComponent";
import CardSkeleton from "../../../components/CardsSkeleton";
import GenrePlatormCard, {
  truncateGameName,
} from "../../../components/GenrePlatormCard";
import { Chip } from "@nextui-org/chip";
import { formatNumberWithCommas } from "../../../components/GameCard";
import { Spinner } from "@nextui-org/spinner";
import { Button } from "@nextui-org/button";

const PlatformList = () => {
  const [platformResult, setPlatformResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextUrl, setNextUrl] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1); // Track the current page

  const loader = useRef(null); // Ref for the loader div

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const data = await fetchPlatformsList();

        setData(data);
        setPlatformResult(data.results);

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      try {
        const response = await fetchNextPageData("platforms", page);
        setData(response.data);
        setPlatformResult((prevGames) => [...prevGames, ...response.results]);
        setNextUrl(response.next);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchGames();
  }, [page]);

  // Function to handle scrolling
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

  if (error) return <ErrorComponent errorMessage={error.message} />;

  return (
    <>
      {loading && platformResult.length === 0 ? (
        <div className="w-full columns-3  sm-tab:columns-2 xs-tab:columns-1 space-y-5 lg-tab:px-10 xs-tab:px-5">
          {[...Array(6)].map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="w-full columns-3 sm-tab:columns-2 xs-tab:columns-1 space-y-5 my-5 mb-10 lg-tab:px-10 xs-tab:px-5">
          {platformResult.map((platform, index) => (
            <GenrePlatormCard
              key={`${platform.id}-${index}`}
              img={platform.image_background}
              name={platform.name}
              games_count={platform.games_count}
            >
              <div className="flex w-full flex-wrap gap-2">
                {platform.games.map((game) => (
                  <Chip size="sm" key={game.id} color="warning" variant="faded">
                    {truncateGameName(game.name)} -{" "}
                    {formatNumberWithCommas(game.added)}
                  </Chip>
                ))}
              </div>
            </GenrePlatormCard>
          ))}
        </div>
      )}
      <div
        ref={loader}
        className="flex flex-col gap-3 items-center w-full justify-center pb-20"
      >
        {loading && <Spinner size="lg" />}
        <Button
          ref={loader}
          isLoading={loading}
          onClick={loadMoreGames}
          className="hidden mobile:flex"
        >
          Load more data
        </Button>
      </div>
    </>
  );
};

export default PlatformList;
