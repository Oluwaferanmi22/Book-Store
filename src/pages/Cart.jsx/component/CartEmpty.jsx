import { BiCart } from "react-icons/bi"
import { Link } from "react-router-dom"


export const CartEmpty = () => {
  return (
    <section className="text-xl h-screen text-center max-w-4xl mx-auto my-10 py-5 dark:text-slate-200 border dark:border-slate-700 rounded ">

      <div className="my-5">
        <p className="text-green-600 text-7xl mb-5 ml-5"><BiCart/> </p>

        <p>Opps! looks like your cart is empty</p>

        <p>Add eBooks to your cart from our store collection</p>
      </div>
      <Link to="/products" type="button" className="text-white bg-blue-700 inline-flex items-center gap-2 hover:bg-blue-800 rounded-lg text-lg px-5 py-2.5 mr-2 dark:hover:bg-blue-700 dark:bg-blue-600 focus:outline-none" >Continue Shopping <i className="ml-2"></i> <BiCart/> </Link>
    </section>
  )
}