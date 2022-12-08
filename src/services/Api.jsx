import axios from "axios";

const api = axios.create({
  baseURL: "https://test-api-fawn.vercel.app/filmes",
});

export default api;