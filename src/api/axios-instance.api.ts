import axios, { AxiosInstance } from "axios";

interface AxiosConfig {
  baseURL: string;
  timeout: number;
}

function createAxiosClient(config: AxiosConfig): AxiosInstance {
  return axios.create({
    baseURL: config.baseURL,
    timeout: config.timeout,
    headers: {
      "Content-Type": "application/json",
    },
  });
}


const axiosConfig: AxiosConfig = {
  baseURL: "http://localhost:4000/api/v1",
  timeout: 2000,
};

export const axiosClient = createAxiosClient(axiosConfig);
