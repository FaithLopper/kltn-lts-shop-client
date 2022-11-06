import React, { useEffect, useRef, useState } from "react";
import MasterLayout from "../components/common/desktop/appLayout/MasterLayout";
import MobileMasterLayout from "../components/common/mobile/appLayout/MobileMasterLayout";
import Utils from "../utils";
import { useTranslation, withTranslation } from "react-i18next";
import { connect, useDispatch, useSelector } from "react-redux";
import ParentCategory from "../components/common/desktop/appLayout/components/body/category/ParentCategory";
import New from "../components/common/desktop/appLayout/components/body/new/New";
import Home from "../components/common/desktop/appLayout/components/body/home/Home";

import ProductMobile from "../components/common/mobile/appLayout/components/body/product/Product";
import NewMobile from "../components/common/mobile/appLayout/components/body/new/New";
import HomeMobile from "../components/common/mobile/appLayout/components/body/home/Home";

import { getCategory } from "../actions/category";
import Category from "../components/common/desktop/appLayout/components/body/category/Category";
const { isMobileDevice } = Utils;
const isMobile = isMobileDevice();

const LandingPage = (props) => {
  const { t, title } = props;
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [categoryData, setCategoryData] = useState([]);

  const getProductCategory = () => {
    const params = {
      // kind: 2,
      // status: 1,
    };
    dispatch(
      getCategory({
        params,
        onCompleted: (data) => {
          setCategoryData(data);
          setLoading(false);
        },
        onError: (data) => {
          setLoading(false);
          console.log(data);
          // dispatch(hideFullScreenLoading())
        },
      })
    );
  };

  useEffect(() => {
    getProductCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Component = () => (
    <>
      <Home />
      <Category data={categoryData} />
      <New />
    </>
  );

  const ComponentMobile = () => (
    <>
      <HomeMobile />
      <ProductMobile />
      <NewMobile />
    </>
  );

  return !isMobile ? (
    <MasterLayout
      {...props}
      t={t}
      Component={Component}
      // configPageData={_configPage}
    />
  ) : (
    <MobileMasterLayout
      {...props}
      // configPageData={_configPage}
      Component={ComponentMobile}
      t={t}
      // t={t}
      // mobileMasterLayoutRef={mobileMasterLayoutRef}
      // currentScrollY={_currentScrollY}
    />
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation("navigationBar")(LandingPage));
