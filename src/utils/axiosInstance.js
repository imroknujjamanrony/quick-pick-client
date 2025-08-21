import axios from "axios";

const axiosI = axios.create({
  baseURL: "https://quick-pick-server-zeta.vercel.app",
  withCredentials: true,
});

export default axiosI