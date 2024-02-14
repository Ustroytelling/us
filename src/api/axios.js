import axios from "axios";

axios.defaults.paramsSerializer = (params) => {
  //params string으로바꾸기
  return qs.stringify(params);
};

const baseURL = "http://13.125.109.43:8080/";
const axiosInstance = axios.create();

const jsonConfig = async (method, url, requestBody, params) => {
  // const accessToken = getAccessToken();
  const config = {
    baseURL, //요청을보낼url
    url,
    method: method, //get,post,delete등 요청을 보낼방식
    // headers: {
    //   //요청 헤더에 들어갈 부분
    //   Authorization: `Bearer ${accessToken}`, //액세스토큰을 넣고
    //   "Content-Type": "application/json", //data의 형식을 정의
    // },
    data: requestBody, //요청 본문엔 requestbody가 들어감
    params: params, //params는 url끝에 딸려들어감
  };
  console.log(params);
  return axiosInstance(config);
};

const multiConfig = (method, url, requestBody, params) => {
  // const accessToken = getAccessToken();
  const config = {
    baseURL,
    method: method,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "multipart/form-data",
    },
    data: requestBody,
    params: params,
  };
  return axiosInstance(config);
};

export { jsonConfig, multiConfig };
