import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers";
import { redirect } from "react-router-dom";


const filterInitialState = {
    ProductList: [],
    onlyInStock: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null
}


const FilterContext = createContext(filterInitialState)


export const FilterProvider = ({children}) => {

    const [state, dispatch] = useReducer(filterReducer, filterInitialState)

    const initialProductList = (products) => {
        console.log(products)

        dispatch({
            type: "PRODUCTS_LIST",
            payload: {
                products: products
            }
        })
    }


    const bestSeller = (product) => {
        return state.bestSellerOnly ? product.filter(product => product.best_seller === true) : product
}

const sort = (product) => {
    if (state.sortBy === "LOWTOHIGH") {
        return product.sort((a, b) => a.price - b.price)
    
    }

    
    if (state.sortBy === "HIGHTOLOW") {
        return product.sort((a, b) => Number (b.price) - Number (a.price))
    }
    return product
}

const inStock = (product) => {
    return state.onlyInStock ? product.filter(product => product.in_stock === true) : product
}


const ratings = (product) => {
    if (state.ratings ===  "4STARSABOVE") {
        return product.filter(product => product.rating >= 4)
    }
    if (state.ratings ===  "3STARSABOVE") {
        return product.filter(product => product.rating >= 3)
    }
    if (state.ratings ===  "2STARSABOVE") {
        return product.filter(product => product.rating >= 2)
    }
    if (state.ratings ===  "1STARSABOVE") {
        return product.filter(product => product.rating >= 1)
    }


    return product
}

console.log(state)

const filterProductList = ratings(sort(inStock(bestSeller(state.productlist))))
console.log(filterProductList)

const value = {
    state,
    dispatch,
    products: filterProductList,
    initialProductList,
}


    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )

}



export const useFilter = () => {
    const context= useContext(FilterContext)

    return context
}
