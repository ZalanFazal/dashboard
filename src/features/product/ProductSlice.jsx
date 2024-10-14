// src/features/product/ProductSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    storeProducts(state,action){
      
      state.products=action.payload    
    }
  },
  
});

export const {storeProducts}=productSlice.actions
export default productSlice.reducer;
