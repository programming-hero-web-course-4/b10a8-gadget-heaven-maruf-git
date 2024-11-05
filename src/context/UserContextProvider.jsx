import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";
import { getStoredCartList, getStoredWishList } from "../utils/addToDb";

const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(30);
    const [cartCount, setCartCount] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0);

    useEffect(() => {
        const cartItems = getStoredCartList();
        setCartCount(cartItems.length);

        const wishlistItems = getStoredWishList();
        setWishlistCount(wishlistItems.length);
    }, [])
    const handleCart = () => {
        const cartItems = getStoredCartList();
        setCartCount(cartItems.length);
    }
    const handleWishlist = () => {
        const wishlistItems = getStoredWishList();
        setWishlistCount(wishlistItems.length);
    }
    console.log("count: ", cartCount);
    return (
        <UserContext.Provider value={{ user, setUser, cartCount, setCartCount, handleCart, wishlistCount, setWishlistCount, handleWishlist }} >
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;