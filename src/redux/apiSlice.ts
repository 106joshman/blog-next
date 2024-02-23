import { apiBaseURL } from "@/utils/fetchLink";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { store } from "./store";

export const blogApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseURL,
    prepareHeaders: (headers) => {
      const stored = store.getState();
      const token = stored.persistedReducer.user.access_token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    // ADD A NEW POST
    addNewPost: builder.mutation({
      query: (body) => ({
        url: "/blogpost",
        method: "POST",
        body, // Include the entire post object as the body of the request
      }),
    }),

    // GETS ALL POSTS
    getAllPosts: builder.query({
      query: () => ({ url: "/blogposts" }),
    }),

    // GETS A SINGLE POST
    getPost: builder.query({
      query: (postId) => `/blogpost/${postId}`,
    }),

    // UPDATE A PREVIOUS POST
    updateOldPost: builder.mutation({
      query: (body) => ({
        url: "/blogpost",
        method: "PUT",
        body, // Include the entire post object as the body of the request
      }),
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetPostQuery,
  useAddNewPostMutation,
  useUpdateOldPostMutation,
} = blogApi;
