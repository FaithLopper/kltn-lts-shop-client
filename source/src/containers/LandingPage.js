import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import MasterLayout from "../components/common/desktop/appLayout/MasterLayout";
import MobileMasterLayout from "../components/common/mobile/appLayout/MobileMasterLayout";
import Utils from "../utils";

const { isMobileDevice} = Utils
const isMobile = isMobileDevice()

const LandingPage = (props) => {
  const { t } = useTranslation();
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
      title: t("navigationBar:Home"),
      refKey: "home",
      refValue: homeRef,
    },
    {
      title: t("navigationBar:Function"),
      refKey: "function",
      refValue: functionRef,
    },
    {
      title: t("navigationBar:Services"),
      refKey: "services",
      refValue: servicesRef,
    },
    {
      title: t("navigationBar:Review"),
      refKey: "review",
      refValue: reviewRef,
    },
    {
      title: t("navigationBar:News"),
      refKey: "news",
      refValue: newsRef,
    },
    {
      title: t("navigationBar:Customer"),
      refKey: "customer",
      refValue: customerRef,
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
      // NavigatorMenu={NavigatorMenu}
    />
  ) : (
    <MobileMasterLayout
      {...props}
      // configPageData={_configPage}
      // NavigatorMenu={NavigatorMenu}
      // t={t}
      // mobileMasterLayoutRef={mobileMasterLayoutRef}
      // currentScrollY={_currentScrollY}
    />
  );
};

export default LandingPage;
