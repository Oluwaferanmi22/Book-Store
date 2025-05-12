import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useTitle } from "../../hooks/useTitle"
import { ProductCard } from "../../component"
import { FilterBar } from "./components/FilterBar"
import { useFilter } from "../../context/FilterContext"
import { getProductList } from "../../services"
import { toast } from "react-toastify/unstyled"


export const ProductList = () => {
    const {products, initialProductList} = useFilter()
    const {show, setShow} = useState(false)
    const search = useLocation().search
    const searchTerm = new URLSearchParams(search).get("q")
    useTitle ("Explore eBooks Collection")

    useEffect(() => {
        async function fetchProducts(){
            try{
                const data = await getProductList(searchTerm)
                console.log(data)
                initialProductList(data)
            } catch(error){
                toast.error(error.message, {closeButton: true, position: "bottom-center" });
            }

        }

        fetchProducts()
    }, [searchTerm])


  return (
    <main>
        <section className="my-5">
            <div className=" my-5 flex justify-between items-center">
                <span className=" text-2xl font-semibold data:text-slate-100 text-white mb-5 pl-[50px]">
                    All eBooks
                </span>

                <span>
                    <button onClick={() => setShow(!show)} id="dropDownIconButton"
                        data-dropdown-toggle="dropdownDors" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 hover:bg-gray-200  dark:text-gray-600 dark:hover:bg-gray-700" type="button">
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                    </button>
                </span>
            </div>

            <div className=" flex flex-wrap justify-center lg:flex-row">
                {products?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>


        </section>

        {show && <FilterBar setShow={setShow} />}
    </main>
  )
}

