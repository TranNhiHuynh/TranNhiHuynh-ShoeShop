import React, { useState } from 'react'
import prdList from './data.json'
import ProductList from './ProductList'
import ProductDetail from './ProductDetail'
const BTShoeShop = () => {
    const [productDetail, setProductDetail] = useState(prdList[0])

    const handleProductDetail = (product) => {
        setProductDetail(product)
    }

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between">
                <h1>BTShoeShop</h1>
            </div>
            <ProductList
                prdList={prdList}
                handleProductDetail={handleProductDetail}
            />
            <ProductDetail productDetail={productDetail} />

        </div>
    )
}

export default BTShoeShop
