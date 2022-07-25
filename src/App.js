import React, { useState, useEffect } from "react";
import classes from "./App.module.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import ReadingNowPage from "./pages/readingNow/ReadingNow";
import FutureReadingPage from "./pages/futureReading/FutureReading";
import PageReadingPage from "./pages/pastReading/PastReading";
import CollectionPage from "./pages/collection/Collection";
import SearchBook from "./pages/SearchBook/SearchBook";

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const handleData = (arr) => {
    setData(arr);
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [data]);

  return (
    <BrowserRouter>
      <div className={classes.main}>
        <div className={classes.sidebar}>
          <Sidebar />
        </div>
        <div className={classes.container}>
          <Routes>
            <Route path="/reading" element={<ReadingNowPage />} />
            <Route path="/future-reading" element={<FutureReadingPage />} />
            <Route path="/past-reading" element={<PageReadingPage />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route
              path="/search"
              element={
                <SearchBook
                  handleData={handleData}
                  data={data}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  total={total}
                  setTotal={setTotal}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
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
