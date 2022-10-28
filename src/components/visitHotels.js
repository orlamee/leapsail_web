import React from "react";
import dubai from "../img/dubai.png";
import star from "../img/5star.png";
import thai from "../img/thai.png";

function VisitHotels() {
  return (
    <section className="visit-tours">
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-8">
            <h2>Most Popular Hotels People Visit</h2>
          </div>
        </div>
      </div>
      <div id="slider1" className="carousel slide" data-ride="carousel">
        {/* <ol class="carousel-indicators">
          <li data-target="#slider1" data-slide-to="0" class="active"></li>
          <li data-target="#slider1" data-slide-to="1"></li>
          <li data-target="#slider1" data-slide-to="2"></li>
        </ol> */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-md-3 mb-3">
                  <img src={dubai} alt="" className="img-fluid" />
                  <div className="title-image">
                    <p>Dubai</p>
                    <div className="d-flex flex-row">
                      <i className="bi bi-geo-alt-fill me-2"></i>
                      <p>Marina, Dubai</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <img src={star} alt="" className="img-fluid" />
                  <div className="title-image">
                    <p>Dubai</p>
                    <div className="d-flex flex-row">
                      <i className="bi bi-geo-alt-fill me-2"></i>
                      <p>Marina, Dubai</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <img src={thai} alt="" className="img-fluid" />
                  <div className="title-image">
                    <p>Dubai</p>
                    <div className="d-flex flex-row">
                      <i className="bi bi-geo-alt-fill me-2"></i>
                      <p>Marina, Dubai</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <img src={dubai} alt="" className="img-fluid" />
                  <div className="title-image">
                    <p>Dubai</p>
                    <div className="d-flex flex-row">
                      <i className="bi bi-geo-alt-fill me-2"></i>
                      <p>Marina, Dubai</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <img src={dubai} alt="" className="img-fluid" />
                </div>
                <div className="col-md-3">
                  <img src={dubai} alt="" className="img-fluid" />
                </div>
                <div className="col-md-3">
                  <img src={dubai} alt="" className="img-fluid" />
                </div>
                <div className="col-md-3">
                  <img src={dubai} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <a className="carousel-control-prev" href="#slider1" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#slider1" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      
      
    </section>
  )
}

export default VisitHotels;