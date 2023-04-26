import { configureStore } from "@reduxjs/toolkit";
// import {rootReducer} from './Reducers'
import productReducer from './producstSlice';
import cartReducer from './cartSlice';
const store = configureStore({ reducer: {cart: cartReducer, product: productReducer}});


export default store;
