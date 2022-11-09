import React, { useEffect, useState } from "react";
import ChildCategory from "../category/ChildCategory";
import { getProduct } from "../../../../../../../actions/product";
import { useDispatch } from "react-redux";
import Product from "../product/Product";
import { AppConstants } from "../../../../../../../constants";

const ParentCategory = (props) => {
  const dispatch = useDispatch();
  const [categoryChildList, setCategoryChildList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [categoryName, setCategoryName] = useState("");
  const [categoryImg, setCategoryImg] = useState(
    `${AppConstants.contentRootUrl}/`
  );

  const { data } = props;

  useEffect(() => {
    if (data?.childCategories) {
      setCategoryChildList(data.childCategories);
    }
    setCategoryId(data?.id);
    setCategoryName(data?.name);
    setCategoryImg(`${AppConstants.contentRootUrl}/` + data?.icon);

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
    <section className="product cate-bg" id="product">
      <div className="cate-banner">
        <img src={categoryImg} alt="cate-img" className="cate-img-size" />
        <h2>
          {categoryName}
          <h5>best clothes in town for all</h5>
        </h2>
      </div>

      <h2 className="section__title" style={{ color: "red" }}>
        id: {categoryId}
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
