import { Comment } from '@/types/Coment';
import { Post } from '@/types/Post';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<Post[], void>({
      query: () => '/posts',
    }),
    getPostById: builder.query<Post, string>({
      query: (id) => `/posts/${id}`,
    }),
    getPostComments: builder.query<Comment[], string>({
      query: (id) => `/posts/${id}/comments`,
    }),
    createPost: builder.mutation({
      query: (newPost) => ({
        url: 'posts',
        method: 'POST',
        body: newPost,
      }),
    }),
  }),
})

export const { 
  useGetAllPostsQuery, 
  useGetPostByIdQuery,
  useGetPostCommentsQuery,
  useCreatePostMutation
} = postsApi;