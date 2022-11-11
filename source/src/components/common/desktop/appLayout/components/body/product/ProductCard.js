import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { id, img, isSold, name, price } = props;
  return (
    <div className="product-card">
      <Link to={`/product-detail/${id}`}>
        <div className="img-container">
          <img src={img} className="product-img-size" alt="prod-img" />
          {isSold && <div>SOLD OUT</div>}
        </div>
        <div className="product-info">
          <div className="product-name">{name}</div>
          <div className="product-price">{price}</div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
