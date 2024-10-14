// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "react-redux";
// import App from "./App";
import store from "./Store";

createRoot(document.getElementById('root')).render(
<Provider store={store}>
    <App />
  </Provider>,
)
