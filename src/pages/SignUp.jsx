import React, { useContext, useState, useEffect } from "react";
import { Auth, API } from "aws-amplify";
import NavBar from "../Components/NavBar";
import DanceAuth from "../Utils/Png/danceAuth.png";
import Context from "../Context/Context";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newUser, setNewUser] = useState(null);
  const [confirmationCode, setConfirmationCode] = useState(0);
  const [err, setErr] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isNewUser, setIsNewUser] = useState(true);

  const UtilCtx = useContext(Context).util;
  const UserCtx = useContext(Context);
  const Navigate = useNavigate();

  const [counter, setCounter] = useState(60); // Timer counter
  const [resendVisible, setResendVisible] = useState(false); // Resend OTP visibility

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("newuser") === "false") {
      setIsNewUser(false);
    }
  }, []);

  // Function to handle resend OTP
  const resendOTP = async (event) => {
    event.preventDefault();
    try {
      if (email) {
        await Auth.resendSignUp(email);
        setCounter(60); // Reset the timer
        setResendVisible(false); // Hide the resend button
        setErr("OTP resent successfully."); // Provide appropriate feedback to the user
      } else {
        setErr("Please enter your email address."); // Provide appropriate feedback to the user
      }
    } catch (error) {
      setErr(error.message); // Handle any error occurred during the resend process
    }
  };

  useEffect(() => {
    let timer = null;
    if (counter > 0) {
      timer = setInterval(
        () => setCounter((prevCounter) => prevCounter - 1),
        1000
      );
    } else {
      setResendVisible(true); // Display the resend button when timer reaches 0
    }

    return () => {
      clearInterval(timer);
    };
  }, [counter]);

  const passwordVisibilityChange = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const form1Validator = () => {
    if (name.length === 0) {
      setErr("Enter the Name");
      return false;
    } else if (phoneNumber.length < 10) {
      setErr("Enter a Valid Phone Number");
      return false;
    } else if (!(email.includes("@") && email.includes("."))) {
      setErr("Enter a Valid Email");
      return false;
    } else if (country.length === 0) {
      setErr("Enter a Country Name");
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

  const form2Validator = () => {
    if (confirmationCode.length === 0) {
      setErr("Enter a Valid Code");
      return false;
    } else {
      setErr("");
      return true;
    }
  };

  const userExistSignUp = async () => {
    try {
      console.log("Sign in");
      await Auth.signIn(email, password);
      console.log("post");
      await API.post("user", "/user/profile/happyprancer", {
        body: {
          emailId: email,
          userName: name,
          phoneNumber: phoneNumber,
          country: country,
        },
      });
      const userdata = await API.get("user", "/user/profile/happyprancer");
      //Temporary
      // userdata.Status = true;
      UserCtx.setUserData(userdata);
      UserCtx.setIsAuth(true);
      UtilCtx.setLoader(false);
      alert("Signed Up");
      if (userdata.status === "Active") {
        Navigate("/dashboard");
      }
      Navigate("/subscription");
    } catch (error) {
      UtilCtx.setLoader(false);
      console.log("Error:", error.message);
      throw error;
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    UtilCtx.setLoader(true);

    try {
      if (form1Validator()) {
        if (!isNewUser) {
          await userExistSignUp();
          UtilCtx.setLoader(false);
          return;
        }
        const newUserCheck = await Auth.signUp({
          username: email,
          password: password,
        });
        setNewUser(newUserCheck);
      }
    } catch (e) {
      setErr(e.message);
      UtilCtx.setLoader(false);
    }
  };

  const onConfirmationSubmit = async (event) => {
    event.preventDefault();

    UtilCtx.setLoader(true);

    try {
      if (form2Validator()) {
        await Auth.confirmSignUp(email, confirmationCode);
        await Auth.signIn(email, password);
        await API.post("user", "/user/profile/happyprancer", {
          body: {
            emailId: email,
            userName: name,
            phoneNumber: phoneNumber,
            country: country,
          },
        });
        const userdata = await API.get("user", "/user/profile/happyprancer");
        //Temporary
        // userdata.Status = true;
        UserCtx.setUserData(userdata);
        UserCtx.setIsAuth(true);
        UtilCtx.setLoader(false);
        alert("Signed Up");
        if (userdata.status === "Active") {
          Navigate("/dashboard");
        }
        Navigate("/subscription");
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
        <h3 className="text-[1.2rem]">Sign Up</h3>
        <ul className="flex flex-col items-center">
          <li className="flex items-center gap-20 mt-8 max500:flex-col max500:gap-2 max500:items-start">
            <label className="w-20 max500:ml-3">Name</label>
            <input
              className="border-[0.02rem] px-3 py-2 border-black shadow-xl rounded-2xl max500:w-[80vw]"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </li>
          <li className="flex items-center gap-20 mt-8 max500:flex-col max500:gap-2 max500:items-start">
            <label className="w-20 max500:ml-3 max500:w-40">Phone Number</label>
            <input
              className="border-[0.02rem] px-3 py-2 border-black shadow-xl rounded-2xl  max500:w-[80vw]"
              type={"number"}
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </li>
          <li className="flex items-center gap-20 mt-8 max500:flex-col max500:gap-2 max500:items-start">
            <label className="w-20 max500:ml-3">Country</label>
            <input
              className="border-[0.02rem] px-3 py-2 border-black shadow-xl rounded-2xl max500:w-[80vw]"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />
          </li>
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
          className={`p-4 py-1 mt-6 mb-3 bg-[#225c59] text-white rounded-lg`}
          onClick={onSubmit}
        >
          Sign Up
        </button>
      </form>
    );
  };

  const form2 = () => {
    return (
      <form className="w-[50vw] max800:w-[90vw]  max-w-[35rem] bg-[#FFFFFF] shadow-2xl rounded-2xl p-4 flex flex-col items-center ">
        <h3 className="text-[1.2rem] font-roboto font-bold">Sign Up</h3>
        <ul className="flex flex-col items-center">
          <li className="flex items-center gap-20 mt-8 max500:flex-col max500:gap-2 max500:items-start">
            <label className="w-20 max500:ml-3">OTP Code</label>
            <ValidatorForm>
              <TextValidator
                label={
                  <span style={{ color: "#225c59" }}>Enter 6 Digit OTP</span>
                }
                variant="outlined"
                inputProps={{ maxLength: 6 }}
                name="otp"
                size="small"
                type="text"
                fullWidth
                validators={["required"]}
                errorMessages={["OTP is required"]}
                value={confirmationCode === 0 ? "" : confirmationCode}
                onChange={(e) => {
                  setConfirmationCode(e.target.value);
                }}
              />
            </ValidatorForm>
          </li>
          {resendVisible ? (
            <button className="mt-[1rem] ml-[5rem]" onClick={resendOTP}>
              Resend OTP
            </button>
          ) : (
            <p className="mt-[1rem]">
              Resend OTP in{" "}
              <span className="text-[#225c59] font-bold">{counter}</span>{" "}
              seconds
            </p>
          )}
        </ul>
        {err && <p className="text-[0.8rem] mt-2 text-red-500">{err}</p>}
        <p className="text-center w-[80%] text-[0.81rem]">
          <strong className="text-red-500">Note*</strong> An OTP has been sent
          to “same_email”. Please check your inbox, and in case you don’t find
          it there, kindly review the spam folder.
        </p>
        <button
          className="p-4 py-1 mt-6 mb-3 text-white bg-[#225c59] rounded-lg"
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
          {!newUser ? form1() : form2()}
          <img src={DanceAuth} alt="Dance" className="w-[20%] max800:hidden" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
