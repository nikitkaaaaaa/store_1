import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const headphones = createApi({
    reducerPath : 'headphones',
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:3001/'}),
    endpoints : (builder) => ({
        getheadphones : builder.query({
            query : () => 'headphones',
            method : 'GET'
        }) 
    })
})
export const {useGetheadphonesQuery} = headphones;