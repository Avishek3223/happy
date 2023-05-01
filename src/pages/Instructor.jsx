import React from "react";
import Card from "react-bootstrap/Card";
import "../Components/comp/Instructor.css";
import Auroshikha from "../Utils/images/Instructor/Auroshikha.jpg";
import Prajakta from "../Utils/images/Instructor/Prajakta.jpg";
import Roma from "../Utils/images/Instructor/Roma.jpg";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Home/Footer";

const Instructor = () => {
  return (
    <div>
      <div className="flex flex-col items-center  h-full">
        <NavBar />
        <div className="flex-col items-center pt-[3rem] ">
          {/* <a href="https://forms.gle/C8WFVgrQmC9kzQhb6">
            <div className="instructor-headline ">Join us as an Instructor</div>
          </a> */}
          <div className="z-100 flex flex-wrap gap-10 ml-6 row justify-center bg ">
            <div className="inst-card col-xs-3 col-lg-3 col-md-12">
              <Card
                className="Box"
                style={{
                  backgroundImage: `url(${Prajakta})`,
                  position: "relative",
                  zIndex: -2,
                }}
              >
                <div className="overlay"></div>
                <div className="instructor-card-text flex flex-col items-center">
                
                    <h4 className="text-[1.3rem] font-semibold">Prajakta</h4>
                  <h6> Master Instructor</h6>
                </div>
              </Card>
            </div>
            <div className="inst-card col-lg-3 col-md-12">
              <Card
                className="Box"
                style={{
                  backgroundImage: `url(${Auroshikha})`,
                  position: "relative",
                  zIndex: -2,
                }}
              >
                <div className="overlay"></div>
                <div className="instructor-card-text flex flex-col items-center">
                  <h4 className="text-[1.3rem] font-semibold">Auroshikha</h4>
                  <h6> Master Instructor</h6>
                </div>
              </Card>
            </div>
            <div className="inst-card col-lg-4 col-md-12">
              <Card
                className="Box"
                style={{
                  backgroundImage: `url(${Roma})`,
                  position: "relative",
                  zIndex: -2,
                }}
              >
                <div className="overlay"></div>
                <div className="instructor-card-text flex flex-col items-center">
                  <h4 className="text-[1.3rem] font-semibold">Roma</h4>
                  <h6> Master Instructor</h6>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Instructor;
