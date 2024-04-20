import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const hats = createApi({
    reducerPath : 'hats',
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:3001/'}),
    endpoints : (builder) => ({
        gethats : builder.query({
            query : () => 'hats',
            metod : 'GET'
        }) 
    })
})
export const {useGethatsQuery} = hats;