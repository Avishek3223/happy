import React, { useState } from "react";
import Choreography from "../Components/DashBoard/Choreography";
import LeftBanner from "../Components/DashBoard/LeftBanner";
import PreviousSessions from "../Components/DashBoard/PreviousSessions";
import ProfileUpdate from "../Components/DashBoard/ProfileUpdate";
import UpcomingSessions from "../Components/DashBoard/UpcomingSessions";
import UsersList from "../Components/DashBoard/UsersList";
import NavBar from "../Components/NavBar";

const DashBoard = () => {
  const [click, setClick] = useState(0);

  const displayAfterClick = () => {
    switch (click) {
      case 0:
        return <UpcomingSessions />;

      case 1:
        return <PreviousSessions />;

      case 2:
        return <Choreography />;

      case 3:
        return <ProfileUpdate />;

      case 4:
        return <UsersList />;

      default:
        return <div></div>;
    }
  };

  return (
    <div
      className="flex flex-col items-center w-screen pb-[5rem] min-h-screen "
      style={{ minHeight: "100vh" }}
    >
      <NavBar />
      <div className="w-[calc(100vw-1rem)] ml-4 rounded-3xl flex max1050:w-screen max1050:ml-0 h-full max536:rounded-none max536:mt-10 overflow-auto">
        <LeftBanner
          displayAfterClick={(data) => {
            setClick(data);
          }}
        />
        <div className="flex flex-col w-[100%] pt-8 max536:pt-0">
          {displayAfterClick()}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
