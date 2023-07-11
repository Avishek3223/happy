import React, { useContext, useState } from "react";
import whyImg from "../../Utils/Svg/why-bworkz-img.svg";
import { BsFillPencilFill } from "react-icons/bs";
import Context from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import { API } from "aws-amplify";
import Pagination from "@mui/material/Pagination";
import './Stylesheets/upcoming.css'


const UpcomingSessions = () => {
  const [classType, setClassType] = useState("");
  const [zoomLink, setZoomLink] = useState("");
  const [instructorNames, setInstructorNames] = useState("");
  const [date, setDate] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [instructorName, setInstructorName] = useState("");
  const [classId, setClassId] = useState();
  const Ctx = useContext(Context);
  const UtilCtx = useContext(Context).util;
  //flilter
  const [classTypeFilter, setClassTypeFilter] = useState("");
  const [instructorTypeFilter, setinstructorTypeFilter] = useState("");
  // Filter classes by selected instructor
  const filteredClasses = Ctx.upcomingClasses.filter(
    (clas) =>
      instructorTypeFilter === "" || clas.instructorNames === instructorTypeFilter
  );

  // Get unique class types from filtered classes
  const classTypes = Array.from(
    new Set(filteredClasses.map((clas) => clas.classType))
  );

  const Navigate = useNavigate();

  const itemsPerPage = 5; // Set the desired number of items per page
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(Ctx.upcomingClasses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const [showFilters, setShowFilters] = useState(false); // State to control the visibility of filters

  



  if (Ctx.userData.status === "InActive" && Ctx.userData.userType === "member")  {
    Navigate("/subscription");
  }


  const onNameChange = async () => {
    UtilCtx.setLoader(true);

    try {
      if (classId.length === 0 && instructorName.length === 0) {
        alert("Invalid Details");
        UtilCtx.setLoader(false);
      } else {
        await API.put("user", "/admin/edit-schedule-name/happyprancer", {
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
  
    try {
      UtilCtx.setLoader(true); // Show loader
  
      await API.post("user", "/admin/add-schedule/happyprancer", {
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
  
      // Update upcoming classes without reloading the page
      const newClass = {
        classType: classType,
        startTimeEst: new Date(date).getTime(),
        instructorNames: instructorNames,
        zoomLink: zoomLink,
        date: new Date(date).getTime(),
      };
      Ctx.setUpcomingClasses([...Ctx.upcomingClasses, newClass]);
  
      // Reset form inputs
      setClassType("");
      setInstructorNames("");
      setZoomLink("");
      setDate("");
  
    } catch (error) {
      alert(error.message);
    } finally {
      UtilCtx.setLoader(false); // Hide loader
    }
  };
  
  

  return (
    <div className="w-[100%] flex flex-col items-center pt-6 max536:p-0">
      {Ctx.userData.userType === "admin" ||
        Ctx.userData.userType === "instructor" || (
          <div className="w-[90%] h-64 bg-[#c3f3f1] rounded-[2.5rem] p-4 flex items-center justify-between max1050:px-2">
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
            
            <input
              placeholder="Class Type"
              className="bg-[#c3f3f1] text-[#0008] RussoOne px-4 py-1 rounded-lg w-[10rem]"
              value={classType}
              onChange={(e) => {
                setClassType(e.target.value);
              }}
            />
         
            <input
              placeholder="Instructor Name"
              className="bg-[#c3f3f1] text-[#0008] RussoOne px-4 py-1 rounded-lg w-[13rem]"
              value={instructorNames}
              onChange={(e) => {
                setInstructorNames(e.target.value);
              }}
            />

            <textarea
                className="bg-[#c3f3f1] text-[#0008] RussoOne px-4 pt-5 rounded-lg  w-[10rem] flex justify-center items-start flex-grow"
                placeholder="Zoom Link"
                value={zoomLink}
                onChange={(e) => {
                  setZoomLink(e.target.value);
                }}
              />
            
            <input
              className="bg-[#c3f3f1] text-[#0008] RussoOne px-4 py-1 rounded-lg w-[13rem]"
              placeholder="Date"
              type={"datetime-local"}
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
           
          </div>
          <button
            className="RussoOne bg-[#1b7571] rounded-lg py-2 text-[#fff]"
            onClick={onScheduleCreate}
          >
            Post
          </button>
        </form>
      )}
      <div className="mt-8 w-[80%] max1050:w-[92%] flex justify-between">
        <div className="w-[100%]">
          <h3 className="text-center text-[1.7rem] pl-3 mb-4  Sansita font-thin">
            Upcoming Classes
          </h3>
          <button
          className="filter-button bg-[#1b7571] w-[4rem] m-[1rem] rounded-[0.4rem] text-white"
          onClick={() => setShowFilters(!showFilters)} // Toggle the visibility of filters
          >
          Filters
          </button>
          <div className="flex flex-col-reverse">
          <div
          className={`filters ${showFilters ? "show" : ""}`}
        >
                
                <div className="w-[95%] flex justify-end m-[0.8rem] gap-3">
                  <label className="font-bold " htmlFor="instructorTypeFilter" >Instructor: </label>
                      <select
                            className="rounded-[0.51rem] px-4 bg-[#c3f3f1]"
                            id="instructorTypeFilter"
                            value={instructorTypeFilter}
                            onChange={(e) => setinstructorTypeFilter(e.target.value)}
                          >
                            <option value="">All</option>
                            {/* Render the options dynamically based on available instructors */}
                            {Array.from(
                              new Set(Ctx.upcomingClasses.map((clas) => clas.instructorNames))
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

          <ul
            className={`h-[31rem] ${
              (Ctx.userData.userType === "admin" ||
                Ctx.userData.userType === "instructor") &&
              "h-[32rem] relative pb-[3rem]"
            }  flex flex-col overflow-auto bg-[#c3f3f1] max536:bg-transparent rounded-2xl items-center justify-start pt-6 max536:gap-3 `}
          >
            <li
              className={`w-[100%] flex flex-col items-center justify-center p-2 max536:pt-5 max536:rounded-2xl`}
            >
              <div className="flex w-[85%] max1050:w-[96%] justify-between font-bold max1050:justify-between mb-5 relative pr-8 ">
                <p className="overflow-hidden w-[3.6rem] ">Date</p>
                <p className="w-[7rem] max536:hidden ">Instructor</p>
                <p className="w-[40%] text-left overflow-hidden  max536:hidden">
                  Description
                </p>
                <p className=" ">Time</p>
                <p className="px-2 text-black max-h-[1.8rem] self-center ml-1">
                  Zoom Link
                </p>
              </div>
            </li>

            <div className="overflow-auto max536:w-[96%] flex flex-col gap-4 w-[100%]">
            {Ctx.upcomingClasses
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
                
              return (
                <li
                  key={clas.classId}
                  className={`w-[100%] flex flex-col items-center justify-center p-2 ${
                    editingIndex === i
                      ? "bg-[#fdd00823]"
                      : "max536:bg-[#c3f3f1] "
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
                      className="px-2 bg-[#1b7571] max-h-[1.8rem] self-center ml-1 text-white"
                      href={clas.zoomLink}
                      target="_blank"
                      rel="noreferrer"
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
                        className="bg-[#1b7571] text-[#0008] RussoOne px-4 py-1 rounded-lg w-[85%]"
                        placeholder="Instructior Name"
                        value={instructorName}
                        onChange={(e) => {
                          setInstructorName(e.target.value);
                        }}
                      />
                      <button
                        className="RussoOne bg-[#1b7571] rounded-lg py-2 w-[6rem] px-1 max536:text-[0.8rem] max536:py-1"
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
                        className="RussoOne bg-[#1b7571] rounded-lg py-2 w-[6rem] px-1 max536:text-[0.8rem] max536:py-1"
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
                  </div>
            <div className=" flex items-end justify-end  ">
            <Pagination
                count={totalPages}
                page={currentPage}
                onChange={(event, value) => setCurrentPage(value)}
              />
            </div>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSessions;
