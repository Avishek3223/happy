import React from "react";
import { useContext, useState } from "react";
import Context from "../../Context/Context";
import './UsersList.css'
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

  const formatDate = (epochDate) => {
    const date = new Date(epochDate);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    return `${day} ${month}`;
  };

  return (
    <div className="w-[100%] flex flex-col items-center pt-6 max536:pt-0 gap-10">
      <div
        className={`w-[90%] bg-[#e1faf9] max536:bg-transparent max536:w-[100%]
        } rounded-3xl p-4 flex flex-col items-center max1050:w-[94vw]`}
      >
        <h2 className="pl-5 text-[1.4rem] max536:mb-3 max536:text-[1.7rem] sans-sarif max536:text-[bg-[#1b7571]] font-bold">
          Members List
        </h2>
        <div className="overflow-x-auto w-full">
          <ul className="relative pb-[3rem] w-full h-[calc(100vh-14rem)] flex flex-col max536:bg-[#1b7571] rounded-3xl items-center justify-start pt-6 max536:gap-3 max536:h-[calc(100vh-16rem)] max536:bg-gradient-to-b max536:from-[#dad7c6] max536:to-[#fdd00891]">
            <li
              className={`w-[100%] flex flex-col items-center justify-center p-2  max536:pt-5 max536:rounded-2xl`}
            >
              <div className="flex w-[98%] max1050:w-[100%] justify-between  mb-3 font-bold">
                <p className="overflow-hidden  max536:hidden">Name</p>
                <p className="overflow-hidden  max536:hidden">Country</p>
                <p className="overflow-hidden  max536:hidden">Email</p>
                <p className="overflow-hidden  max536:hidden">Phone</p>
                <p className="overflow-hidden  max536:hidden">Joining Date</p>
                <p className="overflow-hidden  max536:hidden">Attendance</p>
                <p className="overflow-hidden  max536:hidden">Due</p>
                <img src={UserNamePng} alt="" className="min536:hidden w-10 h-10" />
                <img src={DetailsPng} alt="" className="min536:hidden w-10 h-10 " />
                <img src={AttendancePng} alt="" className="min536:hidden w-10 h-10 " />
                <img src={DuePng} alt="" className="min536:hidden w-10 h-10" />
              </div>
            </li>
            <div className="overflow-auto max536:w-[96%] flex flex-col gap-4 w-[100%]">
              {Ctx.userList.slice(startIndex, endIndex).map((user, i) => {
                return (
                  <li
                    key={user.cognitoId}
                    className={`w-[100%] flex flex-col items-center justify-center p-2 max536:bg-[#1b7571]  max536:pt-6 max536:rounded-2xl Sansita max536:text-[0.8rem]`}
                  >
                    <div className="flex w-[100%] justify-between ">
                      <div className="flex w-[98%] max1050:w-[100%] justify-between mb-3 ">
                        <p className="w-[17%]">{user.userName}</p>
                        <p className="w-[10%]">{user.country}</p>
                        <p className="w-[20%]">{user.emailId}</p>
                        <p className="w-[19%]">{user.phoneNumber}</p>
                        <p className="w-[19%]">{formatDate(user.joiningDate)}</p>
                        <p className="w-[12%] overflow-hidden">
                          {user.currentMonthZPoints ? user.currentMonthZPoints : 0}/
                          {user.lastMonthZPoints ? user.lastMonthZPoints : 0}
                        </p>
                        <p className="w-[4%] ml-auto text-right">
                          {0}
                        </p>
                      </div>

                    </div>
                  </li>
                )
              })}
              <div className="absolute bottom-0 flex justify-center items-center w-full">
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={(event, value) => setCurrentPage(value)}
                  style={{ margin: "0 auto" }}
                />
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
