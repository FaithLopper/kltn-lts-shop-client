import React from 'react';

import { Routes, BrowserRouter, Route } from 'react-router-dom';

import ValidateAccess from './ValidateAccess';

import { MasterLayoutTypes, routes } from '.';
import useAuth from '@hooks/useAuth';
import Loading from '@components/common/loading';
import { getData } from '@utils/localStorage';
import AppNavigate from '@modules/business/theme-default/layout/AppNavigate';
import PageNotFound from '@components/common/page/PageNotFound';
const routesArray = Object.values(routes);

const AppRoutes = () => {
    const { isAuthenticated, loading: loadingProfile, profile } = useAuth();

    const renderRoute = (route) => {
        const type = getData('lts-fe-type') || 'bussiness';
        // TODO: handle render component by site config
        const component = route.component || route.type?.[type] || PageNotFound;
        const MasterLayout = MasterLayoutTypes['bussiness'] || <></>;

        return (
            <Route
                key={route.path || 'not-found'}
                path={route.path}
                index={route.index}
                element={
                    // loadingProfile ? (
                    //     <Loading show />
                    // ) : (
                    <MasterLayout>
                        <ValidateAccess
                            authRequire={route.auth}
                            component={component}
                            componentProps={route.componentProps}
                            isAuthenticated={isAuthenticated}
                            profile={profile}
                        />
                    </MasterLayout>

                    // )
                }
            />
        );
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppNavigate />}>{routesArray.map(renderRoute)}</Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
