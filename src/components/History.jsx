/* eslint-disable react/prop-types */
import  { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const History = ({ purchaseHistory }) => {
    const { date, time, cost, purchasedItemsId } = purchaseHistory;
    const allProduct = useLoaderData();
    console.log("bd all products",allProduct);
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        const newProducts = allProduct.filter((product)=>purchasedItemsId.includes(product.product_id));
        setProducts(newProducts);
    },[allProduct, purchasedItemsId])
    // console.log("ara kara", date, time, cost, purchasedItemsId);
    console.log("original products to display:",products);
    return (
        <div>
            {/* history title */}
            <div className="flex justify-between items-center py-10">
                <h1 className="font-bold text-2xl">Date:{date}, {time}</h1>
                <div className="flex gap-5 items-center">
                    <h1 className="font-bold text-2xl" >Total Cost: {cost}$</h1>
                    <h1 className="font-bold text-2xl" >Product Count: {purchasedItemsId.length}</h1>
                </div>
            </div>
            {/* product cards */}
            <div className="grid  grid-cols-3 gap-5">
                {
                    products.map((product)=><Product key={product.product_id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default History;