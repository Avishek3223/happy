import React, { useContext } from "react";
import { useNavigate } from "react-router";
import "../Components/comp/Subscription.css";
import Footer from "../Components/Home/Footer";
import NavBar from "../Components/NavBar";
import BworkzInstructorMonthly from "../Components/Subscription/BworkzInstructorMonthly";
import BworkzInstructorYearly from "../Components/Subscription/BworkzInstructorYearly";
import Context from "../Context/Context";

export default function Subscription() {
  const Ctx = useContext(Context);

  const Navigate = useNavigate();

  return (
    <>
      <NavBar />
      <section className="text-[1.5rem] RussoOne mt-[3rem] flex  flex-col items-center min-h-screen justify-center gap-[8rem] pb-20">
        <div className="text-center">
          <h1>WHAT WE BRING TO THE TABLE</h1>
          <h3 className="text-[1rem]">see what are the pricing in details</h3>
        </div>
        <div className="flex flex-wrap justify-center w-[90vw] max-w-[80rem] gap-28">
          {/* <BworkzInstructorMonthly />
          <BworkzInstructorYearly /> */}
          <div className="bg-white w-[24rem] h-[34rem] p-16 rounded-[2rem] RussoOne flex flex-col items-center gap-8 shadowSubscribe max450:w-[90vw] max450:gap-4 max450:text-[1rem] max450:min-h-[28rem] max450:h-auto max450:p-12 border-[#FDCF08] border-[0.1rem]">
            <p className="mb-8">BWORKZ Choreography Monthly</p>
            <p>Monthly Subscription Through PayPal</p>
            <h1 className="text-left w-[100%]">$ 20.00 / Month</h1>
            {Ctx.isAuth ? (
              <BworkzInstructorMonthly />
            ) : (
              <button
                onClick={() => {
                  Navigate("/signup");
                }}
                className="w-[15rem] bg-[#FDCF08] text-white px-12 py-2 rounded-2xl hover:text-[#FDCF08] hover:bg-white hover:border-[#FDCF08] hover:border-[0.3rem] h-[3rem] flex justify-center items-center mt-1 max450:w-[60vw]"
              >
                Subscribe
              </button>
            )}
          </div>
          <div className="bg-white w-[24rem] h-[34rem] p-16 rounded-[2rem] RussoOne flex flex-col items-center gap-8 shadowSubscribe max450:text-[1rem] max450:min-h-[28rem] max450:h-auto max450:p-12  border-[#FDCF08] border-[0.1rem]">
            <p className="mb-8">BWORKZ Instructor Yearly</p>
            <p>Yearly Subscription Through PayPal</p>
            <h1 className="text-left w-[100%]">$ 200.00 / Yearly</h1>
            {Ctx.isAuth ? (
              <BworkzInstructorYearly />
            ) : (
              <button
                onClick={() => {
                  Navigate("/signup");
                }}
                className="w-[15rem] bg-[#FDCF08] text-white px-12 py-2 rounded-2xl hover:text-[#FDCF08] hover:bg-white hover:border-[#FDCF08] hover:border-[0.3rem] h-[3rem] flex justify-center items-center mt-16  max450:w-[60vw]"
              >
                Subscribe
              </button>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
