import React, { useContext } from "react";
import { useNavigate } from "react-router";
// import "../comp/Subscription.css";
import Context from "../Context/Context";
import HappyprancerPaypalMonthly from "../Components/Subscription/HappyprancerPaypalMonthly";
import HappyprancerRazorpayMonthly from "../Components/Subscription/HappyprancerRazorpayMonthly";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Home/Footer";

export default function Subscription() {
  const Ctx = useContext(Context);
  const UserCtx = useContext(Context).userData;

  const Navigate = useNavigate();

  return (
    <>
      <NavBar />
      <div className="Back text-[1.5rem]  flex  flex-col items-center h-[54rem] max980:h-[auto] justify-center gap-[5rem] pb-20 bg-[#f5f5f5]">
        <div className="text-center mt-20 sans-sarif ">
          <h1>Monthly Membership Subscription </h1>
          <h3 className="text-[1rem]">see what are the pricing in details</h3>
        </div>
        <ul className="flex flex-wrap justify-center w-[90vw] max-w-[80rem] gap-28 ">
          {Ctx.productList.map((item) => {
            return (
              <li className="bg-white w-[24rem] h-[42rem] p-16 rounded-[2rem] z-0  flex flex-col items-center gap-8 shadowSubscribe   max450:w-[90vw] max450:gap-4 max450:text-[1rem] max450:min-h-[28rem] max450:h-auto max450:p-12 border-[#225c59] border-[0.1rem]">
                <p className="text-[1.6rem]">{item.heading}</p>
                <p className="overflow-hidden text-[1rem] h-auto">
                  {item.description}
                </p>
                <h1 className="text-left w-[100%]">
                  {(item.currency === "INR" ? "₹ " : "$ ") +
                    parseInt(item.amount) / 100 +
                    "/" +
                    item.durationText}
                </h1>
                {Ctx.isAuth ? (
                  <div className=" ">
                    {UserCtx.status === "Active" ? (
                      <p className="text-[1rem] w-[15rem] px-12 py-2 rounded-2xl text-[#225c59] bg-white border-[#225c59] border-[0.2rem] h-[3rem] flex justify-center items-center mt-16 max450:w-[60vw]">
                        Already Subscribed
                      </p>
                    ) : (
                      <>
                        {item.currency === "INR"
                          ? item.durationText === "Month" && (
                              <HappyprancerRazorpayMonthly />
                            )
                          : item.durationText === "Month" && (
                              <HappyprancerPaypalMonthly />
                            )}
                      </>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      Navigate("/signup");
                    }}
                    className="w-[15rem] bg-[#225c59] text-white px-12 py-2 rounded-2xl hover:text-[#225c59] hover:bg-white hover:border-[#225c59] hover:border-[0.3rem] h-[3rem] flex justify-center items-center mt-16 max450:w-[60vw]"
                  >
                    Sign Up
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
}
