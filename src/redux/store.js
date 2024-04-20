import { configureStore } from "@reduxjs/toolkit";
import { pants } from "./clothes/Pants";
import { tshirt } from "./clothes/Tshirt";
import { hats } from "./clothes/Hats";
import { hoodies } from "./clothes/Hoodies";
const store = configureStore({
    reducer : {
        [pants.reducerPath] : pants.reducer,
        [tshirt.reducerPath] : tshirt.reducer,
        [hats.reducerPath] : hats.reducer,
        [hoodies.reducerPath] : hoodies.reducer
    },
    middleware : (middleware) => middleware().concat(pants.middleware,tshirt.middleware,hats.middleware,
        hoodies.middleware)
})
export default store;