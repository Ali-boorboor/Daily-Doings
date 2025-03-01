import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:2020/",
});

export default axiosInstance;
