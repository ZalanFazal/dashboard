// features/infoCard/InfoCardSlice.jsx
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  earnings: "$350.4",
  spendThisMonth: "$642.39",
  sales: "$574.34",
};

const InfoCardSlice = createSlice({
  name: "infoCard", // Fixed name here
  initialState,
  reducers: {
    setEarnings(state, action) {
      state.earnings = action.payload;
    },
    setSpendThisMonth(state, action) {
      state.spendThisMonth = action.payload;
    },
    setSales(state, action) {
      state.sales = action.payload;
    },
  },
});

export const { setEarnings, setSpendThisMonth, setSales } = InfoCardSlice.actions; // Export correct actions
export default InfoCardSlice.reducer; // Ensure to export the correct reducer
