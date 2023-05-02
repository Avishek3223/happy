import React, { useContext } from "react";
import { useNavigate } from "react-router";
// import "../comp/Subscription.css";
import Context from "../../Context/Context";
import HappyprancerPaypalMonthly from "../Subscription/HappyprancerPaypalMonthly";
import HappyprancerRazorpayMonthly from "../Subscription/HappyprancerRazorpayMonthly";
import { API } from "aws-amplify";

export default function Subscription() {
  const Ctx = useContext(Context);
  const UserCtx = useContext(Context).userData;
  const UtilCtx = useContext(Context).util;

  const Navigate = useNavigate();

  const handleSubmit = async (
    amount,
    currency,
    subscriptionType,
    productId
  ) => {
    // const amount = country == "india" ? 49900 : 1200;
    // const currency = country == "india" ? "INR" : "USD";
    // const subscriptionType = "Monthly";

    UtilCtx.setLoader(true);
    let response;

    try {
      console.log("before");
      response = await API.put("user", "/user/billing/happyprancer", {
        body: {
          productId: productId,
        },
      });
    } catch (e) {
      console.log(e);
    }
    console.log(response.orderId);
    console.log("started");
    try {
      const options = {
        key_id: "rzp_test_G3Qht02eQQUjLX",
        amount: response.amount,
        currency: response.currency,
        name: "HappyPrancer",
        description: response.subscriptionType,
        order_id: response.orderId,
        handler: function (response) {
          // alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature);66
          const verify = async () => {
            console.log("EARLY");
            UtilCtx.setLoader(true);
            try {
              // alert(Ctx.isAuth);
              let resBody = {
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
              };

              const res = await API.put(
                "user",
                "/user/billing/verify/happyprancer",
                {
                  body: resBody,
                }
              );
              const tempUserdata = await API.get(
                "user",
                "/user/profile/happyprancer"
              );

              Ctx.setUserData(tempUserdata);
              if (res.signatureIsValid) {
                console.log(res.signatureIsValid);
                Navigate("/dashboard", { state: { isReload: true } });
              } else {
                alert(
                  "Transaction Failed If your Amount was Deducted then Contact us"
                );
              }
              // alert(res);
              UtilCtx.setLoader(false);
            } catch (e) {
              console.log(e);
              UtilCtx.setLoader(false);
            }
          };
          verify();
        },
        prefill: {
          name: UserCtx.userName,
          email: UserCtx.emailId,
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#1b7571",
        },
      };

      console.log("started 2");
      var rzp1 = new window.Razorpay(options);
      console.log("started 3");
      rzp1.on("payment.failed", function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
        UtilCtx.setLoader(false);
      });
      const fields = rzp1.open();
      console.log(fields);
      UtilCtx.setLoader(false);
    } catch (e) {
      console.log(e.message);
      console.log(e);
      UtilCtx.setLoader(false);
    }
  };

  return (
    <>
      <section className="Back text-[1.5rem]  flex  flex-col items-center h-[50rem] max980:h-[auto] justify-center gap-[5rem] pb-20 bg-[#f5f5f5]">
        <div className="text-center mt-20 RussoOne ">
          <h1>Monthly Membership Subscription </h1>
          <h3 className="text-[1rem]">see what are the pricing in details</h3>
        </div>
        <ul className="flex flex-wrap justify-center w-[90vw] max-w-[80rem] gap-28 ">
          {Ctx.productList.map((item) => {
            return (
              <li className="bg-white w-[24rem] h-[32rem] p-16 rounded-[2rem] z-0  flex flex-col items-center gap-8 shadowSubscribe   max450:w-[90vw] max450:gap-4 max450:text-[1rem] max450:min-h-[28rem] max450:h-auto max450:p-12 border-[#225c59] border-[0.1rem]">
                <p className="text-[1.6rem]">{item.heading}</p>
                <p className="overflow-hidden text-[1rem]">
                  {item.description}
                </p>
                <h1 className="text-left w-[100%]">
                  {(item.currency === "INR" ? "₹ " : "$ ") +
                    parseInt(item.amount) / 100 +
                    "/" +
                    item.durationText}
                </h1>
                {Ctx.isAuth ? (
                  <div>
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
        {/* <div>
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
        </div> */}
      </section>
    </>
  );
}
