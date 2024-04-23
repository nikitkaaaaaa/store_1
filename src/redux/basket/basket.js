import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const basket = createApi({
    reducerPath : 'basket',
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:3001/'}),
    endpoints : (builder) => ({
        getbasket : builder.query({
            query : () => 'basket',
            method : 'GET'
        }) 
    })
})
export const {useGetbasketQuery} = basket;