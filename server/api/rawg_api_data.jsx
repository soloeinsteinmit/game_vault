import axios from "axios";
import { formatNumberWithCommas } from "../../client/src/components/GameCard";

const rawgApiKey = import.meta.env.VITE_RAWG_API_KEY;
const baseURL = "https://api.rawg.io/api/";

const fetchGamesList = async () => {
  const response = await axios.get(`${baseURL}games?key=${rawgApiKey}`);
  console.log(response.data.results);
  console.log("games data up");

  return response.data;
};

const fetchGenresList = async () => {
  const response = await axios.get(`${baseURL}genres?key=${rawgApiKey}`);
  console.log(response.data);
  console.log("genre data up");
  return response.data;
};

const fetchPlatformsList = async () => {
  const response = await axios.get(`${baseURL}platforms?key=${rawgApiKey}`);
  console.log(response.data);
  console.log("platform data up");
  return response.data;
};

export { fetchGamesList, fetchGenresList, fetchPlatformsList };
