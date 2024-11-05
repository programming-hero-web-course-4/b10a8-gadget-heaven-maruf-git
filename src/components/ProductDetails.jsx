import { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { FcLike } from "react-icons/fc";
import { IoCartOutline } from "react-icons/io5";
import { setStoredCartList, setStoredWishList } from '../utils/addToDb';
import UserContext from '../context/UserContext';


// eslint-disable-next-line react/prop-types
const ProductDetails = () => {
    const { handleCart,handleWishlist } = useContext(UserContext);
    const { product_id } = useParams();
    // console.log("our category:", product_category, product_id);
    const products = useLoaderData();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const newProduct = products.find((product) => product.product_id === product_id);
        setProduct(newProduct);
    }, [product_id, products])
    // console.log("details of product:",product);
    const { product_title, rating, availability, specification, description, price, product_image } = product;
    // console.log("specs: ", specification);
    console.log(rating);
    const num = 4.5;
    console.log("num is: ", num, typeof num);
    console.log("rating is: ", rating, typeof rating);

    // handle add to cart
    const handleAddToCart = () => {
        setStoredCartList(product_id);
        handleCart();
    }
    // handle add to wishlist
    const handleAddToWishList = () => {
        setStoredWishList(product_id);
        handleWishlist();
    }
    return (
        <div >
            <div className="relative">
                <div className="bg-[rgb(149,56,226)] text-center text-white py-10 pb-44">
                    <h1 className="text-3xl font-bold mb-3">Product Details</h1>
                    <p>Explore the latest gadgets that will take your experience to<br />the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
                <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center border border-green-400 mb-[280px] mt-20">
                    <div className=" border border-red-500 bottom-[-280px] w-[60%] mx-auto rounded-xl p-4 absolute bg-white">
                        <div className="border border-cyan-400 flex gap-5">
                            <div className="w-[40%]">
                                <img className="" src={product_image} alt="" />
                            </div>
                            <div className='space-y-2'>
                                <h1 className="text-[rgb(9,8,15)] text-3xl font-semibold">{product_title}</h1>
                                <p className='text-[rgba(9,8,15,0.8)] text-xl font-semibold'>Price: {price}$</p>
                                <p className="btn btn-xs  border-[rgb(48,156,8)] bg-[rgba(48,156,8,0.1)] hover:bg-[rgba(48,156,8,0.1)] hover:border-[rgb(48,156,8)] rounded-full text-[rgb(48,156,8)]">{availability ? "In Stock" : "Out of Stock"}</p>
                                <p className="text-[rgba(9,8,15,0.6)] text-lg">{description}</p>
                                <p className="text-[rgb(9,8,15)] font-bold text-lg">Specification:</p>
                                <div className="">
                                    {
                                        specification && specification.map((spec, idx) => <p key={idx}>{idx + 1}. {spec}</p>)
                                    }
                                </div>
                                <div className="flex gap-2  items-center">
                                    <p className="text-[rgb(9,8,15)] font-bold text-lg">Rating </p>
                                    <FaRegStar className="text-yellow-400" />
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div>
                                        {rating !== undefined ? <ReactStars
                                            count={5}
                                            size={24}
                                            value={rating}
                                            activeColor="#ffd700"
                                            isHalf={true}
                                            edit={false}
                                        /> : "loading"}

                                    </div>
                                    <p>{rating}</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <button onClick={handleAddToCart} className="w-[150px] btn rounded-full bg-[rgb(149,56,226)] text-white hover:text-[rgb(149,56,226)] hover:bg-white">Add to Cart <IoCartOutline className="text-xl font-bold" /></button>
                                    <Link onClick={handleAddToWishList} className=""><FcLike className="p-3 border-[3px] hover:border-red-500 rounded-full  text-5xl" /></Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default ProductDetails;