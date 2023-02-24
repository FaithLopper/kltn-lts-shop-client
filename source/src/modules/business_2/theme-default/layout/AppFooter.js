import classNames from 'classnames';
import React from 'react';

import styles from './AppFooter.module.scss';

const AppFooter = () => {
    return (
        <div className={styles.appFooter}>
            <div className={classNames('container', styles.footerContent)}>
                <nav>
                    <div className={styles.list}>
                        <div>Security Care</div>
                        <div>Security Help Center</div>
                        <div>How to Use</div>
                        <div>Contact Us</div>
                    </div>
                    <div className={styles.list}>
                        <div>CybrFit</div>
                        <div>All Categories</div>
                        <div>About CybrFit</div>
                        <div>Terms & Conditions</div>
                        <div>Privacy Policy</div>
                    </div>
                </nav>
                <div className={styles.search}>
                    <input type="text" />
                    <button>Search</button>
                </div>
            </div>
        </div>
    );
};

export default AppFooter;
