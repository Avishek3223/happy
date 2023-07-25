import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";
import UsersListMobile from "./UsersListMobile";
import { useContext } from "react";
import Context from "../../Context/Context";
import './UsersList.css'
import UserNamePng from "../../Utils/images/UsersList/userName.png";
import DetailsPng from "../../Utils/images/UsersList/details.png";
import DuePng from "../../Utils/images/UsersList/due.png";
import AttendancePng from "../../Utils/images/UsersList/attendance.png";
import Pagination from "@mui/material/Pagination";
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftBanner from "./LeftBanner";

const UsersList = () => {
  const Ctx = useContext(Context);
  const [userStatus, setUserStatus] = useState("all"); 

  const filterUsersByStatus = (status) => {
    if (status === "all") {
      return Ctx.userList; 
    }
    return Ctx.userList.filter((user) => user.status === status);
  };

  const availableStatuses = ["all", ...Array.from(new Set(Ctx.userList.map((user) => user.status)))];


  console.log(availableStatuses);

  const isMobileScreen = useMediaQuery('(max-width: 600px)');

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(Ctx.upcomingClasses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
  const [searchQuery, setSearchQuery] = useState(""); // Step 1: Add state for the search query

  const formatDate = (epochDate) => {
    const date = new Date(epochDate);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // Step 2: Implement the search functionality
  const filter2 = filterUsersByStatus(userStatus)
  const filteredUserList = filter2
    .filter((user) => {
      return (
        user.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.emailId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.phoneNumber.includes(searchQuery)
      );
    })
    .slice(startIndex, endIndex);
    // .sort((a, b) => {
    //   if (sortConfig.key !== "") {
    //     const sortKey = sortConfig.key;
    //     if (a[sortKey] < b[sortKey]) {
    //       return sortConfig.direction === "ascending" ? -1 : 1;
    //     }
    //     if (a[sortKey] > b[sortKey]) {
    //       return sortConfig.direction === "ascending" ? 1 : -1;
    //     }
    //   }
    //   return 0;
    // });
    const selectedUser = null;
  

  return (
    <>
      {isMobileScreen ? (
        <UsersListMobile />
      ) : (
        <div className="w-[100%] flex flex-col items-center pt-6 max536:pt-0 gap-10">
           <div className="flex ml-[67%]">
              <div className="w-[95%] flex justify-end m-[0.8rem] gap-3">
                <label className="font-bold" htmlFor="userStatusFilter">
                  User Status:
                </label>
                <select
                  className="rounded-[0.51rem] px-4 bg-[#c3f3f1]"
                  id="userStatusFilter"
                  value={userStatus}
                  onChange={(e) => setUserStatus(e.target.value)}
                >
                  {availableStatuses.map((status) => (
                    <option key={status} value={status}>
                      {status === "all" ? "All" : status}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          <div className={`w-[85%] bg-[#c3f3f1] max536:bg-transparent max536:w-[100%] rounded-3xl p-4 flex flex-col items-center max1050:w-[94vw] mx-[2.5%]`}>
            <h2 className="pl-5 font-sans text-[1.4rem] max536:mb-3 max536:text-[1.7rem] sans-serif max536:text-[bg-[#1b7571]] font-bold">
              Members List
            </h2>

            {/* Step 4: Create and integrate the search bar */}
            <div className="flex w-[94.5%] max1050:w-[30rem] bg-[#c3f3f1] rounded-md overflow-hidden gap-2">
            <input
              className="flex-1 p-2 outline-none rounded-md"
              type="text"
              placeholder="Search members by name, email or phone no."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="bg-[#1b7571] text-white p-2 rounded-md w-20 "
              onClick={() => setSearchQuery("")}
            >
              Clear
            </button>
          </div>

            <div className="overflow-x-auto w-full">
              <ul className="relative pb-[3rem] w-[95%] max-w-[1700px] mx-auto flex flex-col max536:bg-[#1b7571] rounded-3xl items-center justify-start pt-6 max536:gap-3 max536:h-[calc(100vh-16rem)] max536:bg-gradient-to-b max536:from-[#dad7c6] max536:to-[#fdd00891]">
                <li className="w-full flex flex-col items-center justify-center p-2 max536:pt-5 max536:rounded-2xl">
                  <div className="d-flex justify-content-between w-[98%] max1050:w-[100%] mb-3 font-bold">
                    <div className="w-[15%]">Name</div>
                    <div className="w-[13%] email-hover" onClick={() => requestSort("email")} style={{ cursor: "pointer" }}>
                      Email
                    </div>
                    <div className="w-[15%]  font-sans ml-[4.5rem] ">Phone</div>
                    <div className="w-[14%]  font-sans mr-2">Country</div>
                    <div className="w-[14%] font-sans ">Joining Date</div>
                    <div className="w-[14%] font-sans ">Attendance</div>
                    <div className="w-[4%]  font-sans absolute right-[0rem]">Due</div>
                    <div className="w-10  font-sans h-10">
                      <img src={UserNamePng} alt="" className="min536:hidden w-full h-full" />
                    </div>
                    <img src={UserNamePng} alt="" className="min536:hidden w-10 h-10" />
                    <img src={DetailsPng} alt="" className="min536:hidden w-10 h-10 " />
                    <img src={AttendancePng} alt="" className="min536:hidden w-10 h-10 " />
                    <img src={DuePng} alt="" className="min536:hidden w-10 h-10" />
                  </div>
                </li>
                <div className="overflow-auto max536:w-[96%] w-full">
                  {filteredUserList.map((user, i) => {
                    return (
                      <li
                        key={user.cognitoId}
                        className={`w-full flex flex-col gap-[4px] items-center justify-center p-2 max536:bg-[#1b7571]  max536:pt-6 max536:rounded-2xl Sansita max536:text-[0.8rem]`}
                      >
                        <div className="flex justify-between w-[100%]">
                          <div className="w-[18%] font-[400] font-sans truncate">{user.userName}</div>
                          <div className="w-[16%] font-[400] font-sans email-hover" onClick={() => requestSort("email")} style={{ cursor: "pointer" }} title={user.emailId}>
                            {user.emailId.split("@")[0]}@
                          </div>
                          <div className="w-[15%] font-[400] font-sans ml-[4.2rem]">{user.phoneNumber}</div>
                          <div className="w-[18%] ml-4 font-[400] font-sans max536:hidden">{user.country}</div>
                          <div className="w-[16%] font-[400] font-sans">{formatDate(user.joiningDate)}</div>
                          <div className="w-[15%] font-[400] font-sans overflow-hidden">
                            {user.currentMonthZPoints ? user.currentMonthZPoints : 0}/{user.lastMonthZPoints ? user.lastMonthZPoints : 0}
                          </div>
                          <div className="w-[4%] rounded px-2 bg-[#1b7571] text-center ">{0}</div>
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
      )}
        {selectedUser && (
      <LeftBanner
        attendance={selectedUser.currentMonthZPoints || 0}
        due={selectedUser.lastMonthZPoints || 0}
      />
    )}
    </>
  );
};

export default UsersList;

