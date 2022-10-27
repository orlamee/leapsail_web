import React from "react";
import signup from "../img/signup.png";
import process from "../img/process.png";
import account from "../img/setup.png";

function FeaturesTours() {
  return (
    <section className="how-it-work bg-grey">
      <div className="container-fluid">
        <div className="row works text-center">
          <div className="col-md-3 mb-3 px-5">
            <div><img src={signup} alt="" className="img-fluid"/></div>
            <h6 className="mt-2">Fast Access</h6>
            <p className="">Lorem ipsum dolor sit amet, 
            consectetur adipiscing</p>
          </div>
          <div className="col-md-3 mb-3 px-5">
            <div><img src={process} alt="" className="img-fluid"/></div>
            <h6 className="mt-2">Best Price Guarantee</h6>
            <p className="">Lorem ipsum dolor sit amet, 
            consectetur adipiscing</p>
          </div>
          <div className="col-md-3 mb-3 px-5">
            <div><img src={account} alt="" className="img-fluid"/></div>
            <h6 className="mt-2">Secure Payment</h6>
            <p className="">Lorem ipsum dolor sit amet, 
            consectetur adipiscing</p>
          </div>
          <div className="col-md-3 mb-3 px-5">
            <div><img src={account} alt="" className="img-fluid"/></div>
            <h6 className="mt-2">Friendly Help</h6>
            <p className="">Lorem ipsum dolor sit amet, 
            consectetur adipiscing</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesTours;