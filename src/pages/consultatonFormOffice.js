import React from "react";
import Specialization from "../components/aos";
import ConsultFormOffice from "../components/consultationFormOffice";
// import ConsultForm from "../components/consultationForm";
import ConsultFormHeader from "../components/consultFormHeader";
import Footer from "../components/footer";
import Header from "../components/navBar";


function Office() {
  return (
    <div>
      <Header/>
      <ConsultFormHeader/>
      {/* <ConsultForm/> */}
      <ConsultFormOffice/>
      <Specialization/>
      <Footer/>
    </div>
  )
}

export default Office;