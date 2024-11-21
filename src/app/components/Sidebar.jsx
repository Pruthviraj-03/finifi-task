import React from "react";
import { FaCompass } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { FaUserTie } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-2/12 flex items-center flex-col bg-light-grey p-8 sticky top-0 h-auto tablet:w-screen tablet:flex-row tablet:justify-between tablet:p-4">
      <span className="text-main-color font-bold text-5xl font-poppins tracking-wide laptop:text-4xl tablet:text-2xl">
        finifi
      </span>

      <div className="flex flex-col gap-5 justify-center items-center mt-16 w-full h-auto laptop:mt-10 laptop:gap-3 tablet:flex-row tablet:w-8/12 tablet:mt-0">
        <Link
          href="/"
          className="flex flex-row gap-5 w-full h-12 items-center justify-center cursor-pointer rounded-lg hover:bg-main-color group mr-1 laptop:gap-3 laptop:mr-2 tablet:hover:bg-transparent tablet:mr-0"
        >
          <FaCompass className="text-main-color font-light text-xl font-poppins group-hover:text-dark-white laptop:text-lg tablet:hidden" />
          <span className="text-main-color font-light text-xl font-poppins group-hover:text-dark-white laptop:text-lg tablet:text-md">
            Dashboard
          </span>
        </Link>

        <Link
          href="/pages/invoices"
          className="flex flex-row gap-5 w-full h-12 items-center justify-center cursor-pointer rounded-lg hover:bg-main-color group mr-7 laptop:gap-3 laptop:mr-4 tablet:hover:bg-transparent tablet:mr-0"
        >
          <HiDocumentText className="text-main-color font-light text-xl font-poppins group-hover:text-dark-white laptop:text-lg tablet:hidden" />
          <span className="text-main-color font-light text-xl font-poppins group-hover:text-dark-white laptop:text-lg tablet:text-md">
            Invoices
          </span>
        </Link>

        <Link
          href="/pages/vendors"
          className="flex flex-row gap-5 w-full h-12 items-center justify-center cursor-pointer rounded-lg hover:bg-main-color group mr-7 laptop:gap-3 laptop:mr-4 tablet:hover:bg-transparent tablet:mr-0"
        >
          <FaUserTie className="text-main-color font-light text-xl font-poppins group-hover:text-dark-white laptop:text-lg tablet:hidden" />
          <span className="text-main-color font-light text-xl font-poppins group-hover:text-dark-white laptop:text-lg tablet:text-md">
            Vendors
          </span>
        </Link>

        <Link
          href="/pages/settings"
          className="flex flex-row gap-5 w-full h-12 items-center justify-center cursor-pointer rounded-lg hover:bg-main-color group mr-7 laptop:gap-3 laptop:mr-4 tablet:hover:bg-transparent tablet:mr-0"
        >
          <FiSettings className="text-main-color font-light text-xl font-poppins group-hover:text-dark-white laptop:text-lg tablet:hidden" />
          <span className="text-main-color font-light text-xl font-poppins group-hover:text-dark-white laptop:text-lg tablet:text-md">
            Settings
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
