import { NavLink, Outlet, useLoaderData } from "react-router-dom";


const Home = () => {
    const categories = useLoaderData();
    // console.log("hello categories:", categories);
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold text-center mb-10">Explore Cutting-Edge Gadgets</h1>
                <div className="flex gap-10">
                    {/* role="tablist" */}
                    <div className=" mb-10 flex flex-col  w-[20%] border border-black items-center p-10 rounded-xl gap-5 ">
                        <NavLink
                            // role="tab"
                            className={({ isActive }) =>
                                isActive ? "btn bg-green-400  justify-start rounded-full w-[200px] font-semibold text-left" : " btn justify-start rounded-full  font-semibold w-[200px] text-left"
                            }
                            to="/AllProduct"
                        >All Product</NavLink>
                        {
                            categories.map((category) => <NavLink
                                key={category.category_id}
                                // role="tab"
                                className={({ isActive }) =>
                                    isActive ? "btn bg-green-400  justify-start rounded-full w-[200px]  font-semibold" : "btn  justify-start rounded-full  font-semibold w-[200px]"
                                }
                                to={`/categories/${category.category_name}`}
                            >{category.category_name}</NavLink>)
                        }
                    </div>
                    <div id="products-container" className="min-h-[150px] border border-red-400 w-full">
                        output
                    </div>
                </div>
            </div>
            {/* outlet */}
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;