import ProductQuantityButton from '@components/common/elements/ProductQuantityButton';
import React from 'react';
import './cart.scss';
import { AppConstants } from '@constants';
import { formatMoney } from '@utils';

const concatAllConfigs = (productConfigs = []) => {
    let configsString = '';
    productConfigs.map((config) => {
        if (config?.variants) {
            config.variants.map((variant) => {
                configsString = configsString.concat(' /', variant.name);
            });
        }
    });
    return configsString;
};

const CartItem = ({
    product = {},
    quantity = 1,
    image = '',
    price = 0,
    indexInCart = -1,
    updateCartItem = () => {},
    showRemoveItemModal = () => {},
}) => {
    const setQuantity = (newQuantity) => {
        updateCartItem.setQuantity({ indexInCart: indexInCart, newQuantity });
    };
    return (
        <div className="cart__item grid">
            <img src={AppConstants.contentRootUrl + image.image} alt="" className="cart__item-image" />
            <div className="cart__item-info">
                <div className="cart__item-name">{product.name}</div>
                <div className="cart__item-configs">
                    {product?.productConfigs && (
                        <span className="cart__item-variants">{concatAllConfigs(product.productConfigs)}</span>
                    )}
                </div>
            </div>
            <div className="cart__item-quantity cart__item-center">
                <ProductQuantityButton quantity={quantity} setQuantity={setQuantity} />
            </div>
            <div className="cart__item-price cart__item-center">{formatMoney(quantity * price)}</div>
            <div className="cart__item-action cart__item-center">
                <i className="fa fa-trash-o cart__icon" aria-hidden="true" id={indexInCart} onClick={(e) => showRemoveItemModal(e)}></i>
            </div>
        </div>
    );
};

export { concatAllConfigs, CartItem } ;
