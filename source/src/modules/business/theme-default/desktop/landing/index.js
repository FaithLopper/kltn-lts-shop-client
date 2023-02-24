import React from 'react';
import Home from './home';
import styles from './index.module.scss';
function LandingPageDesktop() {
    return <div className={styles.landingPage}>
        <Home/>
    </div>;
}

export default LandingPageDesktop;
