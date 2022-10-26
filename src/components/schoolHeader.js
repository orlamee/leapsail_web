/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import map from "../img/map.png";
import london from "../img/london.png";

function SchoolHeader() {
  return (
    <section className="london-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div>
              <h2>London University</h2>
              <div className="d-flex flex-row">
                <i className="bi bi-geo-alt-fill me-2"></i>
                <p className="loc">25, Northamshire Avenue, West London</p>
              </div>
            </div>
            <div className="float-end desktop" style={{marginTop: "-100px"}}>
              <h3>Programme Style: <span style={{color: "#F6B736"}}>Full Time</span></h3>
            </div>
            <div className="mobile">
              <h3>Programme Style: <span style={{color: "#F6B736"}}>Full Time</span></h3>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-8">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12">
            <img src={map} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-3 col-6">
            <img src={london} alt="" className="img-fluid" />
          </div>
          <div className="col-md-3 col-6">
            <img src={london} alt="" className="img-fluid" />
          </div>
          <div className="col-md-3 col-6">
            <img src={london} alt="" className="img-fluid" />
          </div>
          <div className="col-md-3 col-6">
            <img src={london} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="row justify-content-center search-btn">
          <div className="col-md-12 text-center">
            <a className='brand-bg text-white px-5 fs-6 py-3 rounded-pill' href="#">Visit</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SchoolHeader;