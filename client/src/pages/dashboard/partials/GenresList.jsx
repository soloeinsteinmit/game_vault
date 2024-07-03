import React, { useEffect, useRef, useState } from "react";
import GenrePlatormCard, {
  truncateGameName,
} from "../../../components/GenrePlatormCard";
import {
  fetchGenresList,
  fetchNextPageData,
} from "../../../../../server/api/rawg_api_data";
import { RiSignalWifiErrorLine } from "react-icons/ri";
import { Chip } from "@nextui-org/chip";
import { formatNumberWithCommas } from "../../../components/GameCard";
import CardSkeleton from "../../../components/CardsSkeleton";
import ErrorComponent from "../../../components/ErrorComponent";
import { Spinner } from "@nextui-org/spinner";

const GenresList = () => {
  const [genreResult, setGenreResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextUrl, setNextUrl] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const loader = useRef(null); // Ref for the loader div

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const data = await fetchGenresList();

        setData(data);
        setGenreResult(data.results);
        setNextUrl(data.next);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  /*   useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      try {
        const response = await fetchNextPageData("genres", page);
        setData(response.data);
        setGenreResult((prevGames) => [...prevGames, ...response.results]);
        setNextUrl(response.next);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchGames();
  }, [page]); */

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

  if (error) return <ErrorComponent errorMessage={error.message} />;

  return (
    <>
      {loading && genreResult.length === 0 ? (
        <div className="w-full columns-3 sm-tab:columns-2 xs-tab:columns-1 space-y-5">
          {[...Array(6)].map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="w-full columns-3 sm-tab:columns-2 xs-tab:columns-1 space-y-5 my-5 mb-10">
          {genreResult.map((genre, index) => (
            <GenrePlatormCard
              key={`${genre.id}-${index}`}
              img={genre.image_background}
              name={genre.name}
              games_count={genre.games_count}
            >
              <div className="flex w-full flex-wrap gap-2">
                {genre.games.map((game) => (
                  <Chip size="sm" color="warning" key={game.id} variant="faded">
                    {truncateGameName(game.name)} -{" "}
                    {formatNumberWithCommas(game.added)}
                  </Chip>
                ))}
              </div>
            </GenrePlatormCard>
          ))}
        </div>
      )}
      {/*  <div
        ref={loader}
        className="flex items-center w-full justify-center pb-20"
      >
        {loading && <Spinner size="lg" />}
        
      </div> */}
    </>
  );
};

export default GenresList;
