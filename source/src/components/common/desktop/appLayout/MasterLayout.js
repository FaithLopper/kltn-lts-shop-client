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
    // this.setShowDetailModal = this.setShowDetailModal.bind(this);
  }
  render() {
    const { configPageData, clientListData, NavigatorMenu } = this.props;
    return (
      <>
        <div
          className="master-layout desktop-screen"
          id="home"
          // ref={Utils.findRefByKey("home", NavigatorMenu)}
        >
          <AppHeader
          NavigatorMenu={NavigatorMenu}
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


const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation(['masterLayout','index', 'common'])(MasterLayout));
