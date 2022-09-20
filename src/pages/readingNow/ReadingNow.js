import React, { useContext } from "react";
import BookList from "../../components/bookList/BookList";
import { BooksContext } from "../../contexts/books.context";

function ReadingNowPage() {
  const { readingNow } = useContext(BooksContext);
  return (
    <div>
      {readingNow.length < 1 ? (
        <p>Add books to your reading section</p>
      ) : (
        <BookList booksData={readingNow} />
      )}
    </div>
  );
}

export default ReadingNowPage;
