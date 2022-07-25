import React from "react";
import classes from "./SearchBook.module.css";
import ShowSearchBooks from "../../components/showSearchBooks/ShowSearchBooks";
import ReactPaginate from "react-paginate";

function SearchBook(props) {
  const {
    data,
    handleData,
    searchTerm,
    setSearchTerm,
    total,
    setTotal,
    currentPage,
    setCurrentPage,
  } = props;

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
