import React from "react";
import "../css/consultation.css";
import ConsultationHero from "../components/consultationHero";
import Header from "../components/navBar";
import Footer from "../components/footer";

function Contact() {
  return (
    <div>
      <Header/>
      <ConsultationHero/>
      <Footer/>
    </div>
  )
}

export default Contact;