import React from "react";
import { Link } from "react-router-dom";

function ThirdLayer() {
  return (
    <div className="container mb-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div>
            <form>
              <div className="invest-form">
                <div className="mb-4">
                  <label className="form-label">Withholding Tax (%)</label>
                  <input type="number" className="form-control" id="formGroupExampleInput" placeholder="Enter amount to invest" required/>
                </div>
              </div>
              <div className="invest-form mt-4">
                <div className="row">
                  <div className="col-md-8 mt-3">
                    <label className="form-label">Terms and Conditions Form (Agreement)</label>
                  </div>
                  <div className="col-md-4">
                    <Link className='btn brand-bg text-white px-5 py-3 rounded-pill brand-bg text-white fs-6' to="/">Download</Link>
                  </div>
                </div>
              </div>
              <div className="invest-form mt-4">
                <div className="row">
                  <div className="col-md-6 mt-3">
                    <label className="form-label">Text (Notification)</label>
                  </div>
                  <div className="col-md-3">
                    <Link className='btn brand-bg text-white px-5 py-3 rounded-pill brand-bg text-white fs-6' to="/">Email</Link>
                  </div>
                  <div className="col-md-3">
                    <Link className='btn brand-bg text-white px-5 py-3 rounded-pill brand-bg text-white fs-6' to="/">SMS</Link>
                  </div>
                </div>
              </div>
              <div className="my-5 text-center">
                <Link className='brand-bg text-white px-5 py-3 rounded-pill brand-bg text-white fs-6' to="/account-setup">Proceed</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThirdLayer;