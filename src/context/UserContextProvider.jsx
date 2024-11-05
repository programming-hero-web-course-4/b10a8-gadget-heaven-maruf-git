import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";
import { getStoredCartList, getStoredWishList } from "../utils/addToDb";

const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(30);
    const [cartCount, setCartCount] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0);
    const [isInCart, setIsInCart] = useState(false);
    useEffect(() => {
        const cartItems = getStoredCartList();
        setCartCount(cartItems.length);

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
    
    const handleInCart = (productId) => {
        console.log("result of id in context: ", productId);
        const cartItems = getStoredCartList();
        console.log("items:", cartItems);
        const findResult = cartItems.find(itemId => itemId === productId);
        if (findResult) {
            setIsInCart(true);
        }else{
            setIsInCart(false);
        }
    }

    return (
        <UserContext.Provider value={{ user, setUser, cartCount, setCartCount, handleCart, wishlistCount, setWishlistCount, handleWishlist, isInCart, handleInCart, setIsInCart }} >
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;