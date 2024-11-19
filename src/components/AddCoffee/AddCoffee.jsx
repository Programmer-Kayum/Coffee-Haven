import React, { useState } from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const coffeeName = form.coffeeName.value;
    const chief = form.chief.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const price = form.price.value;
    const details = form.details.value;
    const photoUrl = form.photoUrl.value;

    const coffee = {
      coffeeName,
      chief,
      supplier,
      taste,
      category,
      price,
      details,
      photoUrl,
    };

    // Handle form submission logic here

    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Inside post response", data);
        if (data.insertedId) {
          Swal.fire({
            title: "Thank You!!",
            text: "Coffee Added Successfully!",
            timer: 3000,
          });
          // form.reset();
        }
      });
  };

  return (
    <div className="max-w-4xl lg:mt-5 mt-2 mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Headline and Paragraph */}
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
        Add Your Coffee
      </h1>
      <p className="text-lg text-gray-600 text-center mb-6">
        Coffee isn't just a drink, it's a culture. Whether it's a rich espresso
        or a smooth latte, each cup of coffee brings something unique to the
        table.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Coffee Name */}
          <div className="mb-4">
            <label
              htmlFor="coffeeName"
              className="block text-sm font-medium text-gray-700"
            >
              Coffee Name
            </label>
            <input
              type="text"
              name="coffeeName"
              placeholder="Enter the coffee name"
              required
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 transition duration-300"
            />
          </div>

          {/* Chief */}
          <div className="mb-4">
            <label
              htmlFor="chief"
              className="block text-sm font-medium text-gray-700"
            >
              Chief
            </label>
            <input
              type="text"
              name="chief"
              placeholder="Enter the chief"
              required
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 transition duration-300"
            />
          </div>

          {/* Supplier */}
          <div className="mb-4">
            <label
              htmlFor="supplier"
              className="block text-sm font-medium text-gray-700"
            >
              Supplier
            </label>
            <input
              type="text"
              name="supplier"
              placeholder="Enter the supplier"
              required
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 transition duration-300"
            />
          </div>

          {/* Taste */}
          <div className="mb-4">
            <label
              htmlFor="taste"
              className="block text-sm font-medium text-gray-700"
            >
              Taste
            </label>
            <input
              type="text"
              name="taste"
              placeholder="Enter the taste profile"
              required
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 transition duration-300"
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <input
              type="text"
              name="category"
              placeholder="Enter the coffee category"
              required
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 transition duration-300"
            />
          </div>
          {/* prices */}
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              name="price"
              placeholder="Enter the coffee price"
              required
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 transition duration-300"
            />
          </div>
        </div>

        {/* Details */}
        <div className="mb-4">
          <label
            htmlFor="details"
            className="block text-sm font-medium text-gray-700"
          >
            Details
          </label>
          <textarea
            type="text"
            name="details"
            placeholder="Enter details about the coffee"
            required
            rows="4"
            className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 transition duration-300"
          />
        </div>

        {/* Photo URL */}
        <div className="mb-4">
          <label
            htmlFor="photoUrl"
            className="block text-sm font-medium text-gray-700"
          >
            Photo URL
          </label>
          <input
            type="url"
            name="photoUrl"
            placeholder="Enter the photo URL"
            required
            className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 transition duration-300"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 mt-6 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Coffee
        </button>
      </form>
    </div>
  );
};

export default AddCoffee;
