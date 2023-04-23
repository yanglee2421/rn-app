import axios, { AxiosError } from "axios";

export const request = axios.create({
  baseURL: "",
  timeout: 1000 * 60,
});

request.interceptors.request.use((config) => config);
request.interceptors.response.use(
  (res) => {
    const { statusText, data } = res;
    return data;
  },
  (err: AxiosError) => {
    const { message } = err;
    // console.log(message);
    throw new Error(message);
  }
);
