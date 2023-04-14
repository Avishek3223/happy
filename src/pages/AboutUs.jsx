import React from "react";
import NavBar from "../Components/NavBar";
import "./about_us.css";
import Footer from '../Components/Home/Footer'

const AboutUs = () => {
  return (
    <>
    <div className="flex flex-col items-center Background">
      <NavBar />
      <div className="text-[white] flex flex-col items-center w-100 h-100 mt-[2rem] p-0 overflow-x-hidden w-[90vw] max-w-[80rem]">
        <h1 className="RussoOne text-[4rem] text-center">About Us</h1>
        <h3 className="text-[2rem]">KNOW WHAT WE ARE</h3>
        <p className="mt-8">
          BWORKZ's (Bollywood Inspired Dance Workout) mission is to bring
          Bollywood dance as a low to high intensity cardio activity and
          performance to people. And through dance, to create healthier people
          and more integrated communities.{" "}
        </p>
        <p className="mt-8">
          It integrates 40+ dance basics (Indian folk and Bollywood styles)
          developed by AnupamZ to create an easy-to-follow workout program for
          adults. This one-hour cardio workout ranging from low impact to high
          impact is choreographed to be a great stress buster with its
          soul-touching Indian dance music.
        </p>
        <h3 className="font-bold mt-10">
          BWORKZ choreography was conceptualized by AnupamZ Nayak
        </h3>
        <p className="mt-2">
          In Rocky Hill, Connecticut, the USA, in 2017. Anupam has been teaching
          Dance/Fitness for the last 16 years and trained more than 5000
          students worldwide India-USA-Canada. His mission is to bring Bollywood
          into group fitness program to spread the rich Indian culture
          worldwide. It is a Bollywood-inspired dance fitness program designed
          for adults of all ages. BWORKZ integrates 40 dance basics (Indian folk
          and Bollywood styles) executed as 55-minute cardio workout sessions
          ranging in intensity from Low to Moderate to High impact. The program
          consists of well-balanced, transitional choreographies with unique
          energetic yet artistic moves. You do not need to be a dancer to start
          teaching this dance fitness program. If you believe in spreading your
          love of music and dance, inspiring people to get fit and stay fit, and
          are willing to practice the range of choreographies, you will be a
          wonderful addition to the BWORKZ.
        </p>
        <h3 className="font-bold mt-10"> Meet our co-founder PK</h3>
        <p className="mt-2">
          AnupamZ & PK are co founders of BWORKZ LLC. Amid the Covid-19
          pandemic, many people became sedentary, sitting all day before their
          screens frowning disapprovingly at their body needs. A similar story
          was lived by the co-founder, PK. Years back, he couldn’t include
          exercise into his daily routine even after joining the best fitness
          clubs in the town as they only offered monotonous and boring
          exercises. Then he tried joining dance fitness classes, and this was
          when the transformation showed up. He found dance fitness to be quite
          fun, involving, and better as compared to other Dance fitness. Dance
          fitness not only makes you move your body and stay fit, but it also
          brings an opportunity for making friends and enjoying the whole time
          with dance and music. It feels like a complete fitness package wrapped
          into one. This dance fitness idea was stuck in his mind as a medium of
          inspiration and guide to include other people who are similarly jammed
          in their work and don’t get time for fitness. PK, on his work travel
          tours to Connecticut, took classes from Anupam and saw the amazing
          potential of BWORKZ dance fitness. When Covid was raging and all
          fitness clubs were closed, PK & Anupam both decided to form a company
          to spread this world over.
        </p>
        <div className="my-8 text-[1.2rem] flex flex-col gap-6 w-[90vw] max-w-[60rem] border-[0]">
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
      </div>
      </div>
      <Footer />
      </>
  );
};

export default AboutUs;
