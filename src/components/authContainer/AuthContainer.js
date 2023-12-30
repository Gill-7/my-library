import { Outlet } from "react-router";
import Header from "../header/Header";

const AuthContainer = () => {
  return (
    <div className="">
      <Header align="center" />
      <div className="w-full max-w-screen-lg mx-auto my-0 font-sans grid grid-cols-5 gap-x-10 ">
        <div className="col-span-3 ">
          <div className="text-lg leading-7 mb-4 text-left font-medium">
            Books have been here for centuries and contain the knowledge of our
            past, civilizations and cultures. A good book has the power to
            change the way we think, talk and analyze things.
          </div>
          <div className="text-lg font-medium mb-6 italic text-center">
            "There is no friend as loyal as a book." - Ernest Hemingway
          </div>
          <div className="text-3xl mb-2 font-extrabold tracking-normal">
            About Readers
          </div>
          <ul className="text-lg leading-7 mb-4 mx-8 text-left font-medium list-disc">
            <li className="">Easy to search and browse through books</li>
            <li>Manage your own online personal library</li>
            <li>
              Keep track books you've read, books you're reading, and books you
              want to read
            </li>
            <li>
              Record your progress by adding the start and finish data of your
              books.
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;
