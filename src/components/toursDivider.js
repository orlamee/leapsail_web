import React from "react";
import tours from "../img/toursdivider.png";

function ToursDividers(params) {
  return (
    <section className="tour-divider">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-10 desktop">
            <h3>Lorem ipsum dolor sit amet, 
            consectetur adipiscing</h3>
          </div>
          <div className="col-md-6 mb-4 mobile">
            <h3>Lorem ipsum dolor sit amet, 
            consectetur adipiscing</h3>
          </div>
          <div className="col-md-6">
            <img src={tours} alt="" className="img-fluid"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ToursDividers;