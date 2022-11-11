import React, { useEffect, useState } from "react";
import ChildCategory from "../category/ChildCategory";
import { useDispatch, connect } from "react-redux";
import Product from "../product/Product";
import { AppConstants } from "../../../../../../../constants";
import CategoryBanner from "./CategoryBanner";
import { withTranslation } from "react-i18next";
import { actions } from "../../../../../../../actions";

const ParentCategory = (props) => {
  const { data } = props;
  const dispatch = useDispatch();
  const [categoryChildList, setCategoryChildList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [categoryName, setCategoryName] = useState("");
  const [categoryNote, setCategoryNote] = useState("");
  const [categoryImg, setCategoryImg] = useState(
    `${AppConstants.contentRootUrl}/`
  );

  useEffect(() => {
    if (data?.childCategories) {
      setCategoryChildList(data.childCategories);
    }
    setCategoryName(data?.name);
    setCategoryImg(`${AppConstants.contentRootUrl}/` + data?.icon);
    setCategoryNote(data?.note);

    if (data?.id) getProductList();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProductList = () => {
    const { data } = props;
    const params = {
      categoryId: data?.id,
    };

    dispatch(actions.getProductList({ params }));

    // getProductDataList({ params });
  };

  return (
    <section className="product cate-bg" id="product">
      <CategoryBanner
        img={categoryImg}
        name={categoryName}
        note={categoryNote}
      />
      {productList.length !== 0 && (
        <div className="product__container container product-section">
          <Product data={productList} />
        </div>
      )}
      {/* {categoryChildList.length !== 0 && (
        <div className="product__container container child-category">
          {categoryChildList.map((p, index) => (
            <ChildCategory data={p} key={"ChildCategory" + index} />
          ))}
        </div>
      )} */}
    </section>
  );
};

export default ParentCategory;
