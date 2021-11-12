import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import HomeCars from "../homeCars/homeCars";
import Nav from "../Nav/Nav";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Nav></Nav>
      <Banner></Banner>
      <About></About>
      <HomeCars></HomeCars>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
