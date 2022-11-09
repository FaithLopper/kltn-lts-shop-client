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
    <section className="product section product__category" id="product">
      <h2 className="product-title">SẢN PHẨM</h2>
      <div className="product_grid_container">
        {productList.map((p, index) => (
          <ParentProduct data={p} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Product;
