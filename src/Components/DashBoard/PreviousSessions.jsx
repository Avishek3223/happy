import { API } from "aws-amplify";
import React, { useContext, useState } from "react";
import Context from "../../Context/Context";
import Pagination from "@mui/material/Pagination";
import PreviousSessionsMobile from "./PreviousSessionsMobile";
import { useMediaQuery } from "@mui/material";

const formatDate = (epochDate) => {
  const date = new Date(epochDate);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-indexed, so we add 1 to get the correct month
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const PreviousSessions = () => {
  const [classId, setClassId] = useState("");
  const [recordingLink, setRecordingLink] = useState("");
  const Ctx = useContext(Context);
  const UtilCtx = useContext(Context).util;

  const instructorNamesOptions = ["Auroshika", "Prajakta", "PK", "Roma"];

  const [classTypeFilter, setClassTypeFilter] = useState("");
  const [instructorTypeFilter, setinstructorTypeFilter] = useState("");
  const filteredClasses = Ctx.previousClasses.filter(
    (clas) =>
      instructorTypeFilter === "" || clas.instructorNames === instructorTypeFilter
  );
  const classTypes = Array.from(
    new Set(filteredClasses.map((clas) => clas.classType))
  );
  const isMobileScreen = useMediaQuery('(max-width: 600px)');
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(Ctx.previousClasses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const [showFilters, setShowFilters] = useState(false);

  const onInstructorNameChange = async (newInstructorName, classType, classId) => {
    UtilCtx.setLoader(true);

    try {
      await API.put("user", "/admin/edit-schedule-name/happyprancer", {
        body: {
          classId: classId,
          instructorNames: newInstructorName,
          classType: classType
        },
      });

      const updatedClasses = Ctx.previousClasses.map((clas) => {
        if (clas.classId === classId) {
          return {
            ...clas,
            instructorNames: newInstructorName,
          };
        }
        return clas;
      });

      Ctx.setPreviousClasses(updatedClasses);

      UtilCtx.setLoader(false);
    } catch (e) {
      alert(e.message);
      UtilCtx.setLoader(false);
    }
  };

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
  const sortedPreviousClasses = Ctx.previousClasses.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return (
    <>
      {!isMobileScreen && (
        <div className="w-[100%] flex flex-col items-center pt-6  gap-3">
          <h2 className="text-[1.6rem] sans-sarif font-[700]">
            Previous Sessions
          </h2>
          <div className="w-[80%] flex justify-start">
            <button
              className="filter-button bg-[#1b7571] w-[4rem] m-[1rem] rounded-[0.4rem] text-white"
              onClick={() => setShowFilters(!showFilters)}
            >
              Filters
            </button>
          </div>
          <div className="flex flex-col-reverse w-[85%]">
            <div className={`filters ${showFilters ? "show" : ""}`}>
              <div className="w-[95%] flex justify-end m-[0.8rem] gap-3">
                <label className="font-bold" htmlFor="instructorTypeFilter" >Instructor: </label>
                <select
                  className="rounded-[0.51rem] px-4 bg-[#c3f3f1]"
                  id="instructorTypeFilter"
                  value={instructorTypeFilter}
                  onChange={(e) => setinstructorTypeFilter(e.target.value)}
                >
                  <option value="">All</option>
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
                  className="bg-[#c3f3f1] text-[#0008] sans-sarif px-4 py-1 rounded-lg w-[85%]"
                  value={recordingLink}
                  onChange={(e) => setRecordingLink(e.target.value)}
                />
                <button
                  className="sans-sarif bg-[#1b7571] rounded-lg py-2 w-[6rem]"
                  onClick={onRecordingUpdate}
                >
                  Update
                </button>
              </form>
            )}

          <ul className="relative  bg-[#c3f3f1] pb-[3rem] w-[80%] h-[62vh] flex flex-col bg-[#c3f3f1] rounded-3xl items-center justify-start pt-6">
            <li className="w-[96%] flex flex-col items-center justify-center p-2">
              <div className="flex w-[85%] justify-between  mb-3 font-bold">
                <p className="w-[25%] overflow-hidden">Instructor</p>
                <p className="w-[25%] text-left ml-[1rem] overflow-hidden">Class</p>
                <p className="overflow-hidden ml-[2rem] w-[3.7rem]">Date</p>
                <p className="w-[7.3rem] ">Recording Link</p>
              </div>
            </li>
            <div className="overflow-auto flex flex-col gap-4 w-[100%] items-center">
              {sortedPreviousClasses
                .slice(startIndex, endIndex)
                .filter((clas) => {
                  if (instructorTypeFilter === "") {
                    return true;
                  } else {
                    return clas.instructorNames === instructorTypeFilter;
                  }
                })
                .filter((clas) => {
                  if (classTypeFilter === "") {
                    return true;
                  } else {
                    return clas.classType === classTypeFilter;
                  }
                })
                .map((clas, i) => {
                  return (
                    <li
                      key={clas.classId}
                      className="w-[96%] flex flex-col items-center justify-center p-2"
                    >
                      <div className="flex w-[85%] justify-between mb-[1rem] relative">
                      <div className="w-[25%] overflow-hidden relative">
                      {Ctx.userData.userType === "admin" || Ctx.userData.userType === "instructor" ? (
                        <select
                          className="rounded-[0.51rem] pr-[1.5rem] pl-[0rem] bg-[#c3f3f100]"
                          value={clas.instructorNames}
                          onChange={(e) => onInstructorNameChange(e.target.value, clas.classType, clas.classId)}
                        >
                          {instructorNamesOptions.map((name) => (
                            <option key={name} value={name}>
                              {name}
                            </option>
                          ))}
                        </select>
                      ) : (
                        clas.instructorNames
                      )}
                    </div>
                        <p className="w-[25%] text-left overflow-hidden">{clas.classType}</p>
                        <p className="overflow-hidden w-[5.7rem]">
                        {formatDate(parseInt(clas.date))}
                        </p>
                        <div className="w-[3.3rem] mr-[1rem] rounded px-2 bg-[#1b7571] max-h-[1.8rem] self-center flex justify-center items-center">
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
                                      className="px-2 py-1 rounded-md text-black sans-sarif text-[0.9rem]"
                                      onClick={() => {
                                        setClassId("");
                                        setRecordingLink("");
                                      }}
                                    >
                                      Cancel
                                    </button>
                                  ) : (
                                    <button
                                      className="w-[3rem] px-2 py-1  rounded-md sans-sarif text-white"
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
                                <p className="text-white mt-2">None</p>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </li>
                  );
                })}
              <div className="flex items-end justify-end">
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={(event, value) => setCurrentPage(value)}
                />
              </div>
            </div>
          </ul>
        </div>
      )}

      {/* Conditionally render the PreviousSessionsMobile component */}
      {isMobileScreen && <PreviousSessionsMobile />}
    </>
  );
};

export default PreviousSessions;
