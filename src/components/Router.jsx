import { createBrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar></Navbar>,
        errorElement: <ErrorPage></ErrorPage>
    },
]);

export default router;