import React, { useRef } from "react";
import MasterLayout from "../components/common/desktop/appLayout/MasterLayout";
import MobileMasterLayout from "../components/common/mobile/appLayout/MobileMasterLayout";
import Utils from "../utils";
import { useTranslation, withTranslation } from "react-i18next";
import { connect } from "react-redux";

const { isMobileDevice } = Utils;
const isMobile = isMobileDevice();

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
  const productRef = useRef(null);
  const aboutRef = useRef(null);
  const supportRef = useRef(null);

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

  const FooterMenu = {
    product: {
      title: "SẢN PHẨM",
      refKey: "product",
      refValue: productRef,
      items: [
        {
          title: "product1",
          refKey: "product1",
        },
        {
          title: "product2",
          refKey: "product1",
        },
        {
          title: "product3",
          refKey: "product1",
        },
      ],
    },
    about: {
      title: "VỀ CÔNG TY",
      refKey: "about",
      refValue: aboutRef,
      items: [
        {
          title: "Tuyển dụng",
          refKey: "about1",
        },
        {
          title: "Nhượng quyền",
          refKey: "about1",
        },
        {
          title: "Về chúng tôi",
          refKey: "about1",
        },
      ],
    },
    support: {
      title: "HỖ TRỢ",
      refKey: "support",
      refValue: supportRef,
      items: [
        {
          title: "FAQs",
          refKey: "about1",
        },
        {
          title: "Bảo mật thông tin",
          refKey: "about1",
        },
        {
          title: "Chính sách chung",
          refKey: "about1",
        },
        {
          title: "Tra cứu đơn hàng",
          refKey: "about1",
        },
      ],
    },
    contact: {
      title: "LIÊN HỆ",
      refKey: "contact",
      refValue: contactRef,
      items: [
        {
          title: "Email góp ý",
          refKey: "about1",
        },
        {
          title: "Hotline",
          refKey: "about1",
        },
        {
          title: "0364 521 323",
          refKey: "about1",
        },
      ],
    },
  };

  return !isMobile ? (
    <MasterLayout
      {...props}
      // configPageData={_configPage}
      NavigatorMenu={NavigatorMenu}
      FooterMenu={FooterMenu}
    />
  ) : (
    <MobileMasterLayout
      {...props}
      // configPageData={_configPage}
      NavigatorMenu={NavigatorMenu}
      FooterMenu={FooterMenu}
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
