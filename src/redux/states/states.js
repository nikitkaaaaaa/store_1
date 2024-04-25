import { createSlice } from "@reduxjs/toolkit";
export const states = createSlice({
    name: 'states',
    initialState: {
        stateBasket: false,
    },
    reducers: {
        openBasket: (state) => ({
            ...state,
            stateBasket: true
        }),
        clouseBasket: (state) => ({
            ...state,
            stateBasket: false
        })
    }
});
export default states.reducer;
export const { openBasket,clouseBasket } = states.actions;