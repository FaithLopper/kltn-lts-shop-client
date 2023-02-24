import ReactDOM from 'react-dom';
import React, { useEffect, useState } from 'react';
import LoadingSpin from "react-loading-spin";
import styles from './index.module.scss';

const Loading = ({ show }) => {
    const [ node ] = useState(document.createElement('div'));

    useEffect(() => {
        show && document.body.appendChild(node);

        return () => show && document.body.removeChild(node);
    }, [ show ]);

    return ReactDOM.createPortal(
        <div className={styles.loadingContainer}>
            <LoadingSpin size="large" />
        </div>,
        node,
    );
};

export default Loading;
