import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4900",
});

export default api;