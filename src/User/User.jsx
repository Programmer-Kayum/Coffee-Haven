import React from "react";
import { useLoaderData } from "react-router-dom";
import UserInfo from "./UserInfo";
import photo from "../../public/images/icons/user.png";

const User = () => {
  const users = useLoaderData();

  return (
    <div>
      <div className="w-1/5 mx-auto my-4">
        <button className="btn  my-3 btn-sm bg-gray-300">
          Total Users :
          <img className="w-[20px] h-[20px] rounded-lg" src={photo} alt="" />
          <p className="bg-orange-400 p-2  rounded-full">{users.length}</p>
        </button>
      </div>

      <div className="w-4/5 mx-auto">
        {users.map((user) => (
          <UserInfo key={user._id} user={user}></UserInfo>
        ))}
      </div>
    </div>
  );
};

export default User;
