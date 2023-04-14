import React from "react";
import { useState } from "react";
import emailJs from "@emailjs/browser";
import "../Components/comp/Query.css";
import Footer from "../Components/Home/Footer";
import NavBar from "../Components/NavBar";

import query from "../Utils/Assests/query.png";
import { useContext } from "react";
import Context from "../Context/Context";
import "./query.css";

export default function Query() {
  const UtilCtx = useContext(Context).util;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    UtilCtx.setLoader(true);

    const params = {
      name: name,
      user_email: email,
      address: address,
      message: message,
    };

    try {
      await emailJs.send(
        "service_x9gqsk8",
        "template_1rkvqay",
        params,
        "user_X7r11lSn4Rg1cG6RBM4kE"
      );

      UtilCtx.setLoader(false);
      alert("Your message is sent. We'll get back to you soon!");
      setName("");
      setEmail("");
      setAddress("");
      setMessage("");
    } catch (e) {
      alert(e.message);
      UtilCtx.setLoader(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-col gap-16 py-10 items-center Background">
        <div className="flex flex-col items-center ">
          <h2 className="text-[3rem] RussoOne max500:text-[1.6rem] text-[white]">
            Have Questions?
          </h2>
          <p className="text-[white]">we are always here for a good cup or coffee</p>
        </div>
        <div className="mb-10">
          <div className="bg-white flex  px-5 shadow-2xl gap-8 max500:w-[80vw]">
            <div className="py-10 max850:hidden">
              <img src={query} alt="" />
            </div>
            <div className="border-black border-[1px] bg-black my-8 max850:hidden"></div>
            <div className="RussoOne flex flex-col items-center gap-10 py-4">
              <h3>FILL IT UP!</h3>
              <form className="flex flex-col gap-8 items-center">
                <ul className="w-[25rem] flex flex-col items-center gap-6 max500:w-[70vw]">
                  <li className="flex gap-4 items-center justify-between w-[23rem] max500:flex-col max500:gap-1 max500:items-start max500:w-[90%]">
                    <label>Name</label>
                    <input
                      className="bg-[#d9d9d980] rounded-md py-[0.4rem] px-2 max500:w-[100%]"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </li>
                  <li className="flex gap-4 items-center justify-between w-[23rem] max500:flex-col max500:gap-1 max500:items-start max500:w-[90%]">
                    <label>Email</label>
                    <input
                      className="bg-[#d9d9d980] rounded-md py-[0.4rem] px-2 max500:w-[100%]"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </li>
                  <li className="flex gap-4 items-center justify-between w-[23rem] max500:flex-col max500:gap-1 max500:items-start max500:w-[90%]">
                    <label>Address</label>
                    <input
                      className="bg-[#d9d9d980] rounded-md py-[0.4rem] px-2 max500:w-[100%]"
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />
                  </li>
                  <li className="flex gap-4 items-center justify-between w-[23rem] max500:flex-col max500:gap-1 max500:items-start max500:w-[90%]">
                    <label>Message</label>
                    <textarea
                      className="bg-[#d9d9d980] rounded-md py-[0.4rem] px-2 h-[8rem] max500:w-[100%]"
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                    />
                  </li>
                </ul>
                <button
                  className="RussoOne bg-[#EFC40B] rounded-lg w-[8rem] text-white py-2 "
                  onClick={onSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <section className="query mt-6">
        <h1>Have Questions?</h1>
        <h2>We are always here for a good cup of coffee</h2>
        <div className="container">
          <div className="new-query">
            <img src={query} alt="" />
          </div>
          <hr />

          <form className="form-container">
            <h1>Fill It Up! </h1>
            <div class="lower">
              <p>
                Name: *
                <input type="text" name="name" id="name" requried />
              </p>
              <p>
                Country: *
                <input type="text" name="country" id="country" requried />
              </p>
              <p>
                E-mail: *
                <input type="text" name="email" id="email" requried />
              </p>
              <p>
                Address: *
                <input type="text" name="address" id="address" requried />
              </p>
              <p>
                Message: *
                <textarea
                  name="text"
                  id="message"
                  cols="30"
                  rows="5"
                ></textarea>
              </p>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </section> */}
      <Footer />
    </>
  );
}
