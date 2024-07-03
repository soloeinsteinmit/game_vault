import { useEffect, useState, useRef } from "react";
import {
  fetchNextPageData,
  fetchPublishersList,
} from "../../../../../server/api/rawg_api_data";
import ErrorComponent from "../../../components/ErrorComponent";
import CardSkeleton from "../../../components/CardsSkeleton";
import GenrePlatormCard from "../../../components/GenrePlatormCard";
import { Chip } from "@nextui-org/chip";
import { formatNumberWithCommas } from "../../../components/GameCard";
import { Spinner } from "@nextui-org/spinner";

const PublishersList = () => {
  const [publisherResult, setPublisherResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextUrl, setNextUrl] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1); // Track the current page

  const loader = useRef(null); // Ref for the loader div

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const data = await fetchPublishersList();
        setData(data);
        setPublisherResult(data.results);
        setNextUrl(data.next);
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
        const response = await fetchNextPageData("publishers", page);
        setData(response.data);
        setPublisherResult((prevGames) => [...prevGames, ...response.results]);
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
      {loading && publisherResult.length === 0 ? (
        <div className="w-full columns-3 space-y-5">
          {[...Array(6)].map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="w-full columns-3 space-y-5 my-5 mb-10">
          {publisherResult.map((publisher, index) => (
            <GenrePlatormCard
              key={`${publisher.id}-${index}`}
              img={publisher.image_background}
              name={publisher.name}
              games_count={publisher.games_count}
            >
              <div className="flex w-full flex-wrap gap-2">
                {publisher.games.map((game) => (
                  <Chip size="sm" key={game.id} color="warning" variant="faded">
                    {game.name} - {formatNumberWithCommas(game.added)}
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

export default PublishersList;
