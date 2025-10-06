import React from "react";
import { Link } from "react-router";


const SingleBook = ({ book }) => {
  //   console.log(book);
  const {
    bookId,
    image,
    tags,
    bookName,
    yearOfPublishing,
    publisher,
    category,
    rating,
  
  } = book;
  // You can use book properties here, e.g. book.title
  return (
    <div>
      <Link to ={`/BookDetails/${bookId}`}>
        <div className="card bg-base-100 w-96 h-100 border p-6 shadow">
          <figure className="p-4 bg-gray-100 w-2/3 mx-auto">
            <img className="h-[166px]" src={image} alt="Shoes" />
          </figure>
          <div className="card-body ">
            <div className="flex justify-center gap-10">
              {tags.map((tag) => (
                <button className="text-green-600">{tag}</button>
              ))}
            </div>
            <h2 className="card-title">
              {bookName}
              <div className="badge badge-secondary">{yearOfPublishing}</div>
            </h2>
            <p>Book by : {publisher}</p>
            <div className="border-t-1 border-dashed"></div>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{category}</div>
              <div className="badge badge-outline">
                {rating} {/* <FaStarHalfAlt /> */}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleBook;

// // author
// :
// "J.K. Rowling"
// bookId
// :
// 7
// bookName
// :
// "Harry Potter and the Sorcerer's Stone"
// category
// :
// "Fantasy"
// image
// :
// "https://i.ibb.co.com/989qMRW/42844155.jpg"
// publisher
// :
// "Bloomsbury"
// rating
// :
// 4.8
// review
// :
// "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations."
// tags
// :
// (2) ['Magic', 'Young Adult']
// totalPages
// :
// 309
// yearOfPublishing
// :
// 1997
