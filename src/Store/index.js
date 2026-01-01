import { configureStore } from "@reduxjs/toolkit";
import productReducer from './producstSlice';
import cartReducer from './cartSlice';
import authReducer from './authSlice';
const store = configureStore({ reducer: {cart: cartReducer, product: productReducer, auth: authReducer}});


export default store;
