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

  // const ifDateChanged = () => {
  //   if (
  //     name &&
  //     name.trim() === UserCtx.userName.trim() &&
  //     phoneNumber &&
  //     phoneNumber.trim() === UserCtx.phoneNumber
  //   ) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // };

  const validate = () => {
    if (name.trim().length === 0) {
      alert("Name is Mandatory");
      return false;
    } else if (phoneNumber.trim().length < 10) {
      alert("Enter a Valid Phone Number");
      return false;
    }
    return true;
  }


  const onProfileUpdate = async (e) => {
    e.preventDefault();

    UtilCtx.setLoader(true);
    if (validate()) {
      if (phoneNumber && phoneNumber.length >= 10) {
        try {
          const userdata = await API.put("user", "/user/profile/Bworkz", {
            body: {
              emailId: UserCtx.emailId,
              userName: name,
              phoneNumber: phoneNumber,
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
      // alert("Nothing is to be changed");
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
    setPasswordVisible((i) => !i);
  };

  const onPasswordChange = async (e) => {
    e.preventDefault();

    UtilCtx.setLoader(true);
    if (passwordValidator()) {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        await Auth.changePassword(currentUser, oldPassword, password);

        alert("Password Change");
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

        const userdata = await API.put("user", "/user/profile/Bworkz", {
          body: {
            emailId: email,
            userName: UserCtx.userName,
            phoneNumber: UserCtx.phoneNumber,
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
    <div className="w-[100%] flex flex-col items-center pt-6  ">
      <div className="w-[75%] max-w-[36rem] bg-[#eceaeae1]  rounded-3xl p-3 flex flex-col items-center max536:w-[90%]">
        {!isEmailChange ? (
          <>
            {!isChangePassword ? (
              <div className="flex flex-col items-center mb-4">
                <img
                  alt="profile"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyuNFyw05KSucqjifL3PhDFrZLQh7QAS-DTw&usqp=CAU80-804949_profile-icon-for-the-politics-category-circle-hd.png"
                  className="w-32 h-32 mt-3 rounded-[50%]"
                />
                <form className="mt-6 flex flex-col gap-8">
                  <ul className="flex flex-wrap gap-12">
                    <li className="flex flex-col gap-1">
                      <label className="RussoOne ml-2">Name</label>
                      <input
                        className="bg-[#d9d9d981] text-[#0008] RussoOne px-4 py-2 rounded-lg"
                        type={"text"}
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </li>
                    <li className="flex flex-col gap-1">
                      <label className="RussoOne ml-2">Phone Number</label>
                      <input
                        className="bg-[#d9d9d981] text-[#0008] RussoOne px-4 py-2 rounded-lg"
                        type={"number"}
                        value={phoneNumber}
                        onChange={(e) => {
                          setPhoneNumber(e.target.value);
                        }}
                      />
                    </li>
                  </ul>
                  <button
                    className="RussoOne bg-[#d9d9d981] rounded-lg py-2 "
                    onClick={(e) => {
                      e.preventDefault();
                      setErr("");
                      setIsEmailChange(true);
                    }}
                  >
                    Change Email
                  </button>
                  <button
                    className="RussoOne bg-[#d9d9d981] rounded-lg py-2 "
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
                      className="RussoOne bg-[#EFC40B] rounded-lg w-[8rem] text-white py-2 "
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
                  <p className="RussoOne text-[1.3rem]">Change Password</p>
                  <ul className="flex flex-col items-center">
                    <li className="flex items-center gap-20 mt-6 max536:flex-col max536:gap-2 max536:items-start">
                      <label className="w-20  max536:ml-2">Old Password</label>
                      <input
                        className="bg-[#d9d9d981] text-[#0008] RussoOne px-4 py-2 rounded-lg"
                        value={oldPassword}
                        onChange={(e) => {
                          setOldPassword(e.target.value);
                        }}
                      />
                    </li>
                    <li className="flex items-center gap-20 mt-6 max536:flex-col max536:gap-2 max536:items-start">
                      <label className="w-20 max536:ml-2">Password</label>
                      <input
                        className="bg-[#d9d9d981] text-[#0008] RussoOne px-4 py-2 rounded-lg"
                        type={"password"}
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </li>
                    <li className="flex items-center gap-20 mt-6 max536:flex-col max536:gap-2 max536:items-start relative">
                      <label className="w-20 max536:ml-2">
                        Confirm Password
                      </label>
                      <input
                        className="bg-[#d9d9d981] text-[#0008] RussoOne px-4 py-2 rounded-lg"
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
                  {err && (
                    <p className="text-[0.8rem] mt-2 text-red-500">{err}</p>
                  )}
                  <button
                    onClick={onPasswordChange}
                    className="RussoOne bg-[#EFC40B] rounded-lg w-[8rem] text-white py-2 mt-8 "
                  >
                    Change
                  </button>
                </form>
              </>
            )}
          </>
        ) : (
          <>
            {!isEmailCode ? (
              <div>
                <form className="flex flex-col items-center my-4">
                  <p className="RussoOne text-[1.3rem]">Change Email</p>
                  <ul className="flex flex-col items-center">
                    <li className="flex items-center gap-20 mt-5 max536:flex-col max536:gap-2 max536:items-start">
                      <label className="w-20">New Email</label>
                      <input
                        className="bg-[#d9d9d981] text-[#0008] RussoOne px-4 py-2 rounded-lg"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </li>
                  </ul>
                  {err && (
                    <p className="text-[0.8rem] mt-2 text-red-500">{err}</p>
                  )}
                  <button
                    onClick={onEmailChange}
                    className="RussoOne bg-[#EFC40B] rounded-lg w-[8rem] text-white py-2 mt-8 "
                  >
                    Send Code
                  </button>
                </form>
              </div>
            ) : (
              <div>
                <form className="flex flex-col items-center my-4">
                  <p className="RussoOne text-[1.3rem]">Change Email</p>
                  <p className="my-2 text-[0.8rem]">Code sent to {email}</p>
                  <ul className="flex flex-col items-center">
                    <li className="flex items-center gap-20 mt-5 max536:flex-col max536:gap-2 max536:items-start">
                      <label className="w-20">Code</label>
                      <input
                        className="bg-[#d9d9d981] text-[#0008] RussoOne px-4 py-2 rounded-lg"
                        value={emailCode}
                        onChange={(e) => {
                          setEmailCode(e.target.value);
                        }}
                      />
                    </li>
                  </ul>
                  {err && (
                    <p className="text-[0.8rem] mt-2 text-red-500">{err}</p>
                  )}
                  <button
                    onClick={onEmailCodeConfirm}
                    className="RussoOne bg-[#EFC40B] rounded-lg w-[8rem] text-white py-2 mt-8 "
                  >
                    Confirm Code
                  </button>
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
