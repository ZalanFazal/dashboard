// features/inventory/inventorySlice.jsx
import { createSlice } from "@reduxjs/toolkit";

const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    items: [
      { id: 1, name: "Product A", quantity: 120, price: "$100" },
      { id: 2, name: "Product B", quantity: 80, price: "$75" },
      { id: 3, name: "Product C", quantity: 50, price: "$120" }
    ]
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    }
  }
});

export const { addItem } = inventorySlice.actions;
export default inventorySlice.reducer;
