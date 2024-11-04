/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Product = ({product}) => {
    console.log("product is : ",product);
    const {product_title,product_image,price}=product;
 
    return (
        <div>
            <div className="p-5 border rounded-xl shadow-md space-y-3">
                <div className="">
                    <img className="h-[300px] object-cover w-full" src={product_image} alt="" />
                </div>
                <hr className="border-b-2" />
                <h1 className="text-[rgb(9,8,15)] text-2xl font-semibold">{product_title}</h1>
                <p className="text-[rgba(9,8,15,0.6)] text-xl font-medium">Price: {price}$</p>
                <div>
                    <Link to="" className="btn border-[rgb(149,56,226)] bg-white text-[rgb(149,56,226)] hover:bg-[rgb(149,56,226)] hover:text-white rounded-full font-semibold text-lg">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;