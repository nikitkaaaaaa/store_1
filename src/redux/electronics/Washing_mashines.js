import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const washing_machines = createApi({
    reducerPath : 'washing_machines',
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:3001/'}),
    endpoints : (builder) => ({
        getwashing_machines : builder.query({
            query : () => 'washing_machines',
            method : 'GET'
        }) 
    })
})
export const {useGetwashing_machinesQuery} = washing_machines;