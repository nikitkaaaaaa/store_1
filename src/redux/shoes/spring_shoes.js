import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const spring_shoes = createApi({
    reducerPath : 'spring_shoes',
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:3001/'}),
    endpoints : (builder) => ({
        getspring_shoes : builder.query({
            query : () => 'spring_shoes',
            method : 'GET'
        }) 
    })
})
export const {useGetspring_shoesQuery} = spring_shoes;