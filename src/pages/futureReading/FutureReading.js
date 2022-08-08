import React from "react";
import BookList from "../../components/bookList/BookList";

function FutureReadingPage({ futureRead }) {
  console.log(futureRead);
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
