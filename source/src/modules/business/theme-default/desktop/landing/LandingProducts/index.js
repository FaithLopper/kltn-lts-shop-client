import React from 'react';
import styles from './landing.module.scss';
import { AppConstants } from '@constants';
import SingleProductsGridLayout from '../../product/SingleProductsGridLayout';
import { productKinds } from '@constants/masterData';
import SingleProduct from '../../product/SingleProduct';
import CollectionProductsGridLayout from '../../product/CollectionProductsGridLayout';
import CollectionProduct from '../../product/CollectionProduct';
import CollectionProductContainer from '@modules/business/containers/product/CollectionProductContainer';
const { contentRootUrl } = AppConstants;

const LandingProducts = ({ data }) => {
    const { category, products } = data;
    const { icon, name, note } = category;
    const productsData = JSON.parse(JSON.stringify(products));

    return (
        <div>
            <div
                className={styles.products}
                style={
                    icon && {
                        backgroundImage: `url(${contentRootUrl + icon})`,
                    }
                }
            >
                <div className={styles.container}>
                    <h1 className={styles['lg-title']}>{name}</h1>
                    <p className={styles['text-light']}>{note}</p>
                </div>

                <SingleProductsGridLayout>
                    {productsData.map((prod, index) => {
                        if (prod.kind === productKinds.SINGLE) {
                            productsData.splice(index, 1);
                            return <SingleProduct key={`${index}-product-${prod.id}`} data={prod || {}} />;
                        }
                    })}
                </SingleProductsGridLayout>

                <CollectionProductsGridLayout>
                    {productsData.map((prod, index) => {
                        return <CollectionProductContainer key={`${index}-product-${prod.id}`} data={prod || {}} />;
                    })}
                </CollectionProductsGridLayout>
            </div>
        </div>
    );
};

export default LandingProducts;
