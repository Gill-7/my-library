import React, { useContext } from "react";
import BookList from "../../components/bookList/BookList";
import { BooksContext } from "../../contexts/books.context";

function PastReadingPage() {
  const { pastReading } = useContext(BooksContext);
  return (
    <div>
      {pastReading.length < 1 ? (
        <p>You haven't read anything!!!</p>
      ) : (
        <BookList booksData={pastReading} />
      )}
    </div>
  );
}

export default PastReadingPage;
