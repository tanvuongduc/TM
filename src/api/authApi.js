import axiosClient from "./axiosClient";

const authApi = {
  login: (username, password) => {
    const url = "/login";
    return axiosClient.post(url, { username, password });
  },
  logout: (params) => {
    const url = "/logout";
    return axiosClient.post(url, { params });
  },
  getUserInfo: (params) => {
    const url = "/getUserInfo";
    return axiosClient.get(url, { params });
  },
};
export default authApi;
