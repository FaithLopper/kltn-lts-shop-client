import React from 'react';
import styles from './product.module.scss';

const SingleProductsGridLayout = ({ children }) => {
    return <div className={styles['product-items']}>{children}</div>;
};

export default SingleProductsGridLayout;
