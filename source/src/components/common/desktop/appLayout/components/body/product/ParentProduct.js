import React, { useEffect, useState } from "react";
import ChildProduct from "./ChildProduct";
import { AppConstants } from "../../../../../../../constants";
import Utils from "../../../../../../../utils";
import ProductCard from "./ProductCard";

const ParentProduct = (props) => {
  const { data } = props;
  const [parentProductName, setParentProductName] = useState("");
  const [parentProductImage, setParentProductImage] = useState("");
  const [parentProductIsSold, setParentProductIsSold] = useState(false);
  const [parentProductId, setParentProductId] = useState(0);
  const [parentProductPrice, setParentProductPrice] = useState(0);
  const [childProductList, setChildProductList] = useState([]);
  const { numberToCurency } = Utils;
  useEffect(() => {
    setParentProductId(data?.id);
    setParentProductName(data?.name);
    setParentProductImage(`${AppConstants.contentRootUrl}/` + data?.image);
    setParentProductIsSold(data?.isSoldOut);
    setParentProductPrice(numberToCurency(data?.price));

    if (data?.childProducts) setChildProductList(data?.childProducts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="product section" style={{ width: "100%" }} id="product">
      <ProductCard
        id={parentProductId}
        img={parentProductImage}
        name={parentProductName}
        price={parentProductPrice}
        isSold={parentProductIsSold}
      />
      {/* <div
        style={{
          width: "90%",
          border: "1px solid blue",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <ul>
            {childProductList.map((p, index) => (
              <ChildProduct data={p} key={index} />
            ))}
          </ul>
      </div> */}
    </section>
  );
};

export default ParentProduct;
