import React from "react";
import Header from "../components/Header";
import Series from "../components/Series";
import Title from "../components/Title";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div style={{margin: "50px 0"}}>
        <Title text="Recherchez votre série tv préférée" />
      </div>
      <Series />
    </div>
  );
};

export default Home;
