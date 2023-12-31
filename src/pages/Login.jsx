import React, { useContext, useState } from "react";
import { API, Auth } from "aws-amplify";
import NavBar from "../Components/NavBar";
import Context from "../Context/Context";
import DanceAuth from "../Utils/Png/danceAuth.png";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const UtilCtx = useContext(Context).util;
  const UserCtx = useContext(Context);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const passwordVisibilityChange = () => {
    setPasswordVisible((i) => !i);
  };

  const Navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();

    UtilCtx.setLoader(true);

    try {
      const user = await Auth.signIn(email, password);

      if (user) {
        const userdata = await API.get("user", "/user/profile/happyprancer");
        UserCtx.setUserData(userdata);
        UserCtx.setIsAuth(true);
        UtilCtx.setLoader(false);
        alert("Logged In");
        console.log(userdata.status);

        if (userdata.status.trim() === "Active") {
          Navigate("/dashboard");
        } else {
          Navigate("/subscription");
        }
      } else {
        setErr("Incorrect email and password");
        UtilCtx.setLoader(false);
      }
    } catch (e) {
      if (e.toString().split(" code ")[1]?.trim() === "404") {
        console.log("User Not Found");
        alert("You Must Sign Up First and use the same email and password");
        Navigate("/signup?newuser=false");
        setErr("");
      } else {
        setErr(e.message);
      }
      UtilCtx.setLoader(false);
    }
  };

  return (
    <div className="w-screen min-h-screen bg-[#f0efef]">
      <NavBar />
      <div className="flex flex-col items-center mt-12 text-black">
        <h3 className="text-[2rem]">FITNESS</h3>
        <div className="w-[80%] h-[0.08rem] bg-black flex"></div>
        <div className="flex w-[100%] gap-16 justify-center items-end mt-40">
          <form className="w-[50vw] max800:w-[90vw]  max-w-[35rem] bg-[#FFFFFF] shadow-2xl rounded-2xl p-4 flex flex-col items-center ">
            <h3 className="text-[1.2rem] font-roboto font-bold">Login</h3>
            <ul className="flex flex-col items-center">
              <li className="flex gap-20 mt-8  max500:flex-col max500:gap-2 max500:items-start">
                <label className="w-20  max500:ml-3">Email</label>
                <input
                  className="border-[0.02rem] px-3 py-2 border-black shadow-xl rounded-2xl max500:w-[80vw]"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </li>
              <li className="flex items-center gap-20 mt-6 max500:flex-col max500:gap-2 max500:items-start relative">
                <label className="w-20 max500:ml-3">Password</label>
                <div className="relative">
                  <input
                    className="border-[0.02rem] px-3 py-2 border-black shadow-xl rounded-2xl max500:w-[80vw]"
                    type={passwordVisible ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {passwordVisible ? (
                    <AiFillEye
                      onClick={(e) => {
                        e.stopPropagation();
                        passwordVisibilityChange();
                      }}
                      className="absolute top-2 right-4 cursor-pointer"
                      size={"1.25rem"}
                    />
                  ) : (
                    <AiFillEyeInvisible
                      onClick={(e) => {
                        e.stopPropagation();
                        passwordVisibilityChange();
                      }}
                      className="absolute top-2 right-4 cursor-pointer"
                      size={"1.25rem"}
                    />
                  )}
                </div>
              </li>
            </ul>
            <p
              className="text-blue-600 text-[0.7rem] mt-6 cursor-pointer"
              onClick={() => {
                Navigate("/forgotpassword");
              }}
            >
              Forgot Password?
            </p>
            {err && <p className="text-[0.8rem] mt-2 text-red-500">{err}</p>}

            <button
              className="p-4 py-1 mt-8 mb-3 bg-[#225c59] text-white rounded-lg"
              onClick={onSubmit}
            >
              Login
            </button>
            <p
              className="text-green-600 cursor-pointer"
              onClick={() => {
                Navigate("/signup");
              }}
            >
              Create a New Account
            </p>
          </form>
          <img src={DanceAuth} alt="Dance" className="w-[20%] max800:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Login;
