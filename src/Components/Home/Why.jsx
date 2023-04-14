import React from "react";

import why1 from "../../Utils/images/why/why1.png";
import why2 from "../../Utils/images/why/why2.png";
import why3 from "../../Utils/images/why/why3.png";
import why4 from "../../Utils/images/why/why4.png";

const Why = () => {
  return (
    <div className="h-[100vh]  max500:m-[2rem] m-[5rem]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center max478:text-[2rem] mb-[5rem] text-[4rem] max1050:mb-[3rem] max800:text-[2rem]  ">
          Why Choose Bworkzlive?
        </h1>
        <ul className="flex w-[90vw] max-w-[40rem] mt-24 relative">
          <img
            src={why1}
            alt=""
            className="absolute -left-[5rem] top-0 w-[20rem] "
          ></img>
          <img
            src={why2}
            alt=""
            className="absolute left-[5rem] top-[10rem] w-[20rem] z-30"
          ></img>   
          <img
            src={why3}
            alt=""
            className="absolute left-[20rem] top-[5rem] w-[20rem] z-20"
          ></img>
          <img
            src={why4}
            alt=""
            className="absolute left-[25vw] top-0 w-[20rem] "
          ></img>
        </ul>
      </div>
    </div>
  );
};

export default Why;
