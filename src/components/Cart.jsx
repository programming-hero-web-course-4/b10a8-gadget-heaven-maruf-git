// import React from 'react';
import { GiSettingsKnobs } from "react-icons/gi";
import { getStoredCartList, removeFromStoredCartList } from "../utils/addToDb";
import { useContext, useEffect, useRef, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";
import UserContext from "../context/UserContext";
import { MdSmsFailed } from "react-icons/md";



const Cart = () => {
    const navigate = useNavigate();
    const products = useLoaderData();
    const [cartList, setCartList] = useState([]);
    const [cost, setCost] = useState(0);
    const modalRef = useRef();
    // cart count functionality
    const { handleCart, purchaseBtn, handlePurchaseBtnStatus, handlePurchaseHistory } = useContext(UserContext);
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
        const storedCartList = getStoredCartList();
        const newCartList = products.filter(product => storedCartList.includes(product.product_id))
        setCartList(newCartList);

        let newCost = 0;
        newCartList.forEach(cartItem => newCost += cartItem.price);
        newCost = newCost.toFixed(2);
        setCost(newCost);
        handleCart();
        handlePurchaseBtnStatus(cost);
        // setIsInCart(false);
    }
    // handle purchase
    const handlePurchase = () => {
        if (cartList.length) {
            // for purchase history page
            const storedCartList = getStoredCartList();
            const now = new Date();
            const date = now.toLocaleDateString();
            const time= now.toLocaleTimeString();

            handlePurchaseHistory(storedCartList, cost, date,time);
            modalRef.current.showModal();
            modalRef.current.querySelector(".price").innerText = cost;
            setCost(0);
            // for modal
        }
        localStorage.removeItem("cart-list");
        setCartList([]);
        handleCart();
        handlePurchaseBtnStatus(cost);
    }

    return (
        <div className="my-5">
            
            <div className="flex justify-between items-center py-5">
                <h1 className="font-bold text-2xl">Cart</h1>
                <div className="flex gap-5 items-center">
                    <h1 className="font-bold text-2xl" >Total Cost: {cost} $</h1>
                    <button onClick={handleSort} className="btn rounded-full bg-white border-[rgb(149,56,226)] text-[rgb(149,56,226)] ">Sort by Price <GiSettingsKnobs className="font-bold text-xl" /></button>
                    <button
                        disabled={purchaseBtn}
                        onClick={handlePurchase}
                        className="btn rounded-full w-[150px] bg-[rgb(149,56,226)] text-white">
                        Purchase</button>
                </div>
            </div>
            <div className="space-y-5">
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
            {/* modal */}
            <div>
                {/* <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button> */}
    
                <dialog ref ={modalRef} id="my_modal_1" className="modal">
                    <div className="modal-box">

                        <div className="py-3 flex flex-col justify-center items-center gap-3">
                            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M68.1715 41.9631L68.1505 41.9735C65.6826 43.8661 64.6369 47.0869 65.5154 50.0673L65.5258 50.0882C66.927 54.8253 63.4553 59.6041 58.5194 59.7296H58.4986C55.3823 59.8133 52.6425 61.8001 51.6073 64.7386V64.749C49.9549 69.4128 44.3292 71.2427 40.2614 68.4297C37.7355 66.7049 34.3963 66.6149 31.7388 68.4297H31.7284C27.6607 71.2322 22.0347 69.4127 20.3929 64.7384C19.3483 61.7926 16.6126 59.813 13.5017 59.7295H13.4807C8.54508 59.6039 5.07319 54.8252 6.47452 50.0881L6.48492 50.0671C7.36312 47.0867 6.31744 43.866 3.84975 41.9733L3.8288 41.9629C-0.0926719 38.9512 -0.0926719 33.0535 3.8288 30.0419L3.84975 30.0315C6.31744 28.1388 7.36312 24.9179 6.47452 21.9376V21.9167C5.06264 17.1797 8.54494 12.4007 13.4807 12.2753H13.5017C16.6074 12.1916 19.3576 10.2047 20.3929 7.26638V7.25598C22.0345 2.59215 27.6607 0.762194 31.7284 3.57526H31.7388C34.3007 5.34249 37.6888 5.34249 40.2614 3.57526C44.3701 0.737866 49.9646 2.62013 51.6073 7.25598V7.26638C52.6425 10.1943 55.3822 12.1918 58.4986 12.2753H58.5194C63.4552 12.4007 66.927 17.1797 65.5258 21.9167L65.5154 21.9376C64.6369 24.9179 65.6826 28.1388 68.1505 30.0315L68.1715 30.0419C72.093 33.0535 72.093 38.9513 68.1715 41.9631Z" fill="#3EB655" />
                                <path d="M36.0004 55.479C46.7584 55.479 55.4794 46.7579 55.4794 36C55.4794 25.2421 46.7584 16.5211 36.0004 16.5211C25.2425 16.5211 16.5215 25.2421 16.5215 36C16.5215 46.7579 25.2425 55.479 36.0004 55.479Z" fill="#8BD399" />
                                <path opacity="0.1" d="M50.9569 23.5312C47.5876 20.7595 43.2771 19.0935 38.5779 19.0935C27.8201 19.0935 19.0943 27.8193 19.0943 38.5771C19.0943 43.2762 20.7603 47.5868 23.5319 50.956C19.2511 47.3851 16.5244 42.0137 16.5244 35.9997C16.5244 25.2417 25.2427 16.5236 36.0006 16.5236C42.0145 16.5236 47.386 19.2503 50.9569 23.5312Z" fill="black" />
                                <path d="M31.3659 43.6256L27.0584 39.0429C25.9303 37.8425 25.9886 35.9552 27.1885 34.8271C28.3885 33.6976 30.2766 33.7582 31.4037 34.9577L33.46 37.1444L42.2002 27.1547C43.2836 25.915 45.168 25.7893 46.4087 26.8742C47.6485 27.9591 47.7736 29.8429 46.6893 31.0827L35.7831 43.547C34.6212 44.8735 32.5708 44.9082 31.3659 43.6256Z" fill="white" />
                            </svg>
                            <h3 className="font-bold text-xl mt-3">Payment Successfully</h3>
                            <p className="text-center mb-3 mt-1 text-lg">Thanks for Purchasing.<br />Total: <span className="price"></span> $</p>
                            <button className="btn w-full" onClick={() => { navigate("/") }}>Close</button>
                        </div>
                        {/* <div className="modal-action"> */}
                        {/* <form method="dialog"> */}
                        {/* if there is a button in form, it will close the modal */}
                        {/* <button className="btn" onClick={()=>{navigate("/")}}>Close</button> */}
                        {/* </form> */}
                        {/* </div> */}
                    </div>
                </dialog>
                {/* <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button> */}
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">

                        <div className="py-3 flex flex-col justify-center items-center gap-3">
                            <MdSmsFailed className="text-red-600" size={60} />
                            <h3 className="font-bold text-xl mt-3">Purchase Failed</h3>
                            <p className="text-center mb-3 mt-1 text-lg">No Products in the Cart. <br />Please Add Some Products to Purchase</p>
                            <button className="btn w-full" onClick={() => { navigate("/") }}>Close</button>
                        </div>
                        {/* <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
                        </div> */}
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default Cart;