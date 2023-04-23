import React, { Fragment } from 'react';
import styles from './index.module.scss';
import Products from './Products';
import SingleProductsGridLayout from '../product/SingleProductsGridLayout';
import SingleProduct from '../product/SingleProduct';
const CategoryComponent = ({ products }) => {
    return (
        <Fragment>
            <SingleProductsGridLayout>
                {products.map((prod, index) => {
                    return (
                        <div className={styles.products} key={index}>
                            <SingleProduct key={index} data={prod || {}} />
                        </div>
                    );
                })}
            </SingleProductsGridLayout>
        </Fragment>
    );
};

export default CategoryComponent;
