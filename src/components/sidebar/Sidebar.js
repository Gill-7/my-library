import { useState } from "react";
import Header from "../header/Header";
import Link from "../Link/Link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

function Sidebar() {
  const links = [
    { url: "/user/reading", title: "Reading Now", id: 0 },
    { url: "/user/future-reading", title: "Wants to Read", id: 1 },
    { url: "/user/past-reading", title: "Read", id: 2 },
    { url: "/user/collection", title: "Collection", id: 3 },
    { url: "/user/search", title: "Search", type: "search", id: 4 },
    { url: "/auth/sign-in", title: "Sign in", type: "auth", id: 5 },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen ? (
        <button
          className="top-0 left-0 fixed border p-2 m-4 text-sm rounded-lg lg:hidden"
          onClick={() => setIsOpen(true)}
        >
          <RxHamburgerMenu />
        </button>
      ) : (
        <button
          className="text-background fixed left-[260px] mt-4 -ml-2 p-2 border rounded-full lg:hidden z-20"
          onClick={() => setIsOpen(false)}
        >
          <IoMdClose />
        </button>
      )}
      <nav
        className={`fixed top-0 left-0 w-[300px] h-full bg-sidebar-bg text-sidebar-link ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ease-in-out duration-300 lg:translate-x-0 z-10`}
      >
        <Header align="left" />
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <Link url={link.url} title={link.title} type={link.type} />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
