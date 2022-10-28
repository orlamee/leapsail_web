import React from "react";
import "../css/tours.css";
import Header from "../components/navBar";
import TourHero from "../components/tourHero";
import Footer from "../components/footer";
import FeaturesTours from "../components/featuresTours";
import VisitTours from "../components/visitPlaces";
import WhyLeapsail from "../components/whyLeapsail";
import ToursDividers from "../components/toursDivider";
import VisitHotels from "../components/visitHotels";


function Tours() {
  return (
    <div>
      <Header/>
      <TourHero/>
      <FeaturesTours/>
      <VisitTours/>
      <ToursDividers/>
      <VisitHotels/>
      <WhyLeapsail/>
      <Footer/>
    </div>
  )
}

export default Tours;