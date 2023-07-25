import { API, Auth } from "aws-amplify";
import React, { useState } from "react";
import { useContext } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Context from "../../Context/Context";

const ProfileUpdate = () => {
  const Ctx = useContext(Context);
  const UserCtx = useContext(Context).userData;
  const UtilCtx = useContext(Context).util;
  const [name, setName] = useState(UserCtx.userName);
  const [phoneNumber, setPhoneNumber] = useState(UserCtx.phoneNumber);
  const [country, setCountry] = useState(UserCtx.country);
  const formatDate = (epochDate) => {
    const date = epochDate > 9999
      ? new Date(epochDate / 1000)
      : new Date(epochDate * 1000);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    // Format day and month with leading zeros if necessary
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedDay}/${formattedMonth}/${year}`;
  };

  const [joiningDate, setJoiningDate] = useState(formatDate(UserCtx.joiningDate));
  const [email, setEmail] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isChangePassword, setIsChangePassword] = useState(false);
  const [isEmailChange, setIsEmailChange] = useState(false);
  const [isEmailCode, setIsEmailCode] = useState(false);
  const [err, setErr] = useState("");

  const ifDataChanged = () => {
    if (
      name.trim() === UserCtx.userName.trim() &&
      phoneNumber.trim() === UserCtx.phoneNumber &&
      country.trim() === UserCtx.country &&
      joiningDate.trim() === UserCtx.joiningDate
    ) {
      return false;
    } else {
      return true;
    }
  };

  const onProfileUpdate = async (e) => {
    e.preventDefault();

    UtilCtx.setLoader(true);
    if (ifDataChanged()) {
      if (phoneNumber.length >= 10) {
        try {
          const userdata = await API.put("user", "/user/profile/happyprancer", {
            body: {
              emailId: UserCtx.emailId,
              userName: name,
              phoneNumber: phoneNumber,
              country: country,
              joiningDate: joiningDate,
            },
          });

          Ctx.setUserData(userdata.Attributes);
          alert("Updated");
          UtilCtx.setLoader(false);
        } catch (e) {
          console.log(e);
          alert(e.message);
          UtilCtx.setLoader(false);
        }
      } else {
        alert("Entered Phone Number is Not Valid");
        UtilCtx.setLoader(false);
      }
    } else {
      alert("Nothing is to be changed");
      UtilCtx.setLoader(false);
    }
  };

  const passwordValidator = () => {
    if (password.length < 8) {
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

  const passwordVisibilityChange = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const onPasswordChange = async (e) => {
    e.preventDefault();

    UtilCtx.setLoader(true);
    if (passwordValidator()) {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        await Auth.changePassword(currentUser, oldPassword, password);

        alert("Password Changed");
        setIsChangePassword(false);
        UtilCtx.setLoader(false);
      } catch (e) {
        setErr(e.message);
        UtilCtx.setLoader(false);
      }
    }
    UtilCtx.setLoader(false);
  };

  const onEmailChange = async (e) => {
    e.preventDefault();
    UtilCtx.setLoader(true);
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      await Auth.updateUserAttributes(currentUser, { email: email });
      setIsEmailCode(true);

      UtilCtx.setLoader(false);
    } catch (e) {
      setErr(e.message);
      UtilCtx.setLoader(false);
    }
  };

  const onEmailCodeConfirm = async (e) => {
    e.preventDefault();

    UtilCtx.setLoader(true);
    if (emailCode.length !== 0) {
      try {
        await Auth.verifyCurrentUserAttributeSubmit("email", emailCode);

        const userdata = await API.put("user", "/user/profile/happyprancer", {
          body: {
            emailId: email,
            userName: UserCtx.userName,
            phoneNumber: UserCtx.phoneNumber,
            country: UserCtx.country,
            joiningDate: UserCtx.joiningDate,
          },
        });
        Ctx.setUserData(userdata.Attributes);
        alert("Updated");
        setIsEmailChange(false);
        setIsEmailCode(false);
        UtilCtx.setLoader(false);
      } catch (e) {
        setErr(e.message);
      }
    }
    UtilCtx.setLoader(false);
  };

  return (
    <div className="w-[calc(100vw-16rem)] max1050:w-screen flex flex-col items-center pt-6">
      <div className="w-[75%] max1050:w-[100%] max-w-[36rem] bg-[#eceaeae1]  rounded-3xl p-3 flex flex-col items-center max536:w-[90%]">
        {!isEmailChange ? (
          <>
            {!isChangePassword ? (
              <div className="flex flex-col items-center mb-4">
                <img
                  alt="profile"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyuNFyw05KSucqjifL3PhDFrZLQh7QAS-DTw&usqp=CAU80-804949_profile-icon-for-the-politics-category-circle-hd.png"
                  className="w-32 h-32 mt-3 rounded-[50%]"
                />
                <form className="mt-6 flex flex-col gap-8 max560:w-full">
                <div className="flex flex-wrap gap-[2rem]" >
                  <div className="flex flex-col gap-1 justify-center">
                    <label className="ml-2">Name</label>
                    <input
                      className="bg-[#c2bfbf81] text-[#0008] px-4 py-2 rounded-lg rule"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                    <div className="flex flex-col gap-1">
                      <label className="ml-2">Phone Number</label>
                      <input
                        className="  bg-[#c2bfbf81] text-[#0008] px-4 py-2 rounded-lg"
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-[2rem]">
                    <div className="flex flex-col gap-1 justify-center">
                      <label className="ml-2">Country</label>
                      <input
                        className="bg-[#c2bfbf81] text-[#0008] px-4 py-2 rounded-lg"
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="ml-2">Joining Date</label>
                      <input
                        className="bg-[#c2bfbf81] text-[#0008] px-4 py-2 rounded-lg"
                        type="text"
                        value={joiningDate}
                        onChange={(e) => setJoiningDate(e.target.value)}
                      />
                    </div>
                  </div>
                  <button
                    className="bg-[#c2bfbf81] rounded-lg py-2"
                    onClick={(e) => {
                      e.preventDefault();
                      setErr("");
                      setIsEmailChange(true);
                    }}
                  >
                    Change Email
                  </button>
                  <button
                    className="bg-[#c2bfbf81] rounded-lg py-2"
                    onClick={(e) => {
                      e.preventDefault();
                      setErr("");
                      setIsChangePassword(true);
                    }}
                  >
                    Change Password
                  </button>
                  <div className="flex justify-center">
                    <button
                      className="bg-[#1b7571] rounded-lg w-[8rem] text-white py-2"
                      onClick={onProfileUpdate}
                    >
                      Confirm
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <>
                <form className="flex flex-col items-center my-4 max536:w-[90%]">
                  <p className="text-[1.3rem]">Change Password</p>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-20 mt-6 max536:flex-col max536:gap-2 max536:items-start">
                      <label className="w-20  max536:ml-2">Old Password</label>
                      <input
                        className="bg-[#c2bfbf81] text-[#0008] px-4 py-2 rounded-lg"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                      />
                    </div>
                    <div className="flex items-center gap-20 mt-6 max536:flex-col max536:gap-2 max536:items-start">
                      <label className="w-20 max536:ml-2">Password</label>
                      <input
                        className="bg-[#c2bfbf81] text-[#0008] px-4 py-2 rounded-lg"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="flex items-center gap-20 mt-6 max536:flex-col max536:gap-2 max536:items-start relative">
                      <label className="w-20 max536:ml-2">
                        Confirm Password
                      </label>
                      <input
                        className="bg-[#c2bfbf81] text-[#0008] px-4 py-2 rounded-lg"
                        type={!passwordVisible ? "password" : "text"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      {passwordVisible ? (
                        <AiFillEye
                          onClick={passwordVisibilityChange}
                          className="absolute right-4"
                          size={"1.25rem"}
                        />
                      ) : (
                        <AiFillEyeInvisible
                          onClick={passwordVisibilityChange}
                          className="absolute right-4"
                          size={"1.25rem"}
                        />
                      )}
                    </div>
                  </div>
                  {err && (
                    <p className="text-[0.8rem] mt-2 text-red-500">{err}</p>
                  )}
                  <div className="flex gap-5">
                    <button
                      className="bg-[#1b7571] rounded-lg w-[8rem] text-white py-2 mt-8"
                      onClick={(e) => {
                        e.preventDefault();
                        setErr("");
                        setIsChangePassword(false);
                      }}
                      type="button"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={onPasswordChange}
                      className="bg-[#1b7571] rounded-lg w-[8rem] text-white py-2 mt-8"
                      type="submit"
                    >
                      Send Code
                    </button>
                  </div>
                </form>
              </>
            )}
          </>
        ) : (
          <>
            {!isEmailCode ? (
              <div>
                <form className="flex flex-col items-center my-4">
                  <p className="text-[1.3rem]">Change Email</p>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-20 mt-5 max536:flex-col max536:gap-2 max536:items-start">
                      <label className="w-20">New Email</label>
                      <input
                        className="bg-[#c2bfbf81] text-[#0008] px-4 py-2 rounded-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  {err && (
                    <p className="text-[0.8rem] mt-2 text-red-500">{err}</p>
                  )}
                  <div className="flex gap-5">
                    <button
                      className="bg-[#1b7571] rounded-lg w-[8rem] text-white py-2 mt-8"
                      onClick={(e) => {
                        e.preventDefault();
                        setErr("");
                        setIsEmailChange(false);
                      }}
                      type="button"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={onEmailChange}
                      className="bg-[#1b7571] rounded-lg w-[8rem] text-white py-2 mt-8"
                      type="submit"
                    >
                      Send Code
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div>
                <form className="flex flex-col items-center my-4">
                  <p className="text-[1.3rem]">Change Email</p>
                  <p className="my-2 text-[0.8rem]">Code sent to {email}</p>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-20 mt-5 max536:flex-col max536:gap-2 max536:items-start">
                      <label className="w-20">Code</label>
                      <input
                        className="bg-[#c2bfbf81] text-[#0008] px-4 py-2 rounded-lg"
                        value={emailCode}
                        onChange={(e) => setEmailCode(e.target.value)}
                      />
                    </div>
                  </div>
                  {err && (
                    <p className="text-[0.8rem] mt-2 text-red-500">{err}</p>
                  )}
                  <div className="flex gap-5">
                    <button
                      className="bg-[#1b7571] rounded-lg w-[8rem] text-white py-2 mt-8"
                      onClick={(e) => {
                        e.preventDefault();
                        setErr("");
                        setIsEmailChange(false);
                      }}
                      type="button"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={onEmailCodeConfirm}
                      className="bg-[#1b7571] rounded-lg w-[8rem] text-white py-2 mt-8"
                      type="submit"
                    >
                      Confirm
                    </button>
                  </div>
                </form>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileUpdate;
