import React from "react";
import "../css/educational.css";
import Footer from "../components/footer";
import Header from "../components/navBar";
import HeroEdu from "../components/educationalHero";

function Educational() {
  return (
    <div>
      <Header/>
      <HeroEdu/>
      <Footer/>
    </div>
  )
}

export default Educational;