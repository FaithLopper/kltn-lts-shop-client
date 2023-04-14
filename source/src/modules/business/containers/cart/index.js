import RenderContext from '@components/common/elements/RenderContext';
import React from 'react';
import BussinessDefaultLayout from '@modules/business/theme-default/layout/BussinessDefaultLayout';
import CartComponent from '@modules/business/theme-default/desktop/cart';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '@store/actions/cart';

const CartContainer = () => {
    const cartListData = useSelector((state) => state.cart.currentCart) || [];
    const dispatch = useDispatch();

    const setQuantity = (updateData) => {
        dispatch(actions.updateCart({ type: 'UPDATE_QUANTITY', updateData }));
    };


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
            updateCartItem={{ setQuantity }}
        />
    );
};

export default CartContainer;
