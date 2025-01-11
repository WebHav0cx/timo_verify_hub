import React from "react";
import Banner from "./Banner";
import Navbar from "../../components/Navbar";
import Offer from "./Offer";
import About from "./About";
import Footer from "../../components/Footer";

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
