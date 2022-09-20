import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { BooksProvider } from "./contexts/books.context";
import { UserProvider } from "./contexts/user.context";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <BooksProvider>
        <App />
      </BooksProvider>
    </UserProvider>
  </React.StrictMode>
);
