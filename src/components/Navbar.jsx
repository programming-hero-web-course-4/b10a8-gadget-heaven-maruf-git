import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { getStoredCartList, getStoredWishList } from "../utils/addToDb";
import UserContext from "../context/UserContext";
import { FcLike } from "react-icons/fc";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
    const location = useLocation();
    const { category_name } = useParams();
    const { setCartCount, user, cartCount, wishlistCount } = useContext(UserContext);


    return (
        <div className={`navbar  max-w-screen-xl mx-auto px-0 ${(location.pathname === "/" || location.pathname === "/categories/Laptops" || location.pathname === "/categories/Phones" || location.pathname === "/categories/Smart%20Watches" || location.pathname === "/categories/Accessories") ? "bg-[rgb(149,56,226)]" : "bg-white"}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className={`btn btn-ghost lg:hidden`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className={`menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow `}>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/statistics">Statistics</NavLink></li>
                        <li><NavLink to="/dashboard">Dashboard</NavLink></li>

                    </ul>
                </div>
                <Link to="/" className={`text-xl font-bold  ${(location.pathname === "/" || location.pathname === "/categories/Laptops" || location.pathname === "/categories/Phones" || location.pathname === "/categories/Smart%20Watches" || location.pathname === "/categories/Accessories") ? " text-white" : ""}`}>Gadget Heaven</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className={`menu menu-horizontal px-1 gap-3 ${(location.pathname === "/" || location.pathname === "/categories/Laptops" || location.pathname === "/categories/Phones" || location.pathname === "/categories/Smart%20Watches" || location.pathname === "/categories/Accessories") ? " text-white" : ""}`}>
                    <li>
                        <NavLink
                            to="/"
                            className={`${(location.pathname === "/" || location.pathname === "/categories/Laptops" || location.pathname === "/categories/Phones" || location.pathname === "/categories/Smart%20Watches" || location.pathname === "/categories/Accessories") ? " text-white active" : ""}`}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li><NavLink to="/statistics"
                        className={`${(location.pathname === "/" || location.pathname === "/categories/Laptops" || location.pathname === "/categories/Phones" || location.pathname === "/categories/Smart%20Watches" || location.pathname === "/categories/Accessories") ? " text-white" : ""}`}
                    >Statistics</NavLink></li>
                    <li><NavLink to="/dashboard"
                        className={`${(location.pathname === "/" || location.pathname === "/categories/Laptops" || location.pathname === "/categories/Phones" || location.pathname === "/categories/Smart%20Watches" || location.pathname === "/categories/Accessories") ? " text-white" : ""}`}
                    >Dashboard</NavLink></li>
                    <li><NavLink to="/purchase-history"
                        className={`${(location.pathname === "/" || location.pathname === "/categories/Laptops" || location.pathname === "/categories/Phones" || location.pathname === "/categories/Smart%20Watches" || location.pathname === "/categories/Accessories") ? " text-white" : ""}`}
                    >Purchase History</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end gap-5">
                <Link to="/dashboard" >
                    <div className="flex items-center relative">
                        <div
                            className={`${(location.pathname === "/" || location.pathname === "/categories/Laptops" || location.pathname === "/categories/Phones" || location.pathname === "/categories/Smart%20Watches" || location.pathname === "/categories/Accessories") ? " border-none" : "border-gray-400"} p-2 border bg-white rounded-full`}
                        >
                            <IoCartOutline size={20} />
                        </div>
                        <div className="badge badge-secondary absolute right-[-15px] top-[-10px]">{cartCount}</div>
                    </div>

                </Link>
                <Link to="/dashboard/wishlist" >
                    <div className="flex items-center relative">
                        <div
                            // className="p-2 border border-red-400 bg-white rounded-full"
                            className={`${(location.pathname === "/" || location.pathname === "/categories/Laptops" || location.pathname === "/categories/Phones" || location.pathname === "/categories/Smart%20Watches" || location.pathname === "/categories/Accessories") ? " border-none" : "border-gray-400"} p-2 border bg-white rounded-full`}
                        >
                            <FcLike size={20} />
                        </div>
                        <div className="badge badge-secondary absolute right-[-15px] top-[-10px]">{wishlistCount}</div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;