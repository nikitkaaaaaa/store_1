import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const winter_shoes = createApi({
    reducerPath : 'winter_shoes',
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:3001/'}),
    endpoints : (builder) => ({
        getwinter_shoes : builder.query({
            query : () => 'winter_shoes',
            method : 'GET'
        }) 
    })
})
export const {useGetwinter_shoesQuery} = winter_shoes;