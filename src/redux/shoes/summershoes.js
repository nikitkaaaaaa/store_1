import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const summershoes = createApi({
    reducerPath : 'summershoes',
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:3001/'}),
    endpoints : (builder) => ({
        getsummershoes : builder.query({
            query : () => 'summershoes',
            method : 'GET'
        }) 
    })
})
export const {useGetsummershoesQuery} = summershoes;