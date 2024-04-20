import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const autumnshoes = createApi({
    reducerPath : 'automnshoes',
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:3001/'}),
    endpoints : (builder) => ({
        getautumnshoes : builder.query({
            query : () => 'autumnshoes',
            method : 'GET'
        }) 
    })
})
export const {useGetautumnshoesQuery} = autumnshoes;