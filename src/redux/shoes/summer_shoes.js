import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const summer_shoes = createApi({
    reducerPath : 'summer_shoes',
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:3001/'}),
    endpoints : (builder) => ({
        getsummer_shoes : builder.query({
            query : () => 'summer_shoes',
            method : 'GET'
        }) 
    })
})
export const {useGetsummer_shoesQuery} = summer_shoes;