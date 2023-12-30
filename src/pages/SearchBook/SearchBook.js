import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { TfiBook } from "react-icons/tfi";
import { IconContext } from "react-icons";

import classes from "./SearchBook.module.css";
import ShowSearchBooks from "../../components/showSearchBooks/ShowSearchBooks";
import ReactPaginate from "react-paginate";

function SearchBook({ data, handleData }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const startIdx = 1;
  let booksPerPage = 10;

  const changeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const getData = async (search, startIdx) => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&startIndex=${parseInt(
          startIdx
        )}&maxResults=${parseInt(
          booksPerPage
        )}&key=AIzaSyDhGDUQkzc9AclCA-AI1nfPdEafgjlplJ4`
      );
      const data = await res.json();
      const dataArr = data.items;
      if (data.totalItems < 300) {
        setTotal(Math.ceil(data.totalItems / booksPerPage));
      } else {
        setTotal(Math.ceil(480 / booksPerPage));
      }
      handleData(dataArr);
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = (e) => {
    if (searchTerm === "") {
      return;
    }
    e.preventDefault();
    getData(searchTerm, startIdx);
  };

  const handlePageClick = (e) => {
    const startingIdx = e.selected * 10 + 1;
    setCurrentPage(e.selected);
    getData(searchTerm, startingIdx);
  };

  return (
    <div className={classes.search_page}>
      <form
        className="h-[60px] sticky bg-background top-0 z-10 flex items-center border-b border-border-bottom shadow pl-8 w-full"
        onSubmit={submitHandler}
      >
        <IconContext.Provider
          value={{
            size: "1.2rem",
            className: "text-input-main-color",
          }}
        >
          <button className="mr-3 pt-[2px]">
            <IoSearchOutline />
          </button>
        </IconContext.Provider>

        <input
          type="search"
          className="border-0 w-full text-base pr-4 focus:outline-0 text-input-text-color placeholder-input-main-color"
          placeholder="Search books..."
          value={searchTerm}
          onChange={changeHandler}
        />
      </form>
      {data.length === 0 && (
        <div className="flex flex-col items-center mt-10">
          <IconContext.Provider
            value={{
              size: "3rem",
              className: "text-input-text-color",
            }}
          >
            <TfiBook />
          </IconContext.Provider>
          <p className="text-base mt-2 ml-3 text-input-text-color">
            Search Books...
          </p>
        </div>
      )}
      {data.length > 0 && <ShowSearchBooks data={data} />}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={total}
        previousLabel="previous"
        renderOnZeroPageCount={null}
        marginPagesDisplayed={3}
        containerClassName={classes.pagination}
        pageClassName={classes.page_item}
        pageLinkClassName={classes.page_link}
        previousClassName={classes.page_item}
        previousLinkClassName={classes.page_link}
        nextClassName={classes.page_item}
        nextLinkClassName={classes.page_link}
        breakClassName={classes.page_item}
        breakLinkClassName={classes.page_links}
        activeClassName={classes.active}
        initalPage={0}
        forcePage={currentPage}
      />
    </div>
  );
}
export default SearchBook;
