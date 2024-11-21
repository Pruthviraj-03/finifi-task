import React from "react";
import { FaCompass } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { FaUserTie } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-2/12 flex items-center flex-col bg-light-grey p-8">
      <span className="text-main-color font-bold text-5xl font-poppins tracking-wide">
        finifi
      </span>

      <div className="flex flex-col gap-5 justify-center items-center mt-16 w-full h-auto">
        <Link
          href="/"
          className="flex flex-row gap-5 w-full h-12 items-center justify-center cursor-pointer rounded-lg hover:bg-main-color group mr-1"
        >
          <FaCompass className="text-main-color font-light text-xl font-poppins group-hover:text-dark-white" />
          <span className="text-main-color font-light text-xl font-poppins group-hover:text-dark-white">
            Dashboard
          </span>
        </Link>

        <Link
          href="/pages/invoices"
          className="flex flex-row gap-5 w-full h-12 items-center justify-center cursor-pointer rounded-lg hover:bg-main-color group mr-7"
        >
          <HiDocumentText className="text-main-color font-light text-xl font-poppins group-hover:text-dark-white" />
          <span className="text-main-color font-light text-xl font-poppins group-hover:text-dark-white">
            Invoices
          </span>
        </Link>

        <Link
          href="/pages/vendors"
          className="flex flex-row gap-5 w-full h-12 items-center justify-center cursor-pointer rounded-lg hover:bg-main-color group mr-7"
        >
          <FaUserTie className="text-main-color font-light text-xl font-poppins group-hover:text-dark-white" />
          <span className="text-main-color font-light text-xl font-poppins group-hover:text-dark-white">
            Vendors
          </span>
        </Link>

        <Link
          href="/pages/settings"
          className="flex flex-row gap-5 w-full h-12 items-center justify-center cursor-pointer rounded-lg hover:bg-main-color group mr-7"
        >
          <FiSettings className="text-main-color font-light text-xl font-poppins group-hover:text-dark-white" />
          <span className="text-main-color font-light text-xl font-poppins group-hover:text-dark-white">
            Settings
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
