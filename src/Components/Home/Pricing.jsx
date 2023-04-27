import React, { useState, useContext, useRef, useEffect } from "react";
import NavBar from "../DashBoard/NavBar";
import QrCodeSVG1 from "../images/Pricing/QRCODE_EDITED2.svg";
import QrCodeSVG2 from "../images/Pricing/NewPayment2.svg";
import IndiaPayment from "../images/Pricing/indiaPayment.svg";
import OtherPayment from "../images/Pricing/otherPayment.svg";
import ShareReceipt from "../images/Pricing/ShareReceipt.svg";
import { AiOutlineClose } from "react-icons/ai";
import { API } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import Context from "../Context/Context";
import Logo from "../images/happyprancer-green.png";

import "./Pricing.css";

const Pricing = () => {
  const [country, setCountry] = useState("other");
  const UserCtx = useContext(Context).userData;
  const UtilCtx = useContext(Context).util;
  const Ctx = useContext(Context);
  const paypalRef = useRef();

  const Navigate = useNavigate();

  const paypalData = async (postData) => {
    return await API.put("user", `/user/payment-update/happyprancer`, {
      body: postData,
    });
  };

  useEffect(() => {
    window.paypal
      .Buttons({
        style: {
          shape: "rect",
          color: "gold",
          layout: "vertical",
          label: "subscribe",
        },
        createSubscription: function (data, actions) {
          return actions.subscription.create({
            /* Creates the subscription */
            plan_id: "P-4WM30609EU9198254MQZDUIA",
          });
        },
        onApprove: async (data, actions) => {
          try {
            const addMonth = 30 * 24 * 60 * 60 * 1000;

            const product = "BworkZ Instructor Monthly";
            const joiningDate = Date.now();
            const renewDate = Date.now() + addMonth;
            const paymentMethodEmailId = "---";
            const subscriptionId = data.subscriptionID;
            // const zoomDesc =
            //   "BworkZ Pro Class Every Week Monday, Thursday 7 PM EST and Saturday 9AM EST (6:30 PM India Time) : ";
            // const zoomLink = "https://zoom.us/j/94132316169";

            await paypalData({
              product,
              joiningDate,
              renewDate,
              paymentMethodEmailId,
              subscriptionId,
              // zoomDesc,
              // zoomLink,
            });

            // console.log('Data is stored successfully!')
            alert(data.subscriptionID); // You can add optional success message for the subscriber here
            // Navigate("/paymentsuccessful");
            Navigate("/dashboard", { state: { isReload: true } });
          } catch (e) {
            // history.push('/PaymentFailed')
            alert("Payment Failed");
          }
        },
      })
      .render("#paypal-button-container-P-4WM30609EU9198254MQZDUIA"); // Renders the PayPal
  }, []);

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

  // console.log(Ctx.productList);

  return (
    <div className="pricingCont">
      <NavBar />
      <div className="pricingCont2">
        {country === "" && (
          <div className="CheckRegion">
            <div className="CheckRegioncont2">
              <p>Method of transaction from which Country?</p>
              <div className="CheckRegioncont3">
                <img
                  alt=""
                  src={IndiaPayment}
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    // if (!Ctx.isAuth) {
                    //   Navigate("/signup");
                    // }
                    setCountry("india");
                  }}
                />
                <img
                  alt=""
                  src={OtherPayment}
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    // if (!Ctx.isAuth) {
                    //   Navigate("/signup");
                    // }
                    setCountry("other");
                  }}
                />
              </div>
              <AiOutlineClose
                className="CheckRegioncont2img1"
                color="grey"
                size={"2rem"}
              />
            </div>
          </div>
        )}
        {country === "other" && (
          // <div className="newPricingCont1">
          //   <img alt="" src={QrCodeSVG2} className="SvgImagePricing" />
          //   <a href="https://forms.gle/TtysALtQr9PEuPk47" target={"_blank"}>
          //     <img alt="" src={ShareReceipt} className="ShareReceiptButton2" />
          //   </a>
          // </div>
          // <button
          //   onClick={handleSubmit}
          //   className={"paymentB"}
          //   disabled={UtilCtx.loader}
          // >
          //   Pay 12$ for Monthly Subscription
          // </button>
          // <ul className="subscriptionCardContainers">
          //   <li className="subscriptionCard">
          //     <div className="subscriptionCardCont1">
          //       <h5>Monthly Subscription</h5>
          //       <p>
          //         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
          //         assumenda impedit ullam illo, similique est sunt ducimus ipsum
          //         quidem nulla ex soluta corporis natus tempora expedita in enim
          //         facere repellendus, deserunt doloribus velit delectus.
          //         Deserunt nulla in aliquid ducimus adipisci.
          //       </p>
          //       <ol>
          //         <li>Something</li>
          //         <li>Something</li>
          //       </ol>
          //     </div>
          //     <div className="subscriptionCardCont2">
          //       <p className="price">$12</p>
          //       {Ctx.isAuth ? (
          //         <button
          //           onClick={(e) => {
          //             e.preventDefault();

          //             handleSubmit(1200, "USD", "Monthly");
          //           }}
          //           className={"paymentB"}
          //           disabled={UtilCtx.loader}
          //         >
          //           Subscribe
          //         </button>
          //       ) : (
          //         <button
          //           onClick={(e) => {
          //             e.preventDefault();
          //             Navigate("/signup");
          //           }}
          //           className="paymentB"
          //         >
          //           Log In
          //         </button>
          //       )}
          //     </div>
          //   </li>
          //   <li className="subscriptionCard">
          //     <div className="subscriptionCardCont1">
          //       <h5>Yearly Subscription</h5>
          //       <p>
          //         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
          //         assumenda impedit ullam illo, similique est sunt ducimus ipsum
          //         quidem nulla ex soluta corporis natus tempora expedita in enim
          //         facere repellendus, deserunt doloribus velit delectus.
          //         Deserunt nulla in aliquid ducimus adipisci.
          //       </p>
          //       <ol>
          //         <li>Something</li>
          //         <li>Something</li>
          //       </ol>
          //     </div>
          //     <div className="subscriptionCardCont2">
          //       <p className="price">$120</p>
          //       {Ctx.isAuth ? (
          //         <button
          //           onClick={(e) => {
          //             e.preventDefault();

          //             handleSubmit(12000, "USD", "Yearly");
          //           }}
          //           className={"paymentB"}
          //           disabled={UtilCtx.loader}
          //         >
          //           Subscribe
          //         </button>
          //       ) : (
          //         <button
          //           onClick={(e) => {
          //             e.preventDefault();

          //             Navigate("/signup");
          //           }}
          //           className="paymentB"
          //         >
          //           Log In
          //         </button>
          //       )}
          //     </div>
          //   </li>
          // </ul>
          <div className="paypal-container">
            <div
              id="paypal-button-container-P-4WM30609EU9198254MQZDUIA"
              ref={paypalRef}
            ></div>
          </div>
        )}
        {country === "india" && (
          // <div className="newPricingCont1">
          //   <img alt="" src={QrCodeSVG1} className="SvgImagePricing" />
          //   <a href="https://forms.gle/TtysALtQr9PEuPk47" target={"_blank"}>
          //     <img alt="" src={ShareReceipt} className="ShareReceiptButton" />
          //   </a>
          // </div>
          // <button
          //   onClick={handleSubmit}
          //   className={"paymentB"}
          //   disabled={UtilCtx.loader}
          // >
          //   Pay ₹499 for Monthly Subscription
          // </button>
          <ul className="subscriptionCardContainers">
            {Ctx.productList.map((product) => {
              return (
                <li className="subscriptionCard" key={product.productId}>
                  <div className="subscriptionCardCont1">
                    <h5>{product.heading}</h5>
                    <p>{product.description}</p>
                    <ol>
                      {product.provides.map((el) => {
                        return <li>{el}</li>;
                      })}
                    </ol>
                  </div>
                  <div className="subscriptionCardCont2">
                    <p className="price">
                      {product.currency == "INR" && "₹"}
                      {product.currency == "USD" && "$"}
                      {product.amount / 100}
                    </p>
                    {Ctx.isAuth ? (
                      <button
                        onClick={(e) => {
                          e.preventDefault();

                          handleSubmit(
                            product.amount,
                            product.currency,
                            product.subscription,
                            product.productId
                          );
                        }}
                        className={"paymentB"}
                        disabled={UtilCtx.loader}
                      >
                        Subscribe
                      </button>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          Navigate("/signup");
                        }}
                        className="paymentB"
                      >
                        Log In
                      </button>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Pricing;
