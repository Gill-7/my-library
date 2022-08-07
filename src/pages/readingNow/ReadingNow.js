import React from "react";
import BookList from "../../components/bookList/BookList";

function ReadingNowPage({ readingNow }) {
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
