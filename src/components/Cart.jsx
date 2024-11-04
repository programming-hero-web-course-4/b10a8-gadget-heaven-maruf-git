// import React from 'react';
import { GiSettingsKnobs } from "react-icons/gi";
import { getStoredCartList, removeFromStoredCartList } from "../utils/addToDb";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";


const Cart = () => {
    const products = useLoaderData();
    const [cartList, setCartList] = useState([]);
    const [cost, setCost] = useState(0);
 
    useEffect(() => {
        const storedCartList = getStoredCartList();
        const newCartList = products.filter(product => storedCartList.includes(product.product_id))
        setCartList(newCartList);
        let newCost = 0;
        newCartList.forEach(cartItem => newCost += cartItem.price);
        newCost = newCost.toFixed(2);
        setCost(newCost);
    }, [products])


    // handle sort
    const handleSort = () => {
        const copyOfCartList = [...cartList];
        copyOfCartList.sort((a, b) => (b.price - a.price));
        setCartList(copyOfCartList);
        console.log("sorting");
    }

    // handle Cart Remove
    const handleCartRemove = (id) => {
        removeFromStoredCartList(id);
    }

    return (
        <div className="my-5">
            <div className="flex justify-between items-center py-5">
                <h1 className="font-bold text-2xl">Cart</h1>
                <div className="flex gap-5 items-center">
                    <h1 className="font-bold text-2xl" >Total Cost: {cost} $</h1>
                    <button onClick={handleSort} className="btn w-[150px] rounded-full bg-white border-[rgb(149,56,226)] text-[rgb(149,56,226)]">Sort by Price <GiSettingsKnobs className="font-bold text-xl" /></button>
                    <button className="btn rounded-full w-[150px] bg-[rgb(149,56,226)] text-white">Purchase</button>
                </div>
            </div>
            <div className="min-h-[50px] border border-red-600 space-y-5">
                {
                    cartList.map(item => <div
                        key={item.product_id}
                        className="p-5 bg-white border rounded-xl shadow-md"
                    >
                        <div className="flex gap-5 items-center">
                            <img className="h-[120px]" src={item.product_image} alt="" />
                            <div className="space-y-2 w-full">
                                <div className="flex items-center justify-between">
                                    <h1 className="font-semibold text-2xl">{item.product_title}</h1>
                                    <button onClick={() => handleCartRemove(item.product_id)} className="mr-28"><RxCrossCircled className="text-3xl text-red-600" /></button>
                                </div>

                                <p className="text-[rgba(9,8,15,0.6)] text-lg">{item.description}</p>
                                <p className="font-semibold text-xl text-[rgba(9,8,15,0.8)]">Price: ${item.price}</p>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Cart;