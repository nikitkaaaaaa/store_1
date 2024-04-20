import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const springshoes = createApi({
    reducerPath : 'springshoes',
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:3001/'}),
    endpoints : (builder) => ({
        getspringshoes : builder.query({
            query : () => 'springshoes',
            method : 'GET'
        }) 
    })
})
export const {useGetspringshoesQuery} = springshoes;