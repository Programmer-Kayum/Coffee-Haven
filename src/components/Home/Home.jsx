import { useLoaderData } from "react-router-dom";
import Marquees from "./Marquees";
import OurProducts from "./OurProducts";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import cup1 from "../../../public/images/icons/1.png";
import cup2 from "../../../public/images/icons/2.png";
import cup3 from "../../../public/images/icons/3.png";
import cup4 from "../../../public/images/icons/4.png";
import Instagram from "./Instagram";

const Home = () => {
  const loadedCoffees = useLoaderData();

  return (
    <div>
      <div>
        <Marquees></Marquees>
      </div>
      <div>
        <div
          // className="bg-[url('../../../public/images/more/1.png')] bg-cover"
          className=" relative bg-[url('../../../public/images/more/3.png')] bg-cover bg-center h-[450px] flex items-center justify-center text-center"
        >
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Content */}
          <div className="relative z-10 max-w-2xl text-white px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to Coffee Haven
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Discover the finest blends, crafted with love and passion to
              delight your senses.
            </p>
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded text-sm">
              Learn More
            </button>
          </div>
        </div>

        {/* Card */}

        <div className="bg-gray-200 ">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img src={cup1} className="w-40 ml-5 h-40 p-5 object-cover" />
                <div className="p-4">
                  <h2 className="text-lg font-bold mb-2">Awesome Aroma</h2>
                  <p className="text-gray-600">
                    You will definitely be a fan of the design & aroma of your
                    coffee
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img src={cup2} className="w-40 ml-5 p-5 h-40 object-cover" />
                <div className="p-4">
                  <h2 className="text-lg font-bold mb-2">High Quality</h2>
                  <p className="text-gray-600">
                    We served the coffee to you maintaining the best quality
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img src={cup3} className="w-40 ml-5 p-5 h-40 object-cover" />
                <div className="p-4">
                  <h2 className="text-lg font-bold mb-2">Pure Grades</h2>
                  <p className="text-gray-600">
                    The coffee is made of the green coffee beans which you will
                    love
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img src={cup4} className="w-36 p-5 ml-5 h-40 object-cover" />
                <div className="p-4">
                  <h2 className="text-lg font-bold mb-2">Proper Roasting</h2>
                  <p className="text-gray-600">
                    Your coffee is brewed by first roasting the green coffee
                    beans
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-3">
        <div className="bg-[url('../../../public/images/more/1.png')] bg-cover">
          <div className="text-center mt-10">
            <p>--- Sip & Savor ---</p>
            <h1 className=" lg:text-4xl text-2xl font-bold">
              Our Popular Products
            </h1>
            <h2 className="btn-block border-2 lg:w-1/5 w-3/5 mx-auto rounded-lg mt-3 bg-orange-300 text-black font-bold py-2">
              Total Coffee: {loadedCoffees.length}
            </h2>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-5 my-5 lg:w-3/4 p-5 mx-auto">
            {loadedCoffees.map((coffee) => (
              <OurProducts key={coffee._id} coffee={coffee} />
            ))}
          </div>
        </div>
      </div>
      <Instagram></Instagram>
    </div>
  );
};

export default Home;
