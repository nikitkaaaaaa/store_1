import { configureStore } from "@reduxjs/toolkit";
import { pants } from "./clothes/Pants";
import { tshirt } from "./clothes/Tshirt";
import { hats } from "./clothes/Hats";
import { hoodies } from "./clothes/Hoodies";
import { summershoes } from "./shoes/summershoes";
import { autumnshoes } from "./shoes/automnshoes";
import { wintershoes } from "./shoes/wintershoes";
import { springshoes } from "./shoes/springshoes";
const store = configureStore({
    reducer : {
        [pants.reducerPath] : pants.reducer,
        [tshirt.reducerPath] : tshirt.reducer,
        [hats.reducerPath] : hats.reducer,
        [hoodies.reducerPath] : hoodies.reducer,
        [summershoes.reducerPath] : summershoes.reducer,
        [autumnshoes.reducerPath] : autumnshoes.reducer,
        [wintershoes.reducerPath] : wintershoes.reducer,
        [springshoes.reducerPath] : springshoes.reducer,
    },
    middleware : (middleware) => middleware().concat(pants.middleware,tshirt.middleware,hats.middleware,
        hoodies.middleware,summershoes.middleware,autumnshoes.middleware,springshoes.middleware,wintershoes.middleware)
})
export default store;