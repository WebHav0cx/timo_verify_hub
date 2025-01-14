import React from "react";
import Banner from "./Banner";
import Offer from "./Offer";
import About from "./About";
import Footer from "../../common/Footer";
import Navbar from "../../common/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Offer />
      <About />
      <Footer />
    </div>
  );
}

export default Home;
