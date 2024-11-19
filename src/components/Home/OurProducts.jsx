import { Link } from "react-router-dom";

const OurProducts = ({ coffee }) => {
  return (
    <div className="flex items-center my-2  justify-between bg-white shadow-md rounded-lg p-4 border border-gray-200  transition-transform transform hover:scale-105 hover:shadow-lg hover:opacity-90">
      {/* Left: Coffee Image */}
      <div className="flex-shrink-0  transition-transform transform hover:scale-105 hover:shadow-lg hover:opacity-90">
        <img
          src={coffee.photoUrl}
          alt={coffee.name}
          className="w-32 h-32 object-cover rounded-lg"
        />
      </div>

      {/* Middle: Coffee Details */}
      <div className="flex-grow px-4">
        <h2 className="lg:text-2xl font-semibold text-gray-800">
          {coffee.coffeeName}
        </h2>
        <p className="text-gray-600 font-medium">Chief: {coffee.chief}</p>
        <p className="text-gray-800 font-medium">Price: ${coffee.price}</p>
        <p className="text-gray-800 ">
          Rating: <i class="fa fa-star" aria-hidden="true"></i>
        </p>
      </div>

      {/* Right: Action Buttons */}
      <div className="flex flex-col gap-1">
        <Link to={`/details/${coffee._id}`}>
          <button className="lg:px-8 py-2 btn btn-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 hover:scale-105 transition-all duration-200">
            View
          </button>
        </Link>

        <Link to={"/order"}>
          <button className="lg:px-7 py-2 btn btn-sm bg-yellow-500 text-white rounded-md hover:bg-yellow-600 hover:scale-105 transition-all duration-200">
            Order
          </button>
        </Link>
        <Link to={"/card"}>
          <button className="lg:px-5  btn btn-sm lg:py-2 bg-red-500 text-white rounded-md hover:bg-red-600 hover:scale-105 transition-all duration-200">
            Add Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OurProducts;
