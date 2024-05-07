import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

import Layout from "./Layout/Layout";

const News = lazy(() => import("../../pages/News"));
const Notices = lazy(() => import("../../pages/Notices"));
const Friends = lazy(() => import("../../pages/Friends"));

export const App = () => {
    return (
        <Layout>
            <Suspense fallback={<p>Loading..</p>}>
                <Routes>
                    <Route path="/news" element={<News />} />
                    <Route path="/notices" element={<Notices />} />
                    <Route path="/friends" element={<Friends />} />
                    {/* <Route path="/posts/:postId/*" element={<PostDetails />} /> */}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Suspense>
        </Layout>
    );
};

export default App;
