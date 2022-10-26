/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import rgu from "../img/rgu.png";
import hull from "../img/hull.png";
import coventry from "../img/coventry.png";

function Campuses () {
  return (
    <section className="campuses">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2>Campuses around the globe</h2>
          </div>
        </div>
        <div className="row mt-5 programmes justify-content-center">
          <div className="col-md-3 col-6 mb-3">
            <img src={rgu} alt="" className="img-fluid mb-2" />
            <p>London University</p>
          </div>
          <div className="col-md-3 col-6 mb-3">
            <img src={hull} alt="" className="img-fluid mb-2" />
            <p>Hull City</p>
          </div>
          <div className="col-md-3 col-6 mb-3">
            <img src={coventry} alt="" className="img-fluid mb-2" />
            <p>Arden</p>
          </div>
          <div className="col-md-3 col-6 mb-3">
            <img src={rgu} alt="" className="img-fluid mb-2" />
            <p>Coventry</p>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Campuses;