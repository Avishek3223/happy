import { API } from "aws-amplify";
import React, { useContext } from "react";
import { useState } from "react";
import Context from "../../Context/Context";

// import RightSidePng from "../../Utils/images/PreviousSessions/RightSideStroke.png";
import NamesPng from "../../Utils/images/PreviousSessions/names.png";
import ClassTypePng from "../../Utils/images/PreviousSessions/classType.png";
import TimePng from "../../Utils/images/PreviousSessions/time.png";
import ZoomLinkPng from "../../Utils/images/PreviousSessions/zoomLink.png";

const PreviousSessions = () => {
  const [classId, setClassId] = useState("");
  const [recordingLink, setRecordingLink] = useState("");
  const Ctx = useContext(Context);
  const UtilCtx = useContext(Context).util;

  const onRecordingUpdate = async (e) => {
    e.preventDefault();

    UtilCtx.setLoader(true);

    try {
      if (classId.length === 0 && recordingLink.length === 0) {
        alert("Invalid Details");
        UtilCtx.setLoader(false);
      } else {
        await API.put("user", "/admin/edit-schedule-recording/Bworkz", {
          body: {
            classId: classId,
            recordingLink: recordingLink,
          },
        });
        alert("Updated");

        setClassId("");

        const tempData = [];
        Ctx.previousClasses.forEach((clas, i) => {
          if (clas.classId === classId) {
            clas.recordingLink = recordingLink;
          }
          tempData.push(clas);
        });

        Ctx.setPreviousClasses(tempData);

        UtilCtx.setLoader(false);
      }
    } catch (e) {
      alert(e.message);
      UtilCtx.setLoader(false);
    }
  };

  return (
    <div className="w-[100%] flex flex-col items-center pt-6  gap-3">
      {/* <div
        className={`w-[96%] max536:w-[92%] bg-[#eceaeae1] ${
          Ctx.userData.userType === "admin" ? "h-[30rem]" : "h-[30rem]"
        } rounded-3xl p-3 flex flex-col items-center`}
      >
        <h2 className="pl-5 text-[1.4rem] RussoOne  font-thin">
          Previous Sessions
        </h2>
        <div className=" mt-6 w-[90%]  flex items-start overflow-auto">
          <table className="p-2 text-gray-500 ">
            <thead className="RussoOne font-light text-black">
              <tr className="py-2 max536:hidden ">
                <th className="min-w-[4.5rem]">
                  <div className="flex items-center justify-center h-10">
                    Date
                  </div>
                </th>
                <th className="w-[3rem]">Instructor</th>
                <th className="w-[9rem] max700:hidden">Class Details</th>
                <th className="w-[9rem] ">Recording Link</th>
              </tr>
              <tr className="py-2 min536:hidden ">
                <th className="w-[3rem] overflow-hidden">
                  <div className="flex items-center justify-center h-10">
                    Date
                  </div>
                </th>
                <th className="w-[3rem]">Instructor</th>
                <th className="w-[9rem] ">Class Details</th>
                <th className="w-[9rem] ">Recording Link</th>
              </tr>
            </thead>
            <tbody>
              {Ctx.previousClasses.map((clas) => {
                return (
                  <tr className={`text-justify`} key={clas.classId}>
                    <td className="mr-3 text-center">
                      <div className="flex items-center justify-center h-10 min-w-[9rem] max536:hidden">
                        {new Date(parseInt(clas.date)).toLocaleString("en-us", {
                          day: "2-digit",
                          month: "short",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                      <div className="flex items-center justify-center h-10 min-w-[9rem] min536:hidden">
                        {new Date(parseInt(clas.date)).toLocaleString("en-us", {
                          day: "2-digit",
                          month: "short",
                        })}
                      </div>
                    </td>
                    <td className="max-w-[35rem] w-[30rem] overflow-hidden flex justify-center items-center h-10">
                      <ul className="flex gap-2 ">
                        {clas.instructorNames.map((n, i) => {
                          if (clas.instructorNames.length - 1 === i) {
                            return <li key={n}>{n}</li>;
                          } else {
                            return <li key={n}>{n},</li>;
                          }
                        })}
                      </ul>
                    </td>
                    <td className="mr-3 text-center ">
                      {clas.classType}
                    </td>
                    <td className="text-center">
                      {clas.recordingLink ? (
                        <a href={clas.recordingLink}>link</a>
                      ) : (
                        <div>
                          {Ctx.userData.userType === "admin" ? (
                            <div>
                              {classId === clas.classId ? (
                                <button
                                  className="bg-[#EFC40B] px-2 py-1 rounded-md text-black RussoOne"
                                  onClick={() => {
                                    setClassId("");
                                    setRecordingLink("");
                                  }}
                                >
                                  Cancel
                                </button>
                              ) : (
                                <button
                                  className="bg-[#EFC40B] px-2 py-1 rounded-md text-black RussoOne"
                                  onClick={() => {
                                    setClassId(clas.classId);
                                    setRecordingLink(clas.recordingLink);
                                  }}
                                >
                                  Add Link
                                </button>
                              )}
                            </div>
                          ) : (
                            <p>No Link Yet</p>
                          )}
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div> */}
      <h2 className=" text-[1.6rem] RussoOne font-thin  max536:text-[#FDCF08]">
        Previous Sessions
      </h2>
      {(Ctx.userData.userType === "admin" ||
        Ctx.userData.userType === "instructor") &&
        classId && (
          <form className="flex  gap-6 w-[88%] Sansita">
            <input
              placeholder="Recording Link"
              className="bg-[#ffffff79] text-[#0008] max536:text-[#000] RussoOne px-4 py-1 rounded-lg w-[85%]"
              value={recordingLink}
              onChange={(e) => {
                setRecordingLink(e.target.value);
              }}
            />
            <button
              className="RussoOne bg-[#EFC40B] rounded-lg py-2 w-[6rem]"
              onClick={onRecordingUpdate}
            >
              Update
            </button>
          </form>
        )}
      <ul className="w-[90%] h-[calc(100vh-20rem)] flex flex-col bg-[#eceaeaa1] rounded-3xl items-center justify-start pt-6 max536:gap-3 max536:h-[calc(100vh-17rem)] max536:bg-gradient-to-b max536:from-[#dad7c6] max536:to-[#fdd00891]">
        <li
          className={`w-[96%] flex flex-col items-center justify-center p-2  max536:pt-5 max536:rounded-2xl`}
        >
          <div className="flex w-[85%] max1050:w-[96%] justify-between  mb-3 font-bold">
            <p className="w-[25%] overflow-hidden  max536:hidden ">
              Instructor
            </p>
            <p className="w-[25%] text-left overflow-hidden  max536:hidden ">
              Class
            </p>
            <p className="overflow-hidden w-[3.7rem] max536:hidden ">Date</p>
            <p className=" max536:hidden w-[7.3rem] ">Recording Link</p>
            <img src={NamesPng} alt="" className="min536:hidden w-10 h-10" />
            <img
              src={ClassTypePng}
              alt=""
              className="min536:hidden w-10 h-10 ml-3"
            />
            <img
              src={TimePng}
              alt=""
              className="min536:hidden w-10 h-10 ml-4"
            />
            <img src={ZoomLinkPng} alt="" className="min536:hidden w-10 h-10" />
          </div>
        </li>
        <div className="overflow-auto max536:w-[96%] flex flex-col gap-4 w-[100%] items-center">
          {Ctx.previousClasses.map((clas, i) => {
            return (
              <li
                key={clas.classId}
                className={`w-[96%] flex flex-col items-center justify-center p-2 max536:bg-[#eceaeaa1]  max536:pt-6 max536:rounded-2xl Sansita`}
              >
                <div className="flex w-[85%] max1050:w-[96%] justify-between max1050:justify-between mb-5 relative">
                  <p className="w-[25%] overflow-hidden">
                    {clas.instructorNames}
                  </p>
                  <p className="w-[25%] text-left overflow-hidden   ">
                    {clas.classType}
                  </p>
                  <p className="overflow-hidden w-[3.7rem]  ">
                    {new Date(parseInt(clas.date)).toLocaleDateString("en-us", {
                      day: "2-digit",
                      month: "short",
                    })}
                  </p>
                  <div className="w-[7.3rem] mr-4   rounded px-2 bg-yellow-400 max-h-[1.8rem] self-center flex justify-center items-center max536:mr-0">
                    {clas.recordingLink ? (
                      <a href={clas.recordingLink} target={"_blank"}>
                        link
                      </a>
                    ) : (
                      <div>
                        {Ctx.userData.userType === "admin" ||
                        Ctx.userData.userType === "instructor" ? (
                          <div>
                            {classId === clas.classId ? (
                              <button
                                className="px-2 py-1 rounded-md text-black RussoOne text-[0.9rem]"
                                onClick={() => {
                                  setClassId("");
                                  setRecordingLink("");
                                }}
                              >
                                Cancel
                              </button>
                            ) : (
                              <button
                                className="w-[3rem] px-2 py-1 rounded-md text-black RussoOne"
                                onClick={() => {
                                  setClassId(clas.classId);
                                  setRecordingLink(clas.recordingLink);
                                }}
                              >
                                Add
                              </button>
                            )}
                          </div>
                        ) : (
                          <p>No Link Yet</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </div>
      </ul>
    </div>
  );
};

export default PreviousSessions;
