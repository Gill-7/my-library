import React from "react";
import classes from "./ShowSearchBooks.module.css";
import Book from "../Book/Book";

export default function ShowSearchBooks({ data }) {
  return (
    <div className={classes.container}>
      {data.map((book, id) => (
        <Book book={book} key={id} id={id} />
      ))}
    </div>
  );
}
