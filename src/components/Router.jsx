import { createBrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import ErrorPage from "./ErrorPage";
import Root from "./Root";
import Footer from "./Footer";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>
            <Navbar></Navbar>
            <Root></Root>
            <Footer></Footer>
        </div>,
        errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: "/statistics",
        element: <div>
            <Navbar></Navbar>
            <Statistics></Statistics>
            <Footer></Footer>
        </div>
    },
    {
        path: "/dashboard",
        element: <div>
            <Navbar></Navbar>
            <Dashboard></Dashboard>
            <Footer></Footer>
        </div>
    }
]);

export default router;