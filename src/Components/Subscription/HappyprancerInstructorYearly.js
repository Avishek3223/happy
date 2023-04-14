import React, { useRef, useEffect } from "react";
import { API } from "aws-amplify";
import { useNavigate } from "react-router";
// import { useParams } from "react-router-dom";

export default function HappyprancerInstructorYearly() {
  const paypal = useRef();
  const Navigate = useNavigate();
  // const history = useHistory()
  // const { id } = useParams();

  useEffect(() => {
    window.paypal
      .Buttons({
        style: {
          shape: "rect",
          color: "gold",
          layout: "vertical",
          label: "subscribe",
          tagline: "false",
        },
        createSubscription: (data, actions, err, can) => {
          return actions.subscription.create({
            intent: "subscription",
            plan_id: "P-2Y526077J28152424MAUGT5A",
          });
        },

        onApprove: async (data, actions) => {
          // console.log(data)
          // history.push('/PaymentConfirmation')

          try {
            const addYear = 365 * 24 * 60 * 60 * 1000;

            const product = "Happyprancer Instructor Yearly";
            const joiningDate = Date.now();
            const renewDate = Date.now() + addYear;
            const paymentMethodEmailId = "";
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
            Navigate("/paymentsuccessful");
          } catch (e) {
            // history.push('/PaymentFailed')
            Navigate("/paymentfailed");
          }
        },

        onError: (err) => {
          console.log(err);
          // history.push('/PaymentFailed')
          Navigate("/paymentfailed");
        },
      })
      .render("#paypal-button-container-P-2Y526077J28152424MAUGT5A");
    // eslint-disable-next-line
  }, []);

  const paypalData = async (postData) => {
    return await API.put("user", `/user/payment-update/happyprancer`, {
      body: postData,
    });
  };

  return (
    <div>
      <div
        id="paypal-button-container-P-2Y526077J28152424MAUGT5A"
        ref={paypal}
      ></div>
    </div>
  );
}
