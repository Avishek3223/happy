import React from "react";
import { useNavigate } from "react-router";
import Footer from "../Components/Home/Footer";
import NavBar from "../Components/NavBar";

const PaymentSuccessful = () => {
  const Navigate = useNavigate();

  return (
    <div>
      <NavBar />
      <div className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center">
        <h3 className="text-[2rem] RussoOne text-green-500">
          Payment Successful
        </h3>
        <div className="flex gap-2 ">
          <p>Congratulations for taking the Subscription</p>
          <p
            className="text-blue-600 cursor-pointer"
            onClick={() => {
              Navigate("/dashboard");
            }}
          >
            DashBoard
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentSuccessful;
