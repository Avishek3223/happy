import React, { useContext, useState } from "react";
import { RiDashboardLine } from "react-icons/ri";
import { BsGraphUp, BsPeopleFill } from "react-icons/bs";
import { AiOutlineCompass } from "react-icons/ai";
import Context from "../../Context/Context";
import { useNavigate } from "react-router-dom";


const LeftBanner = ({ attendance, due, displayAfterClick }) => {
  const [click, setClick] = useState(0);
  const UserCtx = useContext(Context);

  const Navigate = useNavigate();
  const isMember = UserCtx.userData.userType === "member";

  return (
    <div className=" mt-[2rem] w-64 bg-black max1050:bg-transparent rounded-[21px] flex flex-col overflow-auto max1050:h-[15vh] max1050:w-screen max1050:fixed max1050:bottom-[-3rem] max1050:left-0 max1050:items-center max1050:z-30 font-sans">
      <div className="flex flex-col items-center p-6 pt-12 text-white max1050:hidden">
        <img
          alt="profile"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyuNFyw05KSucqjifL3PhDFrZLQh7QAS-DTw&usqp=CAU80-804949_profile-icon-for-the-politics-category-circle-hd.png"
          className="h-24 w-24 rounded-[80%] "
        />
        <p className="pt-3 font-bold">{UserCtx.userData.userName}</p>
        {isMember && (
          <>
            <p className="pt-1">
              Attendance:{"  "}
              <span style={{ color: "green" }}>
                {attendance?.currentMonthZPoints || 0}
              </span>
              {" "}
              /{" "}
              <span style={{ color: "red" }}>
                {attendance?.lastMonthZPoints || 0}
              </span>
            </p>
            <p className="pt-1">{`Due: ${due || 0}`}</p>
          </>
        )}
        <button
          className="px-3 py-1 mt-2 text-black bg-gray-400 rounded-xl"
          onClick={() => {
            setClick(3);
            displayAfterClick(3);
          }}
        >
          Profile
        </button>
      </div>
      <div className="bg-[#d9d9d944] max1050:bg-black w-[100%] h-[100%] rounded-r-[7rem] max1050:mb-[2rem] rounded-b-none flex flex-col items-center justify-between py-12 max1050:p-0 max1050:max-w-[20rem] max1050:rounded-[6rem] max536:w-[90vw]">
        <ul className="w-[90%] flex flex-col items-center max1050:flex-row max1050:justify-between max1050:px-2">
          <li
            className={`flex items-center text-[1.1rem] w-[86%] ${click === 0 &&
              " bg-[#1b7571] max1050:bg-[#1b7571] max1050:rounded-[50%]"
              } my-3 p-2 font-bold text-white rounded-md cursor-pointer max1050:w-auto`}
            onClick={() => {
              setClick(0);
              displayAfterClick(0);
            }}
          >
            <RiDashboardLine
              color="white"
              size={"1.9rem"}
              className="mr-2 max1050:mr-0 min-w-[1.9rem]"
            />
            <p className=" max1050:hidden">Upcoming Classes</p>
          </li>
          <li
            className={`flex items-center text-[1.1rem] w-[86%] my-3 p-2 font-bold text-white rounded-md ${click === 1 &&
              " bg-[#1b7571] max1050:bg-[#1b7571] max1050:rounded-[50%]"
              } cursor-pointer max1050:w-auto`}
            onClick={() => {
              setClick(1);
              displayAfterClick(1);
            }}
          >
            <BsGraphUp
              color="white"
              size={"1.9rem"}
              className="mr-2 min-w-[1.9rem] max1050:mr-0"
            />
            <p className="max1050:hidden">Previous Classes</p>
          </li>
          <li
            className={`flex items-center text-[1.1rem] w-[86%] my-3 p-2 font-bold text-white rounded-md ${click === 2 &&
              " bg-[#1b7571] max1050:bg-[#1b7571] max1050:rounded-[50%]"
              } cursor-pointer max1050:w-auto`}
            onClick={() => {
              setClick(2);
              displayAfterClick(2);
            }}
          >
            <AiOutlineCompass
              color="white"
              size={"1.9rem"}
              className="mr-2 min-w-[1.9rem] max1050:mr-0"
            />
            <p className="max1050:hidden">Video</p>
          </li>
          {UserCtx.userData.userType === "admin" && (
            <li
              className={`flex items-center text-[1.1rem] w-[86%] my-3 p-2 font-bold text-white rounded-md ${click === 4 && " bg-[#1b7571] max1050:bg-[#1b7571] max1050:rounded-[50%]"
                } cursor-pointer max1050:w-auto`}
              onClick={() => {
                setClick(4);
                displayAfterClick(4);
              }}
            >
              <BsPeopleFill
                color="white"
                size={"1.9rem"}
                className="mr-2 min-w-[1.9rem] max1050:mr-0"
              />
              <p className="max1050:hidden">Members</p>

            </li>
          )}
        </ul>

        <div className="w-[80%] bg-[#ffffff79] h-20 rounded-3xl flex flex-col justify-center items-center max1050:hidden">
          <p className="font-semibold text-center">Having some Trouble?</p>
          <p
            className="font-bold cursor-pointer"
            onClick={() => {
              Navigate("/query");
            }}
          >
            contact us
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;