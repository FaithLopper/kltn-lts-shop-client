import React from 'react';
import styles from './AppBody.module.scss';
const AppBody = ({ children }) => {
    return <div className={styles.contentCenter}>{children}</div>;
};

export default AppBody;
