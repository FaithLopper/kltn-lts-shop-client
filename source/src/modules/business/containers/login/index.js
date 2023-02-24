import RenderContext from '@components/common/elements/RenderContext';
import React from 'react';
import BussinessDefaultLayout from '@modules/business/theme-default/layout/BussinessDefaultLayout';
import LoginComponent from '@modules/business/theme-default/desktop/login';
const LoginContainer = () => {
    return (
        <RenderContext
            layout={{
                defaultTheme: BussinessDefaultLayout,
            }}
            components={{
                desktop: {
                    defaultTheme: LoginComponent,
                },
                mobile: {
                    defaultTheme: LoginComponent,
                },
            }}
        />
    );
};

export default LoginContainer;
