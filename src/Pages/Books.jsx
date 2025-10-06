import React from 'react'
import SingleBook from './SingleBook'


const Books = ({data}) => {
    
  return (
    <div>
        <div>Here is the list</div>
    <suspense fallback={<div>Loading...</div>}>
    {
      <div className='grid grid-col-span-1s-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
       { data.map((book) => <SingleBook key={book.bookId} book={book} />)}
      </div>
    }

    </suspense>

    </div>
    
  )
}

export default Books