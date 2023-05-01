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
        <h1 className=" text-[4rem] text-center max450:[1.2rem] font-bebas-neue">Terms & Conditions</h1>
        <h4 className="text-[1rem] max450:text-[0.8rem] text-left mt-8 font-bold w-full "></h4>
        <p className="mt-8">
        Welcome to Happyprancer! By using our website, you agree to comply with and be bound by the following terms and conditions of use. Please read these terms carefully before using our website.
        </p>
        <h4 className="text-[1rem] max450:text-[0.8rem] text-left mt-8 font-bold w-full ">Acknowledgement</h4>
        <p className="mt-8">
        By participating in Happyprancer virtual classes, you acknowledge that you will receive information and instruction about Happyprancer dance workouts. You understand that Happyprancer requires physical exertion, which may be strenuous and may cause physical injury. You fully acknowledge and are aware of the risks involved in participating in Happyprancer virtual classes. 
        </p>
        
        <h4 className="text-[1rem] max450:text-[0.8rem] text-left mt-8 font-bold w-full ">Medical Consultation</h4>
        <p className="mt-8">
        You understand and acknowledge that it is your responsibility to consult with a physician prior to and regarding your participation in any physical fitness program, including Zumba. You represent and warrant that you have no medical condition that would prevent your participation in physical fitness activities.
        </p>

        <h4 className="text-[1rem] max450:text-[0.8rem] text-left mt-8 font-bold w-full ">Assumption of Risk</h4>
        <p className="mt-2">
        By participating in Happyprancer virtual classes, you assume full responsibility for any risk, injuries, or damages, known and unknown, which you might incur as a result of participating in the program.
        </p>
        
         <h4 className="text-[1rem] max450:text-[0.8rem] text-left mt-8 font-bold w-full ">Waiver of Claims</h4>
         <p className="mt-2">
         In further consideration of being permitted to participate in the Happyprancer virtual classes, you knowingly, voluntarily and expressly waive any claim you may have against the Instructor, the founder or any core member for injuries or damages that you may sustain as a result of participating in Happyprancer sessions.
         </p>
         <h4 className="text-[1rem] max450:text-[0.8rem] text-left mt-8 font-bold w-full ">Identification</h4>
         <p className="mt-2">
         You agree to indemnify and hold harmless Happyprancer, its officers, directors, employees, agents, and affiliates from any and all claims, damages, expenses, including reasonable attorneys’ fees, arising out of or resulting from your participation in Happyprancer virtual classes.
         </p>
         <h4 className="text-[1rem] max450:text-[0.8rem] text-left mt-8 font-bold w-full ">Governing Law         </h4>
         <p className="mt-2">
         These terms and conditions shall be governed by and construed in accordance with the laws of India. Any dispute arising out of or related to these terms and conditions shall be subject to the exclusive jurisdiction of the courts located in India.
         </p>
         <h4 className="text-[1rem] max450:text-[0.8rem] text-left mt-8 font-bold w-full ">Modification</h4>
         <p className="mt-2">
         Happyprancer reserves the right to modify these terms and conditions at any time without prior notice. Your continued use of our website constitutes your agreement to be bound by such modifications. 
         </p>
         <p className="mt-2 text-left w-full">By using our website, you agree to comply with and be bound by these terms and conditions of use. 
         </p>
         <p className="mt-2">
         For more information or if you have any queries regarding these terms and conditions, please feel free to contact us at admin@happyprancer.com. We are happy to assist you in any way we can 
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
