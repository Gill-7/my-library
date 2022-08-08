import React from "react";
import classes from "./Book.module.css";

export default function Book({
  book,
  id,
  addToReadingNow,
  addToFutureRead,
  addToPastRead,
}) {
  const addToReading = () => {
    addToReadingNow(book);
  };

  const addToFutureReading = () => {
    addToFutureRead(book);
  };

  const addToPastReading = () => {
    addToPastRead(book);
  };

  return (
    <div className={classes.single_container} key={id}>
      <div className={classes.left}>
        <img
          src={
            book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.thumbnail
              : "Image Not Available"
          }
          alt="Img Not Available"
          className={book.volumeInfo.imageLinks ? "" : classes.notAvailable}
        />
      </div>
      <div className={classes.right}>
        <h2>
          {book.volumeInfo.title}
          {book.volumeInfo.subtitle && `: ${book.volumeInfo.subtitle}`}
        </h2>
        <h5>
          by <span>{book.volumeInfo.authors}</span>
        </h5>
        <p>Published on {book.volumeInfo.publishedDate}</p>
        <p className={classes.description}>
          {book.volumeInfo.description
            ? `${book.volumeInfo.description.substring(0, 200)}...`
            : "No description provided for this book!"}
        </p>
        <div className={classes.button_container}>
          <button className={classes.specialBtn} onClick={addToFutureReading}>
            Want to Read
          </button>
          <button className={classes.readingBtn1} onClick={addToPastReading}>
            Read
          </button>
          <button className={classes.readingBtn2} onClick={addToReading}>
            Currently Reading
          </button>
        </div>
      </div>
    </div>
  );
}
