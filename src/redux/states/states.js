import { createSlice } from "@reduxjs/toolkit";
export const states = createSlice({
    name: 'states',
    initialState: {
        stateBasket: false,
        statesale : false,
    },
    reducers: {
        openBasket: (state) => ({
            ...state,
            stateBasket: true,
        }),
        clouseBasket: (state) => ({
            ...state,
            stateBasket: false
        }),
        clousesale: (state) => ({
            ...state,
            statesale: false
        }),
        opensale: (state) => ({
            ...state,
            statesale: true
        }),
    }
});
export default states.reducer;
export const { openBasket,clouseBasket,clousesale,opensale } = states.actions;