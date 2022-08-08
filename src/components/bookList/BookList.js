import React from "react";
import classes from "./BookList.module.css";

function BookList({ booksData }) {
  return (
    <div className={classes.container}>
      {booksData.map((book) => (
        <div key={book.id} className={classes.book}>
          <img
            src={
              book.volumeInfo.imageLinks
                ? book.volumeInfo.imageLinks.thumbnail.replace(
                    "zoom-1",
                    "zoom-0"
                  )
                : "Image Not Available"
            }
            alt="book-cover"
            className={
              book.volumeInfo.imageLinks
                ? classes.bookImg
                : classes.notAvailable
            }
          />
        </div>
      ))}
    </div>
  );
}

export default BookList;
