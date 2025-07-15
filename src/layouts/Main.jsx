import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="flex lg:flex-row flex-col min-h-screen">
      <div className="lg:w-72 w-full fixed z-50">
        <Navbar />
      </div>
      <div className="w-full bg-stone-100 lg:pl-80 lg:px-20 px-5">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
