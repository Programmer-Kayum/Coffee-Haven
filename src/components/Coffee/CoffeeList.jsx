import eye from "../../../public/images/icons/eye.png";
import edit from "../../../public/images/icons/edit.png";
import remove from "../../../public/images/icons/delete.png";
import { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CoffeeList = ({ allCoffee }) => {
  // Delete method

  const [coffee, setCoffee] = useState(allCoffee);
  const handleDelete = (_id) => {
    console.log("delete", _id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this Coffee !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your Coffee file is safe :)", "error");
      }
    });
  };

  return (
    <div className="flex items-center my-2 justify-between bg-white shadow-md rounded-lg p-4 border border-gray-200  transition-transform transform hover:scale-105 hover:shadow-lg hover:opacity-90 ">
      {/* Left: Coffee Image */}
      <div className="flex-shrink-0">
        <img
          src={coffee.photoUrl}
          alt={coffee.name}
          className="lg:w-40 w-24 lg:h-40 h-32 object-cover rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:opacity-90"
        />
      </div>

      {/* Middle: Coffee Details */}
      <div className="flex-grow px-8">
        <h2 className="text-xl font-semibold text-gray-800">
          Name: {coffee.coffeeName}
        </h2>
        <p className="text-gray-600">Chief: {coffee.chief}</p>
        <p className="text-gray-800 font-medium">Price: ${coffee.price}</p>
      </div>

      {/* Right: Action Buttons */}
      <div className="flex flex-col gap-2">
        {/* Eye icon with hover effect */}
        <Link to={`/details/${coffee._id}`}>
          <img
            className="w-[30px] h-[30px] rounded-full transition-transform transform hover:scale-110 hover:opacity-80"
            src={eye}
            alt="view"
          />
        </Link>
        {/* Edit icon with hover effect */}

        <Link to={`/coffees/${coffee._id}`}>
          <img
            className="w-[25px] h-[25px] rounded-full transition-transform transform hover:scale-110 hover:opacity-80"
            src={edit}
            alt="edit"
          />
        </Link>
        {/* Remove icon with hover effect */}

        <img
          onClick={() => handleDelete(coffee._id)}
          className="w-[25px] h-[25px] rounded-full transition-transform transform hover:scale-110 hover:opacity-80"
          src={remove}
          alt="remove"
        />
      </div>
    </div>
  );
};

export default CoffeeList;
