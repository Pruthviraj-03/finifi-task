"use client";

import React from "react";
import Sidebar from "../../components/Sidebar.jsx";
import Navbar from "../../components/Navbar.jsx";

const Settings = () => {
  return (
    <div className="bg-dark-white h-screen w-screen flex flex-row">
      <Sidebar />
      <div className="bg-dark-white w-10/12 flex flex-col">
        <Navbar />
        <div className="flex flex-col p-6 laptop:p-4">
          <div className="my-4 laptop:my-2">
            <h1 className="font-poppins text-4xl font-semibold text-main-color laptop:text-3xl">
              Settings
            </h1>
            <p className="text-lg text-main-color mt-4">
              Manage your account settings and preferences below.
            </p>
          </div>

          <div className="my-4 laptop:my-2">
            <h2 className="font-poppins text-3xl font-semibold text-main-color mb-4 laptop:text-2xl">
              Account Settings
            </h2>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="text-main-color font-medium"
                >
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  className="w-full p-3 mt-2 border border-light-grey rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-main-color font-medium">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 mt-2 border border-light-grey rounded-lg"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="text-main-color font-medium"
                >
                  New Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter a new password"
                  className="w-full p-3 mt-2 border border-light-grey rounded-lg"
                />
              </div>
              <button className="bg-main-color text-white px-6 py-3 mt-4 rounded-lg hover:bg-white hover:text-main-color hover:border hover:border-main-color laptop:px-5 laptop:py-2">
                Save Changes
              </button>
            </div>
          </div>

          <div className="my-4">
            <h2 className="font-poppins text-3xl font-semibold text-main-color mb-4 laptop:text-2xl">
              Notification Settings
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="email-notifications"
                  className="mr-2"
                />
                <label
                  htmlFor="email-notifications"
                  className="text-main-color font-medium"
                >
                  Receive email notifications
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="sms-notifications"
                  className="mr-2"
                />
                <label
                  htmlFor="sms-notifications"
                  className="text-main-color font-medium"
                >
                  Receive SMS notifications
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
