import NotFoundPage from "../components/common/desktop/appLayout/components/body/NotFoundPage"
import CartPage from "../containers/CartPage"
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
    cartPage: {
        path: '/cart',
        component: CartPage,
        auth: true, // Consider if this site need userdata
        // exact: !isMobile ? false : true,
        exact: true,
        title: 'title.cartPage',
        routeConfig: {
            contentClass: 'cart-site'
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

export {
    mobileRoutes,
    desktopRoutes,
}