import { Outlet } from "react-router";
import Sidebar from "../sidebar/Sidebar";

const Container = () => {
  return (
    <div className="w-full h-screen font-sans">
      <div className="">
        <Sidebar />
      </div>
      <div className="lg:w-[calc(100%_-_300px)] bg-background absolute sm:top-16 sm:left-[50px] lg:top-0 lg:left-[300px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Container;
