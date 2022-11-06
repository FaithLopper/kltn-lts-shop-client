import React, { useEffect, useRef } from "react";
import MasterLayout from "../components/common/desktop/appLayout/MasterLayout";
import MobileMasterLayout from "../components/common/mobile/appLayout/MobileMasterLayout";
import Utils from "../utils";
import { useTranslation, withTranslation } from "react-i18next";
import { connect, useDispatch, useSelector } from "react-redux";
import Product from "../components/common/desktop/appLayout/components/body/product/Product";
import New from "../components/common/desktop/appLayout/components/body/new/New";
import Home from "../components/common/desktop/appLayout/components/body/home/Home";

import ProductMobile from "../components/common/mobile/appLayout/components/body/product/Product";
import NewMobile from "../components/common/mobile/appLayout/components/body/new/New";
import HomeMobile from "../components/common/mobile/appLayout/components/body/home/Home";

import { getAllCategoryProduct, getAllNew } from "../actions/appCommon";
const { isMobileDevice } = Utils;
const isMobile = isMobileDevice();

const LandingPage = (props) => {
  const { t, title } = props;
  const dispatch = useDispatch();

  const getProductCategory = () => {
    const params = {
      // kind: 2,
      // status: 1,
    };

    // dispatch(showFullScreenLoading())
    dispatch(
      getAllCategoryProduct({
        params,
        onCompleted: (data) => {
          console.log("on complete", data);
        },
        onError: (data) => {
          console.log("on error", data);
          // dispatch(hideFullScreenLoading())
        },
      })
    );
  };

  const getNewList = () => {
    const params = {
      page:0,
      size:6,
    };
    dispatch(
      getAllNew({
        params,
        onCompleted: (data) => {
          console.log( data);
        },
        onError: (data) => {
          console.log( data);
        },
      })
    );
  };

  useEffect(() => {
    getProductCategory();
    // getNewList();
    if (title) document.title = title;
  }, []);
  const Component = () => (
    <>
      <Home />
      <Product />
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
