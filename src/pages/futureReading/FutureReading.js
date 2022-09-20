import React, { useContext } from "react";
import BookList from "../../components/bookList/BookList";
import { BooksContext } from "../../contexts/books.context";

function FutureReadingPage() {
  const { futureRead } = useContext(BooksContext);
  return (
    <div>
      {futureRead.length < 1 ? (
        <p>You haven't read anything!!!</p>
      ) : (
        <BookList booksData={futureRead} />
      )}
    </div>
  );
}

export default FutureReadingPage;
