import React, { useEffect, useRef } from "react";

const HappyprancerRazorpayMonthly = () => {
  const razorpay = useRef();

  useEffect(() => {
    // new window.Razorpay();

    // console.log(window.razorpay);
  }, []);

  const submit = () => {};

  return (
    <div
      ref={razorpay}
      className="w-[15rem] bg-[#225c59] text-white px-12 py-2 rounded-2xl hover:text-[#225c59] hover:bg-white hover:border-[#225c59] hover:border-[0.2rem] h-[3rem] flex justify-center items-center mt-16 max450:w-[60vw]"
    >
      Subscribe
    </div>
  );
};

export default HappyprancerRazorpayMonthly;
