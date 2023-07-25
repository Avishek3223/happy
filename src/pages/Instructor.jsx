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
      <NavBar />
      <div className="flex flex-col items-center pt-[3rem]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 justify-center bg ">
          <div className="inst-card">
            <Card
              className="Box"
              style={{
                backgroundImage: `url(${Prajakta})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "29rem",
                borderRadius: "10px",
              }}
            >
              <div className="overlay"></div>
              <div className="instructor-card-text flex flex-col items-center">
                <h4 className="text-[1.3rem] font-semibold">Prajakta</h4>
                <h6>Master Instructor</h6>
              </div>
            </Card>
          </div>
          <div className="inst-card">
            <Card
              className="Box"
              style={{
                backgroundImage: `url(${Auroshikha})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "29rem",
                borderRadius: "10px",
              }}
            >
              <div className="overlay"></div>
              <div className="instructor-card-text flex flex-col items-center">
                <h4 className="text-[1.3rem] font-semibold">Auroshikha</h4>
                <h6>Master Instructor</h6>
              </div>
            </Card>
          </div>
          <div className="inst-card">
            <Card
              className="Box"
              style={{
                backgroundImage: `url(${Roma})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "29rem",
                borderRadius: "10px",
              }}
            >
              <div className="overlay"></div>
              <div className="instructor-card-text flex flex-col items-center">
                <h4 className="text-[1.3rem] font-semibold">Roma</h4>
                <h6>Master Instructor</h6>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Instructor;
