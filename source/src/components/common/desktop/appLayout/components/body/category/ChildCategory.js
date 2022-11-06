import React, { useEffect, useState } from "react";
import { getProduct } from "../../../../../../../actions/product";
import { useDispatch } from "react-redux";
import Product from "../product/Product";

const ChildCategory = (props) => {
  const { data } = props;
  const dispatch = useDispatch();
  const [categoryChildId, setCategoryChildId] = useState(0);
  const [categoryChildName, setCategoryChildName] = useState("");
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setCategoryChildId(data?.id);
    setCategoryChildName(data?.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps

    if (categoryChildId !== 0) {
      getProductList();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryChildId]);

  const getProductList = () => {
    const params = {
      categoryId: categoryChildId,
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
    <section className="product section" id="product">
      <h2 className="section__title" style={{ color: "green" }}>
        DANH MỤC CON
      </h2>
      <h2 className="section__title" style={{ color: "black" }}>
        id: {categoryChildId}
      </h2>
      <h2 className="section__title" style={{ color: "orange" }}>
        name: {categoryChildName}
      </h2>
      <div
        className="product__container container"
        style={{ border: "2px solid purple", width: "80%" }}
      >
        <Product data={productList} />
      </div>
    </section>
  );
};

export default ChildCategory;
