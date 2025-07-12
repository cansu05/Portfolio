import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="flex lg:flex-row flex-col min-h-screen">
      <div className="lg:w-96 w-full">
        <Navbar />
      </div>
      <div className="w-full bg-stone-100 px-20">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
