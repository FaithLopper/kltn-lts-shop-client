import React from 'react';
import useDevices from '@hooks/useDevices';
import PageNotFound from '../page/PageNotFound';

const RenderContext = ({ layout, components, ...props }) => {
    const { isMobile } = useDevices();
    const ComponentLayout = layout?.defaultTheme;
    const ComponentRender = (isMobile ? components?.mobile?.defaultTheme : components?.desktop?.defaultTheme) || PageNotFound;
    return (
        <ComponentLayout>
            <ComponentRender {...props} />
        </ComponentLayout>
    );
};

export default RenderContext;
