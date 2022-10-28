import React, { Component } from "react";
import AppBody from "./components/body/AppBody";
import AppFooter from "./components/footer/AppFooter";
import AppHeader from "./components/header/AppHeader";
class MobileMasterLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetailModal: false,
      isNotEmail: false,
    };
    const {t}= props
    const NavigatorMenu = [
      {
        title: t("findStore"),
        refKey: "home",
        // refValue: homeRef,
      },
      {
        title: t("help"),
        refKey: "function",
        // refValue: functionRef,
      },
      {
        title: t("login"),
        refKey: "services",
        // refValue: servicesRef,
      },
      {
        title: t("signIn"),
        refKey: "review",
        // refValue: reviewRef,
      },
    ];
    this.NavigatorMenu= NavigatorMenu
    // this.setShowDetailModal = this.setShowDetailModal.bind(this);
  }
  render() {
    const { configPageData, clientListData } = this.props;
    return (
      <>
        <div
          className="master-layout mobile-screen"
          id="home"
          // ref={Utils.findRefByKey("home", NavigatorMenu)}
        >
          <AppHeader
          NavigatorMenu={this.NavigatorMenu}
          // configPageData={configPageData}
          // setShowDetailModal={this.setShowDetailModal}
          />
          <AppBody
            // configPageData={configPageData}
            // clientListData={clientListData}
            // NavigatorMenu={NavigatorMenu}
            // setShowDetailModal={this.setShowDetailModal}
          />
          <AppFooter
            // configPageData={configPageData}
            // setShowDetailModal={this.setShowDetailModal}
            // showDetailModal={this.state.showDetailModal}
            // isNotEmail={this.state.isNotEmail}
            // NavigatorMenu={NavigatorMenu}
          />
        </div>
      </>
    );
  }
}

export default MobileMasterLayout;
