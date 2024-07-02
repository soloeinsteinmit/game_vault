import { Select, SelectItem } from "@nextui-org/select";
import React, { useEffect, useState } from "react";
import { platforms, order_by } from "../../data/client_data";
import GameCard from "../../components/GameCard";
import axios from "axios";

const DashboardContent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const rawgApiKey = import.meta.env.VITE_RAWG_API_KEY;

  useEffect(() => {
    axios
      .get(`https://api.rawg.io/api/games?key=${rawgApiKey}`)

      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  // Empty dependency array means this effect runs once after the initial render.

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // console.log(data);

  const gamesResult = data.results;

  // console.log(gamesResult.parent_platforms);

  // console.log(gamesResult);

  return (
    // TODO: CODE OPTIMIZATION
    <div className="w-full flex flex-col gap-5  ">
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

      <div className="relative w-full columns-3 space-y-5  break-inside-avoid  mb-20">
        {gamesResult.map((game) => (
          <GameCard
            key={game.id}
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
        <div className="absolute bottom-0 h-40">g</div>
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
