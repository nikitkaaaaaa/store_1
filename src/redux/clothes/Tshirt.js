import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const tshirt = createApi({
    reducerPath : 'tshirt',
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:3001/'}),
    endpoints : (builder) => ({
        gettshirt : builder.query({
            query : () => 'tshirt',
            method : 'GET'
        }) 
    })
})
export const {useGettshirtQuery} = tshirt;