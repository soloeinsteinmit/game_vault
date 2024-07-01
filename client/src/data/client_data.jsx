import { FaWindows, FaPlaystation, FaXbox } from "react-icons/fa6";
import { IoLogoAndroid, IoIosPhonePortrait } from "react-icons/io";
import { SiNintendo3Ds } from "react-icons/si";

export const order_by = [
  { key: "relevance", label: "Relevance" },
  { key: "date_added", label: "Date Added" },
  { key: "name", label: "Name" },
  { key: "release_date", label: "Release Date" },
  { key: "popularity", label: "Popularity" },
  { key: "avg_rating", label: "Average Rating" },
];

export const platforms = [
  {
    id: "pc",
    label: "PC",
    icon: <FaWindows />,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "playstation",
    label: "PlayStation 4",
    icon: <FaPlaystation />,
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "xbox",
    label: "Xbox One",
    icon: <FaXbox />,
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "nintendo",
    label: "Nintendo Switch",
    icon: <SiNintendo3Ds />,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto modi labore aliquid sequi beatae similique consectetur sit unde repellendus necessitatibus? Dicta nam necessitatibus quae fugiat alias sapiente soluta reprehenderit totam.",
  },
  {
    id: "ios",
    label: "iOS",
    icon: <IoIosPhonePortrait />,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, fugiat repudiandae laborum, eos vel rerum nostrum corporis tenetur facilis neque, aperiam totam. Voluptas consectetur odit vel inventore suscipit illum animi?",
  },
  {
    id: "android",
    label: "Android",
    icon: <IoLogoAndroid />,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum earum cumque enim odio rem. Earum aspernatur a iste exercitationem modi, numquam autem in cum nobis asperiores nam laudantium vel quisquam.",
  },
];

export const genres = [
  {
    id: "action",
    label: "Action",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "strategy",
    label: "Strategy",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "rpg",
    label: "RPG",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "free_online_games",
    label: "Free Online Games",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "shooter",
    label: "Shooter",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "adventure",
    label: "Adventure",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "puzzle",
    label: "Puzzle",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "racing",
    label: "Racing",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "sports",
    label: "Sports",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];
