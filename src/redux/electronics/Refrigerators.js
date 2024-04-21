import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const refrigerators = createApi({
    reducerPath : 'refrigerators',
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:3001/'}),
    endpoints : (builder) => ({
        getrefrigerators : builder.query({
            query : () => 'refrigerators',
            method : 'GET'
        }) 
    })
})
export const {useGetrefrigeratorsQuery} = refrigerators;