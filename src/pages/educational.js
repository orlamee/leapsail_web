import React from "react";
import "../css/educational.css";
import Footer from "../components/footer";
import Header from "../components/navBar";
import HeroEdu from "../components/educationalHero";
import Studies from "../components/wheretoStudy";
import SuggestedProgrammes from "../components/suggestedProgrammes";
import Canada from "../components/canadaConsidered";
import EduWorks from "../components/eduHowItWorks";
import Campuses from "../components/campuses";

function Educational() {
  return (
    <div>
      <Header/>
      <HeroEdu/>
      <Studies/>
      <SuggestedProgrammes/>
      <Canada/>
      <EduWorks/>
      <Campuses/>
      <Footer/>
    </div>
  )
}

export default Educational;