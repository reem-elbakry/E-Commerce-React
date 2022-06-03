import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';

function Product() {
    const dispatch = useDispatch();
    const product = useSelector(state => state.selectedProduct)
    const { title, image, category, description, price } = product
    console.log(product);
    const { id } = useParams();
    const fetchProduct = async (id) => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
            dispatch(selectedProduct(response.data))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProduct(id)

        return () => {
            //remove after destroying the component
            dispatch(removeSelectedProduct())
        }

    }, [id])

    return (
        <>
            <div class="container py-3  d-flex justify-content-center my-5">
                <div class="card" style={{width: "600px"}}>
                    <div class="row ">
                        <div class="col-md-7 px-3 bg-light">
                            <div class="card-block px-3">
                                <h3 class="card-title p-3">{title} </h3>
                                <hr/>
                                <p class="card-text">
                                    {description}
                                </p>
                                <br />
                                <a href="#" class="mt-auto btn btn-dark">ADD TO CART</a>
                            </div>
                        </div>
                        <div class="col-md-5 d-flex align-content-center">
                                <img class="d-block img-fluid" src={image} alt="" style={{height:"300px" }}/>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
        </>
    )
}

export default Product