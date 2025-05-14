import { Route, Routes } from "react-router-dom";
import { HomePage, ProductList } from "../pages";
import ProductDetails from "../pages/ProductDetails";
import { CartPage } from "../pages/Cart.jsx/CartPage";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import Orderpage from "../pages/Order/Orderpage";

export const AllRoutes = () => {  
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductList/>} /> 
            <Route path="/products/:id" element={<ProductDetails/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/order-summary" element={<Orderpage/>}/>
            
        </Routes>
    </>
  )
}



