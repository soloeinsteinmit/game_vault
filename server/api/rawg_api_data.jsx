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
const fetchDevlopersList = async () => {
  const response = await axios.get(`${baseURL}developers?key=${rawgApiKey}`);
  console.log(response.data);
  console.log("developer data up");
  return response.data;
};

const fetchTagsList = async () => {
  const response = await axios.get(`${baseURL}tags?key=${rawgApiKey}`);
  console.log(response.data);
  console.log("tags data up");
  return response.data;
};

const fetchPublishersList = async () => {
  const response = await axios.get(`${baseURL}publishers?key=${rawgApiKey}`);
  console.log(response.data);
  console.log("publishers data up");
  return response.data;
};

/* const fetchCreatorsList = async () => {
  const response = await axios.get(`${baseURL}creators?key=${rawgApiKey}`);
  console.log(response.data);
  console.log("creators data up");
  return response.data;
}; */

const fetchNextPageData = async (pageName, page) => {
  const response = await axios.get(
    `${baseURL}${pageName}?key=${rawgApiKey}&page=${page}`
  );

  console.log(response.data);
  console.log("next page data up");
  return response.data;
};

export {
  fetchGamesList,
  fetchGenresList,
  fetchPlatformsList,
  fetchDevlopersList,
  fetchTagsList,
  fetchPublishersList,
  // fetchCreatorsList,
  fetchNextPageData,
};
