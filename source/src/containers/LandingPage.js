import React, { useEffect, useRef, useState } from "react";
import MasterLayout from "../components/common/desktop/appLayout/MasterLayout";
import MobileMasterLayout from "../components/common/mobile/appLayout/MobileMasterLayout";
import Utils from "../utils";
import { useTranslation, withTranslation } from "react-i18next";
import { connect, useDispatch, useSelector } from "react-redux";
import ParentCategory from "../components/common/desktop/appLayout/components/body/category/ParentCategory";
import New from "../components/common/desktop/appLayout/components/body/new/New";
import Home from "../components/common/desktop/appLayout/components/body/home/Home";

import ProductMobile from "../components/common/mobile/appLayout/components/body/product/Product";
import NewMobile from "../components/common/mobile/appLayout/components/body/new/New";
import HomeMobile from "../components/common/mobile/appLayout/components/body/home/Home";

import { getCategory } from "../actions/category";
import Category from "../components/common/desktop/appLayout/components/body/category/Category";
import { getAllNew } from "../actions/appCommon";
import { actions } from "../actions";
const { isMobileDevice } = Utils;
const isMobile = isMobileDevice();

var pagination = {
  pageSize: 6,
  totalPage: 1,
  current: 1,
  totalElements: null,
};

const LandingPage = (props) => {
  const { t, title } = props;
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [categoryData, setCategoryData] = useState([]);

  const getProductCategory = () => {
    const params = {
      // kind: 2,
      // status: 1,
    };
    dispatch(
      getCategory({
        params,
        onCompleted: (data) => {
          setCategoryData(data);
          setLoading(false);
        },
        onError: (data) => {
          setLoading(false);
          console.log(data);
          // dispatch(hideFullScreenLoading())
        },
      })
    );
  };

  const getNewList = (currentPage) => {
    const { getDataList } = props;
    const page = currentPage ? currentPage - 1 : 0;
    const params = {
      page,
      size: pagination.pageSize,
      kind: 1,
    };
    getDataList({ params });
  };

  useEffect(() => {
    getProductCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getNewList();
    // props.getCategoryAutoComplete({ kind: 1 }); //kind = 1 = news
    if (title) document.title = title;
  }, []);

  const newData = props.dataList.data || [];
  pagination.totalPage = props.dataList.totalPage || 1;
  pagination.totalElements = props.dataList.totalElements || 1;
  const Component = () => (
    <>
      <Home />
      <Category data={categoryData} />
      <New
        newData={newData}
        pagination={pagination}
        handleTableChange={handleTableChange}
        loading={props.loading}
      />
    </>
  );

  const ComponentMobile = () => (
    <>
      <HomeMobile />
      <ProductMobile />
      <NewMobile />
    </>
  );

  const handleTableChange = (page, pageSize) => {
    getNewList(page);
    pagination.current = page
  };
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

const mapStateToProps = (state) => ({
  loading: state.news.newsListLoading,
  dataList: state.news.newsListData || {},
  categoryAutoCompleteNews: state.news.categoryAutoCompleteNews || {},
});

const mapDispatchToProps = (dispatch) => ({
  getDataList: (payload) => dispatch(actions.getNewsList(payload)),
  getCategoryAutoComplete: (payload) =>
    dispatch(actions.getCategoryAutoComplete(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation("navigationBar")(LandingPage));
