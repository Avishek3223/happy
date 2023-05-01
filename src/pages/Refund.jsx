import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Home/Footer";

const Terms = () => {
  return (
    <>
    <div className="flex flex-col items-center w-full pb-[5rem]">
      <NavBar />
      <div className=" flex flex-col items-center  w-100 h-100 mt-[2rem] p-0 overflow-x-hidden w-[90vw] max-w-[80rem]">
        <h1 className=" text-[4rem] text-center max450:[1.2rem] font-bebas-neue">Cancellation/Refund Policy</h1>
        <h4 className="text-[1rem] max450:text-[0.8rem] text-left mt-8 font-bold w-full "></h4>
        <p className="mt-8">
        Thank you for choosing Happyprancer for your virtual dance workout needs! 
        We are committed to providing you with the best experience possible. Please
        carefully read the following cancellation and refund policy, which applies 
        to both Indian and outside India users.
        </p>
        <h4 className="text-[1rem] max450:text-[0.8rem] text-left mt-8 font-bold w-full ">Subscription Fees</h4>
        <p className="mt-8">
        We charge 999 rupees per month for Indian users and 12
        dollars for outside India users. We may run periodic discount offers.
        The subscription fee is charged on a monthly basis and is an automated recurring payment. 
        </p>
        
        <h4 className="text-[1rem] max450:text-[0.8rem] text-left mt-8 font-bold w-full ">Cancellation</h4>
        <p className="mt-8">
        You can cancel your subscription at any time without 
        incurring any cancellation fees. To cancel your subscription,
         please log in to your account and follow the cancellation process. 
         Your subscription will be canceled immediately.
        </p>

        <h4 className="text-[1rem] max450:text-[0.8rem] text-left mt-8 font-bold w-full ">Refunds</h4>
        <p className="mt-2">
        If the payment for your subscription fails or if we receive confirmation from the bank, 
        we will offer a refund. We may also offer refunds in certain other circumstances, at our 
        discretion. Refunds will be issued to the original payment method used to purchase the subscription.
        </p>
        <p className="mt-2">
        In the event of cancellation of the subscription, you will be refunded the remaining subscription 
        amount for the unused portion of the month only if you cancel the subscription at least 24 hours 
        before the end of the billing cycle. However, if you have taken advantage of any discount offers 
        at the time of purchase, the refund amount will be calculated based on the discounted amount paid.
        </p>
               
        <p className="mt-2">
        If you cancel your subscription after the first month or in the middle of the month,
         you will not be eligible for a refund for the subscription fee paid for that month.
         However, you will not be charged for any subsequent months.
         </p>
         <h4 className="text-[1rem] max450:text-[0.8rem] text-left mt-8 font-bold w-full ">Periodic Discount Offers</h4>
         <p className="mt-2">
         From time to time, we may offer periodic discount offers on our subscription fees. 
         If you purchase a subscription during a discount offer period, the subscription fee 
         will be charged at the discounted rate for the duration of the offer period. If you 
         cancel your subscription during the offer period, you will not be eligible for a refund.
         </p>
         <h4 className="text-[1rem] max450:text-[0.8rem] text-left mt-8 font-bold w-full ">Contact Us</h4>
         <p className="mt-2">
         If you have any questions or concerns regarding our cancellation and refund policy, 
         please contact us at admin@happyprancer.com. We are always happy to assist you in any way we can.
         </p>
    {/*    <div className="my-8 text-[1.2rem] flex flex-col gap-6 w-[90vw] max-w-[60rem] border-[0]">
          <h1>WATCH MORE ON OUR YOUTUBE</h1>
          <div>
            <iframe
              // width="844"
              // height="515"
              src="https://www.youtube.com/embed/pPzIbKB2GNQ"
              className="w-[80vw] h-[45vw]"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
  </div> */}
  </div> 
  </div>
  <Footer />
  </>
  );
};

export default Terms;
