import { createBrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import ErrorPage from "./ErrorPage";
import Root from "./Root";
import Footer from "./Footer";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";

import CategoryProducts from "./CategoryProducts";

import AllProduct from "./AllProduct";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div >
            {/* <Navbar></Navbar> */}
            <Root></Root>
            <Footer></Footer>
        </div>,
        loader: () => fetch("/categories.json"),
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <AllProduct></AllProduct>,
                loader: () => fetch("/products.json")
            },
            {
                path: "/categories/:category_name",
                element: <CategoryProducts></CategoryProducts>,
                loader: () => fetch("/products.json")
            },
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
        </div>,
        children: [
            {
                path: "/dashboard",
                element: <Cart></Cart>
            },
            {
                path:"/dashboard/wishlist",
                element: <Wishlist></Wishlist>
            }

        ]
    },
    {
        path: "/:product_category/:product_id",
        element: <div className="mt-5">
            <Navbar></Navbar>
            <ProductDetails></ProductDetails>
            <Footer></Footer>
        </div>,
        loader: () => fetch("/products.json")
    }

]);

export default router;