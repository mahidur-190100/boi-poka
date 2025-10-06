import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../Utility/AddtoDb";
import { getWishListBook } from "../Utility/AddToWishDB";
import SingleBook from "./SingleBook";

const ReadList = () => {
  const data = useLoaderData();
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    // Read List
    const storedBookData = getStoredBook();
    const ConvertedStoredBooks = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      ConvertedStoredBooks.includes(book.bookId)
    );
    setReadList(myReadList);

    

    // Wish List
    const wishBookData = getWishListBook();
    const ConvertedWishBooks = wishBookData.map((id) => parseInt(id));
    const myWishList = data.filter((book) =>
      ConvertedWishBooks.includes(book.bookId)
    );
    setWishList(myWishList);
  }, [data]);

   const handleSort = (type) => {
        setSort(type)
    if (type === "pages") {
      const sortedByPage = [...readList].sort((a, b) =>  b.totalPages - a.totalPages );
      setReadList(sortedByPage)
      console.log(sortedByPage)
    }
    if (type === "ratings") {
      const sortedByRating = [...readList].sort((a, b) => b.rating - a.rating);
      setReadList(sortedByRating);
      console.log(sortedByRating);
    }
  };

  return (
    <div>
      <div className="dropdown ">
        <div tabIndex={0} role="button" className="btn m-1 ">
          Sort by : {sort?sort:""}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li><a onClick={()=>handleSort("pages")}>pages</a></li>
          <li><a onClick={()=>handleSort("ratings")}>Ratings</a></li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read book list</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Book I read {readList.length}</h2>
          <div className="grid grid-col-span-1s-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> 
            {readList.map((b) => (
            <SingleBook key={b.bookId} book={b} />
          ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>My wish List {wishList.length}</h2>
          <div className="grid grid-col-span-1s-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {wishList.map((b) => (
            <SingleBook key={b.bookId} book={b} />
          ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>

  );
};

export default ReadList;
