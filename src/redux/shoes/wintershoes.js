import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const wintershoes = createApi({
    reducerPath : 'wintershoes',
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:3001/'}),
    endpoints : (builder) => ({
        getwintershoes : builder.query({
            query : () => 'wintershoes',
            method : 'GET'
        }) 
    })
})
export const {useGetwintershoesQuery} = wintershoes;