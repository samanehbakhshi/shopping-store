import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
import { ProductsData } from "../data/products";

const initialState = {
  isLoading: false,
  error: false,
  products:ProductsData,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchProductsSuccess(state, action) {
      state.isLoading = false;
      state.products = action.payload;
      console.log(action.payload)
    },
    fetchProductsFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});


export const {fetchProductsStart, fetchProductsSuccess, fetchProductsFailure} = productsSlice.actions

export const fetchProducts = ()=> async (dispatch) =>{
  const options = {
    method: 'GET',
    url: 'https://sephora.p.rapidapi.com/brands/v2/auto-complete',
    params: {
      number: '1',
      size: '100',
      country: 'SG',
      language: 'en-SG'
    },
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': '4819d4c9a2msh59afaddf946ee22p17c860jsn683ca70abee0',
      'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
    }
  };
  try{
    dispatch(fetchProductsStart());
    const response = await axios.request(options);
    console.log(response.data)
    dispatch(fetchProductsSuccess(response.data));
  }catch(error){
    dispatch(fetchProductsFailure(error.message));
  }
}


// import axios from 'axios';


// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

export default productsSlice.reducer;