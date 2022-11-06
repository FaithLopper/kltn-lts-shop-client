import React, { useEffect, useState } from "react";

const ChildProduct = (props) => {
  const { data } = props;
  const [childProductName, setChildProductName] = useState("");
  const [childProductId, setChildProductId] = useState(0);

  useEffect(() => {
    setChildProductName(data?.name);
    setChildProductId(data?.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  
  return (
    <li id="product">
      <h2>SẢN PHẨM CON</h2>
      <div>
        <h2>name: {childProductName}</h2>
        <h2>id: {childProductId} </h2>
      </div>
    </li>
  );
};

export default ChildProduct;
