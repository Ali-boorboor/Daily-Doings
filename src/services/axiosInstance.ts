import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:2020/",
  withCredentials: true,
});

export default axiosInstance;
