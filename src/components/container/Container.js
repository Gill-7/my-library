import { Outlet } from "react-router";
import { useState } from "react";
import { FcReading } from "react-icons/fc";

import { RxHamburgerMenu } from "react-icons/rx";

import Sidebar from "../sidebar/Sidebar";

const Container = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  // const sidebarHandler = () => {
  //   setShowSidebar(!showSidebar);
  // };

  /* <div className="w-full mx-auto my-0 grid grid-cols-4 h-screen font-sans">
    <div className="col-start-1 col-end-2 bg-sidebar-bg text-sidebar-link">
      <Sidebar />
    </div>
    <div className="col-start-2 col-end-5 lg:col-start-2 lg:col-end-5 bg-background">
      <Outlet />
    </div>
  </div>; */

  return (
    <div className="w-full h-screen font-sans border-testing border">
      <div
        className={`bg-sidebar-bg text-sidebar-link fixed top-0 left-[-270px] w-[270px] h-full z-40 ease-in-out duration-300 lg:left-0 lg:w-1/4 overflow-y-auto ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Sidebar />
      </div>

      {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed left-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <div className="absolute lg:hidden border">
          <button
            className="top-0 border inline-flex items-center p-2 mt-2  text-sm rounded-lg"
            onClick={() => showSidebar}
          >
            <RxHamburgerMenu />
          </button>
          {/* <div>
            <FcReading />
          </div> */}
        </div>
      )}
      {/* <div className="absolute lg:hidden border">
        <button
          className="top-0 border inline-flex items-center p-2 mt-2  text-sm rounded-lg"
          onClick={() => showSidebar}
        >
          <RxHamburgerMenu />
        </button>
         <div>
          <FcReading />
        </div>
      </div> */}

      <div className="bg-background flex-auto lg:w-3/4">
        {/* <Outlet /> */}
        sonthing
      </div>
      {/* <div className="sm:col-start-1 sm:col-end-2 sm:inline lg:hidden">
        <button className="top-0 border inline-flex items-center p-2 mt-2 ms-3 text-sm rounded-lg">
          <RxHamburgerMenu />
        </button>
        <div>
          <FcReading />
        </div>
      </div>

      <div className="sm:hidden lg:inline lg:col-start-1 lg:col-end-2 bg-sidebar-bg text-sidebar-link border border-testing ">
        <Sidebar />
      </div>

      <div className="col-start-2 col-end-5 lg:col-start-2 lg:col-end-5 bg-background">
        <Outlet />
      </div> */}
    </div>
  );
};

export default Container;
