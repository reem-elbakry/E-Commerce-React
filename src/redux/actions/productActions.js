import { actionTypes } from "../constants/actions-types";

const setProducts = (products)=>{
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products,
    }
}

const selectedProduct = (product)=>{
    return {
        type: actionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}

//to remove it after destroying 
const removeSelectedProduct = (product)=>{
    return {
        type: actionTypes.REMOVE_SELECTED_PRODUCT,
    }
}


export { setProducts, selectedProduct, removeSelectedProduct }