import React from 'react';
import Home from './home';
import styles from './index.module.scss';
import New from './new/New';
function LandingPageDesktop({ dataNew, loading }) {
    console.log(1);
    return (
        <div className={styles.landingPage}>
            <Home />
            <New dataNew={dataNew} loading={loading} />
        </div>
    );
}

export default LandingPageDesktop;
