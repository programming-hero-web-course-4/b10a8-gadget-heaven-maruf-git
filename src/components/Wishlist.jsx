
import { getStoredWishList, removeFromStoredWishList } from "../utils/addToDb";
import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";
import UserContext from "../context/UserContext";

const Wishlist = () => {
    const products = useLoaderData();
    const [wishList, setWishList] = useState([]);
    // wishlist count functionality
    const { handleWishlist} = useContext(UserContext);
    useEffect(() => {
        const storedWishList = getStoredWishList();
        const newWishList = products.filter(product => storedWishList.includes(product.product_id))
        setWishList(newWishList);
    }, [products])

    // handle wish list item remove
    const handleWishListRemove = (id) => {
        removeFromStoredWishList(id);
        const storedWishList = getStoredWishList();
        const newWishList = products.filter(product => storedWishList.includes(product.product_id))
        setWishList(newWishList);
        handleWishlist();
    }

    return (
        <div>
            <div className="my-5">
                <div className="py-5">
                    <h1 className="font-bold text-2xl">Wishlist</h1>
                </div>
                <div className="min-h-[50px] border border-red-600 space-y-5">
                    {
                        wishList.map(item => <div
                            key={item.product_id}
                            className="p-5 bg-white border rounded-xl shadow-md"
                        >
                            <div className="flex gap-5 items-center">
                                <img className="h-[120px]" src={item.product_image} alt="" />
                                <div className="space-y-2 w-full">
                                    <div className="flex items-center justify-between">
                                        <h1 className="font-semibold text-2xl">{item.product_title}</h1>
                                        <button onClick={() => handleWishListRemove(item.product_id)} className="mr-28"><RxCrossCircled className="text-3xl text-red-600" /></button>
                                    </div>

                                    <p className="text-[rgba(9,8,15,0.6)] text-lg">{item.description}</p>
                                    <p className="font-semibold text-xl text-[rgba(9,8,15,0.8)]">Price: ${item.price}</p>
                                </div>
                            </div>

                        </div>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Wishlist;