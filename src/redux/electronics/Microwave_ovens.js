import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const microwave_ovens = createApi({
    reducerPath : 'microwave_ovens',
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:3001/'}),
    endpoints : (builder) => ({
        getmicrowave_ovens : builder.query({
            query : () => 'microwave_ovens',
            method : 'GET'
        }) 
    })
})
export const {useGetmicrowave_ovensQuery} = microwave_ovens;