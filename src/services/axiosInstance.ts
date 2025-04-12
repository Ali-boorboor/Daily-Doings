import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://daily-doings-backend.liara.run",
  withCredentials: true,
});

export default axiosInstance;
