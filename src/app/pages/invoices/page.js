"use client";

import React from "react";
import Sidebar from "../../components/Sidebar.jsx";
import Navbar from "../../components/Navbar.jsx";
import {
  FaSearch,
  FaTrash,
  FaEdit,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import { invoices } from "../../components/invoices.js";

const Invoice = () => {
  return (
    <div className="bg-dark-white h-screen w-screen flex flex-row overflow-hidden">
      <Sidebar />
      <div className="bg-dark-white w-10/12 flex flex-col">
        <Navbar />

        <div className="flex flex-col w-full h-auto justify-center items-center gap-1">
          <div className="flex flex-row w-full h-auto justify-center items-center gap-24 p-3 border border-b-light-grey">
            <span className="font-poppins text-md text-main-color cursor-pointer">
              All
            </span>
            <span className="font-poppins text-md text-main-color cursor-pointer">
              Open
            </span>
            <span className="font-poppins text-md text-main-color cursor-pointer">
              Awaiting Approval
            </span>
            <span className="font-poppins text-md text-main-color cursor-pointer">
              Approved
            </span>
            <span className="font-poppins text-md text-main-color cursor-pointer">
              Processing
            </span>
            <span className="font-poppins text-md text-main-color cursor-pointer">
              Paid
            </span>
            <span className="font-poppins text-md text-main-color cursor-pointer">
              Rejected
            </span>
            <span className="font-poppins text-md text-main-color cursor-pointer">
              Vendor Not Found
            </span>
            <span className="font-poppins text-md text-main-color cursor-pointer">
              Duplicate
            </span>
            <span className="font-poppins text-md text-main-color cursor-pointer">
              Void
            </span>
          </div>

          <div className="flex justify-between items-center w-11/12 h-auto p-5">
            <div className="border border-dark-grey h-10 w-4/12 rounded-lg flex flex-row gap-2 justify-center items-center p-3">
              <FaSearch className="font-poppins text-2xl text-main-color" />
              <select className="border-none outline-none rounded-md text-main-color cursor-pointer font-bold">
                <option value="vendor">by Vendor Name</option>
                <option value="number">by Invoice Number</option>
              </select>
              <div className="h-full w-[3px] bg-dark-grey"></div>
              <input
                type="text"
                placeholder="search..."
                className="w-full h-full border-none outline-none text-md text-main-color font-poppins"
              />
            </div>

            <div className="flex items-center justify-center bg-main-color w-40 h-10 rounded-lg cursor-pointer hover:bg-dark-white hover:border hover:border-main-color group">
              <span className="text-dark-white text-sm font-semibold font-poppins group-hover:text-main-color">
                Create Invoice +
              </span>
            </div>
          </div>

          <div className="overflow-x-auto w-full ml-5">
            <table className="w-max table-auto border-collapse">
              <thead>
                <tr>
                  <th className="sticky left-0 bg-main-color z-10 py-4 px-16 border-r border-b text-dark-white font-poppins text-md font-semibold">
                    Vendor Name
                  </th>
                  <th className="py-4 px-16 border-b text-dark-white font-poppins text-md font-semibold bg-main-color">
                    Invoice Number
                  </th>
                  <th className="py-4 px-16 border-b text-dark-white font-poppins text-md font-semibold bg-main-color">
                    Status
                  </th>
                  <th className="py-4 px-16 border-b text-dark-white font-poppins text-md font-semibold bg-main-color">
                    Net Amount
                  </th>
                  <th className="py-4 px-16 border-b text-dark-white font-poppins text-md font-semibold bg-main-color">
                    Invoice Date
                  </th>
                  <th className="py-4 px-16 border-b text-dark-white font-poppins text-md font-semibold bg-main-color">
                    Due Date
                  </th>
                  <th className="py-4 px-16 border-b text-dark-white font-poppins text-md font-semibold bg-main-color">
                    Department
                  </th>
                  <th className="py-4 px-16 border-b text-dark-white font-poppins text-md font-semibold bg-main-color">
                    PO Number
                  </th>
                  <th className="py-4 px-16 border-b text-dark-white font-poppins text-md font-semibold bg-main-color">
                    Created Time
                  </th>
                  <th className="py-4 px-16 border-b text-dark-white font-poppins text-md font-semibold bg-main-color">
                    Created Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {invoices.slice(0, 7).map((item, index) => (
                  <tr key={index}>
                    <td className="sticky left-0 bg-white py-5 px-16 border-b font-poppins text-main-color border-r flex items-center gap-5">
                      <div className="flex gap-3">
                        {/* Edit Button */}
                        <button
                          title="Edit"
                          className="text-blue-500 hover:text-blue-700 transition duration-200"
                        >
                          <FaEdit size={20} />
                        </button>
                        {/* Delete Button */}
                        <button
                          title="Delete"
                          className="text-red-500 hover:text-red-700 transition duration-200"
                        >
                          <FaTrash size={20} />
                        </button>
                      </div>
                      <span className="ml-3">{item.vendorName}</span>
                    </td>
                    <td className="py-5 px-16 border-b font-poppins text-main-color">
                      {item.invoiceNumber}
                    </td>
                    <td className="h-5 w-36 border border-main-color rounded-full flex items-center justify-center mt-3 ml-3 py-4">
                      <span className="font-poppins text-main-color text-sm">
                        {item.status}
                      </span>
                    </td>
                    <td className="py-5 px-16 border-b font-poppins text-main-color">
                      {item.netAmount}
                    </td>
                    <td className="py-5 px-16 border-b font-poppins text-main-color">
                      {item.invoiceDate}
                    </td>
                    <td className="py-5 px-16 border-b font-poppins text-main-color">
                      {item.dueDate}
                    </td>
                    <td className="py-5 px-16 border-b font-poppins text-main-color">
                      {item.department}
                    </td>
                    <td className="py-5 px-16 border-b font-poppins text-main-color">
                      {item.poNumber}
                    </td>
                    <td className="py-5 px-16 border-b font-poppins text-main-color">
                      {item.createdTime}
                    </td>
                    <td className="py-5 px-16 border-b font-poppins text-main-color">
                      {item.createdDate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-row gap-3 items-center justify-center w-auto h-auto mt-5">
            <FaAngleLeft className="font-poppins text-lg text-main-color hover:text-dark-grey font-semibold cursor-pointer" />
            <span className="font-poppins text-lg text-main-color font-semibold">
              1 of 3
            </span>
            <FaAngleRight className="font-poppins text-lg text-main-color hover:text-dark-grey font-semibold cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
