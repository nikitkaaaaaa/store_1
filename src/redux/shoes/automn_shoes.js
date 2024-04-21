import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const autumn_shoes = createApi({
    reducerPath : 'autumn_shoes',
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:3001/'}),
    endpoints : (builder) => ({
        getautumn_shoes : builder.query({
            query : () => 'autumn_shoes',
            method : 'GET'
        }) 
    })
})
export const {useGetautumn_shoesQuery} = autumn_shoes;