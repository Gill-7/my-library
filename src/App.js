import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import ReadingNowPage from "./pages/readingNow/ReadingNow";
import FutureReadingPage from "./pages/futureReading/FutureReading";
import PageReadingPage from "./pages/pastReading/PastReading";
import CollectionPage from "./pages/collection/Collection";
import SearchBook from "./pages/SearchBook/SearchBook";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="container">
          <Routes>
            <Route path="/reading" element={<ReadingNowPage />} />
            <Route path="/future-reading" element={<FutureReadingPage />} />
            <Route path="/past-reading" element={<PageReadingPage />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/search" element={<SearchBook />} />
            <Route path="*" element={<Navigate to="/reading" replace />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
