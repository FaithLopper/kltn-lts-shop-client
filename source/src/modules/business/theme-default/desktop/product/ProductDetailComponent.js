import { AppConstants } from '@constants';
import React from 'react';
import LoadingSpin from 'react-loading-spin';
import './ProductDetail.scss';
const ProductDetailComponent = ({ detail, loading }) => {
    console.log(detail);
    return (
        <section className="product__detail section" id="product__detail">
            <div className="product__detail__container container grid">
                <div className="product__left">
                    {/* <img
                        src={AppConstants.contentRootUrl + showImage}
                        alt="product-detail"
                        className="product__image"
                    /> */}
                </div>
            </div>
        </section>
    );
};

export default ProductDetailComponent;
