import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/headerDashboard";
import LoginFooter from "../components/loginFooter";
import yes from "../img/yes.png";
// import { Link } from "react-router-dom";

function Success() {
  return (
    <section className="login-form">
      <Header/>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="form-box">
              <div className="text-center go">
                <img src={yes} alt="" className="img-fluid" />
                <h6 className="my-5">Investment Successful</h6>
                <Link className='text-white px-5 py-3 rounded-pill brand-bg text-white fs-6' to="#">Explore</Link>
                {/* <div className="mt-3 home-link">
                  <Link className='' to="/">Go Home</Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>

      </div>
      <LoginFooter/>
    </section>
  )
}

export default Success;