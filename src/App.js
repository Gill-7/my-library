import React, { useState, useEffect } from "react";
import classes from "./App.module.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import ReadingNowPage from "./pages/readingNow/ReadingNow";
import FutureReadingPage from "./pages/futureReading/FutureReading";
import PastReadingPage from "./pages/pastReading/PastReading";
import CollectionPage from "./pages/collection/Collection";
import SearchBook from "./pages/SearchBook/SearchBook";

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  //pages state
  const [futureRead, setFutureRead] = useState([]);
  const [pastReading, setPastReading] = useState([]);
  const [readingNow, setReadingNow] = useState([]);

  const handleData = (arr) => {
    setData(arr);
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [data]);

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

  return (
    <BrowserRouter>
      <div className={classes.main}>
        <div className={classes.sidebar}>
          <Sidebar />
        </div>
        <div className={classes.container}>
          <Routes>
            <Route
              path="/reading"
              element={<ReadingNowPage readingNow={readingNow} />}
            />
            <Route
              path="/future-reading"
              element={<FutureReadingPage futureRead={futureRead} />}
            />
            <Route
              path="/past-reading"
              element={<PastReadingPage pastReading={pastReading} />}
            />
            <Route path="/collection" element={<CollectionPage />} />
            <Route
              path="/search"
              element={
                <SearchBook
                  data={data}
                  searchTerm={searchTerm}
                  total={total}
                  currentPage={currentPage}
                  setSearchTerm={setSearchTerm}
                  setTotal={setTotal}
                  setCurrentPage={setCurrentPage}
                  handleData={handleData}
                  addToReadingNow={addToReadingNow}
                  addToFutureRead={addToFutureRead}
                  addToPastRead={addToPastRead}
                />
              }
            />
            <Route path="*" element={<Navigate to="/reading" replace />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
