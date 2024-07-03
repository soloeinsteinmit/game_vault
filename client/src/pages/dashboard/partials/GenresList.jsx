import React, { useEffect, useState } from "react";
import GenrePlatormCard from "../../../components/GenrePlatormCard";
import { fetchGenresList } from "../../../../../server/api/rawg_api_data";
import { RiSignalWifiErrorLine } from "react-icons/ri";
import { Chip } from "@nextui-org/chip";
import { formatNumberWithCommas } from "../../../components/GameCard";
import CardSkeleton from "../../../components/CardsSkeleton";
import ErrorComponent from "../../../components/ErrorComponent";

const GenresList = () => {
  const [genreResult, setGenreResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const data = await fetchGenresList();

        // setData(data);
        setGenreResult(data.results);

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (error) return <ErrorComponent errorMessage={error.message} />;

  return (
    <>
      {loading && genreResult.length === 0 ? (
        <div className="w-full columns-3 space-y-5">
          {[...Array(6)].map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="w-full columns-3 space-y-5 my-5 mb-10">
          {genreResult.map((genre) => (
            <GenrePlatormCard
              key={genre.id}
              img={genre.image_background}
              name={genre.name}
              games_count={genre.games_count}
            >
              <div className="flex w-full flex-wrap gap-2">
                {genre.games.map((game) => (
                  <Chip size="sm" color="warning" variant="faded">
                    {game.name} - {formatNumberWithCommas(game.added)}
                  </Chip>
                ))}
              </div>
            </GenrePlatormCard>
          ))}
        </div>
      )}
    </>
  );
};

export default GenresList;
