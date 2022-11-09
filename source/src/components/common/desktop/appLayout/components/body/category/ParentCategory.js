import React, { useEffect, useState } from "react";
import ChildCategory from "../category/ChildCategory";
import { getProduct } from "../../../../../../../actions/product";
import { useDispatch } from "react-redux";
import Product from "../product/Product";
import { AppConstants } from "../../../../../../../constants";
import CategoryBanner from "./CategoryBanner";

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
      <CategoryBanner img={categoryImg} name={categoryName} />
      {productList.length !== 0 && (
        <div className="product__container container product-section">
          <Product data={productList} />
        </div>
      )}
      {categoryChildList.length !== 0 && (
        <div className="product__container container child-category">
          {categoryChildList.map((p, index) => (
            <ChildCategory data={p} key={index} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ParentCategory;
