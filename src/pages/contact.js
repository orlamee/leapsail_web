import React from "react";
import "../css/consultation.css";
import ConsultationHero from "../components/consultationHero";
import Header from "../components/navBar";
import Footer from "../components/footer";
import ReachUs from "../components/reachUs";
import Plans from "../components/plans";

function Contact() {
  return (
    <div>
      <Header/>
      <ConsultationHero/>
      <ReachUs/>
      <Plans/>
      <Footer/>
    </div>
  )
}

export default Contact;