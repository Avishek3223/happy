import React from "react";
import NavBar from "../Components/NavBar";
import "./about_us.css";
import Footer from "../Components/Home/Footer";

const AboutUs = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <NavBar />
        <div className=" text-black flex flex-col items-center w-100 h-100 mt-[2rem] p-0 overflow-x-hidden w-[90vw] max-w-[80rem]">
          <h1 className="RussoOne text-[4rem] text-center mt-10">About Us</h1>
          <p className="mt-16">
            Welcome to HappyPrancer.com, the ultimate destination for dance
            fitness enthusiasts. Our website offers a wide range of online dance
            fitness resources, including Zumba classes that use mostly Latin
            music and BWORKZ classes that use Bollywood music for dance fitness.
            Our founder, PK, knows firsthand the struggle of making time for
            fitness amidst a busy work schedule. Despite joining some of the
            best fitness clubs in town, he found it challenging to incorporate
            exercise into his daily routine until he discovered the joy of Zumba
            dance.
          </p>
          <p className="mt-16">
            Zumba proved to be an enjoyable and engaging fitness routine for PK,
            which not only helped him stay fit but also provided an opportunity
            to make friends and have fun with dance and music. This positive
            experience inspired PK to bring his passion for dance fitness to
            everyone he knew in the US via Zoom when the pandemic hit and all
            fitness clubs were forced to close.
          </p>
          <p className="mt-16">
            At HappyPrancer.com, we believe that fitness can be fun and
            enjoyable, and we are committed to helping people lead healthier,
            happier lives, especially during these challenging times. Our
            website offers a holistic approach to fitness, incorporating
            mindfulness and self-care practices into our resources. We
            understand that fitness is not just about physical health, but also
            about mental and emotional well-being.
          </p>
          <p className="mt-16 mb-20">
            Our team of passionate individuals is dedicated to spreading
            happiness and promoting a positive outlook on life. We believe that
            everyone deserves to feel good about themselves and that everyone
            has the potential to lead a happy, healthy life. Join us on our
            journey to spread positivity and inspire people to live their best
            lives with the fusion of Zumba and BWORKZ dance fitness routines
          </p>
          {/* <div className="my-8 text-[1.2rem] flex flex-col gap-6 w-[90vw] max-w-[60rem] border-[0]">
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
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
