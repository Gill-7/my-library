import { RxCross2 } from "react-icons/rx";
import classes from "../Book/Book.module.css";

const BookInfo = ({ setShow, book }) => {
  console.log(book);
  const {
    title,
    authors,
    categories,
    description,
    imageLinks,
    pageCount,
    publishedDate,
    publisher,
    subtitle,
    language,
  } = book.volumeInfo;
  return (
    <div className="px-6 max-w-4xl sm:mt-16 md:mt-20  overflow-y-scroll no-scrollbar">
      <button
        className="absolute top-0 left-1 sm:mt-4 md:mt-5 sm:ml-3 md:ml-5 sm:p-2 md:p-2 border rounded-full cursor-pointer sm:text-xl md:text-2xl"
        onClick={() => setShow(false)}
      >
        <RxCross2 />
      </button>
      <div className="grid sm:grid-cols-1 sm:grid-rows-1 md:grid-cols-4 md:grid-rows-4 md:gap-4">
        <div className="col-span-1 row-span-1 relative flex sm:justify-center md:justify-start">
          <img
            src={imageLinks ? imageLinks.thumbnail : "Not Available"}
            alt="Not Available"
            className={
              imageLinks
                ? "sm:h-64 sm:mb-4 md:h-full md:absolute w-8/9"
                : classes.notAvailable
            }
          />
        </div>
        <div className="md:col-span-3 md:row-span-1">
          <div className="sm:text-xl md:text-3xl font-medium leading-8 truncate sm:mb-0 sm:mt-2 md:mt-0 md:mb-2">
            {title}
            {subtitle && `: ${subtitle}`}
          </div>
          <div className="sm:text-md md:text-lg sm:mb-2 md:mb-3 italic">
            {authors.join(", ")}
          </div>
          <div className="sm:pt-2 md:py-2">
            <div
              className="sm:text-md md:text-xl font-medium leading-6
            sm:mb-0 md:mb-4 col-span-4"
            >
              About the work
            </div>
            <div className="sm:text-sm md:text-md col-span-4 grid sm:grid-cols-2 md:grid-cols-5 sm:gap-y-2 md:gap-y-3">
              <span className="sm:col-start-1 sm:col-end-2 md:col-span-1">
                Page Count:{" "}
              </span>
              <span className="font-medium sm:col-start-2 sm:col-end-3 md:col-span-1">
                {pageCount === 0 ? "Not available" : pageCount}
              </span>

              <span className="sm:col-start-1 sm:col-end-2 md:col-start-4 md:col-end-5">
                Published:
              </span>
              <span className="font-medium sm:col-start-2 sm:col-end-3 md:col-start-5 md:col-end-6">
                {publishedDate}
              </span>

              <span className="sm:col-start-1 sm:col-end-2">Publisher:</span>
              <span className="font-medium sm:col-start-2 sm:col-end-3 md:col-span-2">
                {!publisher ? "not available" : publisher}
              </span>

              <span className="sm:col-start-1 sm:col-end-2 md:col-start-4 md:col-end-5">
                Language:
              </span>
              <span className="font-medium sm:col-start-2 sm:col-end-3 md:col-start-5 md:col-end-6">
                {language === "en" && "English"}
                {language !== "en" && language}
              </span>

              <span className="sm:col-start-1 sm:col-end-2">Genre:</span>
              <span className="font-medium col-2">{categories}</span>
            </div>
          </div>
        </div>
        <div className="text-md leading-snug mb-12 md:row-span-3 md:col-span-4 sm:mt-6 md:mt-0">
          {!description ? "No description provided for this book" : description}
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
