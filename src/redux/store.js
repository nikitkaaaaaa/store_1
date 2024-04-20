import { configureStore } from "@reduxjs/toolkit";
import { sneakers } from "./sneakers";
const store = configureStore({
    reducer : {
        [sneakers.reducerPath] : sneakers.reducer,
    },
    middleware : (middleware) => middleware().concat(sneakers.middleware)
})
export default store;