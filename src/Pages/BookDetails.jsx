import React from 'react'
import { useLoaderData, useParams } from 'react-router'
import { addToStoredDB } from '../Utility/AddtoDb';
import { WishAddToStoredDB } from '../Utility/AddToWishDB';

const BookDetails = () => {
    const {Id} = useParams();
    // console.log(Id);
    
    const data = useLoaderData();
    // console.log(data);
    const singleBook = data.find(book=> book.bookId ===  parseInt(Id));
    // console.log(singleBook);
    const { bookName, image } = singleBook;
    const handleMarkAsRead = Id => {
        //  Store with Id
        // where to store
        // array or collection
        // if book already exist  the show a  alart
        //  if book not exist then push in the collection or array
        addToStoredDB(Id);
    }
    const handleMarkAsWishList = Id => {
        WishAddToStoredDB(Id);
    }

    
    return (
    <div>
         <div className=' w-2/3 mx-auto'>
            <img className='w-48' src={image} alt="" />
            <h5>{bookName}</h5>
            
            <button onClick={()=>handleMarkAsRead(Id)} className="btn btn-accent m-2">Mar as Read</button>
            <button onClick={()=>handleMarkAsWishList(Id)} className="btn btn-info m-2">Add To WishList</button>
        </div>
    </div>
  )
}


export default BookDetails;