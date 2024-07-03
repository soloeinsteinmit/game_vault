import React, { useEffect, useState } from "react";
import { fetchPlatformsList } from "../../../../../server/api/rawg_api_data";
import ErrorComponent from "../../../components/ErrorComponent";
import CardSkeleton from "../../../components/CardsSkeleton";
import GenrePlatormCard from "../../../components/GenrePlatormCard";
import { Chip } from "@nextui-org/chip";
import { formatNumberWithCommas } from "../../../components/GameCard";

const PlatformList = () => {
  const [platformResult, setPlatformResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const data = await fetchPlatformsList();

        // setData(data);
        setPlatformResult(data.results);

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
      {loading && platformResult.length === 0 ? (
        <div className="w-full columns-3 space-y-5">
          {[...Array(6)].map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="w-full columns-3 space-y-5 my-5 mb-10">
          {platformResult.map((platform) => (
            <GenrePlatormCard
              key={platform.id}
              img={platform.image_background}
              name={platform.name}
              games_count={platform.games_count}
            >
              <div className="flex w-full flex-wrap gap-2">
                {platform.games.map((game) => (
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

export default PlatformList;
