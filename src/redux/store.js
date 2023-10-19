import { configureStore} from "@reduxjs/toolkit";
import wishlistSlice from "./Slices/wishlistSlice";

const store = configureStore({
    reducer:{
        wishlistReducer:wishlistSlice

    }
})

export default store;