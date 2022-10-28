import React from "react";
import { Link } from "react-router-dom";
import google from "../img/google.png";
import apple from "../img/apple.png";
import GetStarted from "./getStarted";

function Hero() {
  return (
    <section className="banner">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 right">
            <h2 className="mb-5">We are revolutionising<br/>your concept of comfort.</h2>
            <h6 className="mb-5">Created with a can do and achievers mindset. A self-onboarding application with features that open you to a new way.</h6>
            <a className='btn brand-bg text-white px-5 py-3 rounded-pill' href="/login">Get Started</a>
            <div className="d-flex flex-row mt-5">
              <Link to="/"><img src={apple} alt="download on apple" title="Download on Appstore" className="img-fluid" width={170}/></Link>
              <Link to="/"><img src={google} alt="download on google" title="Download on Playstore" className="img-fluid" width={170} /></Link>
            </div>
          </div>
          <div className="col-md-6 left"></div>
        </div>
      </div>
      <GetStarted/>
    </section>
  )
}

export default Hero;