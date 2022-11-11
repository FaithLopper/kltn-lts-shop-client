import React, { useEffect, useState } from "react";
import ParentCategory from "./ParentCategory";

const Category = (props) => {
  const [categoryList, setCategoryList] = useState([]);
  const { data } = props;

  useEffect(() => {
    setCategoryList(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="product" id="product">
      {/* <div>
        <h2 className="section__title">DANH MỤC SẢN PHẨM</h2>
      </div> */}
      <div className="product__container container">
        {categoryList.map((p, index) => (
          <ParentCategory data={p} key={"ParentCategory" + index} />
        ))}
      </div>
    </section>
  );
};

export default Category;
