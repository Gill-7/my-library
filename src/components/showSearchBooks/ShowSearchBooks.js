import React from "react";
import classes from "./ShowSearchBooks.module.css";

export default function ShowSearchBooks(props) {
  const { data } = props;
  console.log(data);
  return (
    <div className={classes.container}>
      {data.map((book, id) => (
        <div className={classes.single_container} key={id}>
          <div className={classes.left}>
            <img
              src={
                book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.thumbnail
                  : "No Image Available"
              }
              alt="Not Available"
            />
          </div>
          <div className={classes.right}>
            <h2>
              {book.volumeInfo.title}
              {book.volumeInfo.subtitle && `: ${book.volumeInfo.subtitle}`}
            </h2>
            <h5>by {book.volumeInfo.authors} </h5>
            <p>{book.volumeInfo.publishedDate}</p>
            <p>
              {book.volumeInfo.description
                ? `${book.volumeInfo.description.substring(0, 300)}...`
                : "No description provided for this book!"}
            </p>
            <button>Want to Read</button>
          </div>
        </div>
      ))}
    </div>
  );
}
