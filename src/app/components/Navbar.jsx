import React, { useEffect, useState } from "react";
import { FaUser, FaBell } from "react-icons/fa";

const Navbar = () => {
  const [endpoint, setEndpoint] = useState("Dashboard");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      const lastSegment = path.split("/").pop();
      setEndpoint(lastSegment || "Dashboard");
    }
  }, []);

  return (
    <div className="w-full flex flex-row justify-between items-center h-16 p-5 border border-b-light-grey laptop:p-3">
      <span className="font-poppins text-2xl font-semibold text-main-color capitalize">
        Manage {endpoint}
      </span>

      <div className="flex flex-row gap-4 justify-center items-center w-auto h-full laptop:gap-5">
        <FaBell className="border border-main-color rounded-full cursor-pointer p-2 text-3xl text-main-color" />
        <div className="h-full w-[1px] bg-dark-grey"></div>
        <div className="flex flex-row gap-3 h-full w-auto justify-center items-center">
          <FaUser className="border border-main-color rounded-full cursor-pointer p-2 text-3xl text-main-color" />
          <div className="flex flex-col justify-center h-full w-auto">
            <span className="font-poppins text-sm text-main-color">User</span>
            <span className="font-poppins text-sm text-main-color">
              user@gmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
