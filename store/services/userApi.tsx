import { Post } from '@/types/Post';
import { User } from '@/types/User';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getUserById: builder.query<User, string>({
      query: (id) => `/users/${id}`,
    }),
    getPostsByUserId: builder.query<Post[], string>({
      query: (id) => `/users/${id}/posts`
    })
  }),
})

export const { 
  useGetUserByIdQuery,
  useGetPostsByUserIdQuery
} = userApi;