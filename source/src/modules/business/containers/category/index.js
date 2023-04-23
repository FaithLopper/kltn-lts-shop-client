import RenderContext from '@components/common/elements/RenderContext';
import React, { useEffect, useState } from 'react';
import CategoryComponent from '@modules/business/theme-default/desktop/category';
import BussinessDefaultLayout from '@modules/business/theme-default/layout/BussinessDefaultLayout';
import useQueryParams from '@hooks/useQueryParams';
import useFetch from '@hooks/useFetch';
import apiConfig from '@constants/apiConfig';
import { ProductConfigKinds } from '@constants';
import { useDispatch, useSelector } from 'react-redux';
import { productsActions } from '@store/actions';
import Loading from '@components/common/loading';
import LoadingPage from '@components/common/loading/LoadingPage';

const CategoryContainer = (props) => {
    const { params: queryParams } = useQueryParams();
    const search = queryParams.get('q');
    const categoryId = queryParams.get('id');

    const dispatch = useDispatch();
    const loading = useSelector((state) => state.products.getProductsFilterLoading);
    const products = useSelector((state) => state.products.productsFilter);

    useEffect(() => {
        dispatch(
            productsActions.getAllProductsFilterAction({
                params: {
                    categoriesId: categoryId,
                    name: search,
                },
            }),
        );
    }, []);
    return (
        <RenderContext
            layout={{
                defaultTheme: BussinessDefaultLayout,
            }}
            components={{
                desktop: {
                    defaultTheme: loading ? LoadingPage : CategoryComponent,
                },
                mobile: {
                    defaultTheme: loading ? LoadingPage : CategoryComponent,
                },
            }}
            products={products || []}
        />
    );
};

export default CategoryContainer;
