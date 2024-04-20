import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const hoodies = createApi({
    reducerPath : 'hoodies',
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:3001/'}),
    endpoints : (builder) => ({
        gethoodies : builder.query({
            query : () => 'hoodies',
            method : 'GET'
        }) 
    })
})
export const {useGethoodiesQuery} = hoodies;