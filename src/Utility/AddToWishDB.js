const getWishListBook = () => {
    const wishBookSTR = localStorage.getItem("wishList");
    if (wishBookSTR) {
        const storedBookData = JSON.parse(wishBookSTR);
        return storedBookData;
    }
    else {
        return [];
    }

}           

const WishAddToStoredDB = (Id) => {
    
    const storedBookData = getWishListBook();

    if (storedBookData.includes(Id)) {
        // console.log("hello")
        alert("bhai ei Id already exist ")
    }
    else {
    storedBookData.push(Id);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("wishList",data)

    }

}

export { WishAddToStoredDB,getWishListBook };