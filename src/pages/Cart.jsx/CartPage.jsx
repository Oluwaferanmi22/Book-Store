import { useCart } from "../../context/CartContext"
import {useTitle} from "../Home/hooks/useTitle"
import { CartEmpty } from "./component/CartEmpty"
import CartList from "./component/CartList"

export const CartPage = () => {
  const {cartList} =useCart();
  useTitle(`Cart (${cartList.length})`)

  return (
    <main>
      {cartList.length? <CartList/> : <CartEmpty/> }
    </main>
  )
}