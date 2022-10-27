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
    // this.setShowDetailModal = this.setShowDetailModal.bind(this);
  }
  render() {
    const { configPageData, clientListData, NavigatorMenu } = this.props;
    return (
      <>
        <div
          className="master-layout mobile-screen"
          id="home"
          // ref={Utils.findRefByKey("home", NavigatorMenu)}
        >
          <AppHeader
          // NavigatorMenu={NavigatorMenu}
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
