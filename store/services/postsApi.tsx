import { Post } from '@/types/Post';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<Post[], void>({
      query: () => '/posts',
    }),
    getPostById: builder.query<Post, void>({
      query: (id) => `/posts/${id}`,
    }),
    getPostComments: builder.query<Post[], void>({
      query: (id) => `/posts/${id}/comments`,
    })
  }),
})

export const { 
  useGetAllPostsQuery, 
  useGetPostByIdQuery,
  useGetPostCommentsQuery
} = postsApi;