import React from 'react';
import LoadingSpin from 'react-loading-spin';
import styles from './index.module.scss';
const LoadingPage = ({ size = '', primaryColor = 'black' }) => {
    return (
        <div className={styles.loadingContainer}>
            <LoadingSpin primaryColor={primaryColor} />
        </div>
    );
};

export default LoadingPage;
