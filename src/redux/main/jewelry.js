import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const jewelry = createApi({
    reducerPath: 'jewelry',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: (builder) => ({
        getjewelry: builder.query({
            query: () => 'jewelry',
            method: 'GET'
        })
    })
});
export const { useGetjewelryQuery } = jewelry;