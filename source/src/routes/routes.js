// import PageNotFound from '_components/common/PageNotFound'
// import PageNotAllowed from '_components/common/PageNotAllowed'
// import ProductContainer from '_containers/product/ProductContainer'
// import GetInTouchContainer from '_containers/getInTouch/GetInTouchContainer'
// import PageNotAllowed from '_components/common/desktop/appLayout/components/common/components/LoadingContainer';
// import MobilePageNotAllowed from '_components/common/mobile/appLayout/components/common/components/LoadingContainer';
// import PageNotFound from '_components/common/desktop/appLayout/components/common/pages/PageNotFound';
// import MobilePageNotFound from '_components/common/mobile/appLayout/components/common/pages/PageNotFound';
// import NewsContainer from '_containers/news/NewsContainer'
import LandingPage from "../containers/LandingPage"
const desktopRoutes = {
    root: {
        path: '/',
        component: LandingPage,
        auth: true, // Consider if this site need userdata
        // exact: !isMobile ? false : true,
        exact: false,
        title: 'title.landingPage',
        routeConfig: {
            contentClass: 'landing-site'
        }
    },
    // pageNotAllowed: {
    //     path: '/not-allowed',
    //     component: PageNotAllowed,
    //     auth: null,
    //     title: 'title.notAllowedPage',
    // },
    // // put this at last
    // notFound: {
    //     component: PageNotFound,
    //     auth: null,
    //     title: 'title.notFoundPage',
    // },
}

const mobileRoutes = {
    root: {
        path: '/',
        component: LandingPage,
        auth: true, // Consider if this site need userdata
        // exact: !isMobile ? false : true,
        exact: false,
        title: 'title.landingPage',
        routeConfig: {
            contentClass: 'landing-site'
        },
        key: 'root',
    },
    // getInTouch: {
    //     path: ':collaboratorId/get-in-touch/*',
    //     component: GetInTouchContainer,
    //     title: 'title.getInTouchPage',
    //     routeConfig: {
    //         contentClass: 'product-site'
    //     },
    //     key: 'get-in-touch',
    // },
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