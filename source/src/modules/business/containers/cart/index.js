import RenderContext from '@components/common/elements/RenderContext';
import React from 'react';
import BussinessDefaultLayout from '@modules/business/theme-default/layout/BussinessDefaultLayout';
import useFetch from '@hooks/useFetch';
import apiConfig from '@constants/apiConfig';
import { useParams } from 'react-router-dom';
import CartComponent from '@modules/business/theme-default/desktop/cart';
import { useSelector } from 'react-redux';
const CartContainer = () => {
    const cartListData = useSelector((state) => state.cart.currentCart) || [];
    return (
        <RenderContext
            layout={{
                defaultTheme: BussinessDefaultLayout,
            }}
            components={{
                desktop: {
                    defaultTheme: CartComponent,
                },
                mobile: {
                    defaultTheme: CartComponent,
                },
            }}
            cartListData={cartListData}
        />
    );
};

export default CartContainer;
