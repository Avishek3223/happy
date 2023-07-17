import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../Utils/Happy/images/logo.png";
import MenuPng from "../Utils/images/NavBar/Menu.svg";
import CrossPng from "../Utils/images/NavBar/cross.png";
import Context from "../Context/Context";
import { useLocation } from "react-router-dom";
import "./nav.css"

const NavBar = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const UserCtx = useContext(Context);

  const Navigate = useNavigate();
  const location = useLocation();

  const { checkSubscriptionStatus } = useContext(Context);

  // Content for the main top navigation bar
  const navBarContent = [
    { label: "HOME", path: "/" },
    { label: "ABOUT US", path: "/aboutus" },
    { label: "INSTRUCTOR", path: "/instructor" },
  ];

  return (
    <div
      className={`h-8  ${location.pathname === "/dashboard" ? "max536:h-[5rem]  max536:mt-0" : ""
        } `}
    >
      <div className="flex z-20 fixed items-center justify-between text-white w-screen bg-black border-b border-[#1b7571]  h-[3.8rem] px-10 left-0 max536:bg-black">
        <a
          href="/"
          className={`logo bg-[#fff] w-[8rem] h-[2.4rem] rounded-xl flex items-center justify-center  ${location.pathname === "/dashboard" ? "max536:hidden" : ""
            }`}
        >
          <img
            className="relative rounded-301xl w-full p-1 h-[2rem] shrink-0 object-contain"
            alt=""
            src={logo}
          />
        </a>
        {/* Main Top Nav Bar */}
        <ul className="flex gap-6  max800:hidden font-poppins  ">
          {/* Render menu items dynamically */}
          {navBarContent.map((item) => (
            <li
              key={item.path}
              className="flex items-center justify-center hover:text-[#1b7571] "
            >
              <p
                className="cursor-pointer"
                onClick={() => {
                  Navigate(item.path);
                }}
              >
                {item.label}
              </p>
            </li>
          ))}
          <p className="max800:hidden flex items-center justify-center p-0 m-0">
            {UserCtx.isAuth ? (
              <span
                onClick={() => {
                  Navigate("/dashboard");
                }}
                style={{ borderColor: checkSubscriptionStatus.borderColor }}
                className="cursor-pointer  max800:hidden w-[10rem] text-center mr-10  p-2 py-1 border-solid border-2 border-[#1b7571] rounded-md "
              >
                {UserCtx.userData.userName.split(" ")[0]}
              </span>
            ) : (
              <button
                className="max800:hidden  p-2 py-1 bg-[#1b7571] w-[6.5rem] h-[2.63rem] rounded-md text-white font-sans"
                onClick={() => {
                  Navigate("/login");
                }}
              >
                Login
              </button>
            )}
          </p>
        </ul>
        {/* Second NavBar */}
        <div
          className={`relative min800:hidden max800:block w-[auto] ${location.pathname === "/dashboard" ? "max536:hidden" : ""
            }`}
          onClick={() => {
            setIsNavActive(!isNavActive);
          }}
        >
          <AiOutlineMenu color={"white"} />
          {isNavActive && (
            <ul className="bg-black shadow-lg w-[10rem] absolute top-[1.6rem] right-0 z-40">
              {/* Render menu items dynamically */}
              {navBarContent.map((item) => (
                <li
                  key={item.path}
                  className="flex items-center justify-center h-10   "
                  onClick={() => {
                    Navigate(item.path);
                  }}
                >
                  {item.label}
                </li>
              ))}
              {UserCtx.isAuth ? (
                <li
                  className="flex items-center justify-center h-10 overflow-hidden   hover:bg-[#1b7571] "
                  onClick={() => {
                    Navigate("/dashboard");
                  }}
                >
                  {UserCtx.userData.userName.split(" ")[0]}
                </li>
              ) : (
                <li
                  className="flex items-center justify-center h-10  hover:bg-[#1b7571] "
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
        {/* Mobile Navbar */}
        <div className={`min536:hidden max536:fixed top-0 left-0 z-40 bg-black`}>
          {isNavActive ? (
            <img
              src={CrossPng}
              alt=""
              className={` fixed top-10 right-6 z-60 cursor-pointer h-8 bg-[#1b7571]`}
              onClick={() => {
                setIsNavActive(!isNavActive);
              }}
            />
          ) : (
            <img
              src={MenuPng}
              alt=""
              className={`${location.pathname !== "/dashboard"
                ? "max536:hidden max536:bg-white"
                : ""
                } fixed top-4 right-6 z-60 cursor-pointer h-8 bg-transparent   `}
              onClick={() => {
                setIsNavActive(!isNavActive);
              }}
            />
          )}
          {isNavActive && (
            <div className="bg-[#1b7571] z-40  h-screen w-screen text-white sans-sarif text-[1.8rem]">
              <ul className="pt-24 flex flex-col items-start px-24 gap-8">
                {/* Render menu items dynamically */}
                {navBarContent.map((item) => (
                  <li
                    key={item.path}
                    className="flex items-center justify-center cursor-pointer text-white"
                    onClick={() => {
                      Navigate(item.path);
                    }}
                  >
                    {item.label}
                  </li>
                ))}
                {UserCtx.isAuth ? (
                  <li
                    className="flex items-center justify-center h-10 cursor-pointer border-b border-white overflow-hidden "
                    onClick={() => {
                      Navigate("/dashboard");
                    }}
                  >
                    {UserCtx.userData.userName.split(" ")[0]}
                  </li>
                ) : (
                  <li
                    className="flex items-center justify-center h-10 cursor-pointer border-b border-white "
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
