import React from "react";
import { useContext,useState } from "react";
import Context from "../../Context/Context";

import UserNamePng from "../../Utils/images/UsersList/userName.png";
import DetailsPng from "../../Utils/images/UsersList/details.png";
import DuePng from "../../Utils/images/UsersList/due.png";
import AttendancePng from "../../Utils/images/UsersList/attendance.png";
import Pagination from "@mui/material/Pagination";

const UsersList = () => {
  const Ctx = useContext(Context);

  const itemsPerPage = 10; // Set the desired number of items per page
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(Ctx.upcomingClasses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;



  return (
    <div className="w-[100%] flex flex-col items-center pt-6 max536:pt-0 gap-10">
      <div
        className={`w-[90%] bg-[#e1faf9] max536:bg-transparent max536:w-[100%]
        } rounded-3xl p-3 flex flex-col items-center max1050:w-[94vw]`}
      >
        
        <h2 className="pl-5 text-[1.4rem] max536:mb-3 max536:text-[1.7rem] RussoOne font-thin max536:text-[bg-[#1b7571]]">
          Members List
        </h2>
        <ul className="relative pb-[3rem] w-[100%] h-[calc(100vh-14rem)] flex flex-col  max536:bg-[#1b7571] rounded-3xl items-center justify-start pt-6 max536:gap-3 max536:h-[calc(100vh-16rem)] max536:bg-gradient-to-b max536:from-[#dad7c6] max536:to-[#fdd00891]">
        <li
            className={`w-[100%] flex flex-col items-center justify-center p-2  max536:pt-5 max536:rounded-2xl`}
          >
            <div className="flex w-[96%] max1050:w-[100%] justify-between  mb-3 font-bold">
              <p className="w-[20%] overflow-hidden  max536:hidden ">Name</p>
              {/* <p className="w-[40%] text-left overflow-hidden  max536:hidden ">
                Details
              </p> */}
              <p className="w-[30%] overflow-hidden  max536:hidden ">Email</p>
              <p className="w-[25%] overflow-hidden  max536:hidden ">Phone</p>
              <p className="overflow-hidden w-[5.4rem] max536:hidden ">
                Attendance
              </p>
              <p className=" max536:hidden w-[4rem] ">Due</p>
              <img
                src={UserNamePng}
                alt=""
                className="min536:hidden w-10 h-10"
              />
              <img
                src={DetailsPng}
                alt=""
                className="min536:hidden w-10 h-10 "
              />
              <img
                src={AttendancePng}
                alt=""
                className="min536:hidden w-10 h-10 "
              />
              <img src={DuePng} alt="" className="min536:hidden w-10 h-10" />
            </div>
          </li>
          <div className="overflow-auto max536:w-[96%] flex flex-col gap-4 w-[100%]">
          {Ctx.userList
            .slice(startIndex, endIndex)
            .map((user, i) => {
              return (
                <li
                  key={user.cognitoId}
                  className={`w-[100%] flex flex-col items-center justify-center p-2 max536:bg-[#1b7571]  max536:pt-6 max536:rounded-2xl Sansita max536:text-[0.8rem]`}
                >
                  <div className="flex w-[96%] max1050:w-[100%] justify-between max1050:justify-between mb-5 relative">
                    <p className="w-[20%] overflow-auto">{user.userName}</p>
                    <p className="w-[40%] text-left overflow-auto max1050:text-[0.8rem] min536:hidden">
                      {user.emailId} / {user.phoneNumber}
                    </p>
                    <p className="w-[30%] text-left overflow-auto max1050:text-[0.8rem] max536:hidden">
                      {user.emailId}
                    </p>
                    <p className="w-[25%] text-left overflow-auto max1050:text-[0.8rem]  max536:hidden">
                      {user.phoneNumber}
                    </p>
                    <p className="overflow-hidden w-[3.7rem]  ">
                      {user.currentMonthZPoints
                        ? user.currentMonthZPoints
                        : 0 +
                          "/" +
                          (user.lastMonthZPoints ? user.lastMonthZPoints : 0)}
                    </p>
                    <p className="w-[3.4rem] mr-4   rounded px-2 bg-[#1b7571] max-h-[1.8rem] self-center flex justify-center items-center max536:mr-0">
                      {/* {new Date(user.date).toLocaleDateString("en-us", {
                      day: "2-digit",
                      month: "2-digit",
                    })} */}
                      {/* {user.balance} */}
                      {0}
                    </p>
                  </div>
                </li>
              );
            })}
            </div>
            <div className=" absolute bottom-4  ">
              <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={(event, value) => setCurrentPage(value)}
                />
              </div>
        </ul>
      </div>
    </div>
  );
};

export default UsersList;
