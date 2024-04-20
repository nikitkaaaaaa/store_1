import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const sneakers = createApi({
  reducerPath: 'sneakers',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (build) => ({
    getSneakers: build.query({
      query: () => 'sneakers'
    })
  })
});

export const { useGetSneakersQuery } = sneakers;