"use client";

import React from "react";
import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";

const Page = () => {
  return (
    <div className="bg-dark-white h-screen w-screen flex flex-row tablet:flex-col mobile:flex-col">
      <Sidebar />
      <div className="bg-dark-white w-10/12 flex flex-col tablet:w-screen mobile:w-screen">
        <Navbar />
        <div className="flex flex-col p-6">
          <div className="text-center my-6 mobile:my-3">
            <h1 className="font-poppins text-3xl font-semibold text-main-color">
              Welcome to Finifi - Your Invoicing Platform
            </h1>
            <p className="text-md text-main-color mt-4">
              At **Finifi**, we provide a powerful tool for businesses to manage
              their invoices with ease. Our platform allows you to perform all
              necessary actions for invoice management, from creating and
              editing to viewing and archiving your invoices. You can also
              organize your invoices with advanced features like filtering,
              sorting, searching, and pagination, ensuring you can quickly find
              the exact information you need.
            </p>
          </div>

          <div className="my-6">
            <h2 className="font-poppins text-xl font-semibold text-main-color mb-4">
              Key Features of the Dashboard
            </h2>
            <ul className="list-disc pl-6 text-md text-main-color">
              <li>
                CRUD Operations for Invoices: Create, Read, Update, and Delete
                invoices with ease.
              </li>
              <li>
                Advanced Sorting: Sort invoices by date, amount, or other
                relevant fields.
              </li>
              <li>
                Efficient Filtering: Filter invoices based on various criteria
                such as status, client, or date range.
              </li>
              <li>
                Powerful Search: Quickly search for specific invoices by number,
                client, or amount.
              </li>
              <li>
                Pagination: Manage and view a large number of invoices without
                overwhelming the UI.
              </li>
              <li>
                Interactive Column Management: Slide columns to organize and
                display invoice data in a customizable way.
              </li>
            </ul>
          </div>

          <div className="my-6">
            <h3 className="font-poppins text-xl font-semibold text-main-color mb-4">
              About Finifi
            </h3>
            <p className="text-md text-main-color">
              **Finifi** is a cutting-edge invoicing platform designed to
              simplify your business financial workflows. Whether you are a
              freelancer, small business owner, or a large enterprise, our
              intuitive platform helps you keep track of all your invoices,
              payments, and financial records in one place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
