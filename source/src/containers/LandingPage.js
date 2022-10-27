import React, { useRef } from "react";
import MasterLayout from "../components/common/desktop/appLayout/MasterLayout";
import MobileMasterLayout from "../components/common/mobile/appLayout/MobileMasterLayout";
import Utils from "../utils";
import { useTranslation, withTranslation } from "react-i18next";
import { connect } from "react-redux";

const { isMobileDevice} = Utils
const isMobile = isMobileDevice()

const LandingPage = (props) => {
  const { t } = props;
  const mobileMasterLayoutRef = useRef(null);
  const homeRef = useRef(null);
  const functionRef = useRef(null);
  const servicesRef = useRef(null);
  const customerRef = useRef(null);
  const reviewRef = useRef(null);
  const contactRef = useRef(null);
  const newsRef = useRef(null);
  const NavigatorMenu = [
    {
      title: t("findStore"),
      refKey: "home",
      refValue: homeRef,
    },
    {
      title: t("help"),
      refKey: "function",
      refValue: functionRef,
    },
    {
      title: t("login"),
      refKey: "services",
      refValue: servicesRef,
    },
    {
      title: t("signIn"),
      refKey: "review",
      refValue: reviewRef,
    },
    // {
    //     title: t('navigationBar:Contact'),
    //     refKey: 'contact',
    //     refValue: contactRef,
    // },
  ];
  return !isMobile ? (
    <MasterLayout
      {...props}
      // configPageData={_configPage}
      NavigatorMenu={NavigatorMenu}
    />
  ) : (
    <MobileMasterLayout
      {...props}
      // configPageData={_configPage}
      NavigatorMenu={NavigatorMenu}
      // t={t}
      // mobileMasterLayoutRef={mobileMasterLayoutRef}
      // currentScrollY={_currentScrollY}
    />
  );
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('navigationBar')(LandingPage)) ;
