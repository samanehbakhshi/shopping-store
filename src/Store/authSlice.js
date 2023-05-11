import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoggedIn: null,
}
export const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    signin(state, action) {
      state.user = action.user;
      state.isLoggedIn = true;
  },
  logout: (state)=>{
    state.user = null;
    state.isLoggedIn = false;
  },
  signup:(state,action)=>{
    state.user = action.payload;
    state.isLoggedIn =true;
  },
  }
})


export const {signin, logout, signup} = authSlice.actions;



export default authSlice.reducer;