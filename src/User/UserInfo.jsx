import React, { useState } from "react";

const UserInfo = ({ user }) => {
  const { photoURL, name, email, creationTime, lastSignInTime, _id } = user;

  const onRemove = (id) => {
    console.log("remove that photo", id);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse border border-gray-200 shadow-md rounded-lg">
        {/* Table Header */}
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border border-gray-300 w-24">Image</th>
            <th className="px-4 py-2 border border-gray-300 w-32">Name</th>
            <th className="px-4 py-2 border border-gray-300 w-64">Email</th>
            <th className="px-4 py-2 border border-gray-300 w-40">
              Last Login
            </th>
            <th className="px-4 py-2 border border-gray-300 w-40">
              Created Time
            </th>
            <th className="px-4 py-2 border border-gray-300 w-32">Actions</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          <tr className="bg-white hover:bg-gray-50">
            <td className="px-4 py-2 border border-gray-300">
              <img
                src={photoURL}
                alt={name}
                className="w-10 h-10 rounded-full mx-auto"
              />
            </td>
            <td className="px-4 py-2 border border-gray-300">{name}</td>
            <td className="px-4 py-2 border border-gray-300">{email}</td>
            <td className="px-4 py-2 border border-gray-300">
              {lastSignInTime}
            </td>
            <td className="px-4 py-2 border border-gray-300">{creationTime}</td>
            <td className="px-4 py-2 border border-gray-300">
              <div className="flex space-x-2 justify-center">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  onClick={() => onView(_id)}
                >
                  View
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  onClick={() => onRemove(_id)}
                >
                  Remove
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserInfo;
