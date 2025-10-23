import axios from "axios";

export const request = axios.create({
  baseURL: "https://jsonbek.uz/api/",
});
