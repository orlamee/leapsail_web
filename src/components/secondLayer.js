import React from "react";
import { Link } from "react-router-dom";


function SecondLayer() {
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="">
              <form>
                <div className="invest-form">
                  <div className="mb-4">
                    <label className="form-label">Amount to Invest</label>
                    <input type="number" className="form-control" id="formGroupExampleInput" placeholder="Enter amount to invest" required/>
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Duration (per annum)</label>
                    <select className="form-select">
                      <option value="" selected>Duration (per annum)</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">6</option>
                    </select>
                    {/* <input type="number" className="form-control" id="formGroupExampleInput" placeholder="Enter amount to invest" required/> */}
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Amount in Words</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter amount in words" required/>
                  </div>
                </div>
                <div className="my-5 text-center">
                  <Link className='brand-bg text-white px-5 py-3 rounded-pill brand-bg text-white fs-6' to="/">Use Estimator</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecondLayer;