import { useEffect } from "react";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { setStoredWishList } from "../utils/addToDb";


const Navbar = () => {
    const location = useLocation();
    const { category_name } = useParams();
    // for dynamic path
    // console.log("our category name:", category_name);
    
    // const wishListProducts = setStoredWishList();
    // const wishListProductsLength = wishListProducts.length;
    // const [wishListLength,setWishListLength] = useState(0);
    // useEffect(() => {

    // }, [])
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
                <Link className={`text-xl font-bold  ${(location.pathname === "/" || location.pathname === "/categories/Laptops" || location.pathname === "/categories/Phones" || location.pathname === "/categories/Smart%20Watches" || location.pathname === "/categories/Accessories") ? " text-white" : ""}`}>Gadget Heaven</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className={`menu menu-horizontal px-1 gap-3 ${(location.pathname === "/" || location.pathname === "/categories/Laptops" || location.pathname === "/categories/Phones" || location.pathname === "/categories/Smart%20Watches" || location.pathname === "/categories/Accessories") ? " text-white" : ""}`}>
                    <li>
                        <NavLink
                            to="/"
                            // className={({ isActive }) =>isActive ? "border-none border-b-2 text-green-400 text-3xl" : ""}
                            className={`${(location.pathname === "/" || location.pathname === "/categories/Laptops" || location.pathname === "/categories/Phones" || location.pathname === "/categories/Smart%20Watches" || location.pathname === "/categories/Accessories") ? " text-white" : ""}`}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li><NavLink to="/statistics"
                        // className={({ isActive }) =>{
                        //      isActive ? "border-b-2" : "";
                        //      location.pathname==="/"? "border-white":""
                        //     }
                        // }
                        // className={({ isActive }) =>isActive ? "border-none border-b-2 border-red-500 text-green-400 text-3xl" : ""}
                        className={`${(location.pathname === "/" || location.pathname === "/categories/Laptops" || location.pathname === "/categories/Phones" || location.pathname === "/categories/Smart%20Watches" || location.pathname === "/categories/Accessories") ? " text-white" : ""}`}
                    >Statistics</NavLink></li>
                    <li><NavLink to="/dashboard"
                        // className={({ isActive }) =>{
                        //      isActive ? "border-b-2" : "";
                        //      location.pathname==="/"? "border-white":""
                        //     }
                        // }
                        // className={({ isActive }) =>isActive ? "border-none border-b-2 text-green-400 text-3xl" : ""}
                        className={`${(location.pathname === "/" || location.pathname === "/categories/Laptops" || location.pathname === "/categories/Phones" || location.pathname === "/categories/Smart%20Watches" || location.pathname === "/categories/Accessories") ? " text-white" : ""}`}
                    >Dashboard</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <button className="btn">
                    Cart
                    <div className="badge badge-secondary">+99</div>
                </button>
                <button className="btn">
                    WishList
                    <div className="badge badge-secondary">+99</div>
                </button>
            </div>
        </div>
    );
};

export default Navbar;