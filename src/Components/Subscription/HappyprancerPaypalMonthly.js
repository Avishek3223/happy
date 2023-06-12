import React, { useRef, useEffect } from "react";
import { API } from "aws-amplify";
import { useNavigate } from "react-router";
// import { useParams } from "react-router-dom";

export default function HappyprancerInstructorMonthly() {
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
        },
        createSubscription: (data, actions, err, can) => {
          return actions.subscription.create({
            intent: "subscription",
            plan_id: "P-4WM30609EU9198254MQZDUIA",
          });
        },

        onApprove: async (data, actions) => {
          // console.log(data)
          // history.push('/PaymentConfirmation')

          try {
            const addMonth = 30 * 24 * 60 * 60 * 1000;

            const product = "Happyprancer Instructor Monthly";
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
      .render(paypal.current);
      // .render("#paypal-button-container-P-49X49202J6495240FMINKALY");
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
        // id="paypal-button-container-P-49X49202J6495240FMINKALY"
        ref={paypal}
      ></div>
    </div>
  );
}
