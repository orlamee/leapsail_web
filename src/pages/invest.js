import React from "react";
import Header from "../components/headerDashboard";
import LoginFooter from "../components/loginFooter";
import grow from "../img/grow.png";
import { Link } from "react-router-dom";

function Invest() {
  return (
    <section className="login-form">
      <Header/>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="form-box">
              <div className="text-center go">
                <img src={grow} alt="" className="img-fluid" />
                <h6 className="my-5">Do you wish to continue with the 
                investment process?</h6>
                <Link className='btn brand-bg text-white px-5 py-3 rounded-pill brand-bg text-white fs-6' to="/investment-page">Proceed</Link>
                <div className="mt-3 home-link">
                  <Link className='' to="/">Go Home</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoginFooter/>
    </section>
  )
}

export default Invest;