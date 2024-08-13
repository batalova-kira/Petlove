import { Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { Navigate } from "react-router-dom";
import * as ROUTES from "../constants/routes.js";
import Layout from "./Layout/Layout";
import { Loader } from "./Loader/Loader.jsx";
import { useDispatch } from "react-redux";
import { refreshThunk } from "../redux/auth/auth-operations.js";
import { GlobalStyle } from "./GlobalStyle.js";

const HomePage = lazy(() => import("../pages/HomePage.jsx"));
const News = lazy(() => import("../pages/News"));
const Notices = lazy(() => import("../pages/Notices"));
const Friends = lazy(() => import("../pages/Friends"));
const Login = lazy(() => import("../pages/LoginPage"));
const Registration = lazy(() => import("../pages/RegisterPage"));

export const appRoutes = [
    {
        path: ROUTES.HOME_ROUTE,
        element: <HomePage isHomePage={true} />,
    },
    {
        path: ROUTES.NEWS_ROUTE,
        element: <News />,
    },
    {
        path: ROUTES.NOTICES_ROUTE,
        element: (
            // <PrivateRoute>
            <Notices isNoticesPage={true} />
        ),
        // </PrivateRoute>
    },
    {
        path: ROUTES.FRIENDS_ROUTE,
        element: (
            // <PrivateRoute>
            <Friends />
            // </PrivateRoute>
        ),
    },
    {
        path: ROUTES.LOGIN_ROUTE,
        element: (
            // <RestrictedRoute>
            <Login />
            // </RestrictedRoute>
        ),
    },
    {
        path: ROUTES.REGISTRATION_ROUTE,
        element: (
            // <RestrictedRoute>
            <Registration />
            // </RestrictedRoute>
        ),
    },
];

export const App = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const isHomePage = location.pathname === ROUTES.HOME_ROUTE;
    const isFriendsPage = location.pathname === ROUTES.FRIENDS_ROUTE;
    const isNoticesPage = location.pathname === ROUTES.NOTICES_ROUTE;

    useEffect(() => {
        dispatch(refreshThunk());
    }, [dispatch]);

    return (
        <>
            <GlobalStyle
                $isHomePage={isHomePage}
                $isFriendsPage={isFriendsPage}
                $isNoticesPage={isNoticesPage}
            />
            <Layout
                $isHomePage={isHomePage}
                $isFriendsPage={isFriendsPage}
                $isNoticesPage={isNoticesPage}
            >
                <Suspense fallback={<Loader />}>
                    <Routes>
                        {appRoutes.map(({ path, element }) => (
                            <Route key={path} path={path} element={element} />
                        ))}
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </Suspense>
            </Layout>
            {/* <ToastContainer /> */}
        </>
    );
};

export default App;
