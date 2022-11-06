import React, { useEffect, useState } from "react";
import ParentProduct from "./ParentProduct";

const Product = (props) => {
  const { data } = props;
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <section className="product section" id="product">
      <h2 className="section__title">SẢN PHẨM</h2>
      <div className="product__container container">
        {productList.map((p, index) => (
          <ParentProduct data={p} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Product;
