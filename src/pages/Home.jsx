// import { Helmet } from "react-helmet-async";
import { NavLink, Outlet, useLoaderData, useLocation } from "react-router-dom";
// import CategoryProducts from "../components/CategoryProducts";


const Home = () => {
    const categories = useLoaderData();
    // console.log("hello categories:", categories);
    const location = useLocation();
    const { pathname } = location;

    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold text-center mb-10">Explore Cutting-Edge Gadgets</h1>
                {/* total category and products container */}
                <div className="flex flex-col lg:flex-row gap-10 mb-16">
                    {/* role="tablist" */}
                    <div className=" mb-10 flex flex-col md:w-full lg:w-[20%] border shadow-md  bg-white items-center p-10 rounded-xl gap-5 max-h-[460px]">
                        <NavLink
                            className={`${pathname === "/" && "bg-[rgb(149,56,226)] text-white"}  btn justify-start rounded-full  font-semibold w-[200px] text-left`}
                            to="/"
                        >All Product
                        </NavLink>
                        {
                            categories.map((category) => <NavLink
                                key={category.category_id}
                                // role="tab"
                                className={({ isActive }) =>
                                    isActive ? "btn bg-[rgb(149,56,226)] text-white  justify-start rounded-full w-[200px]  font-semibold" : "btn  justify-start rounded-full  font-semibold w-[200px]"
                                }
                                to={`/categories/${category.category_name}`}
                            >{category.category_name}
                            </NavLink>)
                        }
                    </div>
                    {/* for right side product display */}
                    <div id="products-container" className="w-full mb-10">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;