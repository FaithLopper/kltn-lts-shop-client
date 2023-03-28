import { productKinds } from '@constants/masterData';
import React from 'react';
import styles from './product.module.scss';
import SingleProduct from './SingleProduct';
import SingleProductsGridLayout from './SingleProductsGridLayout';
import { AppConstants } from '@constants';
const { contentRootUrl } = AppConstants;

const CollectionProduct = ({ products = [], collection = {} }) => {
    return (
        <div className={styles['collection']}>
            <div className={styles['products-per-collection']}>
                <SingleProductsGridLayout>
                    <div
                        // style={collection.image && { backgroundImage: `url(${contentRootUrl + collection.image})` }}
                        className={styles['banner']}
                    >
                        <img src={contentRootUrl + collection.image} alt="banner-img" />
                        <div className={styles['banner-info']}>
                            <h1 className={styles['md-title']}>{collection.name}</h1>
                            <p className={styles['text-light']}>{collection.description}</p>
                        </div>
                    </div>
                    {products.map((prod, index) => {
                        if (prod.kind === productKinds.SINGLE) {
                            return (
                                <SingleProduct
                                    style={{
                                        borderRadius: '5px',
                                        overflow: 'hidden',
                                    }}
                                    key={`${index}-product-${prod.id}`}
                                    data={prod || {}}
                                />
                            );
                        }
                    })}
                </SingleProductsGridLayout>
            </div>
        </div>
    );
};

export default CollectionProduct;
