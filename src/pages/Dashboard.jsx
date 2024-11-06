import { Helmet } from "react-helmet-async";
import { NavLink, Outlet, useLocation } from "react-router-dom";


const Dashboard = () => {
    const location = useLocation();
    const { pathname } = location;
    return (
        <div className=" bg-[rgb(246,246,246)] pb-10">
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <div className="bg-[rgb(149,56,226)] py-10 ">
                <div className="text-center text-white">
                    <h1 className="text-3xl font-bold mb-3">Dashboard</h1>
                    <p>Explore the latest gadgets that will take your experience to the next level. From smart devices<br />to the coolest accessories, we have it all!</p>
                </div>
                <div className="flex justify-center items-center gap-3 text-center mt-8">
                    <NavLink to="/dashboard"
                        className={` text-white btn bg-[rgb(149,56,226)] border-2 border-white rounded-full w-[150px] text-lg ${pathname === "/dashboard" && "!text-[rgb(149,56,226)] bg-white font-bold "}  `}
                    >Cart</NavLink>
                    <NavLink to="/dashboard/wishlist"
                        className={` text-white btn bg-[rgb(149,56,226)] border-2 border-white rounded-full w-[150px] text-lg ${pathname === "/dashboard/wishlist" && "!text-[rgb(149,56,226)] bg-white font-bold "}  `}
                    >Wishlist</NavLink>
                </div>
            </div>
       
                <div className=" mb-28">
                    <div className="max-w-screen-xl mx-auto">
                        <Outlet></Outlet>
                    </div>
                </div>
          


        </div>

    );
};

export default Dashboard;