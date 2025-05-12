import { Route, Routes } from "react-router-dom";
import { HomePage, ProductList } from "../pages";
import ProductDetails from "../pages/ProductDetails";
import { CartPage } from "../pages/Cart.jsx/CartPage";


export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductList/>} />
            <Route path="/products/:id" element={<ProductDetails/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            
        </Routes>
    </>
  )
}



