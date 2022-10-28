import React, { useRef } from "react";
import MasterLayout from "../components/common/desktop/appLayout/MasterLayout";
import MobileMasterLayout from "../components/common/mobile/appLayout/MobileMasterLayout";
import Utils from "../utils";
import { useTranslation, withTranslation } from "react-i18next";
import { connect } from "react-redux";
import Product from "../components/common/desktop/appLayout/components/body/product/Product";
import New from  "../components/common/desktop/appLayout/components/body/new/New";
import Home from  "../components/common/desktop/appLayout/components/body/home/Home";
const { isMobileDevice} = Utils
const isMobile = isMobileDevice()

const LandingPage = (props) => {
  const { t } = props;  
  const Component= ()=><>
  <Home/>
  <Product/>
  <New/></>
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
      Component={Component}
      t={t}
      // t={t}
      // mobileMasterLayoutRef={mobileMasterLayoutRef}
      // currentScrollY={_currentScrollY}
    />
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('navigationBar')(LandingPage)) ;
