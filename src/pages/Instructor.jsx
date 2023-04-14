import React from "react";
import Card from "react-bootstrap/Card";
import "../Components/comp/Instructor.css";
import Anupam from "../Utils/images/Instructor/anupam.jpg";
import Michelle from "../Utils/images/Instructor/michelle.jpg";
import Ankita from "../Utils/images/Instructor/Ankita.jpeg";
import Roma from "../Utils/images/Instructor/Roma.jpg";
import Smitha from "../Utils/images/Instructor/Smitha.jpeg";
import Shashwat from "../Utils/images/Instructor/Shashwat.jpg";
import Auroshikha from "../Utils/images/Instructor/Auroshikha.jpg";
import Mamatha from "../Utils/images/Instructor/Mamatha.jpg";
import Swikriti from "../Utils/images/Instructor/Swikriti.jpg";
import Mohana from "../Utils/images/Instructor/Mohana.jpg";
import Jyoti from "../Utils/images/Instructor/Jyoti.jpg";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Home/Footer";

const Instructor = () => {
  return (
   <div >
    <div className="flex flex-col items-center ">
      <NavBar />
      <div className="flex-col items-center instructor-contanier Background">
        <a href="https://forms.gle/C8WFVgrQmC9kzQhb6">
          <div className="instructor-headline ">Join us as an Instructor</div>
        </a>
        <div className="z-100 flex flex-wrap gap-10 ml-6 row justify-center bg ">
          <div className="inst-card col-xs-3 col-lg-3 col-md-12">
            <Card
              className="Box"
              style={{
                backgroundImage: `url(${Anupam})`,
                position: "relative",
                zIndex: -2,
              }}
            >
              <div className="overlay"></div>
              <div className="instructor-card-text flex flex-col items-center">
                <h4 className="text-[1.3rem] font-semibold">Anupam</h4>
                <h6>BWORKZ Master Instructor</h6>
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
                <h6>BWORKZ Pro Instructor</h6>
              </div>
            </Card>
          </div>
          <div className="inst-card col-lg-3 col-md-12">
            <Card
              className="Box"
              style={{
                backgroundImage: `url(${Mamatha})`,
                position: "relative",
                zIndex: -2,
              }}
            >
              <div className="overlay"></div>
              <div className="instructor-card-text flex flex-col items-center">
                <h4 className="text-[1.3rem] font-semibold">Mamatha</h4>
                <h6>BWORKZ Pro Instructor</h6>
              </div>
            </Card>
          </div>
          <div className="inst-card col-lg-3 col-md-12">
            <Card
              className="Box"
              style={{
                backgroundImage: `url(${Michelle})`,
                position: "relative",
                zIndex: -2,
              }}
            >
              <div className="overlay"></div>
              <div className="instructor-card-text flex flex-col items-center">
                <h4 className="text-[1.3rem] font-semibold">Michelle</h4>
                <h6>BWORKZ Pro Instructor</h6>
              </div>
            </Card>
          </div>
          <div className="inst-card col-lg-4 col-md-12">
            <Card
              className="Box"
              style={{
                backgroundImage: `url(${Mohana})`,
                position: "relative",
                zIndex: -2,
              }}
            >
              <div className="overlay"></div>
              <div className="instructor-card-text flex flex-col items-center">
                <h4 className="text-[1.3rem] font-semibold">Mohana</h4>
                <h6>BWORKZ Pro Instructor</h6>
              </div>
            </Card>
          </div>
          <div className="inst-card col-lg-4 col-md-12">
            <Card
              className="Box"
              style={{
                backgroundImage: `url(${Ankita})`,
                position: "relative",
                zIndex: -2,
              }}
            >
              <div className="overlay"></div>
              <div className="instructor-card-text flex flex-col items-center">
                <h4 className="text-[1.3rem] font-semibold">Ankita</h4>
                <h6>BWORKZ Pro Instructor</h6>
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
                <h6>BWORKZ Pro Instructor</h6>
              </div>
            </Card>
          </div>
          <div className="inst-card col-lg-4 col-md-12">
            <Card
              className="Box"
              style={{
                backgroundImage: `url(${Shashwat})`,
                position: "relative",
                zIndex: -2,
              }}
            >
              <div className="overlay"></div>
              <div className="instructor-card-text flex flex-col items-center">
                <h4 className="text-[1.3rem] font-semibold">Shashwat</h4>
                <h6>BWORKZ Pro Instructor</h6>
              </div>
            </Card>
          </div>
          <div className="inst-card col-lg-4 col-md-12">
            <Card
              className="Box"
              style={{
                backgroundImage: `url(${Smitha})`,
                position: "relative",
                zIndex: -2,
              }}
            >
              <div className="overlay"></div>
              <div className="instructor-card-text flex flex-col items-center">
                <h4 className="text-[1.3rem] font-semibold">Smitha</h4>
                <h6>BWORKZ Pro Instructor</h6>
              </div>
            </Card>
          </div>
          <div className="inst-card col-lg-4 col-md-12">
            <Card
              className="Box"
              style={{
                backgroundImage: `url(${Swikriti})`,
                position: "relative",
                zIndex: -2,
              }}
            >
              <div className="overlay"></div>
              <div className="instructor-card-text flex flex-col items-center">
                <h4 className="text-[1.3rem] font-semibold">Swikriti</h4>
                <h6>BWORKZ Pro Instructor</h6>
              </div>
            </Card>
          </div>
          <div className="inst-card col-lg-4 col-md-12">
            <Card
              className="Box"
              style={{
                backgroundImage: `url(${Jyoti})`,
                position: "relative",
                zIndex: -2,
              }}
            >
              <div className="overlay"></div>
              <div className="instructor-card-text flex flex-col items-center">
                <h4 className="text-[1.3rem] font-semibold">Jyoti</h4>
                <h6>BWORKZ Pro Instructor</h6>
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
