import React from "react";
import error from "../../../public/images/404/404.gif";
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img src={error} alt="404 Error" className="w-96 h-auto" />
      <h1 className="text-3xl font-bold text-gray-800 mt-6">Page Not Found</h1>
      <p className="text-gray-600 mt-2">
        The page you are looking for doesn’t exist or has been removed.
      </p>
      <button
        className="mt-6 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-300"
        onClick={() => (window.location.href = "/")}
      >
        Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
