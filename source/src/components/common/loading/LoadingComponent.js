import React from 'react';
import LoadingSpin from 'react-loading-spin';

const LoadingComponent = ({ size = '', primaryColor='black' }) => {
    return <LoadingSpin primaryColor={primaryColor} />;
};

export default LoadingComponent;
