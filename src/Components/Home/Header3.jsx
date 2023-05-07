import React from "react";

import image1 from "../../Utils/images/section1-items/section-1-item-1.png";
import image2 from "../../Utils/images/section1-items/section-1-item-2.png";
import image3 from "../../Utils/images/section1-items/section-1-item-3.png";

const Header3 = () => {
  return (
    <div className="flex justify-center flex-col items-center min-h-[50vh] gap-5 max850:h-auto py-20 ">
      <h3 className="text-[#999999] font-semibold text-[1.2rem]">
        A Fitness Movement
      </h3>
      <h4 className="text-[#131212d8] font-semibold text-[2.1rem]">
        Why HAPPYPRANCER ?
      </h4>
      <div>
        <ul className="flex justify-center flex-wrap items-center gap-10">
          <li className="flex flex-col items-center w-[20rem]">
            <img
              src={image1}
              alt="image1"
              className="w-[110px] h-[80px] object-contain"
            />
            <h5>Stay Home Stay Fit</h5>
            <p className="text-center">
              Free online classes via Google meet/Zoom for continous workout.
            </p>
          </li>
          <li className="flex flex-col items-center w-[20rem] ">
            <img
              src={image2}
              alt="image2"
              className="w-[80px] h-[80px] object-contain"
            />
            <h5>Instructor Led Classes</h5>
            <p className="text-center">
              Online classes are conducted by Zumba Internationally Certified
              instructors.
            </p>
          </li>
          <li className="flex flex-col items-center w-[20rem] ">
            <img
              src={image3}
              alt="image3"
              className="w-[100px] h-[80px] object-contain"
            />
            <h5>Personal & Group Exercise</h5>
            <p className="text-center">
              Personal (person-to-person trainer based) and Group exercies with
              friends
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header3;
