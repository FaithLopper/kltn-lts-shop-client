// import PageNotFound from '_components/common/PageNotFound'
// import PageNotAllowed from '_components/common/PageNotAllowed'
// import ProductContainer from '_containers/product/ProductContainer'
// import GetInTouchContainer from '_containers/getInTouch/GetInTouchContainer'
// import PageNotAllowed from '_components/common/desktop/appLayout/components/common/components/LoadingContainer';
// import MobilePageNotAllowed from '_components/common/mobile/appLayout/components/common/components/LoadingContainer';
// import PageNotFound from '_components/common/desktop/appLayout/components/common/pages/PageNotFound';
// import MobilePageNotFound from '_components/common/mobile/appLayout/components/common/pages/PageNotFound';
// import NewsContainer from '_containers/news/NewsContainer'
import NotFoundPage from "../components/common/desktop/appLayout/components/body/NotFoundPage"
import LandingPage from "../containers/LandingPage"
import LoginPage from "../containers/LoginPage"
import RegisterPage from "../containers/RegisterPage"
const desktopRoutes = {
    root: {
        path: '/',
        component: LandingPage,
        auth: true, // Consider if this site need userdata
        // exact: !isMobile ? false : true,
        exact: true,
        title: 'title.landingPage',
        routeConfig: {
            contentClass: 'landing-site'
        }
    },
    loginPage: {
        path: '/login',
        component: LoginPage,
        auth: false, // Consider if this site need userdata
        // exact: !isMobile ? false : true,
        exact: true,
        title: 'title.loginPage',
        routeConfig: {
            contentClass: 'login-site'
        },
    },
    registerPage: {
        path: '/register',
        component: RegisterPage,
        auth: true, // Consider if this site need userdata
        // exact: !isMobile ? false : true,
        exact: true,
        title: 'title.registerPage',
        routeConfig: {
            contentClass: 'register-site'
        },
    },
    // pageNotAllowed: {
    //     path: '/not-allowed',
    //     component: PageNotAllowed,
    //     auth: null,
    //     title: 'title.notAllowedPage',
    // },
    // // put this at last
    notFound: {
        component: NotFoundPage,
        auth: null,
        title: 'title.notFoundPage',
    },
}

const mobileRoutes = {
    root: {
        path: '/',
        component: LandingPage,
        auth: true, // Consider if this site need userdata
        // exact: !isMobile ? false : true,
        exact: true,
        title: 'title.landingPage',
        routeConfig: {
            contentClass: 'landing-site'
        },
        key: 'root',
    },
    loginPage: {
        path: '/login',
        component: LoginPage,
        auth: false, // Consider if this site need userdata
        // exact: !isMobile ? false : true,
        exact: true,
        title: 'title.loginPage',
        routeConfig: {
            contentClass: 'login-site'
        },
    },
    registerPage: {
        path: '/register',
        component: RegisterPage,
        auth: true, // Consider if this site need userdata
        // exact: !isMobile ? false : true,
        exact: true,
        title: 'title.registerPage',
        routeConfig: {
            contentClass: 'register-site'
        },
    },
    // news: {
    //     path: ':collaboratorId/news/*',
    //     component: NewsContainer,
    //     title: 'title.newsPage',
    //     routeConfig: {
    //         contentClass: 'product-site'
    //     },
    //     key: 'news',
    // },
    // pageNotAllowed: {
    //     path: '/not-allowed',
    //     component: MobilePageNotAllowed,
    //     auth: null,
    //     title: 'title.notAllowedPage',
    // },
    // // put this at last
    // notFound: {
    //     component: MobilePageNotFound,
    //     auth: null,
    //     title: 'title.notFoundPage',
    // },
}

export {
    mobileRoutes,
    desktopRoutes,
}