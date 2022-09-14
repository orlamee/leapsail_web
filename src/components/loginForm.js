/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import download from "../img/downloads.png";

function LoginForm() {
  return (
    <section className="login-form">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="form-box">
              <div className="row">
                <div className="col-md-6 left-form">
                  <h4 className="mb-4">Hey Dear!</h4>
                  <h6>We are creating<br/>
                  revolution in Africa
                  </h6>
                  <h5 className="mt-5 fig">8,205</h5>
                  <p className="mt-3">people have already joined,<br/>
                  join in also!</p>
                  <div className="">
                    <img src={download} alt="" className="img-fluid desktop left-footer" />
                  </div>
                </div>
                <div className="col-md-6 right-form">
                  <h5 className="mb-4">Kindly login to your account</h5>
                  <form className='row'>
                    <div className="mb-4">
                      <input type="email" className="form-control" id="formGroupExampleInput" placeholder="Enter email address" required/>
                    </div>
                    <div className="mb-4">
                      <input id="password" className="form-control" type="password" maxLength="20" placeholder="Enter password" required/>
                    </div>
                    <div className="col-12">
                      <button type="button" className="btn brand-bg text-white px-4 py-3 fs-6 rounded-pill" style={{width: "100%"}}>Log in</button>
                    </div>
                    <div className="mb-4 my-3">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label">
                          <h6>Remember me</h6>
                        </label>
                      </div>
                      <div className="float-end fp" style={{marginTop: "-39px"}}>
                        <h6><Link to="/forgot-password">Forgot Password?</Link></h6>
                      </div>
                    </div>
                    <div className="right-footer">
                      <button type="button" className="btn btn-outline-warning px-4 py-3 fs-6 rounded-pill" style={{width: "100%"}}>Sign Up</button>
                      <img src={download} alt="" className="img-fluid mobile" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginForm;