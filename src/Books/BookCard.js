import React from 'react';

const BookCard = (props) => {
  return (
    <div className="book-item">
      <div className="book-image">
        {
          props.image ? <img src={props.image} alt=""/> : <img alt=""/>
        }
      </div>

        <div className="book-info">
          <p className="book-title">{props.title}</p>
          <p className="book-author">{props.author}</p>
          <p className="book-publisher">{props.published}</p>
          <a href={props.link} className="more-info-button" target="_blank" type="submit">More Info</a>
        </div>

    </div>
  )
}


export default BookCard;
