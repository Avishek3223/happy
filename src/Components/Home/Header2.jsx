import React from "react";

import anup from "../../Utils/Assests/Anup_1.png";
import "./New.css";



const Header2 = () => {
  return (
    <div 
      className="New	flex justify-between max600:h-[75rem]  h-[52rem] w-[auto] relative pt-[3.5rem] pb-20 pr-5 pl-5 max600:flex-col max600:mx-0 max600:items-start
     max600:m-0 max600:w-[90vw] overflow-hidden max800:gap-[2rem]"
    >
      <div className="p-10 flex flex-col max600:items-center  justify-between bg-transparent border-y-[0.4rem] rounded-tl-lg rounded-bl-lg border-l-[0.4rem] border-[#225c59] w-[40vw] h-[45rem] max600:h-auto max600:border-0 max600:w-[100%] max600:gap-12">
        <div className="w-[20rem] max800:w-[14rem] max600:w-[100%]">
          <h1 className="text-[2rem] max800:text-[1.5rem] max600:text-[1.6rem]">
            Instructor Training
          </h1>
          <ul className="max800:text-[0.8rem] list-disc">
          <li>Online and In-person training
          BWORKZ is approved by ACE</li>  
          <li>Learn how to conduct a Bollywood inspired class with 40 unique
          core basics.</li> 
          <li>Master the technical nuances of key dance steps and learn how
          to impart this knowledge to your students.</li> 
          <li>Learn how to provide a safe and effective BWORKZ class.</li> 
          <li>Learn how to choose a playlist for your class.</li> 
          <li>Learn how to open & close the session with key components like
          Warm up & Cooldown.</li> 
          <li>Understand the importance of connecting with, inspiring, and
          motivating your students.</li> 
          </ul>
        </div>
<div className="w-[20rem] max800:w-[14rem] max600:w-[100%]">
          <h1 className="text-[2rem] max800:text-[1.5rem] max600:text-[1.6rem] ">
            Jam Sessions
          </h1>
          <ul className="max800:text-[0.8rem] list-disc">
            <li>Regular free weekely online jam sessions </li>
            <li> Practice new choreography with fellow instructors</li>
            <li>Get integrated with instructor community</li>
            <li>Get feedback from fellow instructors</li>
          </ul>
        </div>
        
      </div>

      <div className="Over p-10 flex flex-col max600:items-center max600:pt-0 gap-[17rem] items-end bg-transparent border-y-[0.4rem] rounded-tr-lg rounded-br-lg border-r-[0.4rem] border-[#225c59] w-[40vw] h-[45rem]  max600:h-auto max600:border-0 max600:w-[100%]  max800:gap-[15rem] ">
        <div className="w-[20rem]  max800:w-[14rem] max600:w-[100%]">
          <h1 className="text-[2rem] max800:text-[1.5rem] max600:text-[1.6rem]  max950:pl-[3rem] max600:pl-0">
            Instructor License
          </h1>
          <ul className="max800:text-[0.8rem] list-disc max950:pl-[2rem] max600:pl-0">
            <li>
              License is valid as long as you stay as an active subscriber
            </li>
            <li>
              You are allowed to use any BWORKZ choreography in your in person
              classes
            </li>
            <li>
              ACE certified license is accepted in most 
              of the gymnasiums in USA and Canada
            </li>
          </ul>
        </div>  <div className="w-[20rem] max800:w-[14rem] max600:w-[100%]">
            <h1 className="text-[2rem] max800:text-[1.5rem] max600:text-[1.6rem]  max950:pl-[3rem] max600:pl-0">
              Other Benefits
            </h1>
            <ul className="max800:text-[0.8rem] list-disc max950:pl-[3rem] max600:pl-0">
              <li>Access to new choreographies</li>
              <li> Recorded class Names</li>
              <li>Free Profile Web Page</li>
              <li>
                Regular Choreography classes with
                 Anupam and other senior instructors
              </li>
            </ul>
          </div>
        
      </div>

      <img
        src={anup}
        className="xs:block hidden absolute left-[51.9%] -translate-x-[60%] w-[32vw] max1078:-left-[50.9%]  borderbox-hidden bottom-[-39px] max1920:bottom-[-52px]"
        alt=""
      />
    </div>
  );
};

export default Header2;
