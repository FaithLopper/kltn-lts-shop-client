import RenderContext from '@components/common/elements/RenderContext';
import React from 'react';
import BussinessDefaultLayout from '@modules/business/theme-default/layout/BussinessDefaultLayout';
import { ProductDetailComponent } from '@modules/business/theme-default/desktop/product/ProductDetailComponent';
import useFetch from '@hooks/useFetch';
import apiConfig from '@constants/apiConfig';
import { useParams } from 'react-router-dom';
const ProductDetailContainer = () => {
    const params = useParams();
    const { data, loading: loading } = useFetch(apiConfig.product.getById, {
        immediate: true,
        mappingData: (res) => res.data,
        pathParams: {
            id: params.id,
        },
    });
    return (
        <RenderContext
            layout={{
                defaultTheme: BussinessDefaultLayout,
            }}
            components={{
                desktop: {
                    defaultTheme: ProductDetailComponent,
                },
                mobile: {
                    defaultTheme: ProductDetailComponent,
                },
            }}
            detail={data}
            loading={loading}
        />
    );
};

export default ProductDetailContainer;
