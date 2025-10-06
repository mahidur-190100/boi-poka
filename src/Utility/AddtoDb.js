const getStoredBook = () => {
    
    const storedBookSTR = localStorage.getItem("readList");

    if (storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    }
    else {
        return [];
    }

}

const addToStoredDB = (Id) => {
    
    const storedBookData = getStoredBook();

    if (storedBookData.includes(Id)) {
        // console.log("hello")
        alert("bhai ei Id already exist ")
    }
    else {
        storedBookData.push(Id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList",data)

    }

}

export { addToStoredDB,getStoredBook };