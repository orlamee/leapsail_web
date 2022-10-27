import React from "react";
import "../css/tours.css";
import Header from "../components/navBar";
import TourHero from "../components/tourHero";
import Footer from "../components/footer";
import FeaturesTours from "../components/featuresTours";
import VisitTours from "../components/visitPlaces";


function Tours() {
  return (
    <div>
      <Header/>
      <TourHero/>
      <FeaturesTours/>
      <VisitTours/>
      <Footer/>
    </div>
  )
}

export default Tours;