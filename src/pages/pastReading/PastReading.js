import React from "react";
import BookList from "../../components/bookList/BookList";

function PastReadingPage({ pastReading }) {
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
