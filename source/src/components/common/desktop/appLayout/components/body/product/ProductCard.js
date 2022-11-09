import React from "react";

const ProductCard = (props) => {
  const { id, img, isSold, name, price } = props;
  return (
    <div className="product-card">
      <a href={`/product?id=${id}`}>
        <div className="img-container">
          <img src={img} className="product-img-size" alt="prod-img" />
          {isSold && <div>SOLD OUT</div>}
        </div>
        <div className="product-info">
          <div className="product-name">{name}</div>
          <div className="product-price">{price}</div>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
