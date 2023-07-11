import React, { useContext, useState } from "react";
import { Auth } from "aws-amplify";
import NavBar from "../Components/NavBar";
import DanceAuth from "../Utils/Png/danceAuth.png";
import Context from "../Context/Context";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [isCode, setIsCode] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState(0);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [err, setErr] = useState("");
  const UtilCtx = useContext(Context).util;

  const Navigate = useNavigate();

  const form1Validator = () => {
    if (!(email.includes("@") && email.includes("."))) {
      setErr("Enter a Valid Email");
      return false;
    } else {
      setErr("");
      return true;
    }
  };

  const form2Validator = () => {
    if (confirmationCode.length === 0) {
      setErr("Enter a Valid Code");
      return false;
    } else if (password.length < 8) {
      setErr("Password is too Short");
      return false;
    } else if (password !== confirmPassword) {
      setErr("Password Doesn't Match");
      return false;
    } else {
      setErr("");
      return true;
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      if (form1Validator()) {
        await Auth.forgotPassword(email);
        setIsCode(true);
      }
    } catch (e) {
      setErr(e.message);
    }
  };

  const passwordVisibilityChange = () => {
    setPasswordVisible((i) => !i);
  };

  const onConfirmationSubmit = async (event) => {
    event.preventDefault();

    UtilCtx.setLoader(true);

    try {
      if (form2Validator()) {
        await Auth.forgotPasswordSubmit(email, confirmationCode, password);
        UtilCtx.setLoader(false);
        alert("Password Changed");
        Navigate("/login");
      } else {
        UtilCtx.setLoader(false);
      }
    } catch (e) {
      setErr(e.message);
      UtilCtx.setLoader(false);
    }
  };

  const form1 = () => {
    return (
      <form className="w-[50vw] max800:w-[90vw]  max-w-[35rem] bg-[#FFFFFF] shadow-2xl rounded-2xl p-4 flex flex-col items-center ">
        <h3 className="text-[1.2rem]">Forgot Password</h3>
        <ul className="flex flex-col items-center">
          <li className="flex items-center gap-20 mt-8 max500:flex-col max500:gap-2 max500:items-start">
            <label className="w-20 max500:ml-3">Email</label>
            <input
              className="border-[0.02rem] px-3 py-2 border-black shadow-xl rounded-2xl max500:w-[80vw]"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </li>
        </ul>
        {err && <p className="text-[0.8rem] mt-2 text-red-500">{err}</p>}
        <button
          className={`p-4 py-1 mt-6 mb-3 bg-[#1b7571] text-white rounded-lg`}
          onClick={onSubmit}
        >
          Send Code
        </button>
      </form>
    );
  };

  const form2 = () => {
    return (
      <form className="w-[30%]  max-w-[35rem] bg-[#FFFFFF] shadow-2xl rounded-2xl p-4 flex flex-col items-center">
        <h3 className="text-[1.2rem]">Sign Up</h3>
        <p className="mt-3 text-[0.9rem]">Code Sent to {email}</p>
        <ul className="flex flex-col items-center">
          <li className="flex items-center gap-20 mt-5">
            <label className="w-20">Code</label>
            <input
              className="border-[0.02rem] px-3 py-2 border-black shadow-xl rounded-2xl"
              value={confirmationCode === 0 ? "" : confirmationCode}
              onChange={(e) => {
                setConfirmationCode(e.target.value);
              }}
            />
          </li>
          <li className="flex items-center gap-20 mt-6 max500:flex-col max500:gap-2 max500:items-start">
            <label className="w-20 max500:ml-3">Password</label>
            <input
              className="border-[0.02rem] px-3 py-2 border-black shadow-xl rounded-2xl max500:w-[80vw]"
              type={"password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </li>
          <li className="flex items-center gap-20 mt-6 max500:flex-col max500:gap-2 max500:items-start relative">
            <label className="w-20 max500:ml-3">Confirm Password</label>
            <input
              className="border-[0.02rem] px-3 py-2 border-black shadow-xl rounded-2xl max500:w-[80vw]"
              type={!passwordVisible && "password"}
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            {passwordVisible ? (
              <AiFillEye
                onClick={passwordVisibilityChange}
                className="absolute right-4 "
                size={"1.25rem"}
              />
            ) : (
              <AiFillEyeInvisible
                onClick={passwordVisibilityChange}
                className="absolute right-4 "
                size={"1.25rem"}
              />
            )}
          </li>
        </ul>
        {err && <p className="text-[0.8rem] mt-2 text-red-500">{err}</p>}
        <button
          className="p-4 py-1 mt-6 mb-3 bg-[#1b7571] rounded-lg text-white"
          onClick={onConfirmationSubmit}
        >
          Confirm code
        </button>
      </form>
    );
  };

  return (
    <div className="w-screen min-h-screen bg-[#f0efef]">
      <NavBar />
      <div className="flex flex-col items-center mt-6 text-black">
        <h3 className="text-[2rem]">FITNESS</h3>
        <div className="w-[80%] h-[0.08rem] bg-black flex"></div>
        <div className="flex w-[100%] gap-16 justify-center items-end mt-16 ">
          {!isCode ? form1() : form2()}
          <img src={DanceAuth} alt="Dance" className="w-[20%] max800:hidden" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
