import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const loadedCoffee = useLoaderData();
  const {
    _id,
    coffeeName,
    chief,
    supplier,
    taste,
    category,
    price,
    details,
    photoUrl,
  } = loadedCoffee;
  const handleUpdate = (event) => {
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
    console.log(coffee);

    Swal.fire({
      title: "Are you sure?",
      text: "Will Update Your Coffee !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, update it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(coffee),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire("Updated", "Your Coffee has been updated.", "success");
            }
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your Coffee file is not update :)", "error");
      }
    });

    // fetch(`http://localhost:5000/coffees/${_id}`, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(coffee),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.modifiedCount > 0) {
    //       alert("Updated  successfully");
    //     }
    //   });
  };

  return (
    <div>
      <div className="max-w-4xl lg:mt-5 mt-2 mx-auto p-6 bg-white rounded-lg shadow-md">
        {/* Headline and Paragraph */}
        <h1 className="lg:text-3xl text-2xl font-bold text-gray-800 text-center mb-4">
          Update Your Coffee :{" "}
          <span className="text-orange-500">{coffeeName}</span>
        </h1>
        <p className="font-semibold text-gray-600 text-center mb-6">
          Coffee isn't just a drink, it's a culture. Whether it's a rich
          espresso or a smooth latte, each cup of coffee brings something unique
          to the table.
        </p>

        {/* Form */}
        <form onSubmit={handleUpdate}>
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
                defaultValue={coffeeName}
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
                defaultValue={chief}
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
                defaultValue={supplier}
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
                defaultValue={taste}
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
                defaultValue={category}
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
                defaultValue={price}
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
              defaultValue={details}
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
              defaultValue={photoUrl}
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
            Update Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
