import { Select, SelectItem } from "@nextui-org/select";
import React, { useEffect, useState } from "react";
import { platforms, order_by } from "../../data/client_data";
import GameCard from "../../components/GameCard";
import axios from "axios";
import { Button } from "@nextui-org/button";
import GameSkeleton from "../../components/GameSkeleton";

const DashboardContent = () => {
  const [gamesResult, setGamesResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextUrl, setNextUrl] = useState("");
  const [data, setData] = useState([]);

  const rawgApiKey = import.meta.env.VITE_RAWG_API_KEY;

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games?key=${rawgApiKey}`
        );
        setData(response.data);
        setGamesResult(response.data.results);
        setNextUrl(response.data.next);
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

  if (error) return <p>Error: {error.message}</p>;

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
        <Button isLoading={loading} onClick={loadMoreGames}>
          Load more games
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
