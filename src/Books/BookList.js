import React from 'react';
import BookCard from './BookCard'

const BookList = (props) => {
  return (
    <div>
      {
        props.books.map((book, i) => {
          let image;
          if (book.volumeInfo.imageLinks){
            image = book.volumeInfo.imageLinks.thumbnail
          }else {
            image = ""
          }

          return <BookCard
                    key={i}
                    image={image}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    published={book.volumeInfo.publishedDate}
                    link={book.volumeInfo.infoLink}
                  />
        })
      }
    </div>
  )
}


export default BookList;
