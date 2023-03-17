import Button from '@components/common/elements/Button';
import BasicForm from '@components/common/form/BasicForm';
import LoadingComponent from '@components/common/loading/LoadingComponent';
import { AppConstants } from '@constants';
import useAuth from '@hooks/useAuth';
import { hideAppLoading, showAppCartModal, showAppLoading } from '@store/actions/app';
import { actions } from '@store/actions/cart';
import { formatMoney } from '@utils';
import React, { useEffect, useState } from 'react';
import LoadingSpin from 'react-loading-spin';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import './ProductDetail.scss';

const ProductDetailComponent = ({ detail, loading }) => {
    const [ price, setPrice ] = useState(0);
    const [ image, setImage ] = useState(null);
    const { profile } = useAuth();
    const dispatch = useDispatch();
    const handleChange = (item) => {
        if (item.price || item.price !== 0) setPrice(item.price);
        if (item.image) setImage(item.image);
    };
    useEffect(() => {
        if (detail) {
            if (detail.productConfigs) setPrice(detail.productConfigs[1].variants[0].price);
            if (detail.image) setImage(detail.image);
        }
    }, [ detail ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(showAppLoading());
        const selectedVariants = [];
        if (detail.productConfigs)
            detail.productConfigs.map((item) => {
                let selected = null;
                if (item.variants)
                    selected = {
                        ...item.variants.find((element) => element.id == e.target[item.name].value),
                        configId: item.id,
                    };
                if (selected) selectedVariants.push(selected);
            });
        dispatch(
            actions.addProduct({
                product: { ...detail, selectedVariants, selectedPrice: price },
                userId: profile?.id ? profile?.id : null,
                onCompleted: () => {
                    dispatch(hideAppLoading());
                },
                onError: (err) => {
                    toast.error('Thêm sản phẩm không thành công !!!');
                    dispatch(hideAppLoading());
                },
            }),
        );
    };
    return (
        <section className="product__detail section" id="product__detail">
            {loading ? (
                <div className="section__loading">
                    <LoadingComponent />
                </div>
            ) : (
                <>
                    {detail && (
                        <div className="product__detail__container container grid">
                            <div className="product__left">
                                <img
                                    src={image ? AppConstants.contentRootUrl + image : ''}
                                    alt="product-detail"
                                    className="product__image"
                                />
                            </div>
                            <div className="product__right">
                                <div className="product__name">{detail.name}</div>
                                <form onSubmit={handleSubmit} id="product-form">
                                    {detail.productConfigs &&
                                        detail.productConfigs.map((item, index) => {
                                            return (
                                                <div key={`${detail.id}-${index}`}>
                                                    {index === 1 && (
                                                        <div className="product__variant-title">
                                                            <div>Chọn size</div>
                                                            <div className="size__table">Bảng size</div>
                                                        </div>
                                                    )}
                                                    {index === 0 && (
                                                        <div className="product__price">{formatMoney(price)}</div>
                                                    )}
                                                    <div className="switch-field" key={index}>
                                                        {item.variants.map((variant, index_1) => (
                                                            <div className="product__variant" key={`${detail.id}-${index}-variant_${variant.id}`}>
                                                                <input
                                                                    type="radio"
                                                                    id={variant.id}
                                                                    name={item.name}
                                                                    value={variant.id}
                                                                    defaultChecked={index_1 === 0 ? true : false}
                                                                    onChange={() => handleChange(variant)}
                                                                />
                                                                <label htmlFor={variant.id}>
                                                                    {variant.image ? (
                                                                        <img
                                                                            src={
                                                                                AppConstants.contentRootUrl +
                                                                                variant.image
                                                                            }
                                                                            alt=""
                                                                        />
                                                                    ) : (
                                                                        <div className="variant__size">
                                                                            {variant.name}
                                                                        </div>
                                                                    )}
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                </form>
                                <Button
                                    disabled={detail.isSoldOut ? true : false}
                                    form="product-form"
                                    htmltype="submit"
                                    className="round-button"
                                >
                                    {detail.isSoldOut ? 'Hết hàng' : 'Thêm vào giỏ hàng'}
                                </Button>
                            </div>
                        </div>
                    )}
                </>
            )}
        </section>
    );
};

export default ProductDetailComponent;
