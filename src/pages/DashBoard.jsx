import React, { useState } from "react";
import Choreography from "../Components/DashBoard/Choreography";
import LeftBanner from "../Components/DashBoard/LeftBanner";
import PreviousSessions from "../Components/DashBoard/PreviousSessions";
// import ProfileCard from "../Components/DashBoard/ProfileCard";
import ProfileUpdate from "../Components/DashBoard/ProfileUpdate";
import UpcomingSessions from "../Components/DashBoard/UpcomingSessions";
import UsersList from "../Components/DashBoard/UsersList";
import NavBar from "../Components/NavBar";

const DashBoard = () => {
  const [click, setClick] = useState(0);
  // const [displayProfile, setDisplayProfile] = useState(false);

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

  // const toggleProfile = () => {
  //   setDisplayProfile(!displayProfile);
  // };

  return (
    <div className="flex flex-col items-center w-screen min-h-screen overflow-auto ">
      <NavBar />
      <div className="w-[calc(100vw-1rem)] ml-4 rounded-3xl flex max1050:w-screen max1050:ml-0  max536:rounded-none max536:mt-10 ">
        <LeftBanner
          displayAfterClick={(data) => {
            setClick(data);
          }}
        />
        <div className="flex flex-col w-[100%] pt-8 max536:pt-0">
          {/* {click !== 2 && (
            <div className="flex justify-end w-[93%]">
              <span className="relative z-10 w-12 h-12 bg-red-500 rounded-xl">
                <img
                  alt="profile"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyuNFyw05KSucqjifL3PhDFrZLQh7QAS-DTw&usqp=CAU80-804949_profile-icon-for-the-politics-category-circle-hd.png"
                  className="w-12 h-12 rounded-xl"
                  onClick={toggleProfile}
                />
                {displayProfile && <ProfileCard />}
              </span>
            </div>
          )} */}
          {displayAfterClick()}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
