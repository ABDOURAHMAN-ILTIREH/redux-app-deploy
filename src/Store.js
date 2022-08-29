import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart/CartItmesSlice'
import ModelReducer from "./features/Model/ModelSlice";

export const store = configureStore({
    reducer:{
         cart: cartReducer,
         model:ModelReducer
    }
})