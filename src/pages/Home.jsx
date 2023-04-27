import React from "react";
//css files
//Images
// import fitness_1 from "../Utils/images/Testimonial/fitness-1.jpg";
// import fitness_2 from "../Utils/images/Testimonial/fitness-2.jpg";
// import fitness_3 from "../Utils/images/Testimonial/fitness-3.jpg";
// import fitness_4 from "../Utils/images/Testimonial/fitness-4.jpg";
// import fitness_5 from "../Utils/images/Testimonial/fitness-5.jpg";

import NavBar from "../Components/NavBar";
import Header from "../Components/Home/Header";
import Header2 from "../Components/Home/Header2";
import Header3 from "../Components/Home/Header3";
import Testimonial from "../Components/Home/Testimonial";
import FAQ from "../Components/Home/FAQ";
import Footer from "../Components/Home/Footer";
import Subscription from "../Components/Home/Subscription";

function Home() {
  // const [fav2Visible6, setfav2Visible6] = useState(false);
  // const [bottom, setBottom] = useState(false);

  // const bottomhandler = () => {
  //   setBottom(!bottom);
  // };

  return (
    <div className=" overflow-hidden">
      <NavBar />

      <Header />

      {/* <Header2 /> */}

      <Header3/>

      <Testimonial />

      <Subscription />

      <FAQ />

      <Footer />
    </div>
  );
}

export default Home;
