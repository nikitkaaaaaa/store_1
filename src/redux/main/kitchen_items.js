import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const kitchen_items = createApi({
    reducerPath : 'kitchen_items',
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:3001/'}),
    endpoints : (builder) => ({
        getkitchen_items : builder.query({
            query : () => 'kitchen_items',
            method : 'GET'
        }) 
    })
})
export const {useGetkitchen_itemsQuery} = kitchen_items;