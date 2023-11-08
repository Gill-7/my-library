import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import ReadingNowPage from "./pages/readingNow/ReadingNow";
import FutureReadingPage from "./pages/futureReading/FutureReading";
import PastReadingPage from "./pages/pastReading/PastReading";
import CollectionPage from "./pages/collection/Collection";
import SearchBook from "./pages/SearchBook/SearchBook";
import Authentication from "./pages/authentication/Authentication";

function App() {
  const [data, setData] = useState([]);

  const handleData = (arr) => {
    setData(arr);
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [data]);

  return (
    <BrowserRouter>
      <div className="w-full mx-auto my-0 grid grid-cols-4 col-start-1 col-end-2 h-screen font-san">
        <div className="col-start-1 col-end-2 bg-sidebar-bg text-sidebar-link">
          <Sidebar />
        </div>
        <div className="col-start-2 col-end-5 bg-background">
          <Routes>
            <Route path="/reading" element={<ReadingNowPage />} />
            <Route path="/future-reading" element={<FutureReadingPage />} />
            <Route path="/past-reading" element={<PastReadingPage />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route
              path="/search"
              element={<SearchBook data={data} handleData={handleData} />}
            />
            <Route path="/auth" element={<Authentication />} />
            <Route path="*" element={<Navigate to="/reading" replace />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
