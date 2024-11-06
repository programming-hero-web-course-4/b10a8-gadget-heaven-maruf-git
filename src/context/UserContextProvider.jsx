import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";
import { getStoredCartList, getStoredWishList } from "../utils/addToDb";

const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(30);
    const [cartCount, setCartCount] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0);
    const [isInCart, setIsInCart] = useState(false);
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [purchaseBtn, setPurchaseBtn] = useState(true);
    
    // for purchase history page
    const [purchaseHistories, setPurchaseHistories] = useState([]);

    useEffect(() => {
        const cartItems = getStoredCartList();
        setCartCount(cartItems.length);
        const price = cartItems.reduce((sum,product)=>{sum+product.price},0)
        if (cartItems.length === 0 || price === 0)
            setPurchaseBtn(true);
        else setPurchaseBtn(false);
        const wishlistItems = getStoredWishList();
        setWishlistCount(wishlistItems.length);
    }, [])
    // handle cart count
    const handleCart = () => {
        const cartItems = getStoredCartList();
        setCartCount(cartItems.length);
    }
    // handle wishlist count
    const handleWishlist = () => {
        const wishlistItems = getStoredWishList();
        setWishlistCount(wishlistItems.length);
    }
    // handle product already in cart
    const handleInCart = (productId) => {
        console.log("result of id in context: ", productId);
        const cartItems = getStoredCartList();
        console.log("items:", cartItems);
        const findResult = cartItems.find(itemId => itemId === productId);
        if (findResult) {
            setIsInCart(true);
        } else {
            setIsInCart(false);
        }
    }
    // handle already in wishlist
    const handleInWishlist =(productId)=>{
        const wishlistItems = getStoredWishList();
        const findResult = wishlistItems.find(itemId => itemId === productId);
        console.log("btn wishlist:",wishlistItems);
        console.log("add to wishlist:",productId);
        if(findResult){
            setIsInWishlist(true);
            console.log("btn disabled");
        }
        else{
            setIsInWishlist(false);
            console.log("btn enabled");
        }
    }
    // handle purchase button status
    const handlePurchaseBtnStatus = (price) => {
        const cartItems = getStoredCartList();
        if (cartItems.length === 0 || price === 0)
            setPurchaseBtn(true);
        else setPurchaseBtn(false);
    }

    // for purchase history page

    const handlePurchaseHistory = (purchasedItems, cost, date, time) => {
        // setPurchaseHistories(purchasedItems);
        // console.log("bought products:",purchasedItems,cost,date,time);
        const eachPurchase = {
            "date": date,
            "time": time,
            "cost": cost,
            "purchasedItemsId": purchasedItems
        }
        const newPurchaseHistories = [...purchaseHistories];
        newPurchaseHistories.push(eachPurchase);
        setPurchaseHistories(newPurchaseHistories);
    }
    console.log('real history:',purchaseHistories);

    return (
        <UserContext.Provider value={{ user, setUser, cartCount, setCartCount, handleCart, wishlistCount, setWishlistCount, handleWishlist, isInCart, handleInCart, setIsInCart, purchaseBtn, setPurchaseBtn, handlePurchaseBtnStatus, handlePurchaseHistory, purchaseHistories, setPurchaseHistories,handleInWishlist,isInWishlist }} >
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;