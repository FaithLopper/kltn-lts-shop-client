import React, { Component } from "react";
import Utils from "../../../../utils";
import { connect } from 'react-redux';
import AppBody from "./components/body/AppBody";
import AppFooter from "./components/footer/AppFooter";
import AppHeader from "./components/header/AppHeader";
import { withTranslation } from 'react-i18next';

class MasterLayout extends Component {
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
        refKey: "/store",
        // refValue: homeRef,
      },
      {
        title: t("help"),
        refKey: "/help",
        // refValue: functionRef,
      },
      {
        title: t("login"),
        refKey: "/login",
        // refValue: servicesRef,
      },
      {
        title: t("signIn"),
        refKey: "/register",
        // refValue: reviewRef,
      },
    ];
    this.NavigatorMenu= NavigatorMenu
    // this.setShowDetailModal = this.setShowDetailModal.bind(this);
  }
  
  render() {
    const { configPageData, clientListData,Component } = this.props;
    return (
      <>
        <div
          className="master-layout desktop-screen"
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
            Component={Component}
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


const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(MasterLayout);
