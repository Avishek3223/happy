import React, { useContext } from "react";
import { useNavigate } from "react-router";
// import "../comp/Subscription.css";
import BworkzInstructorMonthly from "../Subscription/HappyprancerInstructorMonthly";
import BworkzInstructorYearly from "../Subscription/HappyprancerInstructorYearly";
import Context from "../../Context/Context";

export default function Subscription() {
  const Ctx = useContext(Context);

  const Navigate = useNavigate();

  return (
    <>
      <section className="Back text-[1.5rem]  flex  flex-col items-center h-[50rem] max980:h-[auto] justify-center gap-[5rem] pb-20 ">
        <div className="text-center mt-20 RussoOne ">
          <h1>INSTRUCTOR TRAINING FEES</h1>
          <h3 className="text-[1rem]">see what are the pricing in details</h3>
        </div>
        <div className="flex flex-wrap justify-center w-[90vw] max-w-[80rem] gap-28 ">
          {/* <BworkzInstructorMonthly />
          <BworkzInstructorYearly /> */}
          <div className="bg-white w-[24rem] h-[32rem] p-16 rounded-[2rem]  flex flex-col items-center gap-8 shadowSubscribe   max450:w-[90vw] max450:gap-4 max450:text-[1rem] max450:min-h-[28rem] max450:h-auto max450:p-12 border-[#225c59] border-[0.1rem]">
            <p className="">BWORKZ Choreography Monthly</p>
            <p>Monthly Subscription Through PayPal</p>
            <h1 className="text-left w-[100%]">$ 20.00 / Month</h1>
            {Ctx.isAuth ? (
              <BworkzInstructorMonthly />
            ) : (
              <button
                onClick={() => {
                  Navigate("/signup");
                }}
                className="w-[15rem] bg-[#225c59] text-white px-12 py-2 rounded-2xl hover:text-[#225c59] hover:bg-white hover:border-[#225c59] hover:border-[0.3rem] h-[3rem] flex justify-center items-center mt-16 max450:w-[60vw]"
              >
                Subscribe
              </button>
            )}
          </div>
          <div className="bg-white w-[24rem] h-[32rem] p-16 rounded-[2rem]  flex flex-col items-center gap-8 shadowSubscribe max450:text-[1rem] max450:min-h-[28rem] max450:h-auto max450:p-12  border-[#225c59] border-[0.1rem]">
            <p className="mb-9">BWORKZ Instructor Yearly</p>
            <p>Yearly Subscription Through PayPal</p>
            <h1 className="text-left w-[100%]">$ 200.00 / Yearly</h1>
            {Ctx.isAuth ? (
              <BworkzInstructorYearly />
            ) : (
              <button
                onClick={() => {
                  Navigate("/signup");
                }}
                className="w-[15rem] bg-[#225c59] text-white px-12 py-2 rounded-2xl hover:text-[#225c59] hover:bg-white hover:border-[#225c59] hover:border-[0.3rem] h-[3rem] flex justify-center items-center mt-16  max450:w-[60vw]"
              >
                Subscribe
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
