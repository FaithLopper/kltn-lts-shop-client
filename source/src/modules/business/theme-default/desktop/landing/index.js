import React from 'react';
import NewsContainer from '@modules/business/containers/landing/contents/NewsContainer';
import styles from './index.module.scss';

function LandingPageDesktop() {
    return (
        <div className={styles.landingPage}>
            <NewsContainer />
        </div>
    );
}

export default LandingPageDesktop;
