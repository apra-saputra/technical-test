import axios from "axios";
import { API_KEY, REACT_APP_API_URL } from "./secret";

const apikey = import.meta.env.API_KEY ? import.meta.env.API_KEY : API_KEY;

const baseUrl = import.meta.env.REACT_APP_API_URL
  ? import.meta.env.REACT_APP_API_URL
  : REACT_APP_API_URL;

const instance = axios.create({
  baseURL: baseUrl,
  params: { api_key: apikey, limit: 9, offset: 0 },
});

export default instance;
