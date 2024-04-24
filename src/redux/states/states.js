import { createSlice } from "@reduxjs/toolkit";

export const states = createSlice({
    name : 'states',
    initialState : {
        stateBasket : false,
    },
    reducers : {
        openBasket : (state) =>({
            state : state.stateBasket = true
        })
    }
});
export default states.reducer;
export const {openBasket} = states.actions;