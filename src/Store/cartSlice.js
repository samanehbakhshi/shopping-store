import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state,action) {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);
      if (existingItem){
        existingItem.quantity += item.quantity;
      }else{
        state.items.push(item);
      }
    },
    removeItem(state,action) {
      const itemId = action.payload;
      state.items = state.items.filter(i => i.id === itemId);
    },
    updatedQuantity(state,action) {
      const {itemId, quantity} = action.payload;
      const item = state.items.find(i => i.id=== itemId);
      if (item) {
        item.quantity = quantity;
      }
    },
  }
});

export const {addItem, removeItem, updateQuantity} = cartSlice.actions;


export default cartSlice.reducer;