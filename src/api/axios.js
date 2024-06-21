import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import qs from "qs";

axios.defaults.paramsSerializer = (params) => {
  //params string으로바꾸기
  return qs.stringify(params);
};

const baseURL = "http://13.125.109.43:8080/";
const axiosInstance = axios.create();

const jsonConfig = async (method, url, requestBody, params) => {
  const accessToken = await AsyncStorage.getItem("accessToken");
  const refreshToken = await AsyncStorage.getItem("refreshToken");
  const config = {
    baseURL,
    url,
    method: method,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Authorization-refresh": `Bearer ${refreshToken}`,
    },
    data: requestBody,
    params: params,
  };
  return axiosInstance(config);
};

const multiConfig = async (method, url, requestBody, params) => {
  const accessToken = await AsyncStorage.getItem("accessToken");
  const refreshToken = await AsyncStorage.getItem("refreshToken");
  const config = {
    baseURL,
    method: method,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Authentication-refresh": refreshToken,
      "Content-Type": "multipart/form-data",
    },
    data: requestBody,
    params: params,
  };
  return axiosInstance(config);
};

export { jsonConfig, multiConfig };
