import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:7000/api",
  baseURL1: "https://inthing.ug/api",
});

export default API;