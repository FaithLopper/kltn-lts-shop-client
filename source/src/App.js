import React, { useEffect } from 'react';

import Loading from '@components/common/loading';
import AppLoading from '@modules/business/theme-default/layout/AppLoading';
import AppRoutes from '@routes/routes';
import NotificationElement from '@components/common/form/NotificationElement';

const App = () => {
    return (
        <React.Suspense fallback={<Loading show />}>
            <AppLoading />
            <AppRoutes />
            <NotificationElement />
        </React.Suspense>
    );
};

export default App;
