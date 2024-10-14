// features/inventory/inventorySlice.jsx
import { createSlice } from "@reduxjs/toolkit";

const ReportSlice = createSlice({
  name: "report",
  initialState: {
    items: [
        { id: 1, product: 'Laptop', category: 'Electronics', stock: 35, sales: 10 },
        { id: 2, product: 'Sofa', category: 'Furniture', stock: 14, sales: 5 },
        { id: 3, product: 'T-shirt', category: 'Clothing', stock: 50, sales: 20 },
        { id: 4, product: 'Headphones', category: 'Electronics', stock: 25, sales: 8 },
    ]
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    }
  }
});

export const { addItem } = ReportSlice.actions;
export default ReportSlice.reducer;
