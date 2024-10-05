import axios from "axios";

function configureAxios() {
  const api = axios.create({
    baseURL: "http://localhost:3001",
  });
  return api;
}

const axiosInstance = configureAxios();

export default { axiosInstance };
