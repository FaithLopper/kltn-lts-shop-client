import React from 'react';

import { Routes, BrowserRouter, Route } from 'react-router-dom';

import ValidateAccess from './ValidateAccess';

import routes from '.';
import useAuth from '@hooks/useAuth';
import Loading from '@components/common/loading';
import { getData, setData } from '@utils/localStorage';
import AppNavigate from '@modules/business/theme-default/layout/AppNavigate';
import PageNotFound from '@components/common/page/PageNotFound';
import { appSession } from '@constants';
import { useDispatch } from 'react-redux';
import { actions } from '@store/actions/cart';
const routesArray = Object.values(routes);

const AppRoutes = () => {
    const { isAuthenticated, loading: loadingProfile, profile } = useAuth();
    const dispatch = useDispatch();
    if (profile) {
        setData(appSession, profile?.id ? profile?.id : null);
    }
    const renderRoute = (route) => {
        const type = getData('lts-fe-type') || 'bussiness';
        // TODO: handle render component by site config
        const component = route.component || route.type?.[type] || PageNotFound;

        return (
            <Route
                key={route.path || 'not-found'}
                path={route.path}
                index={route.index}
                element={
                    loadingProfile ? (
                        <Loading show />
                    ) : (
                        <ValidateAccess
                            authRequire={route.auth}
                            component={component}
                            componentProps={route.componentProps}
                            isAuthenticated={isAuthenticated}
                            profile={profile}
                        />
                    )
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
