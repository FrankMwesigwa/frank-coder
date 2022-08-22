import axios from "axios";

const API = axios.create({
  baseURL1: "http://localhost:7000/api",
  baseURL: "https://inthing.ug/api",
});

export default API;