import React from "react";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

import yellow_star from "../../Utils/Assests/yellow star.png";
import MamthaPng from "../../Utils/images/Testimonial/mamtha.png";
import MohanaPng from "../../Utils/images/Testimonial/mohana.png";
import AyeshaPng from "../../Utils/images/Testimonial/ayesha.png";
import SmithaPng from "../../Utils/images/Testimonial/smitha.png";
import YogeshPng from "../../Utils/images/Testimonial/yogesh.png";
import Test_1 from "../../Utils/Assests/Test-Design.png";
import Test_3 from "../../Utils/Assests/Test_3.png";

import "./Testimonial.css";
import { useState } from "react";

const Testimonial = () => {
  const testi1 = {
    src: MamthaPng,
    name: "Mamtha",
    description:
      "Do what you LOVE and LOVE what you Do!! Hello All – I am Mamatha Puttaswamy By profession, I am a school teacher. By passion, I am the current Mrs. India Connecticut, a model, a dancer and a sportsperson. Through BWOKZ, I am part of the BWORKZ USA instructor team. I have been with BWORKZ since 2017. I started attending the classes regularly and became an instructor on 27th June 2021. I always enjoyed dancing and fitness and I find both of them in BWORKZ.",
  };
  const testi2 = {
    src: MohanaPng,
    name: "Mohana",
    description:
      "Hello my name is Mohana and I am a Bworkz specialist and part of the USA core teamsI used to love dancing on Bollywood songs as a child, but never really had an opportunity to explore this area. But Bworkz helped me wake up my dance passion as well as gave me a way to keep me fit! When rocking on your favorite Bollywood songs, it just takes you to another world! Like they say, dance enables you to find yourself and lose yourself at the same time, and it stands true for me.",
  };
  const testi3 = {
    src: AyeshaPng,
    name: "Ayesha",
    description:
      "I’m Ayesha from Berhampur, India. I’m a core BWORKZ instructor and the owner of Lissome Dance studio. I have been dancing since the age of 5 and teaching for last 10 years, I’m also a finalist of Jhoom Odisha Jhoom, Dance Odisha Dance & Etv Sampurna reality shows!! Recently I have choreographed many music videos like Dil ko hurt karda, Facebook love , Mo sathee rahi ja. I’m an Odisi & Bharatnatyam dancer too.",
  };
  const testi4 = {
    src: SmithaPng,
    name: "Smitha",
    description:
      "Hi, I’m Smitha and I’m very excited to be a part of the Bworkz experts team. Aside from being a Software engineer, music and dance, especially Bollywood, has been a passion since a very early age, but academic and other priorities always took over. Bworkz came by as the best combo to leverage my dance passion, added to the fitness fun.",
  };
  const testi5 = {
    src: YogeshPng,
    name: "Yogesh",
    description:
      "Hello Everyone This Is Yogesh Nepali Founder Flyingsteppersstudio at Pune.Like in this dance industry I have been since 10 years. Also Am a instructor in Dab Studio Dubai. Am Graduated BBA From Sinhagad College Of Arts , Commerce & Science.& I have Competed In IIDC IN 2019 PRO AMATUER CATEGORY. And also am a Fitness instructor too Am also an level 0 Dance fitness certified from cult fit health care pvt.ltd.",
  };
  const [testimonials, setTestimonials] = useState([
    testi1,
    testi2,
    testi3,
    testi4,
    testi5,
  ]);

  const styles = ["ecllip1", "ecllip2", "ecllip3", "ecllip4", "ecllip5"];

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
    <img className="Image_1  max980:w-[30vw] absolute z-0" src={Test_1} alt="" /> 
    <img className="Image absolute z-0" src={Test_1} alt="" />
    <h1 className=" Test-text text-white-250 max478:text-white-[4rem]">
    TESTIMONIAL
    </h1>
    <div className="">
    <div className=""> 
        

    <ul className="feedback ">
    <div className="absolute w-screen flex justify-center flex-col min-h-[25rem] ">
         <img  className="Design h-[17rem]  object-contain mr-8" src={Test_3} alt="" />
         <img  className="Design_1 h-[17rem] object-contain " src={Test_3} alt="" />
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
        <h1 className="mona">{testimonials[2].name}</h1>
        <div className="flex relative z-2   justify-center max1050:pl-8 max1050:pr-8 ">
          <h2 className="text-[1rem]  z-2 des text-white w-[45rem] max800:text-[1rem] max478:text-[0.9rem] text-center font-sans"><span className="text-[1.4rem]">"</span>
            {testimonials[2].description} <span className="text-[1.4rem]">"</span>
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
