import axios from "axios";
import { proxy_path } from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

const axiosInstance = axios.create({
  baseURL: proxy_path.basePath,
});

axiosInstance.interceptors.request.use(async (request) => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    request.headers.Authorization = token;
  }
  request.headers["Content-Type"] = "application/json";
  return request;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error;
  }
);

export default axiosInstance;
