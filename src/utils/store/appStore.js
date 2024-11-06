import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import restoReducer from "./restoSlice"

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        restaurants: restoReducer
    }
})

export default appStore