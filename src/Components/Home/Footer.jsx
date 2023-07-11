import logo from "../../Utils/Happy/images/logo.png";
import facebook from "../../Utils/Assests/FB.png";
import instagram from "../../Utils/Assests/INSTA.png";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

const Footer = (props) => {
  const Navigate = useNavigate();
  // const [content, setContent] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.initialContent]);

  // const handleContentChange = (event) => {
  //   setContent(event.target.value);
  // };

  return (
    <div>
      <div className="bg-black ">
        <div className="flex flex-wrap justify-between max600:flex-col max600:justify-center p-12 gap-6 max1358:justify-center ">
          <div className="mb-5">
            <a href="/" className="transition duration-200 flex justify-center">
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
              <Link
                className="cursor-pointer"
                href="https://bworkzlive.com/"
                target={"_blank"}
                rel="noreferrer"
              >
                BWorkz
              </Link>
              <a
                className="cursor-pointer"
                href="https://Zumba.com/"
                target={"_blank"}
                rel="noreferrer"
              >
                Zumba
              </a>

            </li>


          </ul>
        </div>

        <div className=" h-16 bg-[#225c59] flex w-full items-center justify-start px-[2rem]">                                                                            {/* Social media Links  */}
          <div className="flex  bg-black justify-between  items-center w-[7rem]  rounded-2xl h-12 p-4">
            <a
              href="https://instagram.com/HappyPrancer"
              target={"_blank"}
              rel="noreferrer"
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
              rel="noreferrer"
            >
              <img
                src={facebook}
                alt=""
                className="hover:mr-2 hover:w-10 hover:h-10 w-8 h-8"
              />
            </a>

          </div>
        </div>

        <div className=" p-4 flex justify-center text-white gap-2 font-poppins max536:flex-col max536:text-center ">        {/*      Policy Links      */}
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
