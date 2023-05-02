import React, { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../../Context/Context";
import { API } from "aws-amplify";
import Logo from "../../Utils/images/happyprancer-green.png";

const HappyprancerRazorpayMonthly = ({ productId }) => {
  const razorpay = useRef();
  const UtilCtx = useContext(Context).util;
  const Ctx = useContext(Context);
  const UserCtx = useContext(Context).userData;

  useEffect(() => {
    // new window.Razorpay();
    // console.log(window.razorpay);
  }, []);

  const Navigate = useNavigate();

  const handleSubmit = async () => {
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
      UtilCtx.setLoader(false);
    }
    console.log(response.orderId);
    console.log("started");
    try {
      const options = {
        key_id: "rzp_test_1nTmB013tmcWZS",
        amount: response.amount,
        currency: response.currency,
        name: "HappyPrancer",
        description: response.subscriptionType,
        image: Logo,
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
    <div
      ref={razorpay}
      className="w-[15rem] bg-[#225c59] text-white px-12 py-2 rounded-2xl hover:text-[#225c59] hover:bg-white hover:border-[#225c59] hover:border-[0.2rem] h-[3rem] flex justify-center items-center mt-16 max450:w-[60vw]"
      onClick={() => {
        handleSubmit();
      }}
    >
      Subscribe
    </div>
  );
};

export default HappyprancerRazorpayMonthly;
