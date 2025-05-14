import { BiCart } from "react-icons/bi"
import { FaCheckCircle } from "react-icons/fa"
import { Link } from "react-router-dom"



const OrderSuccess = () => {
  return (
    <section className=" text-xl text-center max-w-4xl mx-auto my-10 py-5 dark:text-slate-100 border dark:border-slate-700">
        <div className=" my-5">
            <p className=" text-green-600 text-7xl mb-5">
                <FaCheckCircle/>
            </p>
            <p>
                Thank you ᵍᵒᵈﾠＡＴＨＥＮＹＸﾠགྷ for the order!
            </p>
            <p>
                Your Order ID: 9716747131 
            </p>
        </div>
        
        <div className=" my-5">
            <p>Your order is confirmed</p>
            <p>
                Please check your email (ᵍᵒᵈＡＴＨＥＮＹＸགྷ@gmail.com) for the eBook.
            </p>
            <p className=" my-5">
                Payment ID: 9716747131s
            </p>
        </div>

        <Link
        to="/products"
        type="button"
        className=" text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-lg px-5 py-2.5 mb-2 dark:hover:bg-blue-700 dark:bg-blue-600 focus:outline-none inline-flex items-center gap-2"
        >
        Continue shopping
        <BiCart/>
        </Link>
    </section>
  )
}

export default OrderSuccess