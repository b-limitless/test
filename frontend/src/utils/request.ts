import axios from "axios";
import axiosCommon from "./axiosCommon";
import { AxiosResponse, AxiosRequestConfig } from "axios";

const handleSuccess = (response: AxiosResponse) => {
  return response;
};

const handleError = (error: any) => {
  return Promise.reject(error);
};

interface RequestParams {
  url: string;
  method: "get" | "post" | "put" | "delete" | "patch" | "head" | "options"; // Add other HTTP methods as needed
  body?: any;
  unauthrizedRedirect?: boolean;
  rest?: any;
  navigations?: () => void;
}

export const request = async ({
  url,
  method,
  body,
  unauthrizedRedirect = true,
  navigations = (() => {}),
  ...rest
}: RequestParams) => {
  axiosCommon();
  // Interceptor response
  let service = axios.create({ withCredentials: true });
  service.interceptors.response.use(handleSuccess, handleError);

  console.log('navigations', navigations)

  try {
    const response = await service[method](url, body as object);
    return response.data;
  } catch (err: any) {
    if (
      unauthrizedRedirect &&
      [401, 403].indexOf(err.response?.status) !== -1
    ) {
      navigations && navigations();
    }
    return Promise.reject(err);
  }
};