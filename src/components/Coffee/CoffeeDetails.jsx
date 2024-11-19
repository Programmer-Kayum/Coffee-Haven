import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
  const {
    photo,
    coffeeName,
    chief,
    supplier,
    taste,
    category,
    price,
    details,
    photoUrl,
  } = useLoaderData();
  return (
    <div className="my-5">
      <div className="flex  items-center justify-center">
        {/* Container */}
        <div className="flex flex-col p-10 md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full mx-4">
          {/* Coffee Photo */}
          <div className="md:w-1/2  ">
            <img
              src={photoUrl}
              alt={coffeeName}
              className="h-64 md:h-full rounded-lg w-full object-cover"
            />
          </div>

          {/* Coffee Details */}
          <div className="p-10 md:w-1/2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center md:text-left">
              {coffeeName}
            </h1>

            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-semibold">Chief:</span> {chief}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Supplier:</span> {supplier}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Taste:</span> {taste}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Category:</span> {category}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Price:</span> ${price}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Details:</span> {details}
              </p>
            </div>

            <div className="lg:mt-52  flex space-x-1   mt-10">
              <Link to={"/order"}>
                <button className="px-5 py-2  btn btn-sm bg-yellow-500 text-white rounded-md hover:bg-yellow-600 hover:scale-105 transition-all duration-200">
                  Order
                </button>
              </Link>
              <Link to={"/order"}>
                <button className="px-5 btn btn-sm py-2 bg-red-500 text-white rounded-md hover:bg-red-600 hover:scale-105 transition-all duration-200">
                  Add to Cart
                </button>
              </Link>
              <Link to={"/"}>
                <button className="px-5 btn btn-sm py-2 bg-red-500 text-white rounded-md hover:bg-red-600 hover:scale-105 transition-all duration-200">
                  Back Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
