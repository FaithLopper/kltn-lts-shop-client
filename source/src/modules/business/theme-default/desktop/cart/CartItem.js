import ProductQuantityButton from '@components/common/elements/ProductQuantityButton';
import React from 'react';
import './cart.scss';

const CartItem = () => {
    return (
        <div className="cart__item grid">
            <img
                src={'https://shop-api.developteam.net/v1/file/download/AVATAR/AVATAR_7ybDtn0sgL.jfif'}
                alt=""
                className="cart__item-image"
            />
            <div className="cart__item-info">
                <div className="cart__item-name">Nike Heritage</div>
                <div className="cart__item-configs">
                    <span className="cart__item-variants">/Brown/EU 39</span>
                </div>
            </div>
            <div className="cart__item-quantity cart__item-center">
                <ProductQuantityButton />
            </div>
            <div className="cart__item-price cart__item-center">2.100.000 ₫</div>
            <div className="cart__item-action cart__item-center">
                <i className="fa fa-trash-o cart__icon" aria-hidden="true"></i>
            </div>
        </div>
    );
};

export default CartItem;
