import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));

const API = axios.create({
  baseURL1: "http://localhost:5000/api",
  baseURL: "https://inthing.ug/api",
  headers: {
    Authorization: user ? `Bearer ${user.accessToken}` : "",
  },
});

export default API;