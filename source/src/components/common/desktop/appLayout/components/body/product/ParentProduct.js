import React, { useEffect, useState } from "react";
import ChildProduct from "./ChildProduct";

const ParentProduct = (props) => {
  const { data } = props;
  const [parentProductName, setParentProductName] = useState("");
  const [parentProductId, setParentProductId] = useState(0);
  const [childProductList, setChildProductList] = useState([]);

  useEffect(() => {
    setParentProductId(data?.id);
    setParentProductName(data?.name);
    if (data?.childProducts) setChildProductList(data?.childProducts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("childProductList", childProductList);
  return (
    <section className="product section" style={{ width: "100%" }} id="product">
      <h2 className="section__title" style={{ color: "purple" }}>
        SẢN PHẨM CHA
      </h2>
      <div>
        <h2 className="section__title" style={{ color: "royalblue" }}>
          Parent Product Name: {parentProductName}
        </h2>
        <h2 className="section__title" style={{ color: "pink" }}>
          Parent Product Name: {parentProductId}
        </h2>
        <div
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
        </div>
      </div>
    </section>
  );
};

export default ParentProduct;
