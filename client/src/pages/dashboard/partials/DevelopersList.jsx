import { Chip } from "@nextui-org/chip";
import React, { useEffect, useRef, useState } from "react";

import GenrePlatormCard, {
  truncateGameName,
} from "../../../components/GenrePlatormCard";
import CardSkeleton from "../../../components/CardsSkeleton";
import ErrorComponent from "../../../components/ErrorComponent";
import {
  fetchDevlopersList,
  fetchNextPageData,
} from "../../../../../server/api/rawg_api_data";

import { Spinner } from "@nextui-org/spinner";
import { formatNumberWithCommas } from "../../../components/GameCard";
import { Button } from "@nextui-org/button";

const DevelopersList = () => {
  const [developersResult, setDevelopersResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextUrl, setNextUrl] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1); // Track the current page

  const loader = useRef(null); // Ref for the loader div

  useEffect(() => {
    const fetchDevelopers = async () => {
      try {
        const data = await fetchDevlopersList();
        setData(data);
        setDevelopersResult(data.results);
        setNextUrl(data.next);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchDevelopers();
  }, []);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      try {
        const response = await fetchNextPageData("developers", page);
        setData(response.data);
        setDevelopersResult((prevGames) => [...prevGames, ...response.results]);
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
      {loading && developersResult.length === 0 ? (
        <div className="w-full columns-3 sm-tab:columns-2 xs-tab:columns-1 space-y-5 lg-tab:px-10 xs-tab:px-5">
          {[...Array(6)].map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="w-full columns-3 sm-tab:columns-2 xs-tab:columns-1 space-y-5 my-5 mb-10 lg-tab:px-10 xs-tab:px-5">
          {developersResult.map((developers, index) => (
            <GenrePlatormCard
              key={`${developers.id}-${index}`}
              img={developers.image_background}
              name={developers.name}
              games_count={developers.games_count}
            >
              <div className="flex w-full flex-wrap gap-2">
                {(developers?.games ?? []).map((game) => (
                  <Chip
                    key={game.id}
                    size="small"
                    color="warning"
                    variant="faded"
                    className="flex gap-1"
                  >
                    <span className="truncate w-[100px]">
                      {truncateGameName(game.name)}
                    </span>{" "}
                    - {formatNumberWithCommas(game.added)}
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

export default DevelopersList;
