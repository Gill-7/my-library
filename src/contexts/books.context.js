import { createContext, useState } from "react";

export const BooksContext = createContext({
  futureRead: [],
  pastReading: [],
  readingNow: [],
});

export const BooksProvider = ({ children }) => {
  const [futureRead, setFutureRead] = useState([]);
  const [pastReading, setPastReading] = useState([]);
  const [readingNow, setReadingNow] = useState([]);

  // Implement functions to add data to their respective pages

  const addToFutureRead = (book) => {
    if (futureRead.find((existedBook) => existedBook.id === book.id)) {
      return;
    }
    setFutureRead((prevBooks) => {
      return [book, ...prevBooks];
    });
  };

  const addToPastRead = (book) => {
    if (pastReading.find((existedBook) => existedBook.id === book.id)) {
      return;
    }
    setPastReading((prevBooks) => {
      return [book, ...prevBooks];
    });
  };

  const addToReadingNow = (book) => {
    if (readingNow.find((existedBook) => existedBook.id === book.id)) {
      return;
    }
    setReadingNow((prevBooks) => {
      return [book, ...prevBooks];
    });
  };

  const value = {
    futureRead,
    pastReading,
    readingNow,
    addToFutureRead,
    addToPastRead,
    addToReadingNow,
  };
  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
};
