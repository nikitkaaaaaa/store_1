import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const televisions = createApi({
    reducerPath : 'televisions',
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:3001/'}),
    endpoints : (builder) => ({
        gettelevisions : builder.query({
            query : () => 'televisions',
            method : 'GET'
        }) 
    })
})
export const {useGettelevisionsQuery} = televisions;