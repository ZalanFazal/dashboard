// Store.jsx
import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./features/user/userSlice";
import inventoryReducer from "./features/inventory/inventorySlice";
import infoCardReducer from "./features/infocard/InfoCardSlice"; // Import the new slice
import reportReducer from "./features/report/ReportSlice"
import productReducer from "./features/product/ProductSlice"
import loginReducer from './features/authslice/index'
const store = configureStore({
  reducer: {
    // user: userReducer,
    inventory: inventoryReducer,
    infoCard: infoCardReducer,
    report:reportReducer,
    products: productReducer,
    auth:loginReducer,
    
  }
});

export default store;
