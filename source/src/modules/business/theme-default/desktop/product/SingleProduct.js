import { AppConstants } from '@constants';
import React, { useState, useCallback } from 'react';
import styles from './product.module.scss';
import Slider from 'react-slick';
import { formatCurrency } from '@utils';
const { contentRootUrl } = AppConstants;

const moneyFormatter = formatCurrency('vi-VN', 'currency', 'VND');

const settings = {
    className: 'center',
    infinite: false,
    centerPadding: '1rem',
    slidesToShow: 4,
    accessibility: true,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1700,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 1366,
            settings: {
                slidesToShow: 3,
            },
        },
    ],
};

const getPriceAndConfigs = ({ productConfigs = [], id, image, isSoldOut, name }) => {
    let maxPrice = 0;
    let productConfigsData = [
        {
            id,
            name,
            image,
            isSoldOut,
        },
    ];
    productConfigs.map((config) => {
        if (config.variants) {
            config.variants.map((variant) => {
                if (variant.price > maxPrice) {
                    maxPrice = variant.price;
                }
                if (variant.image) {
                    productConfigsData.push({
                        id: variant.id,
                        name: variant.name,
                        image: variant.image,
                        isSoldOut: variant.isSoldOut,
                    });
                }
            });
        }
    });
    return { price: maxPrice, productConfigsData };
};

const SingleProduct = ({ data, style }) => {
    const { name, id: productId, tags } = data;

    const { price, productConfigsData } = getPriceAndConfigs(data && data);
    const [ currentProduct, setCurrentProduct ] = useState(productConfigsData[0] || {}); //change the index to show first config

    const setConfigData = useCallback((e) => {
        e.preventDefault();
        if (e.target.id) {
            const founded = productConfigsData.find((config) => config.id === parseInt(e.target.id)) || {};
            setCurrentProduct(founded);
        }
    }, []);

    return (
        <div className={styles['product']} style={{ ...style }}>
            <div className={styles['product-content']}>
                <div className={styles['product-img']}>
                    <img src={contentRootUrl + currentProduct.image} alt="product image" />
                </div>
                <div className={styles['product-btns']}>
                    <button type="button" className={styles['btn-buy']}>
                        More Details
                    </button>
                </div>
                <div className={styles['off-info']}>
                    {currentProduct.isSoldOut && <h2 className={styles['sm-title sold-out-product']}>Sold Out</h2>}
                    {/* <h2 className={styles['sm-title sale-product']}>25% off</h2> */}
                </div>
            </div>

            <div className={styles['product-info']}>
                <div className={styles['product-info-tags']}>
                    <h2 className={styles['sm-title']}>#{tags}</h2>
                </div>
                <span className={styles['product-name']}>{name}</span>
                <p className={styles['product-price']}>{moneyFormatter.format(price)}</p>
                <div className={styles['product-info-configs']}>
                    <Slider {...settings}>
                        {productConfigsData.map((config, index) => {
                            return (
                                <div
                                    key={`${productId}-config_${index}`}
                                    onClick={(e) => setConfigData(e)}
                                    className={styles['config-wrapper']}
                                >
                                    <img
                                        className={
                                            config.id === currentProduct.id ? styles['chosed-config'] : undefined
                                        }
                                        id={config.id}
                                        alt="config-img"
                                        src={contentRootUrl + config.image}
                                    />
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
