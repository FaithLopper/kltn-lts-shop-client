import React from 'react'
import ProductCategory from './ProductCategory'
import ProductItem from './ProductItem'
import './_product.scss'
const Product = () => {
  return (
    <section className="product section" id="product">
        <div className="product__container container">
            <ProductCategory/>
            <ProductItem/>
        </div>

        <div className="product__container container">
            <ProductCategory/>
            <ProductItem/>
        </div>
    </section>
  )
}

export default Product