import React from "react";
import {Spin } from "antd";
const ProductDetail = ({ dataConfig, loading }) => {
  return (
    <section className="product__detail section" id="product__detail">
      <div className="product__detail__container container grid">
        {loading ? (
          <div className="section__loading container">
            <Spin size="large" />
          </div>
        ) : (
          <>
          Product
          </>
        )}
      </div>
    </section>
  );
};

export default ProductDetail;
