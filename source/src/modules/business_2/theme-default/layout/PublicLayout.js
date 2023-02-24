import React from 'react';
import AppBody from './AppBody';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';

const PublicLayout = ({ children }) => {
    return (
        <>
            {children}
            {/* <AppHeader />
            <AppBody>{children}</AppBody>
            <AppFooter /> */}
        </>
    );
};

export default PublicLayout;
