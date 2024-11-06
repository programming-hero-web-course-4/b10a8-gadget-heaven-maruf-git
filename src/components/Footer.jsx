import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className=" bg-white p-20">
            <div className="max-w-screen-xl mx-auto w-full flex flex-col items-center text-center gap-10">
                <div>
                    <h1 className="font-bold text-2xl mb-2">Gadget Heaven</h1>
                    <p className="font-semibold text-[rgba(9,8,15,0.6)]">Leading the way in cutting-edge technology and innovation.</p>
                </div>
                <hr className="w-full" />
                <div className="grid  md:grid-cols-3 gap-40">
                    <div className="text-center flex flex-col">
                        <Link to="" className="font-bold text-lg mb-1">Services</Link>
                        <Link to="" className="text-[rgba(9,8,15,0.6)]">Product Support</Link>
                        <Link to="" className="text-[rgba(9,8,15,0.6)]"> Order Tracking</Link>
                        <Link to="" className="text-[rgba(9,8,15,0.6)]">Shipping & Delivery</Link>
                        <Link to="" className="text-[rgba(9,8,15,0.6)]">Returns</Link>   
                    </div>
                    <div className="text-center flex flex-col">
                        <Link to="" className="font-bold text-lg mb-1">Company</Link>
                        <Link to="" className="text-[rgba(9,8,15,0.6)]">About Us</Link>
                        <Link to="" className="text-[rgba(9,8,15,0.6)]">Careers</Link>
                        <Link to="" className="text-[rgba(9,8,15,0.6)]">Contact</Link>   
                    </div>
                    <div className="text-center flex flex-col">
                        <Link to="" className="font-bold text-lg mb-1">Legal</Link>
                        <Link to="" className="text-[rgba(9,8,15,0.6)]">Terms of Service</Link>
                        <Link to="" className="text-[rgba(9,8,15,0.6)]"> Privacy Policy</Link>
                        <Link to="" className="text-[rgba(9,8,15,0.6)]">Cookie Policy</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;