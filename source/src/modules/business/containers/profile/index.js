import RenderContext from '@components/common/elements/RenderContext';
import React from 'react';
import BussinessDefaultLayout from '@modules/business/theme-default/layout/BussinessDefaultLayout';
import ProfileComponent from '@modules/business/theme-default/desktop/profile';
const ProfileContainer = () => {
    return (
        <RenderContext
            layout={{
                defaultTheme: BussinessDefaultLayout,
            }}
            components={{
                desktop: {
                    defaultTheme: ProfileComponent,
                },
                mobile: {
                    defaultTheme: ProfileComponent,
                },
            }}
        />
    );
};

export default ProfileContainer;
