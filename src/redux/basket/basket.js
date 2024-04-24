import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const basket = createApi({
    reducerPath : 'basket',
    tagTypes : ['Products'],
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:3001/'}),
    endpoints : (builder) => ({
        getbasket : builder.query({
            query : () => 'basket',
            method : 'GET',
            providesTags : (result) => 
            result
            ? [
                ...result.map(({ id })=>({type : 'Products',id})),
                { type : 'Products', id : 'LIST' },
            ]
            : [{type : 'Products', id : 'LIST'}]
        }),
        addbasket : builder.mutation({
            query : (body)=>({
                url : 'basket',
                method : 'POST',
                body
            }),
            invalidatesTags : [{type : 'Products',id : 'LIST'}]
        }),
        removeToBasket : builder.mutation({
            query : (id) => ({
                url : `basket/${id}`,
                method : 'DELETE'
            }),
            invalidatesTags: [{ type: 'Products', id: 'LIST' }] 
        })
    }),
})
export const {useGetbasketQuery,useAddbasketMutation,useRemoveToBasketMutation} = basket;