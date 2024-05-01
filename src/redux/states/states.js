import { createSlice } from "@reduxjs/toolkit";
export const states = createSlice({
    name: 'states',
    initialState: {
        stateBasket: false,
        statesale : true,
        stateFavorites : false
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
        clousFavorites: (state) => ({
            ...state,
            stateFavorites: false
        }),
        openFavorites: (state) => ({
            ...state,
            stateFavorites: true
        }),
    }
});
export default states.reducer;
export const { openBasket,clouseBasket,clousesale,opensale,clousFavorites,openFavorites } = states.actions;