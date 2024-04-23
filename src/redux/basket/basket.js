import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const basket = createApi({
    reducerPath : 'basket',
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:3001/'}),
    endpoints : (builder) => ({
        getbasket : builder.query({
            query : () => 'basket',
            method : 'GET'
        }),
        addbasket : builder.mutation({
            query : (body)=>({
                url : 'basket',
                method : 'POST',
                body
            })
        })
    })
})
export const {useGetbasketQuery,useAddbasketMutation} = basket;