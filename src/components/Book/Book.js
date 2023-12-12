import React, { useContext, useState } from "react";
import { BooksContext } from "../../contexts/books.context";
import classes from "./Book.module.css";
import BookInfo from "../bookInfo/BookInfo";

export default function Book({ book, id }) {
  const [show, setShow] = useState(false);

  const { imageLinks, title, subtitle, authors, publishedDate, description } =
    book.volumeInfo;

  const { addToFutureRead, addToReadingNow, addToPastRead } =
    useContext(BooksContext);

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
    <div className="">
      <div
        className="grid grid-cols-5 gap-x-2 w-full mb-8 pb-10 pt-3 border-b border-border-bottom"
        key={id}
      >
        <div className="col-span-1 h-48 w-32">
          <img
            src={imageLinks ? imageLinks.thumbnail : "Not Available"}
            alt="Not Available"
            onClick={() => setShow(true)}
            className={
              imageLinks
                ? "cursor-pointer max-h-full min-h-full max-w-full min-w-full"
                : classes.notAvailable
            }
          />
        </div>
        <div className="col-span-4 px-2 py-0">
          <h2
            className="text-xl font-serif leading-snug font-medium cursor-pointer "
            onClick={() => setShow(true)}
          >
            {title}
            {subtitle && `: ${subtitle}`}
          </h2>
          <h5 className=" text-input-label mb-2 text-base leading-tight">
            by{" "}
            <span className="italic font-serif text-input-label">
              {authors.join(", ")}
            </span>
          </h5>
          <p className="text-input-label mb-2 text-base leading-tight">
            Published on {publishedDate}
          </p>
          <p className="text-input-label mb-3 text-base leading-tight">
            {description
              ? `${description.substring(0, 200)}...`
              : "No description provided for this book!"}
          </p>
          <div className={classes.button_container}>
            <button
              className="text-base font-medium hover:underline"
              onClick={addToFutureReading}
            >
              Want to Read
            </button>
            <button
              className="text-base font-medium hover:underline ml-4"
              onClick={addToPastReading}
            >
              Read
            </button>
            <button
              className="text-base font-medium hover:underline ml-4"
              onClick={addToReading}
            >
              Currently Reading
            </button>
          </div>
        </div>
      </div>
      {show && (
        <div className="w-full h-full fixed top-0 left-0 z-40 flex justify-center bg-overlay text-overlay-text overflow-hidden">
          <BookInfo setShow={setShow} book={book} />
        </div>
      )}
    </div>
  );
}
