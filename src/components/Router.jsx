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
import PurchaseHistory from "../pages/PurchaseHistory";
import { Helmet } from "react-helmet-async";


const router = createBrowserRouter([
    {
        path: "/",
        element: <div className="bg-[rgb(246,246,246)]">
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
        </div>,
        errorElement: <ErrorPage></ErrorPage>,
    },
    {
        path: "/dashboard",
        element: <div className="mt-5 bg-[rgb(246,246,246)]">
            <Navbar></Navbar>
            <Dashboard></Dashboard>
            <Footer></Footer>
        </div>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/dashboard",
                element: <Cart></Cart>,
                errorElement: <ErrorPage></ErrorPage>,
                loader: ()=>fetch("/products.json")
            },
            {
                path:"/dashboard/wishlist",
                element: <Wishlist></Wishlist>,
                errorElement: <ErrorPage></ErrorPage>,
                loader: ()=>fetch("/products.json")
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
        errorElement: <ErrorPage></ErrorPage>,
        loader: () => fetch("/products.json")
    },
    {
        path: "/purchase-history",
        element: <div className="mt-5 bg-[rgb(246,246,246)]">
            <Navbar></Navbar>
            <PurchaseHistory></PurchaseHistory>
            <Footer></Footer>
        </div>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: () => fetch("/products.json")
    }

]);

export default router;