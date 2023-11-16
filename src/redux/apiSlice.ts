import { apiBaseURL } from "@/utils/fetchLink";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: apiBaseURL }),

  endpoints: (builder) => ({
    // GETS ALL POSTS
    getAllPosts: builder.query({
      query: () => "/blogposts",
    }),
    // GETS A SINGLE POST
    getPost: builder.query({
      query: (postId) => `/blogpost/${postId}`,
    }),
    // ADD A NEW POST
    addNewPost: builder.mutation({
      query: (initialPost) => ({
        url: "/blogpost",
        method: "POST",
        body: initialPost, // Include the entire post object as the body of the request
      }),
    }),
    // UPDATE A PREVIOUS POST
    updateOldPost: builder.mutation({
      query: (oldPost) => ({
        url: "/blogpost",
        method: "PUT",
        body: oldPost, // Include the entire post object as the body of the request
      }),
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetPostQuery,
  useAddNewPostMutation,
  useUpdateOldPostMutation,
} = apiSlice;
