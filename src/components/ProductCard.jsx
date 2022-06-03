import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function ProductCard() {
    const products = useSelector(state => state.allProducts.products)
    const renderProducts = products.map((product, index) => {
        const { id, title, image, price, category } = product;
        return (
                <div className="col-md-3" key={id}>
                    <div className="card  m-3">
                        <Link to={`/products/${id}`}>
                        <div className="image-container p-3 ">
                            <img src={image} className="img-fluid rounded img"  style={{'height':'170px'}}/>
                        </div>
                        </Link>
                        <div className="product-detail-container p-2 bg-light">
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="dress-name">{title}</h5>
                                <div className="d-flex flex-column mb-2">
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center pt-1">
                                <div>
                                    <h6 className="price">{price}$</h6>
                                </div>
                                <button className="buy btn btn-dark" style={{'backgroundColor': ''}}>BUY</button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    });
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    {renderProducts}
                </div>
            </div>
        </>
    )
}

export default ProductCard