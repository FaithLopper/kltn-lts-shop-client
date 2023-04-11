import Button from '@components/common/elements/Button';
import ProductQuantityButton from '@components/common/elements/ProductQuantityButton';
import LoadingComponent from '@components/common/loading/LoadingComponent';
import { AppConstants } from '@constants';
import useAuth from '@hooks/useAuth';
import { hideAppLoading, showAppCartModal, showAppLoading } from '@store/actions/app';
import { actions } from '@store/actions/cart';
import { formatMoney } from '@utils';
import React, { useCallback, useEffect, useState } from 'react';
import LoadingSpin from 'react-loading-spin';
import { useDispatch } from 'react-redux';
import Slider from 'react-slick';
import { toast } from 'react-toastify';
import ProductConfig from './ProductConfig';
import './ProductDetail.scss';
const { contentRootUrl } = AppConstants;

const settings = {
    infinite: false,
    slidesToShow: 9.1,
    slidesToScroll: 1,
    swipeToSlide: true,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
};

const getPricesAndImages = ({ productConfigs = [], image = '', price = 0, isSoldOut = false }) => {
    let prices = price,
        maxConfigsPrice = 0,
        minConfigsPrice = 0,
        maxPrice = 0,
        minPrice = 0,
        configsImages = [];

    productConfigs.map((config) => {
        if (config.isRequired && config.variants) {
            //max price and min price of each require config
            maxPrice = config.variants[0].price;
            minPrice = config.variants[0].price;

            config.variants.map((variant) => {
                if (variant.price >= maxPrice) {
                    maxPrice = variant.price;
                } else minPrice = variant.price;

                //get image
                if (variant.image) {
                    configsImages.push({
                        id: variant.id,
                        image: variant.image,
                        isSoldOut: variant.isSoldOut,
                    });
                }
            });
            maxConfigsPrice = maxConfigsPrice + maxPrice;
            minConfigsPrice = minConfigsPrice + minPrice;

            if (minConfigsPrice === 0) prices = formatMoney(maxConfigsPrice);
            else if (maxConfigsPrice === 0) prices = formatMoney(minConfigsPrice);
            else if (maxConfigsPrice === minConfigsPrice) prices = formatMoney(maxConfigsPrice);
            else if (maxConfigsPrice && minConfigsPrice)
                prices = `${formatMoney(minConfigsPrice)} ~ ${formatMoney(maxConfigsPrice)}`;
        }
    });
    return { prices, configsImages };
};

const generateErrorList = (productConfigs = []) => {
    const errorList = productConfigs.map((config) => ({
        id: config.id,
        isError: false,
        errorMsg: `Vui lòng chọn ${config.name}`,
    }));
    return errorList;
};

const ProductDetailComponent = ({ detail, loading }) => {
    const { profile } = useAuth(),
        dispatch = useDispatch(),
        { prices: firstPrice, configsImages } = getPricesAndImages(detail || {});

    const [currentImage, setCurrentImage] = useState({}),
        [currentPrice, setCurrentPrice] = useState(0),
        [errorList, setErrorList] = useState([]),
        [selectedConfigs, setSelectedConfigs] = useState([]),
        [quantity, setQuantity] = useState(1);

    useEffect(() => {
        setCurrentPrice(firstPrice);
        setCurrentImage(configsImages[0] || { image: detail?.image });
        if (detail?.productConfigs) {
            let productConfigsCopy = JSON.parse(JSON.stringify(detail.productConfigs));
            //generate error list
            setErrorList(generateErrorList(productConfigsCopy));
            //set default value for selectedConfigs
            productConfigsCopy = productConfigsCopy.map((config) => ({ ...config, variants: [] }));
            setSelectedConfigs(productConfigsCopy);
        }
    }, [detail]);

    const handleSelectedConfigsChange = (newselectedConfigs) => {
        const copyNewselectedConfigs = JSON.parse(JSON.stringify(newselectedConfigs));
        setSelectedConfigs(copyNewselectedConfigs);
        setQuantity(1);
        getNewPrices(newselectedConfigs);
    };

    const setConfigImages = useCallback(
        (e) => {
            e.preventDefault();
            if (e.target.id) {
                const founded = configsImages.find((config) => config.id === parseInt(e.target.id)) || {};
                if (!(Object.keys(founded).length === 0 && founded.constructor === Object)) setCurrentImage(founded);
            }
        },
        [configsImages],
    );

    const getNewPrices = (selectedConfigs = []) => {
        let newPrice = 0;
        for (let i = 0; i < selectedConfigs.length; i++) {
            if (selectedConfigs[i].isRequired && !selectedConfigs[i].variants.length) {
                newPrice = firstPrice;
                break;
            }
            selectedConfigs[i].variants.map((variant) => {
                newPrice += variant.price;
            });
        }
        setCurrentPrice(newPrice);
    };

    const validateConfigField = useCallback(
        (configId, isError) => {
            setErrorList((prevState) => {
                const newErrorList = prevState.map((err) => {
                    if (err.id === configId) {
                        return { ...err, isError: isError };
                    }
                    return err;
                });
                return newErrorList;
            });
        },
        [errorList],
    );

    const validateForm = useCallback(
        (selectedConfigs = []) => {
            let isValidated = true;
            for (let i = 0; i < selectedConfigs.length; i++) {
                if (selectedConfigs[i].isRequired && !selectedConfigs[i].variants.length) {
                    isValidated = false;
                    validateConfigField(selectedConfigs[i].id, true); // set error for the config
                }
            }
            return isValidated;
        },
        [selectedConfigs],
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm(selectedConfigs)) {
            dispatch(showAppLoading());
            dispatch(
                actions.addProduct({
                    product: {
                        ...detail,
                        productConfigs: JSON.parse(JSON.stringify(selectedConfigs)),
                    },
                    image: currentImage,
                    quantity,
                    price: currentPrice,
                    userId: profile?.id || null,
                    onCompleted: () => {
                        dispatch(hideAppLoading());
                    },
                    onError: () => {
                        toast.error('Thêm sản phẩm không thành công !!!');
                        dispatch(hideAppLoading());
                    },
                }),
            );
        }
        // const selectedVariants = [];
        // console.log();
        // if (detail.productConfigs)
        //     detail.productConfigs.map((item) => {
        //         let selected = null;
        //         console.log(e.target[item.name]);
        //         if (item.variants)
        //             selected = {
        //                 ...item.variants.find((element) => element.id == e.target[item.name].value),
        //                 configId: item.id,
        //             };
        //         if (selected) console.log(selected);
        //     });
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
                                <div className="images__list">
                                    <Slider {...settings}>
                                        {configsImages.map((config, index) => {
                                            return (
                                                <div
                                                    key={`${detail.id}-config_${index}`}
                                                    onClick={(e) => setConfigImages(e)}
                                                    className="images__wrapper"
                                                >
                                                    <img
                                                        className={
                                                            config.id === currentImage.id ? 'chosed-config' : undefined
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
                                {currentImage.image && (
                                    <img
                                        src={contentRootUrl + currentImage.image}
                                        alt="product-detail"
                                        className="product__image images__wrapper"
                                    />
                                )}
                            </div>
                            <div className="product__right">
                                <div className="product__title">
                                    <div className="product__name">{detail.name}</div>
                                    <div className="product__price">{formatMoney(currentPrice) || currentPrice}</div>
                                </div>
                                {detail.description && (
                                    <div className="product__info">
                                        <span>Mô tả sản phẩn</span>
                                        <p>{detail.description}</p>
                                    </div>
                                )}
                                <form onSubmit={handleSubmit} id="product-form">
                                    {detail?.productConfigs &&
                                        detail.productConfigs.map((config) => {
                                            return (
                                                <ProductConfig
                                                    key={config.id}
                                                    type="checkbox"
                                                    name={config.name}
                                                    title={`Chọn phân loại ${config.name}`}
                                                    className="form-check-input"
                                                    isVertical={false}
                                                    selectedConfigs={selectedConfigs}
                                                    options={config.variants || []}
                                                    configId={config.id}
                                                    choiceKind={config.choiceKind}
                                                    isReq={config.isRequired}
                                                    error={errorList.find((err) => err.id === config.id)}
                                                    onChangeFunc={handleSelectedConfigsChange}
                                                    onValidateFunc={validateConfigField}
                                                    setConfigImages={setConfigImages}
                                                />
                                            );
                                        })}
                                </form>

                                <div className="product__info">
                                    <span>Số lượng</span>
                                    <ProductQuantityButton quantity={quantity} setQuantity={setQuantity} />
                                </div>

                                <Button
                                    disabled={detail.isSoldOut}
                                    form="product-form"
                                    type="submit"
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

export { ProductDetailComponent, getPricesAndImages };
