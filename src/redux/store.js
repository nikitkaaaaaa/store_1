import { configureStore } from "@reduxjs/toolkit";
import { pants } from "./clothes/Pants";
import { tshirt } from "./clothes/Tshirt";
import { hats } from "./clothes/Hats";
import { hoodies } from "./clothes/Hoodies";
import { spring_shoes } from "./shoes/spring_shoes";
import { washing_machines } from "./electronics/Washing_mashines";
import { refrigerators } from "./electronics/Refrigerators";
import { televisions } from "./electronics/Televisions";
import { microwave_ovens } from "./electronics/Microwave_ovens";
import { summer_shoes } from "./shoes/summer_shoes";
import { autumn_shoes } from "./shoes/automn_shoes";
import { winter_shoes } from "./shoes/winter_shoes";
import { basket } from "./basket/basket";
import { liked } from "./liked/liked";
import states from "./states/states";
const store = configureStore({
    reducer : {
        [pants.reducerPath] : pants.reducer,
        [tshirt.reducerPath] : tshirt.reducer,
        [hats.reducerPath] : hats.reducer,
        [hoodies.reducerPath] : hoodies.reducer,
        [summer_shoes.reducerPath] : summer_shoes.reducer,
        [autumn_shoes.reducerPath] : autumn_shoes.reducer,
        [winter_shoes.reducerPath] : winter_shoes.reducer,
        [spring_shoes.reducerPath] : spring_shoes.reducer,
        [washing_machines.reducerPath] : washing_machines.reducer,
        [refrigerators.reducerPath] : refrigerators.reducer,
        [televisions.reducerPath] : televisions.reducer,
        [microwave_ovens.reducerPath] : microwave_ovens.reducer,
        [basket.reducerPath] : basket.reducer,
        [liked.reducerPath] : liked.reducer,
        stateBasket : states 
    },
    middleware : (middleware) => middleware().concat(pants.middleware,tshirt.middleware,hats.middleware,
        hoodies.middleware,summer_shoes.middleware,autumn_shoes.middleware,spring_shoes.middleware,winter_shoes.middleware,
        washing_machines.middleware,refrigerators.middleware,televisions.middleware,microwave_ovens.middleware,basket.middleware,
        liked.middleware)
})
export default store;