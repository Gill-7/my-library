import React from "react";
import Book from "../Book/Book";

export default function ShowSearchBooks({ data }) {
  return (
    <div className="max-w-2xl w-full mx-auto my-8">
      {data.map((book, id) => (
        <Book book={book} key={id} id={id} />
      ))}
    </div>
  );
}
