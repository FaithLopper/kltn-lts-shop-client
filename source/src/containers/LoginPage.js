import React, { useRef } from "react";
import MasterLayout from "../components/common/desktop/appLayout/MasterLayout";
import MobileMasterLayout from "../components/common/mobile/appLayout/MobileMasterLayout";
import Utils from "../utils";
import { useTranslation, withTranslation } from "react-i18next";
import LoginForm from "../components/common/desktop/appLayout/components/pages/Auth/LoginForm";
import { connect } from "react-redux";
import { useEffect } from "react";

const { isMobileDevice } = Utils;
const isMobile = isMobileDevice();

const LoginPage = (props) => {
  useEffect(() => {
    // Cập nhập document title sử dụng browser API
    const hotNew= document.querySelector(".hot-new")
    hotNew.classList.add("remove-hotnew")
  });
  const { t } = props;
  return !isMobile ? (
    <MasterLayout {...props} t={t} Component={LoginForm}/>
  ) : (
    <MobileMasterLayout {...props} t={t} Component={LoginForm} />
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation(['navigationBar','loginPage'])(LoginPage));
