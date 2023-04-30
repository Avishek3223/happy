import React from "react";
import video from "../../Utils/Happy/images/backgroundvideo.mp4";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const Navigate = useNavigate();

  return (
    <div className="flex items-center justify-center ">
      <div className="absolute z-10 flex flex-col items-center w-screen content">
        <div className="w-[auto] text-left flex">
          <h1 className="w-full max1250:w-[50%] max536:w-[90vw] max800:w-[80%]  text-[5.7rem] max800:text-[3.8rem] max1250:text-[4.5rem] text-white ">
            Fitness at your fingertips
          </h1>
          {/* <h3 className="text-[3rem] text-white max800:text-[1.8rem] max1250:text-[2.5rem] JustAnotherHand">
          </h3> */}
        </div>
        {/* <p
          className="text-white text-[1.5rem] h-[2rem] border-[2px] font-Russo border-white flex justify-center items-center rounded-3xl mt-8 px-14 py-6 hover:bg-[#225c59] hover:border-[#225c59] max800:py-2 max800:px-6 max800:mt-4 max800:text-[1rem] max800:rounded-md"
          onClick={() => {
            Navigate("/subscription");
          }}
        >
          Enroll Now
        </p> */}
      </div>
      <div className="-z-10">
        <video
          autoPlay
          loop
          muted
          playsInline={true}
          controls={false}
          className="object-cover w-screen max536:h-screen max-w-screen"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Header;
