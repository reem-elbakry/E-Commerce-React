import React, { useEffect } from 'react'
import ProductCard from './ProductCard';
// import { useSelector } from 'react-redux'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import Header from './Header';

function Products() {

    // const products = useSelector(state => state.allProducts.products)
    //to set the data to the store ==> dispatch the action (fetching the data)
    const dispatch = useDispatch();
    const getAllProducts = async()=>{
        try {
            const response = await axios.get('https://fakestoreapi.com/products')
            //got to the setProducts action then to the reducer
            dispatch(setProducts(response.data))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllProducts();
    }, [])
    
  return (
    <>
    <Header/>
        <ProductCard />
    </>
  )
}

export default Products