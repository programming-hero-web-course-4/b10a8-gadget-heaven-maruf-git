/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const History = ({ purchaseHistory }) => {
    const { date, time, cost, purchasedItemsId } = purchaseHistory;
    const allProduct = useLoaderData();
    console.log("bd all products", allProduct);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const newProducts = allProduct.filter((product) => purchasedItemsId.includes(product.product_id));
        setProducts(newProducts);
    }, [allProduct, purchasedItemsId])
    // console.log("ara kara", date, time, cost, purchasedItemsId);
    console.log("original products to display:", products);
    return (
        <div className=" rounded-xl   bg-white py-10 px-5  my-10 flex gap-5">
            {/* history title */}
            <div className="flex flex-col border border-[rgb(149,56,226)]  py-10 rounded-xl  max-h-[460px]  px-5 lg:w-[25%] gap-3 ]">
                <h1 className="font-semibold btn rounded-full bg-[rgb(149,56,226)] text-white" >Total Cost: {cost}$</h1>
                <h1 className="font-semibold btn rounded-full bg-[rgb(149,56,226)] text-white" >Product Count: {purchasedItemsId.length}</h1>
                <h1 className="font-semibold btn rounded-full bg-[rgb(149,56,226)] text-white">Date: {date}, {time}</h1>
            </div>
            {/* product cards */}
            <div className="grid  grid-cols-3 gap-5 w-full ">
                {
                    products.map((product) => <Product key={product.product_id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default History;