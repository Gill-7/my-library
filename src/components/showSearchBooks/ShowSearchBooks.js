import React from "react";
import classes from "./ShowSearchBooks.module.css";

// new Date().toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})

export default function ShowSearchBooks(props) {
  const { data } = props;

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
              <button className={classes.specialBtn}>Want to Read</button>
              <button className={classes.readingBtn1}>Read</button>
              <button className={classes.readingBtn2}>Currently Reading</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
