import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const pants = createApi({
    reducerPath : 'pants',
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:3001/'}),
    endpoints : (builder) => ({
        getpants : builder.query({
            query : () => 'pants',
            metod : 'GET'
        }) 
    })
})
export const {useGetpantsQuery} = pants;