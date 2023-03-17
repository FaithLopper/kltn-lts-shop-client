import RenderContext from '@components/common/elements/RenderContext';
import React from 'react';
import BussinessDefaultLayout from '@modules/business/theme-default/layout/BussinessDefaultLayout';
import { useSelector } from 'react-redux';
import CheckoutForm from '@modules/business/theme-default/desktop/checkout/CheckoutForm';
import useFetch from '@hooks/useFetch';
import apiConfig from '@constants/apiConfig';
const CheckoutContainer = () => {
    const { execute: executeGetLocation } = useFetch(apiConfig.location.getList, { immediate:false });
    const { execute: executeCreateOrder } = useFetch(apiConfig.order.create, { immediate:false });
    const cartListData = useSelector((state) => state.cart.cartData.cartListData) || [];
    return (
        <RenderContext
            layout={{
                defaultTheme: BussinessDefaultLayout,
            }}
            components={{
                desktop: {
                    defaultTheme: CheckoutForm,
                },
                mobile: {
                    defaultTheme: CheckoutForm,
                },
            }}
            executeGetLocation={executeGetLocation}
            executeCreateOrder={executeCreateOrder}
            cartListData={cartListData}
        />
    );
};

export default CheckoutContainer;
