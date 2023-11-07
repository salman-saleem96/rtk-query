import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Comment } from "../models/comment.model";

export const CommentApi = createApi({
  reducerPath: "CommentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getComments: builder.query<Comment[], void>({
      query: () => `/comments`,
    }),
    getcomment: builder.query<Comment, string>({
      query: (id) => `/comments/${id}`,
    }),
  }),
});
export const { useGetCommentsQuery, useGetcommentQuery } = CommentApi;
