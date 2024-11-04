import { Link } from "react-router-dom";


const Heading = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-5 mt-16">
            <h1 className="text-5xl text-white text-center font-bold">Upgrade Your Tech Accessorize with<br />Gadget Heaven Accessories</h1>
            <p className="text-center text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to<br />the coolest accessories, we have it all!</p>
            <Link className="btn  rounded-full bg-white">Shop Now</Link>
        </div>
    );
};

export default Heading;