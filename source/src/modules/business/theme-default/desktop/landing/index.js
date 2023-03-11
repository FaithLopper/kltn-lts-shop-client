import React from 'react';
import styles from './index.module.scss';


function LandingPageDesktop({ children }) {
    return <div className={styles.landingPage}>{children}</div>;
}

function LandingPageMobile({ children }) {
    return <div className={styles.landingPage}>{children}</div>;
}

export { LandingPageDesktop, LandingPageMobile };
