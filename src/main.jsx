import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {App} from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FilterProvider } from "./context/FilterContext";
import { CartProvider } from "./context/CartContext.jsx";
import {ScrollToTop} from "./component/Other/ScrollToTop.js"; // Assuming default export

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FilterProvider>
        <CartProvider>
          <ScrollToTop />
          <App/>
          <ToastContainer closeButton={false} autoClose={3000} position={"bottom-right"} />
        </CartProvider>
      </FilterProvider>
    </BrowserRouter>
  </StrictMode>
);
