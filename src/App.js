import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Container from "./components/container/Container";
import ReadingNowPage from "./pages/readingNow/ReadingNow";
import FutureReadingPage from "./pages/futureReading/FutureReading";
import PastReadingPage from "./pages/pastReading/PastReading";
import CollectionPage from "./pages/collection/Collection";
import SearchBook from "./pages/SearchBook/SearchBook";
import AuthContainer from "./components/authContainer/AuthContainer";
import SignInForm from "./pages/signInForm/SignInForm";
import SignUpForm from "./pages/signUpForm/SignUpForm";
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
      <Routes>
        <Route path="/">
          <Route path="auth" element={<AuthContainer />}>
            <Route path="sign-in" element={<SignInForm />} />
            <Route path="sign-up" element={<SignUpForm />} />
          </Route>

          <Route path="user" element={<Container />}>
            <Route path="reading" element={<ReadingNowPage />} />
            <Route path="future-reading" element={<FutureReadingPage />} />
            <Route path="past-reading" element={<PastReadingPage />} />
            <Route path="collection" element={<CollectionPage />} />
            <Route
              path="search"
              element={<SearchBook data={data} handleData={handleData} />}
            />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="auth/sign-in" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
