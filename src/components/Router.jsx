import { createBrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import ErrorPage from "./ErrorPage";
import Root from "./Root";
import Footer from "./Footer";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div >
            {/* <Navbar></Navbar> */}
            <Root></Root>
            <Footer></Footer>
        </div>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element: <Home></Home>
            }
        ]
    },
    {
        path: "/statistics",
        element: <div className="mt-5">
            <Navbar></Navbar>
            <Statistics></Statistics>
            <Footer></Footer>
        </div>
    },
    {
        path: "/dashboard",
        element: <div className="mt-5">
            <Navbar></Navbar>
            <Dashboard></Dashboard>
            <Footer></Footer>
        </div>
    }
]);

export default router;