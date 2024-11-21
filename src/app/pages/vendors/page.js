"use client";

import React from "react";
import Sidebar from "../../components/Sidebar.jsx";
import Navbar from "../../components/Navbar.jsx";

const Vendors = () => {
  return (
    <div className="bg-dark-white h-screen w-screen flex flex-row tablet:flex-col mobile:flex-col">
      <Sidebar />
      <div className="bg-dark-white w-10/12 flex flex-col tablet:w-screen mobile:w-screen">
        <Navbar />

        <div className="flex flex-col p-8 laptop:p-4 mobile:p-6">
          <h1 className="text-4xl text-main-color font-bold mb-6 laptop:text-2xl laptop:mb-3 mobile:text-3xl">
            Vendors
          </h1>

          <section className="mb-12 laptop:mb-5">
            <h2 className="text-2xl font-semibold mb-2 text-main-color laptop:text-xl">
              Who Are Vendors?
            </h2>
            <p className="text-lg text-gray-700">
              Vendors are individuals or companies that sell products or
              services to customers, typically in a business-to-business (B2B)
              context. They manage product listings, fulfill orders, and engage
              in customer support. Vendors are vital in creating a diverse
              marketplace by offering a variety of goods ranging from clothing
              and electronics to food and services.
            </p>
          </section>

          <section className="mb-12 laptop:mb-5">
            <h2 className="text-2xl font-semibold mb-2 text-main-color laptop:text-xl">
              What Do Vendors Do?
            </h2>
            <ul className="list-disc pl-8 text-lg text-gray-700">
              <li>
                Product Listings: Vendors manage and add products to the
                platform.
              </li>
              <li>
                Order Fulfillment: Vendors process orders, package, and ship
                products.
              </li>
              <li>
                Customer Support: Vendors handle customer inquiries and returns.
              </li>
              <li>
                Promotions and Discounts: Vendors can offer special discounts
                and deals.
              </li>
              <li>
                Inventory Management: Vendors update their stock and manage
                product availability.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-main-color font-semibold mb-2 laptop:text-xl">
              Popular Vendors
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-5 laptop:gap-5 laptop:mt-2">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">Amazon</h3>
                <p className="text-gray-600">
                  Electronics, Books, Home Appliances, Clothing
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">Nike</h3>
                <p className="text-gray-600">Sportswear, Shoes, Equipment</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">Apple</h3>
                <p className="text-gray-600">
                  Smartphones, Laptops, Wearables, Accessories
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">Walmart</h3>
                <p className="text-gray-600">
                  Groceries, Electronics, Clothing, Household Items
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">Ikea</h3>
                <p className="text-gray-600">
                  Furniture, Home Goods, Kitchenware
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">Samsung</h3>
                <p className="text-gray-600">
                  Smartphones, Televisions, Home Appliances
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">Adidas</h3>
                <p className="text-gray-600">
                  Sports Shoes, Apparel, Equipment
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">
                  Best Buy
                </h3>
                <p className="text-gray-600">
                  Electronics, Appliances, Video Games
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Vendors;
