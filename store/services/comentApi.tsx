import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const commentApi = createApi({
  reducerPath: 'commentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    createComment: builder.mutation({
      query: (newComment) => ({
        url: 'comments',
        method: 'POST',
        body: newComment,
      }),
    }),
  }),
});

export const { useCreateCommentMutation } = commentApi;