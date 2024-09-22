import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { postsApi } from './services/postsApi';
import { userApi } from './services/userApi';
import { commentApi } from './services/comentApi';

export const store = configureStore({
  devTools: false,
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(postsApi.middleware)
    .concat(userApi.middleware)
    .concat(commentApi.middleware)
  ,
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;