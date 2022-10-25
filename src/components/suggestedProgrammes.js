import React from "react";
import one from "../img/programme-1.png";
import two from "../img/programme-2.png";
import three from "../img/programme-3.png";
import four from "../img/programme-4.png";

function SuggestedProgrammes(params) {
  return (
    <section className="suggested-programmes">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2>Suggested Programmes</h2>
          </div>
        </div>
        <div className="row programmes">
          <div className="col-md-3 col-6 mb-3">
            <img src={one} alt="" className="img-fluid mb-2" />
            <p>Engineering</p>
          </div>
          <div className="col-md-3 col-6 mb-3">
            <img src={two} alt="" className="img-fluid mb-2" />
            <p>Mathematics</p>
          </div>
          <div className="col-md-3 col-6 mb-3">
            <img src={three} alt="" className="img-fluid mb-2" />
            <p>Cyber Security</p>
          </div>
          <div className="col-md-3 col-6 mb-3">
            <img src={four} alt="" className="img-fluid mb-2" />
            <p>Accounting</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuggestedProgrammes;