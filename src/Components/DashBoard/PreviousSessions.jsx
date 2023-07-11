import { API } from "aws-amplify";
import React, { useContext, useState } from "react";
import Context from "../../Context/Context";
import Pagination from "@mui/material/Pagination";

import NamesPng from "../../Utils/images/PreviousSessions/names.png";
import ClassTypePng from "../../Utils/images/PreviousSessions/classType.png";
import TimePng from "../../Utils/images/PreviousSessions/time.png";
import ZoomLinkPng from "../../Utils/images/PreviousSessions/zoomLink.png";

const PreviousSessions = () => {
  const [classId, setClassId] = useState("");
  const [recordingLink, setRecordingLink] = useState("");
  const Ctx = useContext(Context);
  const UtilCtx = useContext(Context).util;
  

  //flilter
  const [classTypeFilter, setClassTypeFilter] = useState("");
  const [instructorTypeFilter, setinstructorTypeFilter] = useState("");
  // Filter classes by selected instructor
  const filteredClasses = Ctx.previousClasses.filter(
    (clas) =>
      instructorTypeFilter === "" || clas.instructorNames === instructorTypeFilter
  );

  // Get unique class types from filtered classes
  const classTypes = Array.from(
    new Set(filteredClasses.map((clas) => clas.classType))
  );

  

  const itemsPerPage = 10; // Set the desired number of items per page
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(Ctx.previousClasses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const [showFilters, setShowFilters] = useState(false); // State to control the visibility of filters

  const onRecordingUpdate = async (e) => {
    e.preventDefault();
    UtilCtx.setLoader(true);

    try {
      if (classId.length === 0 && recordingLink.length === 0) {
        alert("Invalid Details");
        UtilCtx.setLoader(false);
      } else {
        await API.put("user", "/admin/edit-schedule-recording/happyprancer", {
          body: {
            classId: classId,
            recordingLink: recordingLink,
          },
        });
        alert("Updated");

        setClassId("");

        const updatedClasses = Ctx.previousClasses.map((clas) => {
          if (clas.classId === classId) {
            return {
              ...clas,
              recordingLink: recordingLink,
            };
          }
          return clas;
        });

        Ctx.setPreviousClasses(updatedClasses);

        UtilCtx.setLoader(false);
      }
    } catch (e) {
      alert(e.message);
      UtilCtx.setLoader(false);
    }
  };

  return (
    <div className="w-[100%] flex flex-col items-center pt-6  gap-3">
      <h2 className="text-[1.6rem] RussoOne font-thin max536:text-[#1b7571]">
        Previous Sessions
      </h2>
      <div className="w-[80%] flex justify-start">
      <button
          className="filter-button bg-[#1b7571] w-[4rem] m-[1rem] rounded-[0.4rem] text-white"
          onClick={() => setShowFilters(!showFilters)} // Toggle the visibility of filters
          >
          Filters
          </button>
      </div>
          <div className="flex flex-col-reverse w-[85%]">
          <div
          className={`filters ${showFilters ? "show" : ""}`}
        >
                
                <div className="w-[95%] flex justify-end m-[0.8rem] gap-3">
                  <label className="font-bold" htmlFor="instructorTypeFilter" >Instructor: </label>
                      <select
                            className="rounded-[0.51rem] px-4 bg-[#c3f3f1]"
                            id="instructorTypeFilter"
                            value={instructorTypeFilter}
                            onChange={(e) => setinstructorTypeFilter(e.target.value)}
                          >
                            <option value="">All</option>
                            {/* Render the options dynamically based on available instructors */}
                            {Array.from(
                              new Set(Ctx.previousClasses.map((clas) => clas.instructorNames))
                            ).map((instructorNames) => (
                              <option key={instructorNames} value={instructorNames}>
                                {instructorNames}
                              </option>
                            ))}
                      </select>
                </div>
                <div className="w-[95%] flex justify-end m-[0.8rem] gap-3">
                  <label className="font-bold" htmlFor="classTypeFilter" >Classes: </label>
                    <select
                      className="rounded-[0.51rem] px-4 bg-[#c3f3f1]"
                      id="classTypeFilter"
                      value={classTypeFilter}
                      onChange={(e) => setClassTypeFilter(e.target.value)}
                    >
                      <option value="">All</option>
                      {/* Render the options dynamically based on available class types */}
                      {classTypes.map((classType) => (
                        <option key={classType} value={classType}>
                          {classType}
                        </option>
                      ))}
                    </select>
                </div>
              
              </div>
          </div>

      {(Ctx.userData.userType === "admin" ||
        Ctx.userData.userType === "instructor") && classId && (
        <form className="flex gap-6 w-[88%] Sansita">
          <input
            placeholder="Recording Link"
            className="bg-[#c3f3f1] text-[#0008] max536:text-[#000] RussoOne px-4 py-1 rounded-lg w-[85%]"
            value={recordingLink}
            onChange={(e) => setRecordingLink(e.target.value)}
          />
          <button
            className="RussoOne bg-[#1b7571] rounded-lg py-2 w-[6rem]"
            onClick={onRecordingUpdate}
          >
            Update
          </button>
        </form>
      )}
      <ul className="relative pb-[3rem] w-[90%] h-[calc(100vh-10rem)] flex flex-col bg-[#c3f3f1] rounded-3xl items-center justify-start pt-6 max536:gap-3 max536:h-[calc(100vh-17rem)] max536:bg-gradient-to-b max536:from-[#dad7c6] max536:to-[#1b7571]">
        <li className="w-[96%] flex flex-col items-center justify-center p-2 max536:pt-5 max536:rounded-2xl">
          <div className="flex w-[85%] max1050:w-[96%] justify-between  mb-3 font-bold">
            <p className="w-[25%] overflow-hidden max536:hidden">Instructor</p>
            <p className="w-[25%] text-left overflow-hidden max536:hidden">
              Class
            </p>
            <p className="overflow-hidden w-[3.7rem] max536:hidden">Date</p>
            <p className="max536:hidden w-[7.3rem]">Recording Link</p>
            <img src={NamesPng} alt="" className="min536:hidden w-10 h-10" />
            <img
              src={ClassTypePng}
              alt=""
              className="min536:hidden w-10 h-10 ml-3"
            />
            <img src={TimePng} alt="" className="min536:hidden w-10 h-10 ml-4" />
            <img src={ZoomLinkPng} alt="" className="min536:hidden w-10 h-10" />
          </div>
        </li>
        <div className="overflow-auto max536:w-[96%] flex flex-col gap-4 w-[100%] items-center">
          {Ctx.previousClasses
              .slice(startIndex, endIndex)
              .filter((clas) => {
                // Apply the instructorType filter
                if (instructorTypeFilter === "") {
                  return true; // No filter selected, include all classes
                } else {
                  return clas.instructorNames === instructorTypeFilter; // Match the selected instructorType
                }
              })
              .filter((clas) => {
                // Apply the classType filter
                if (classTypeFilter === "") {
                  return true; // No filter selected, include all classes
                } else {
                  return clas.classType === classTypeFilter; // Match the selected classType
                }
              })
              .map((clas, i) => {
              return(
              <li
                key={clas.classId}
                className="w-[96%] flex flex-col items-center justify-center p-2 max536:bg-[#c3f3f1] max536:pt-6 max536:rounded-2xl Sansita"
              >
                <div className="flex w-[85%] max1050:w-[96%] justify-between max1050:justify-between mb-5 relative">
                  <p className="w-[25%] overflow-hidden">{clas.instructorNames}</p>
                  <p className="w-[25%] text-left overflow-hidden">{clas.classType}</p>
                  <p className="overflow-hidden w-[3.7rem]">
                    {new Date(parseInt(clas.date)).toLocaleDateString("en-us", {
                      day: "2-digit",
                      month: "short",
                    })}
                  </p>
                  <div className="w-[7.3rem] mr-4 rounded px-2 bg-[#1b7571] max-h-[1.8rem] self-center flex justify-center items-center max536:mr-0 text-white">
                    {clas.recordingLink ? (
                      <a href={clas.recordingLink} target="_blank" rel="noreferrer">
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
                                className="w-[3rem] px-2 py-1 rounded-md RussoOne text-white"
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
            <div className=" absolute bottom-4  ">
            <Pagination
                count={totalPages}
                page={currentPage}
                onChange={(event, value) => setCurrentPage(value)}
              />
            </div>
        </div>
      </ul>
    </div>
  );
};

export default PreviousSessions;
