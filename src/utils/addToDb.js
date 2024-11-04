const getStoredCartList = () => {
    const storedCartListStr = localStorage.getItem('cart-list');
    if (storedCartListStr) {
        // string to js array
        const storedCartList = JSON.parse(storedCartListStr);
        return storedCartList;
    }
    else {
        return [];
    }
}

const setStoredCartList = (productId) => {
    const storedCartList = getStoredCartList();
    if (storedCartList.includes(productId)) {
        console.log("Product already exists");
    } else {
        storedCartList.push(productId)
        // js array to string
        const storedCartListStr = JSON.stringify(storedCartList);
        localStorage.setItem('cart-list', storedCartListStr)
    }
}

const removeFromStoredCartList = (productId) => {
    const storedCartList = getStoredCartList();
    const newStoredCartList = storedCartList.filter(item => item !== productId);
    localStorage.removeItem("cart-list");
    newStoredCartList.forEach((item) => setStoredCartList(item));
    // localStorage.removeItem("cart-list", productId);
}

const getStoredWishList = () => {
    const storedWishlistStr = localStorage.getItem('wishlist');
    if (storedWishlistStr) {
        const storedWishlist = JSON.parse(storedWishlistStr);
        return storedWishlist;
    } else {
        return [];
    }
}

const setStoredWishList = (productId) => {
    const storedWishlist = getStoredWishList();
    if (storedWishlist.includes(productId)) {
        console.log("Product already in wishlist");
    }
    else {
        storedWishlist.push(productId);
        const storedWishlistStr = JSON.stringify(storedWishlist);
        localStorage.setItem('wishlist', storedWishlistStr);
    }


}

const removeFromStoredWishList = (productId) => {
    const storedWishList = getStoredWishList();
    const newStoredWishList = storedWishList.filter(item => item !== productId);
    localStorage.removeItem("wishlist");
    newStoredWishList.forEach((item) => setStoredWishList(item));
    // localStorage.removeItem("cart-list", productId);
}

export { setStoredCartList, setStoredWishList, getStoredWishList, getStoredCartList,removeFromStoredCartList,removeFromStoredWishList };