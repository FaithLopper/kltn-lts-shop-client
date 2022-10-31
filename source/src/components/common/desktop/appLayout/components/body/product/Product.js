import React from "react";
import ProductCategory from "./ProductCategory";
import { productCateData } from "./sample";
const Product = () => {
  return (
    <section className="product section" id="product">
      <h2 className="section__title">DANH MỤC MUA HÀNG</h2>
      <div className="product__container container">
        {productCateData.map((p, index) => (
          <ProductCategory data={p} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Product;
