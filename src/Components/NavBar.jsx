import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../Utils/Happy/images/logo.png";
import MenuPng from "../Utils/images/NavBar/Menu.svg";
import CrossPng from "../Utils/images/NavBar/cross.png";
import Context from "../Context/Context";
import { useLocation } from "react-router-dom";
// import { Link } from "react-scroll";
// import "./Nav.css"

const NavBar = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const UserCtx = useContext(Context);

  const Navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className={`   h-8  ${
        location.pathname === "/dashboard" ? "max536:h-auto  max536:mt-16" : ""
      } `}
    >
      <div className="flex z-20 fixed items-center justify-between  w-screen bg-[#1b7571]  h-[3.8rem] px-4 left-0 max536:bg-black">
      <a
      href="/"
      className={`logo bg-[#fff] w-[8rem] h-[2.4rem] rounded-xl flex items-center justify-center   ${
        location.pathname === "/dashboard" ? "max536:hidden" : ""
      }`}
    >
      <img className="w-[5rem]  " src={logo} alt="" />
    </a>
        <ul className="flex gap-6 max800:hidden text-white  ">
          <li className="flex items-center justify-center  hover:text-[#225c59] ">
            <p
              className="cursor-pointer"
              onClick={() => {
                Navigate("/");
              }}
            >
              HOME
            </p>
          </li>
          <li className="flex items-center justify-center cursor-pointer hover:text-[#225c59]">
            <p
              className="cursor-pointer"
              onClick={() => {
                Navigate("/aboutus");
              }}
            >
              ABOUT US
            </p>
          </li>
         
          <li className="flex items-center justify-center h-10 cursor-pointer hover:text-[#225c59] ">
            <p
              className="cursor-pointer"
              onClick={() => {
                Navigate("/instructor");
              }}
            >
              INSTRUCTOR
            </p>
          </li>
        </ul>
        <a className="max800:hidden flex items-center justify-center p-0 m-0">
          {UserCtx.isAuth ? (
            <p
              onClick={() => {
                Navigate("/dashboard");
              }}
              className="cursor-pointer text-white max800:hidden w-[10rem] text-center mr-10  p-2 py-1 border-solid border-2 border-[#225c59] rounded-md "
            >
              {UserCtx.userData.userName}
            </p>
          ) : (
            <button
              className="max800:hidden ml-[6rem] p-2 py-1 bg-[#225c59] rounded-md text-white"
              onClick={() => {
                Navigate("/login");
              }}
            >
              Login
            </button>
        
          )}
        </a>
        <div
          className={`relative min800:hidden max800:block w-[auto] ${
            location.pathname === "/dashboard" ? "max536:hidden" : ""
          }`}
          onClick={() => {
            setIsNavActive(!isNavActive);
          }}
        >
          <AiOutlineMenu color={"white"} />
          {isNavActive && (
            <ul className="bg-white shadow-lg w-[10rem] absolute top-[1.6rem] right-0 z-40">
              <li className="flex items-center justify-center h-10   ">
                <p
                  className="cursor-pointer hover:bg-[#225c59] "
                  onClick={() => {
                    Navigate("/");
                  }}
                >
                  Home
                </p>
              </li>
              <li className="flex items-center justify-center h-10  hover:bg-[#225c59]">
                <p
                  className="cursor-pointer"
                  onClick={() => {
                    Navigate("/aboutus");
                  }}
                >
                  About Us
                </p>
              </li>
              
              <li className="flex items-center justify-center h-10  hover:bg-[#225c59]">
                <p
                  className="cursor-pointer"
                  onClick={() => {
                    Navigate("/instructor");
                  }}
                >
                  Instructor
                </p>
              </li>
              {UserCtx.isAuth ? (
                <li
                  className="flex items-center justify-center h-10  hover:bg-[#225c59] "
                  onClick={() => {
                    Navigate("/dashboard");
                  }}
                >
                  {UserCtx.userData.userName}
                </li>
              ) : (
                <li
                  className="flex items-center justify-center h-10  hover:bg-[#225c59] "
                  onClick={() => {
                    Navigate("/login");
                  }}
                >
                  Login
                </li>
              )}
            </ul>
          )}
        </div>
        <div
          className={`min536:hidden max536:fixed top-0 left-0 z-40 bg-black`}
        >
          {/* <div
        className={`min536:hidden max536:fixed top-0 left-0 z-40 bg-black  ${
          location.pathname !== "/dashboard" ? "max536:hidden" : ""
        }`}
      > */}
          {isNavActive ? (
            <img
              src={CrossPng}
              alt=""
              className={` fixed top-10 right-6 z-60 cursor-pointer h-8 bg-[#0DB3E8]`}
              onClick={() => {
                setIsNavActive(!isNavActive);
              }}
            />
          ) : (
            <img
              src={MenuPng}
              alt=""
              className={`${
                location.pathname !== "/dashboard"
                  ? "max536:hidden max536:bg-black"
                  : ""
              } fixed top-10 right-6 z-60 cursor-pointer h-8 bg-black `}
              onClick={() => {
                setIsNavActive(!isNavActive);
              }}
            />
          )}
          {/* <div
          className={`min536:hidden max536:fixed top-0 left-0 ${
            isNavActive ? "h-screen w-screen " : ""
          }`}
        ></div> */}
          {isNavActive && (
            <div className="bg-[#0DB3E8] h-screen w-screen text-white RussoOne text-[1.8rem]">
              <ul className="pt-24 flex flex-col items-start px-24 gap-8">
                <li className="flex items-center justify-center  hover:text-[#225c59]">
                  <p
                    className="cursor-pointer"
                    onClick={() => {
                      Navigate("/");
                    }}
                  >
                    HOME
                  </p>
                </li>
                <li className="flex items-center justify-center   hover:text-[#225c59]">
                  <p
                    className="cursor-pointer"
                    onClick={() => {
                      Navigate("/aboutus");
                    }}
                  >
                    About Us
                  </p>
                </li>
                
                <li className="flex items-center justify-center   hover:text-[#225c59]">
                  <p
                    className="cursor-pointer"
                    onClick={() => {
                      Navigate("/instructor");
                    }}
                  >
                    Instructor
                  </p>
                </li>
                {UserCtx.isAuth ? (
                  <li
                    className="flex items-center justify-center h-10 cursor-pointer hover:bg-[#225c59]"
                    onClick={() => {
                      Navigate("/dashboard");
                    }}
                  >
                    {UserCtx.userData.userName}
                  </li>
                ) : (
                  <li
                    className="flex items-center justify-center cursor-pointer text-white hover:bg-[#225c59]"
                    onClick={() => {
                      Navigate("/login");
                    }}
                  >
                    Login
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
