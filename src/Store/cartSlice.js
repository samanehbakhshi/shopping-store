import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state,action) {
      const {item, quantity=1} = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);
      if (existingItem){
        existingItem.quantity +=1;
      }else{
        state.items.push({...item, quantity});
      }

    },
    removeItem(state,action) {
      const itemId = action.payload;
      state.items = state.items.filter(i => i.id !== itemId.id);
    },
    updatedQuantity(state,action) {
      const {id, quantity} = action.payload;
      const item = state.items.find(i => i.id=== id);
      if (item) {

        item.quantity += quantity;
      }
    },
  }
});


export const {addItem, removeItem ,updatedQuantity} = cartSlice.actions;


export default cartSlice.reducer;