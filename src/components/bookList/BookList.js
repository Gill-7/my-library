import React from "react";
import classes from "./BookList.module.css";

function BookList({ booksData }) {
  console.log(booksData);
  return (
    <div className={classes.container}>
      {booksData.map((book) => (
        <div key={book.id} className={classes.book}>
          <img
            src={book.volumeInfo.imageLinks.thumbnail.replace(
              "zoom-1",
              "zoom-0"
            )}
            alt="book-cover"
            className={`${classes.book_img}`}
          />
        </div>
      ))}
    </div>
  );
}

export default BookList;
