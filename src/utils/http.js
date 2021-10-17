import axios from "axios";

import { Toast } from "vant";

const http = axios.create({
  baseURL: "https://m.maizuo.com",
  timeout: 10000,
  headers: {
    "X-Client-Info": `{"a":"3000","ch":"1002","v":"5.0.4","e":"16339133432575399829635073","bc":"110100"}`,
  },
});

http.interceptors.request.use(
  function(config) {
    // 1. 加入vant Toast提示
    Toast.loading({
      message: "加载中...",
      forbidClick: true,
      overlay: true,
      duration: 0,
    });

    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  function(response) {
    // 2.清除vant Toast提示
    Toast.clear();

    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default http;
