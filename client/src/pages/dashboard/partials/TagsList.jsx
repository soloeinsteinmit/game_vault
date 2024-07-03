import { Chip } from "@nextui-org/chip";
import React, { useEffect, useRef, useState } from "react";

import GenrePlatormCard, {
  truncateGameName,
} from "../../../components/GenrePlatormCard";
import CardSkeleton from "../../../components/CardsSkeleton";
import ErrorComponent from "../../../components/ErrorComponent";
import {
  fetchTagsList,
  fetchNextPageData,
} from "../../../../../server/api/rawg_api_data";

import { Spinner } from "@nextui-org/spinner";
import { formatNumberWithCommas } from "../../../components/GameCard";

const TagsList = () => {
  const [tagsResult, setTagsResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextUrl, setNextUrl] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1); // Track the current page

  const loader = useRef(null); // Ref for the loader div

  useEffect(() => {
    const fetchDevelopers = async () => {
      try {
        const data = await fetchTagsList();
        setData(data);
        setTagsResult(data.results);
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
        const response = await fetchNextPageData("tags", page);
        setData(response.data);
        setTagsResult((prevGames) => [...prevGames, ...response.results]);
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

  if (error) return <ErrorComponent errorMessage={error.message} />;

  return (
    <>
      {loading && tagsResult.length === 0 ? (
        <div className="w-full columns-3 space-y-5">
          {[...Array(6)].map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="w-full columns-3 space-y-5 my-5 mb-10">
          {tagsResult.map((tag, index) => (
            <GenrePlatormCard
              key={`${tag.id}-${index}`}
              img={tag.image_background}
              name={tag.name}
              games_count={tag.games_count}
            >
              <div className="flex w-full flex-wrap gap-2">
                {(tag?.games ?? []).map((game) => (
                  <Chip
                    key={game.id}
                    size="small"
                    color="warning"
                    variant="faded"
                    className="flex gap-1"
                  >
                    <span>{truncateGameName(game.name)}</span> -{" "}
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
        className="flex items-center w-full justify-center pb-20"
      >
        {loading && <Spinner size="lg" />}
        {/*  <Button ref={loader} isLoading={loading} onClick={loadMoreGames}>
          Load more...
         
        </Button> */}
      </div>
    </>
  );
};

export default TagsList;
