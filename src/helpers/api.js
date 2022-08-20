import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));

const API = axios.create({
  baseURL: "http://localhost:7000/api",
  baseURL1: "https://inthing.ug/api",
  headers: {
    Authorization: user ? `Bearer ${user.accessToken}` : "",
  },
});

export default API;