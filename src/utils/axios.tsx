import axios, { AxiosInstance } from "axios";
import { store } from "../redux/store";
import { apiBaseURL } from "./fetchLink";
// import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: apiBaseURL,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (request) => {
    const stored = store.getState();
    const token = stored.persistedReducer.user.access_token;

    if (token) {
      request.headers["Authorization"] = `Bearer ${token}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
