import React, { useContext, useState } from "react";
import whyImg from "../../Utils/Svg/why-bworkz-img.svg";
// import Dashboard2Png from "../../Utils/Png/dashboard.png";
import { BsFillPencilFill } from "react-icons/bs";
import Context from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import { API } from "aws-amplify";

const UpcomingSessions = () => {
  const [classType, setClassType] = useState("");
  // const [duration, setDuration] = useState("");
  // const [classDescription, setClassDescription] = useState("");
  const [zoomLink, setZoomLink] = useState("");
  const [instructorNames, setInstructorNames] = useState("");
  const [date, setDate] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [instructorName, setInstructorName] = useState("");
  const [classId, setClassId] = useState();
  const Ctx = useContext(Context);
  const UtilCtx = useContext(Context).util;

  const Navigate = useNavigate();

  if (Ctx.userData.status === "InActive") {
    Navigate("/subscription");
  }

  const onNameChange = async () => {
    UtilCtx.setLoader(true);

    try {
      if (classId.length === 0 && instructorName.length === 0) {
        alert("Invalid Details");
        UtilCtx.setLoader(false);
      } else {
        await API.put("user", "/admin/edit-schedule-name/Bworkz", {
          body: {
            classId: classId,
            instructorNames: instructorName,
          },
        });
        alert("Updated");

        const tempData = [];
        Ctx.upcomingClasses.forEach((clas, i) => {
          if (clas.classId === classId) {
            clas.instructorNames = instructorName;
          }
          tempData.push(clas);
        });

        Ctx.setUpcomingClasses(tempData);

        setEditingIndex(-1);
        setInstructorName("");
        setClassId("");
        setIsEditing(false);

        UtilCtx.setLoader(false);
      }
    } catch (e) {
      alert(e.message);
      UtilCtx.setLoader(false);
    }
  };

  const onScheduleCreate = async (e) => {
    e.preventDefault();

    UtilCtx.setLoader(true);
    try {
      await API.post("user", "/admin/add-schedule/Bworkz", {
        body: {
          classType: classType,
          startTimeEst: new Date(date).getTime(),
          instructorEmailId: Ctx.userData.emailId,
          duration: 600,
          instructorNames: instructorNames,
          classDescription: "",
          zoomLink: zoomLink,
          date: new Date(date).getTime(),
        },
      });

      alert("Class Added");
      UtilCtx.setLoader(false);
    } catch (error) {
      alert(error.message);
      UtilCtx.setLoader(false);
    }
  };

  return (
    <div className="w-[100%] flex flex-col items-center pt-6 max536:p-0">
      {Ctx.userData.userType === "admin" ||
        Ctx.userData.userType === "instructor" || (
          <div className="w-[90%] h-64 bg-[#eceaeaa1] rounded-[2.5rem] p-4 flex items-center justify-between max1050:px-2">
            <div className="ml-20 max1050:ml-5">
              {Ctx.isAuth ? (
                <h2 className="text-[2rem] max500:text-[1.4rem]">
                  Hello {Ctx.userData.userName}
                </h2>
              ) : (
                <h2 className="text-[2rem] max500:text-[1.3rem]">
                  Hello Simon
                </h2>
              )}

              {Ctx.userData.status === "Active" ? (
                <p className="text-[1.4rem] font-bold max500:text-[1rem]">
                  Be Regular and Work Hard to Achieve Goals
                </p>
              ) : (
                <div>
                  <p
                    className="text-[1.4rem] font-bold cursor-pointer"
                    onClick={() => {
                      Navigate("/subscripiton");
                    }}
                  >
                    Please Upgrade to start your Instructor training
                  </p>
                </div>
              )}
            </div>
            <div className="mr-20 max1050:mr-5 max536:absolute max536:right-0 max536:top-[17.4rem] max536:w-[50vw] max536:z-10">
              <img alt="Why" src={whyImg} className="w-72" />
            </div>
          </div>
        )}
      {(Ctx.userData.userType === "admin" ||
        Ctx.userData.userType === "instructor") && (
        <form className="flex flex-col gap-6 w-[90%] Sansita max1050:hidden">
          <div className="flex gap-6">
            {/* <img
              src="https://www.parents.com/thmb/i3JfyW9Z2dvbnp22pE7sw9K1za4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1171197401-2000-4a882be7152a47b68a1fc92ddeed2c14.jpg"
              alt=""
              className="w-48 h-40 object-cover rounded-3xl"
            /> */}
            {/* <div className="flex-col flex gap-6"> */}
            <input
              placeholder="Class Type"
              className="bg-[#ffffff79] text-[#0008] RussoOne px-4 py-1 rounded-lg w-[10rem]"
              value={classType}
              onChange={(e) => {
                setClassType(e.target.value);
              }}
            />
            {/* <img alt="" src={RightSidePng} /> */}
            <input
              placeholder="Instructor Name"
              className="bg-[#ffffff79] text-[#0008] RussoOne px-4 py-1 rounded-lg w-[13rem]"
              value={instructorNames}
              onChange={(e) => {
                setInstructorNames(e.target.value);
              }}
            />

            <textarea
              className="bg-[#ffffff79] text-[#0008] RussoOne px-4 py-1 rounded-lg  w-[10rem] flex justify-center items-center flex-grow"
              placeholder="Zoom Link"
              value={zoomLink}
              onChange={(e) => {
                setZoomLink(e.target.value);
              }}
            />
            {/* <textarea
                className="bg-[#ffffff79] text-[#0008] RussoOne px-4 py-1 rounded-lg w-[17rem]"
                placeholder="Description"
                value={classDescription}
                onChange={(e) => {
                  setClassDescription(e.target.value);
                }}
              /> */}
            <input
              className="bg-[#ffffff79] text-[#0008] RussoOne px-4 py-1 rounded-lg w-[13rem]"
              placeholder="Date"
              type={"datetime-local"}
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
            {/* <img alt="" src={RightSidePng} /> */}
            {/* <input
                  placeholder="Duration"
                  className="bg-[#ffffff79] text-[#0008] RussoOne px-4 py-1 rounded-lg max-w-[7rem]"
                  value={duration}
                  onChange={(e) => {
                    setDuration(e.target.value);
                  }}
                /> */}
            {/* </div> */}
          </div>
          <button
            className="RussoOne bg-[#EFC40B] rounded-lg py-2 "
            onClick={onScheduleCreate}
          >
            Post
          </button>
        </form>
      )}
      <div className="mt-8 w-[80%] max1050:w-[92%] flex justify-between">
        <div className="w-[100%]">
          <h3 className=" text-[1.7rem] pl-3 mb-4  Sansita font-thin">
            Upcoming Classes
          </h3>
          <ul
            className={`h-[20rem] ${
              (Ctx.userData.userType === "admin" ||
                Ctx.userData.userType === "instructor") &&
              "h-[40rem]"
            }  flex flex-col overflow-auto bg-[#eceaeaa1] max536:bg-transparent rounded-2xl items-center justify-start pt-6 max536:gap-3 `}
          >
            {Ctx.upcomingClasses.map((clas, i) => {
              // console.log(clas.instructorNames);

              return (
                <li
                  key={clas.classId}
                  className={`w-[100%] flex flex-col items-center justify-center p-2 ${
                    editingIndex === i
                      ? "bg-[#fdd00823]"
                      : "max536:bg-[#eceaeaa1] "
                  } max536:pt-5 max536:rounded-2xl`}
                >
                  <div className="flex w-[85%] max1050:w-[96%] justify-between max1050:justify-between mb-5 relative pr-8 ">
                    <p className="overflow-hidden w-[3.6rem] ">
                      {new Date(parseInt(clas.date)).toLocaleDateString(
                        "en-us",
                        {
                          day: "2-digit",
                          month: "short",
                        }
                      )}
                    </p>
                    <p className="w-[7rem] max536:hidden ">
                      {clas.instructorNames}
                    </p>
                    <p className="w-[40%] text-left overflow-hidden  max536:hidden">
                      {clas.classType}
                    </p>
                    <p className=" ">
                      {new Date(parseInt(clas.date)).toLocaleString("en-us", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                    <a
                      className="px-2 bg-yellow-400 max-h-[1.8rem] self-center ml-1 "
                      href={clas.zoomLink}
                      target={"_blank"}
                    >
                      Join
                    </a>
                    {(Ctx.userData.userType === "admin" ||
                      Ctx.userData.userType === "instructor") && (
                      <BsFillPencilFill
                        className="absolute right-0 top-[50%] -translate-y-[50%] cursor-pointer  "
                        onClick={() => {
                          setEditingIndex(i);
                          setIsEditing(true);
                          setInstructorName(clas.instructorNames[0]);
                          setClassId(clas.classId);
                        }}
                      />
                    )}
                  </div>

                  {(isEditing &&
                    editingIndex === i &&
                    Ctx.userData.userType === "admin") ||
                  (isEditing &&
                    editingIndex === i &&
                    Ctx.userData.userType === "instructor") ? (
                    <div className="flex w-[100%] justify-between mb-5 gap-4">
                      <input
                        className="bg-[#ffffff79] text-[#0008] RussoOne px-4 py-1 rounded-lg w-[85%]"
                        placeholder="Instructior Name"
                        value={instructorName}
                        onChange={(e) => {
                          setInstructorName(e.target.value);
                        }}
                      />
                      <button
                        className="RussoOne bg-[#EFC40B] rounded-lg py-2 w-[6rem] px-1 max536:text-[0.8rem] max536:py-1"
                        onClick={() => {
                          setEditingIndex(-1);
                          setIsEditing(false);
                          setInstructorName("");
                          setClassId("");
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        className="RussoOne bg-[#EFC40B] rounded-lg py-2 w-[6rem] px-1 max536:text-[0.8rem] max536:py-1"
                        onClick={onNameChange}
                      >
                        Change
                      </button>
                    </div>
                  ) : (
                    <></>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSessions;
