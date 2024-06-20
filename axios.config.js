import axios from "axios";

const API_URL = "https://localhost:3000/api";
const TOKEN_ACCESS_KEY = "accessToken";

const apiGateway = axios.create({
  baseURL: API_URL,
});

apiGateway.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem(TOKEN_ACCESS_KEY);
    if (token) {
      request.headers["Authorization"] = `Bearer ${token}`;
    } else {
      console.warn("No access token found in localStorage");
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiGateway.interceptors.response.use(
  (response) => {
    const newAccessToken = response.headers["newaccesstoken"];
    if (newAccessToken) {
      const oldAccessToken = localStorage.getItem("accessToken");
      if (newAccessToken !== oldAccessToken) {
        localStorage.setItem("accessToken", newAccessToken);
      }
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiGateway;
