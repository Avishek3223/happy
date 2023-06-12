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
      <div className="bg-black ">
        <div className="flex flex-wrap justify-between p-12 gap-6 max1008:justify-center ">
          <div className="mb-5">
            <a href="/" className="transition duration-200">
              <img className="w-[15rem]" src={logo} alt="" />                                     {/* Logo  */}
            </a>
          </div>

          <ul className=" flex gap-32 max950:gap-16 text-white flex-wrap max1050:justify-center ">           {/* Quick Links  */}
            <li className="RussoOne flex flex-col gap-4 items-center text-cente ">
              <h2 className="">Usefull Links</h2>                    
              <hr className="w-[100%] text-white " />
              
              <p
                className="cursor-pointer"
                onClick={() => {
                  Navigate("/query");
                }}
              >
                Contact Us
              </p>
              <a
                className="cursor-pointer"
                href="https://bworkzlive.com/"
                target={"_blank"}
              >
                BWorkz
              </a>
              <a
                className="cursor-pointer"
                href="https://Zumba.com/"
                target={"_blank"}
              >
                Zumba
              </a>
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

         {/*   <li className="RussoOne flex flex-col gap-4 items-center text-center">
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
              </p> 
              <a
                className="cursor-pointer"
                href="https://bworkzlive.com/"
                target={"_blank"}
              >
                BWorkz
              </a>
            </li>        */}
          </ul>
        </div>

        <div className="py-[0.4rem] px-8 h-16 bg-[#225c59]">                                                                            {/* Social media Links  */}
           <div className="flex bg-black justify-between items-center w-[10%] min-w-[5rem] max-w-[7rem] rounded-2xl h-12 p-4">
            <a
              href="https://instagram.com/HappyPrancer"
              target={"_blank"}
            >
              <img
                src={instagram}
                alt=""
                className="hover:mr-2 hover:w-10 hover:h-10 w-8 h-8"
              />
            </a>
            <a
              href="https://www.facebook.com/HappyPrancer"
              target={"_blank"}
            >
              <img
                src={facebook}
                alt=""
                className="hover:mr-2 hover:w-10 hover:h-10 w-8 h-8"
              />
            </a>
            {/*  <a href="https://www.youtube.com/@amazonwebservices" target={"_blank"}>
              <img
                src={youtube}
                alt=""
                className="hover:mr-1 hover:w-10 hover:h-10 w-8 h-8"
            /> 
            </a>     */}
          </div> 
        </div>

        <div className=" p-4 flex justify-center text-white gap-2 font-poppins max406:flex-col max406:text-center ">        {/*      Policy Links      */}
          <Link to={"/privacypolicy"}> Privacy Policy</Link>
          <div className="bg-[#225c59] w-1 border-white rounded-md"></div>
          <Link to={"/terms"}> Terms and Condition </Link>
          <div className="bg-[#225c59] w-1 border-white rounded-md"></div>
          <Link to={"/refund"}>  Cancellation/Refund Policy </Link>
          <div className="bg-[#225c59] w-1 border-white rounded-md"></div>
          <h5> All rights reserved. © 2023 happyprancer.com</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
