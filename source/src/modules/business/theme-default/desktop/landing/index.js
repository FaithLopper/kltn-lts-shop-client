import React from 'react';
import NewsContainer from '@modules/business/containers/landing/contents/NewsContainer';
import styles from './index.module.scss';
import BannerContainer from '@modules/business/containers/landing/contents/BannerContainer';
import ProductsPerCategoryContainer from '@modules/business/containers/landing/contents/ProductsPerCategoryContainer';

function LandingPageDesktop() {
    return (
        <div className={styles.landingPage}>
            <BannerContainer />
            <ProductsPerCategoryContainer />
            <NewsContainer />
        </div>
    );
}

export default LandingPageDesktop;
