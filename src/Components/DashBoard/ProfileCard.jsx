import React from "react";
import DashBoardPng from "../../Utils/Png/dashboard.png";

const ProfileCard = () => {
  return (
    <div className="w-52 h-72 bg-[#d9d9d9e5] absolute top-9 right-7 z-20 rounded-2xl overflow-hidden shadow-xl">
      <div
        className="absolute w-64 h-64 bg-black -top-20 left-10 rounded-[50%]"
        style={{
          zIndex: -1,
        }}
      ></div>
      <div
        className="flex flex-col items-center justify-start h-64 pt-10 mt-4 ml-4 bg-white w-44 rounded-2xl"
        style={{
          zIndex: 1,
        }}
      >
        <img
          src={DashBoardPng}
          alt="Profile"
          className="w-16 h-16 rounded-2xl"
        />
        <h3 className="mt-3">Harsh Keshri</h3>
              <p className="text-[0.6rem] mt-1">harshkeshri1234567@gmail.com</p>
              <button className="p-4 py-2 bg-[#d9d9d959] border-black border-[0.04rem] rounded-2xl mt-5">Go to profile</button>
      </div>
    </div>
  );
};

export default ProfileCard;