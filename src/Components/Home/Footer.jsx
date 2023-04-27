import logo from "../../Utils/Happy/images/logo.png";
import facebook from "../../Utils/Assests/FB.png";
import instagram from "../../Utils/Assests/INSTA.png";
import youtube from "../../Utils/Assests/YOU.png";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Footer = (props) => {
  const Navigate = useNavigate();
  const [content, setContent] = useState(props.initialContent);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [content]);

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <div>
      <div className="bg-black">
        <div className="flex flex-wrap justify-between p-12 gap-6 max1008:justify-center ">
          <div className="mb-5">
            <a href="/" className="transition duration-200">
              <img className="w-[15rem]" src={logo} alt="" />
            </a>
          </div>

          <ul className=" flex gap-32 max950:gap-16 text-white flex-wrap max1050:justify-center ">
            <li className="RussoOne flex flex-col gap-4 items-center text-cente ">
              <h2 className="">About Us</h2>
              <hr className="w-[100%] text-white " />
              <p
                className="cursor-pointer"
                value={content}
                onChange={handleContentChange}
                onClick={() => {
                  Navigate("/aboutus");
                }}
              >
                About Us
              </p>
              <p
                className="cursor-pointer"
                onClick={() => {
                  Navigate("/query");
                }}
              >
                Contact Us
              </p>
              <p
                className="cursor-pointer"
                onClick={() => {
                  Navigate("/instructor");
                }}
              >
                Instructor
              </p>
              {/* <a
                className="cursor-pointer"
                href="https://youtube.com/@bworkzworkout2004"
                target={"_blank"}
              >
                Youtube
              </a> */}
            </li>

            {/* <li className="RussoOne flex flex-col gap-4 items-center text-center">
              <h2>Useful Links</h2>
              <hr className="w-[100%] text-white " />
              <a
                className="cursor-pointer"
                href="https://s3-us-east-2.amazonaws.com/happyprancerdocuments/brochure.pdf"
                target={"_blank"}
              >
                Instructor Brochure
              </a>
              <a
                className="cursor-pointer"
                href="https://forms.gle/ahVeu2pSjJdWbADVA
              "
                target={"_blank"}
              >
                Instructor Application
              </a>
              <a
                className="cursor-pointer"
                href="https://anupamz.com/"
                target={"_blank"}
              >
                AnupamZ
              </a>
              <a
                className="cursor-pointer"
                href="https://www.acefitness.org/"
                target={"_blank"}
              >
                ACE
              </a>
              <p
                className="cursor-pointer"
                onClick={() => {
                  Navigate("/");
                }}
              >
                Instructor Training
              </p>
              <p
                className="cursor-pointer"
                onClick={() => {
                  Navigate("/");
                }}
              >
                Workshop
              </p>
              <p
                className="cursor-pointer"
                onClick={() => {
                  Navigate("/");
                }}
              >
                Group Video
              </p>
              <p
                className="cursor-pointer"
                onClick={() => {
                  Navigate("/");
                }}
              >
                Gym classes
              </p>
            </li> */}

            <li className="RussoOne flex flex-col gap-4 items-center text-center">
              <h2>Affiliated Gyms</h2>
              <hr className="w-[100%] text-white " />
              {/* <p
                className="cursor-pointer"
                onClick={() => {
                  Navigate("/aboutus");
                }}
              >
                More Workout and less Dance
              </p>
              <p
                className="cursor-pointer"
                onClick={() => {
                  Navigate("/");
                }}
              >
                Online Instructor Training
              </p>
              <p
                className="cursor-pointer"
                onClick={() => {
                  Navigate("/");
                }}
              >
                Online Free Jam Sessinons
              </p>
              <p
                className="cursor-pointer"
                onClick={() => {
                  Navigate("/");
                }}
              >
                Online Free Choreography
              </p>
              <p
                className="cursor-pointer"
                onClick={() => {
                  Navigate("/");
                }}
              >
                Community Support
              </p> */}
              <a
                className="cursor-pointer"
                href="https://happyprancer.com/"
                target={"_blank"}
              >
                HappyPrancer
              </a>
            </li>
          </ul>
        </div>

        <div className="py-[0.4rem] px-8 h-16 bg-[#225c59]">
          {/* <div className="flex bg-black justify-between items-center w-[15%] min-w-[10rem] max-w-[12rem] rounded-2xl h-12 p-4">
            <a
              href="https://instagram.com/happyprancer_workout?igshid=YmMyMTA2M2Y"
              target={"_blank"}
            >
              <img
                src={instagram}
                alt=""
                className="hover:mr-2 hover:w-10 hover:h-10 w-8 h-8"
              />
            </a>
            <a
              href="https://www.facebook.com/happyprancerLive?mibextid=LQQJ4d"
              target={"_blank"}
            >
              <img
                src={facebook}
                alt=""
                className="hover:mr-2 hover:w-10 hover:h-10 w-8 h-8"
              />
            </a>
            <a href="https://youtube.com/@bworkzworkout2004" target={"_blank"}>
              <img
                src={youtube}
                alt=""
                className="hover:mr-1 hover:w-10 hover:h-10 w-8 h-8"
              />
            </a>
          </div> */}
        </div>

        <div className="RussoOne p-4 flex justify-center text-white gap-2">
          <Link to={"/privacypolicy"}> Privacy Policy</Link>
          <div className="bg-[#225c59] w-1 border-white rounded-md"></div>
          <h5>&copy; All Rights are Reserved By BWORKZ</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
