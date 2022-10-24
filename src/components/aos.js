import React from "react";
import investment from "../img/icon-investment.png";
import visa from "../img/icon-visa.png";
// import ticketing from "../img/icon-ticketing.png";
import hotel from "../img/icon-hotel.png";
import tour from "../img/icon-tour.png";

function Specialization() {
  return (
    <section className="aos desktop">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h3>Areas of Specialization</h3>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <div className="row icon">
          <div className="col">
            <img src={investment} alt="" className="img-fluid" />
            <h6 className="text-center">Investment</h6>
          </div>
          <div className="col">
            <img src={visa} alt="" className="img-fluid" />
            <h6 className="text-center">Visa</h6>
          </div>
          <div className="col">
            <img src={tour} alt="" className="img-fluid" />
            <h6 className="text-center">Ticketing</h6>
          </div>
          <div className="col">
            <img src={hotel} alt="" className="img-fluid" />
            <h6 className="text-center">Hotel Reservation</h6>
          </div>
          <div className="col">
            <img src={tour} alt="" className="img-fluid" />
            <h6 className="text-center">Tours</h6>
          </div>
          <div className="col">
            <img src={investment} alt="" className="img-fluid" />
            <h6 className="text-center">Educational</h6>
          </div>
          <div className="col">
            <img src={investment} alt="" className="img-fluid" />
            <h6 className="text-center">Hub</h6>
          </div>
          <div className="col">
            <img src={investment} alt="" className="img-fluid" />
            <h6 className="text-center">Real Estate</h6>
          </div>
          <div className="col">
            <img src={investment} alt="" className="img-fluid" />
            <h6 className="text-center">Immigration</h6>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Specialization;