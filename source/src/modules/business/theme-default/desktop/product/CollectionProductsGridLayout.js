import React from 'react';
import styles from './product.module.scss';

const CollectionProductsGridLayout = ({ children }) => {
    return <div className={styles['collections-items']}>{children}</div>;
};

export default CollectionProductsGridLayout;
