import React, { useEffect, useState } from "react";
import ParentCategory from "./ParentCategory";

const Category = (props) => { 

  const [categoryList, setCategoryList] = useState([])

  useEffect(() => {
    setCategoryList(props.data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="product section" id="product">
      <h2 className="section__title">DANH MỤC</h2>
      <div className="product__container container">
        {categoryList.map((p, index) => (
          <ParentCategory data={p} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Category;
