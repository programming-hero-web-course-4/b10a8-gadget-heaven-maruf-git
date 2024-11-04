
import Heading from "./Heading";
import Navbar from "./Navbar";
import bannerImg from "../assets/banner.jpg"

// import { Outlet } from "react-router-dom";
import Home from "../pages/Home";

const Root = () => {
    return (

        <div>
            <div className="relative">
                <div className="mt-5 max-w-[1480px] mx-auto px-10 rounded-xl bg-[rgb(149,56,226)] pb-44 ">
                    <div className="max-w-screen-xl mx-auto pb-10">
                        <Navbar></Navbar>
                        <Heading></Heading>
                        {/* <Footer></Footer> */}
                    </div>
                </div>
                <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center mb-[280px] mt-20 ">
                    <div className=" border border-white absolute bottom-[-220px] w-[60%] mx-auto bg-[rgba(255,255,255,0.3)] rounded-xl p-4 ">
                        <div>
                            <img className="h-[450px] w-full object-cover rounded-xl" src={bannerImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* root outlet for home */}
            <div className="max-w-screen-xl mx-auto">
                {/* <Outlet></Outlet> */}
                <Home></Home>
            </div>
        </div>
    );
};

export default Root;