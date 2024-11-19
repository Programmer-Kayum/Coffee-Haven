import { Link, useLoaderData } from "react-router-dom";
import CoffeeList from "./CoffeeList";
import cup from "../../../public/images/icons/1.png";

const Coffee = () => {
  const loadedCoffees = useLoaderData();
  return (
    <div>
      <div className="my-3">
        <div className="bg-[url('../../../public/images/more/1.png')] bg-cover">
          <div className="text-center my-5">
            <p>--- Sip & Savor ---</p>
            <h1 className=" lg:text-4xl text-2xl font-bold">
              Our Popular Products
            </h1>
            <Link to={"/addCoffee"}>
              <button className="btn my-3 btn-sm bg-gray-300">
                Add Coffee
                <img className="w-[20px] h-[20px]" src={cup} alt="" />
                <p className="bg-orange-400 p-2 rounded-full">
                  {loadedCoffees.length}
                </p>
              </button>
            </Link>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-5 my-5 lg:w-3/4 mx-auto">
            {loadedCoffees.map((allCoffee) => (
              <CoffeeList key={allCoffee._id} allCoffee={allCoffee} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
