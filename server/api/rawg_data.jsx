import axios from "axios";
import { useState } from "react";

const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

const rawgApiKey = import.meta.env.VITE_RAWG_API_KEY;
