import { Outlet } from "react-router-dom";

import Logo from "../assets/banniere.jpg";
import Navbar from "./Navbar";

const LayoutWithNavbar = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-slate-600 to-slate-900">
        <div className="">
          <img
            src={Logo}
            alt="website logo with a greek helmet"
            className="w-[450px] md:w-[770px] lg:w-[1050px] mx-auto"
          />
        </div>

        <div className="bg-secondaryBlue h-full py-8">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default LayoutWithNavbar;
