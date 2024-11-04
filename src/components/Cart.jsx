// import React from 'react';
import { GiSettingsKnobs } from "react-icons/gi";


const Cart = () => {
    return (
        <div className="my-5">
            <div className="flex justify-between items-center py-5">
                <h1 className="font-bold text-2xl">Cart</h1>
                <div className="flex gap-5 items-center">
                    <h1 className="font-bold text-2xl" >Total Cost: {0} $</h1>
                    <button className="btn w-[150px] rounded-full bg-white border-[rgb(149,56,226)] text-[rgb(149,56,226)]">Sort by Price <GiSettingsKnobs className="font-bold text-xl" /></button>
                    <button className="btn rounded-full w-[150px] bg-[rgb(149,56,226)] text-white">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;