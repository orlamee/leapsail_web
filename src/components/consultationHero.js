import React from "react";
import hero from "../img/hero-contact.png";

function ConsultationHero() {
  return (
    <section className="consultation">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h1 className="mobile">Welcome to our Assisted Service</h1>
          </div>
          <div className="col-md-7">
            <img src={hero} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="banner-consult desktop">
          <div className="row">
            <div className="">
              <h1>Welcome to o<span className="text-white">ur</span><br/>Assisted Ser<span className="text-white">vice</span></h1>
            </div>
          </div>
        </div>
        <div className="row justify-content-center undertext">
          <div className="col-md-4 text-center">
            <p>Lorem ipsum dolor sit amet, consectetur 
            adipiscing. Lorem ipsum dolor sit amet, consectetur 
            adipiscing</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConsultationHero;