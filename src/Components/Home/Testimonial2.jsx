import React from "react";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

import yellow_star from "../../Utils/Assests/yellow star.png";
import BapujiPng from "../../Utils/images/Testimonial/Bapuji_Mallik.png";
import MonalishaPng from "../../Utils/images/Testimonial/Monalisha_Sahoo.png";
import PriyankaPng from "../../Utils/images/Testimonial/Priyanka_Biswal.jpg";

import "./Testimonial.css";
import { useState } from "react";

const Testimonial = () => {
  const testi1 = {
    src: MonalishaPng,
    name: "Monalisha Sahoo",
    description:
      "Honestly speaking at 1st it seemed little bit difficult Bt when I used to go regularly I came to knew it is the best way to workout. If u guys really want to improve your fitness then must step forward to happy prancer and I promise u will never regret once... Best platform to go through basics.. 💃💃",
  };
  const testi2 = {
    src: BapujiPng,
    name: "Bapuji Mallik",
    description:
      "If you're new to exercise, you aren't sure what types of exercise you like, or you feel intimidated when walking into a new workout environment, online training is an excellent reprieve from the traditional gym or studio.According to me dance is the best fitness and workout where you never get bored,dance is the fun way to express yourself so yes this platform will give you such experience. Every session is mind blowing. Quality is awesome. Trainers are best.It is easy to learn for from  beginners to advanced. Motivation by the trainers and their coaching can't be described by words.trainers are really comes with utmost positivity throughout the session.its been a good journey with happyprancers.\nThank you happyprancer",
  };
  const testi3 = {
    src: PriyankaPng,
    name: "Priyanka Biswal",
    description:
      "Joining in this Live session ....I have learnt to spend time with myself and relative my stress in a fraction of minute.. delighted to be a part of this class...",
  };
  const [testimonials, setTestimonials] = useState([testi1, testi2, testi3]);

  const styles = ["ecllip1", "ecllip2", "ecllip3"];

  const leftClicked = () => {
    setTestimonials((testi) => {
      const tempTesti = [];
      const firstTesti = testi.pop();

      tempTesti.push(firstTesti);

      testi.map((ts, i) => {
        tempTesti.push(ts);
        return ts;
      });

      return tempTesti;
    });
  };

  const rightClicked = () => {
    setTestimonials((testi) => {
      const tempTesti = [];
      const firstTesti = testi.slice(0, 1);

      testi.map((ts, i) => {
        if (i !== 0) {
          tempTesti.push(ts);
        }
        return ts;
      });

      tempTesti.push(firstTesti[0]);

      return tempTesti;
    });
  };

  return (
    <div className="RussoOne max500:h-[auto] z-10 ">
      <div className="bg-black flex flex-col item-center pb-10 ">
     
        <h1 className=" Test-text text-white-250 max478:text-white-[4rem]">
          TESTIMONIAL
        </h1>
        <div className="">
          <div className="">
            <ul className="feedback ">
              <div className="absolute w-screen flex justify-center flex-col min-h-[25rem] ">
                
              </div>
              {testimonials.map((test, i) => {
                return (
                  <li key={styles[i]}>
                    <img src={test.src} alt="" className={styles[i]} />
                  </li>
                );
              })}
              <BsArrowLeftCircle
                color="white"
                size={"2rem"}
                className="absolute left-16 cursor-pointer max536:left-6 max500:left-2 max406:h-[1.5rem]"
                onClick={leftClicked}
              />
              <BsArrowRightCircle
                color="white"
                size={"2rem"}
                className="absolute right-16  cursor-pointer max536:right-6 max500:right-2 max406:h-[1.5rem]"
                onClick={rightClicked}
              />
            </ul>
          </div>
          <h1 className="mona">{testimonials[1].name}</h1>
          <div className="flex relative z-2   justify-center max1050:pl-8 max1050:pr-8 ">
            <h2 className="text-[1rem]  z-2 des text-white w-[45rem] max800:text-[1rem] max478:text-[0.9rem] text-center font-sans">
              <span className="text-[1.4rem]">"</span>
              {testimonials[1].description}{" "}
              <span className="text-[1.4rem]">"</span>
            </h2>
          </div>

          <div className="flex  justify-center item-center pt-[1rem]">
            <img
              src={yellow_star}
              className="h-[2.6rem] mt-[0.5rem] max800:mt-[0.3rem] max800:h-[1.5rem] max406:h-[1rem]"
              alt=""
            />
            <img
              src={yellow_star}
              className="h-[2.6rem] mt-[0.5rem] max800:mt-[0.3rem] max800:h-[1.5rem] "
              alt=""
            />
            <img
              src={yellow_star}
              className="h-[2.6rem] mt-[0.5rem] max800:mt-[0.3rem] max800:h-[1.5rem] "
              alt=""
            />
            <img
              src={yellow_star}
              className="h-[2.6rem] mt-[0.5rem] max800:mt-[0.3rem] max800:h-[1.5rem] "
              alt=""
            />
            <img
              src={yellow_star}
              className="h-[2.6rem] mt-[0.5rem] max800:mt-[0.3rem] max800:h-[1.5rem]  "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
