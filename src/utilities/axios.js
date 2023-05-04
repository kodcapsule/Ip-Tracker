import axios from "axios";
import { API_KEY } from "./utilities";

export default axios.create({
  baseURL:
    "https://geo.ipify.org/api/v2/country,city?apiKey=at_NFpL4iZDQjQq6Ptsj20w8IPWe01pR&ipAddress=100.43.96.0",
});
