import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const favorites = createApi({
    reducerPath : 'favorites',
    tagTypes : ['Products'],
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:3001/'}),
    endpoints : (builder) => ({
        getfavorites : builder.query({
            query : () => 'favorites',
            method : 'GET',
            providesTags : (result) => 
            result
            ? [
                ...result.map(({ id })=>({type : 'Products',id})),
                { type : 'Products', id : 'LIST' },
            ]
            : [{type : 'Products', id : 'LIST'}]
        }),
        addfavorites : builder.mutation({
            query : (body)=>({
                url : 'favorites',
                method : 'POST',
                body
            }),
            invalidatesTags : [{type : 'Products',id : 'LIST'}]
        }),
        removeTofavorites : builder.mutation({
            query : (id) => ({
                url : `favorites/${id}`,
                method : 'DELETE'
            }),
            invalidatesTags: [{ type: 'Products', id: 'LIST' }] 
        })
    }),
})
export const {useGetfavoritesQuery,useAddfavoritesMutation,useRemoveTofavoritesMutation} = favorites;