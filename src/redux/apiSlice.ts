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

  endpoints: (builder) => {
    // Endpoints that require authentication
    const authenticatedEndpoints = {
      // ADD A NEW POST
      addNewPost: builder.mutation({
        query: (body) => ({
          url: "/blogpost",
          method: "POST",
          body,
        }),
      }),

      // GETS ALL POST BY A SINGLE USER
      getUserPost: builder.query({
        query: (id) => `/blogpost/${id}`,
      }),

      // UPDATE A PREVIOUS POST
      updateOldPost: builder.mutation({
        query(data) {
          const { id, ...body }: any = data;
          return {
            url: `posts/${id}`,
            method: "PUT",
            body,
          };
        },
      }),
    };

    const publicEndpoints = {
      // GETS ALL POSTS
      getAllPosts: builder.query({
        query: () => "/blogposts",
      }),

      // GETS A SINGLE POST
      getPost: builder.query({
        query: (id) => `/blogpost/${id}`,
      }),
    };

    // Combine the two sets of endpoints based on the authentication status
    return {
      ...publicEndpoints,
      ...authenticatedEndpoints,
    };
  },
});

export const {
  useGetAllPostsQuery,
  useGetPostQuery,
  useGetUserPostQuery,
  useAddNewPostMutation,
  useUpdateOldPostMutation,
} = blogApi;
