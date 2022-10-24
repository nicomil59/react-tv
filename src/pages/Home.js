import React from "react";
import Header from "../components/Header";
import ReturnToTop from "../components/ReturnToTop";
import Series from "../components/Series";
import Title from "../components/Title";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div style={{margin: "25px 0"}}>
        <Title text="Recherchez votre série tv préférée" />
      </div>
      <Series />
      <ReturnToTop />
    </div>
  );
};

export default Home;
