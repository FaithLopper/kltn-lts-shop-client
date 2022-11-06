import React, { useEffect, useState } from "react";
import ChildCategory from "../category/ChildCategory";
import { getProduct } from "../../../../../../../actions/product";
import { useDispatch } from "react-redux";
import Product from "../product/Product";

const ParentCategory = (props) => {
  const dispatch = useDispatch();
  const [categoryChildList, setCategoryChildList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [categoryName, setCategoryName] = useState("");

  const { data } = props;

  useEffect(() => {
    if (data?.childCategories) {
        setCategoryChildList(data.childCategories);
    }
    setCategoryId(data?.id);
    setCategoryName(data?.name);

    if (categoryId !== 0) {
      getProductList();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId]);

  const getProductList = () => {
    const params = {
      categoryId: categoryId,
    };
    dispatch(
      getProduct({
        params,
        onCompleted: (data) => {
          setProductList(data);
        },
        onError: (data) => {
          console.log(data);
          // dispatch(hideFullScreenLoading())
        },
      })
    );
  };
  return (
    <section
      className="product section"
      id="product"
      style={{ border: "2px solid gray", marginBottom: 100 }}
    >
      <h2 className="section__title" style={{ color: "yellow" }}>
        DANH MỤC CHA
      </h2>
      <h2 className="section__title" style={{ color: "red" }}>
        id: {categoryId}
      </h2>
      <h2 className="section__title" style={{ color: "blue" }}>
        Name: {categoryName}
      </h2>
      <div
        className="product__container container"
        style={{ border: "2px solid purple", width: "80%" }}
      >
        <Product data={productList} />
      </div>
      <div
        className="product__container container"
        style={{ border: "2px solid brown", width: "90%", marginTop: 80 }}
      >
        {categoryChildList.map((p, index) => (
          <ChildCategory data={p} key={index} />
        ))}
      </div>
    </section>
  );
};

export default ParentCategory;
