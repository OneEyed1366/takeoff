import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const initialApi = createApi({
  reducerPath: 'initialApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_PUBLIC_API
  }),
  endpoints: () => ({}),
});
