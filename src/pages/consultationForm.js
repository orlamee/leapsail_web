import React from "react";
import ConsultForm from "../components/consultationForm";
import ConsultFormHeader from "../components/consultFormHeader";
import Footer from "../components/footer";
import Header from "../components/navBar";


function ConsultationForm() {
  return (
    <div>
      <Header/>
      <ConsultFormHeader/>
      <ConsultForm/>
      <Footer/>
    </div>
  )
}

export default ConsultationForm;