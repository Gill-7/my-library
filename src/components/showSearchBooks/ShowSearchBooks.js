import React from "react";
import classes from "./ShowSearchBooks.module.css";
import Book from "../Book/Book";

export default function ShowSearchBooks(props) {
  const { data, addToReadingNow, addToFutureRead, addToPastRead } = props;

  return (
    <div className={classes.container}>
      {data.map((book, id) => (
        <Book
          book={book}
          key={id}
          id={id}
          addToReadingNow={addToReadingNow}
          addToFutureRead={addToFutureRead}
          addToPastRead={addToPastRead}
        />
      ))}
    </div>
  );
}
