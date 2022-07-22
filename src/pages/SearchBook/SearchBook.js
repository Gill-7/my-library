import React, { useState } from "react";
import classes from "./SearchBook.module.css";
import ShowSearchBooks from "../../components/showSearchBooks/ShowSearchBooks";

function SearchBook(props) {
  const { data, handleData } = props;
  const [searchTerm, setSearchTerm] = useState("");

  const changeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const getData = async (search) => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDhGDUQkzc9AclCA-AI1nfPdEafgjlplJ4`
      );
      const data = await res.json();
      const dataArr = data.items;
      handleData(dataArr);
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = (e) => {
    if (searchTerm === "") {
    }
    e.preventDefault();
    getData(searchTerm);
  };

  return (
    <div className={classes.search_page}>
      <form className={classes.search_container} onSubmit={submitHandler}>
        <input
          type="text"
          className={classes.input}
          placeholder="Search books"
          value={searchTerm}
          onChange={changeHandler}
        />
        <button className={classes.input_btn}>
          <ion-icon name="search-outline"></ion-icon>
        </button>
      </form>
      {data.length === 0 && <p>Find books </p>}
      {data.length > 0 && <ShowSearchBooks data={data} />}
    </div>
  );
}
export default SearchBook;
