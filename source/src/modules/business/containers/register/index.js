import RenderContext from '@components/common/elements/RenderContext';
import React from 'react';
import BussinessDefaultLayout from '@modules/business/theme-default/layout/BussinessDefaultLayout';
import RegisterComponent from '@modules/business/theme-default/desktop/register';
const RegisterContainer = () => {
    return (
        <RenderContext
            layout={{
                defaultTheme: BussinessDefaultLayout,
            }}
            components={{
                desktop: {
                    defaultTheme: RegisterComponent,
                },
                mobile: {
                    defaultTheme: RegisterComponent,
                },
            }}
        />
    );
};

export default RegisterContainer;
