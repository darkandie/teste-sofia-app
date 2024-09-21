import { User } from '@/types/User';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getUserById: builder.query<User, string>({
      query: (id) => `/users/${id}`,
    }),
  }),
})

export const { 
  useGetUserByIdQuery,
} = userApi;