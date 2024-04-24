import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const liked = createApi({
    reducerPath: 'liked',
    tagTypes: ['Products'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: (builder) => ({
        getliked: builder.query({
            query: () => 'liked',
            method: 'GET',
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'Products', id })),
                        { type: 'Products', id: 'LIST' },
                    ]
                    : [{ type: 'Products', id: 'LIST' }]
        }),
        addliked: builder.mutation({
            query: (body) => ({
                url: 'liked',
                method: 'POST',
                body
            }),
            invalidatesTags: [{ type: 'Products', id: 'LIST' }]
        })
    })
})
export const { useGetlikedQuery, useAddlikedMutation } = liked;