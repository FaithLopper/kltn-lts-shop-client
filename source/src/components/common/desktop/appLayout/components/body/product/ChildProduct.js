import React, { useEffect, useState } from "react";
import { AppConstants } from "../../../../../../../constants";
import Utils from "../../../../../../../utils";
import ProductCard from "./ProductCard";

const ChildProduct = (props) => {
  const { data } = props;
  const [childProductName, setChildProductName] = useState("");
  const [childProductId, setChildProductId] = useState(0);
  const [childProductImage, setChildProductImage] = useState("");
  const [childProductIsSold, setChildProductIsSold] = useState(false);
  const [childProductPrice, setChildProductPrice] = useState(0);
  const { numberToCurency } = Utils;

  useEffect(() => {
    setChildProductName(data?.name);
    setChildProductId(data?.id);
    setChildProductImage(`${AppConstants.contentRootUrl}/` + data?.image);
    setChildProductIsSold(data?.isSoldOut);
    setChildProductPrice(numberToCurency(data?.price));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <section
      className="product product-child-container"
      style={{ width: "100%" }}
      id="product"
    >
      <ProductCard
        id={childProductId}
        img={childProductImage}
        name={childProductName}
        price={childProductPrice}
        isSold={childProductIsSold}
      />
    </section>
  );
};

export default ChildProduct;
