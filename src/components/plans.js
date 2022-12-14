/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";


function Plans() {
  return (
    <section className="plans">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 text-center">
            <h1>Lorem ipsum dolor sit amet consectetur </h1>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-7 mb-2">
            <div className="row mb-5">
              <div className="col-md-6 mb-5">
                <div className="form-check">
                  <input className="form-check-input custom-radio" type="radio" name="flexRadioDefault"/>
                  <div className="radio-container">
                    <label className="form-check-label header-radio" htmlFor="flexRadioDefault1">
                      Regular Service
                    </label>
                    <h6 className="my-4">Lorem ipsum dolor sit amet, consectetur adipiscing</h6>
                    <a className='brand-bg text-white px-4 py-2 fs-6 rounded-pill' href="/consultation-form/call">Request</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-5">
                <div className="form-check">
                  <input className="form-check-input custom-radio" type="radio" name="flexRadioDefault"/>
                  <div className="radio-container">
                    <label className="form-check-label header-radio" htmlFor="flexRadioDefault1">
                      VIP Service - <span style={{color: "#E55425"}}>N12,345</span>
                    </label>
                    <h6 className="my-4">Lorem ipsum dolor sit amet, consectetur adipiscing</h6>
                    <a className='brand-bg text-white px-4 py-2 fs-6 rounded-pill' href="#">Upgrade</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-5">
                <div className="form-check">
                  <input className="form-check-input custom-radio" type="radio" name="flexRadioDefault"/>
                  <div className="radio-container">
                    <label className="form-check-label header-radio" htmlFor="flexRadioDefault1">
                      Premium Service - <span style={{color: "#E55425"}}>N12,345</span>
                    </label>
                    <h6 className="my-4">Lorem ipsum dolor sit amet, consectetur adipiscing</h6>
                    <a className='brand-bg text-white px-4 py-2 fs-6 rounded-pill' href="#">Upgrade</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-5">
                <div className="form-check">
                  <input className="form-check-input custom-radio" type="radio" name="flexRadioDefault"/>
                  <div className="radio-container">
                    <label className="form-check-label header-radio" htmlFor="flexRadioDefault1" >
                      Gbas Gbos - <span style={{color: "#E55425"}}>N12,345</span>
                    </label>
                    <h6 className="my-4">Lorem ipsum dolor sit amet, consectetur adipiscing</h6>
                    <a className='brand-bg text-white px-4 py-2 fs-6 rounded-pill' href="#">Upgrade</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="">
              <form>
                <div className="form-price">
                  <div className="row justify-content-center mb-3">
                    <div className="col-md-12 text-center">
                      <h5>Lorem ipsum dolor sit amet consectetur</h5>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Price</label>
                    <div className="col-sm-10">
                      <select className="form-select" aria-label="Default select example">
                        <option value="0">Free</option>
                        <option value="1">12000</option>
                        <option value="2">15000</option>
                        <option value="3">20000</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">VAT</label>
                    <div className="col-sm-10">
                      <select className="form-select" aria-label="Default select example">
                        <option value="0">Free</option>
                        {/* <option value="1">12000</option> */}
                        {/* <option value="2">15000</option> */}
                        {/* <option value="3">20000</option> */}
                      </select>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Total</label>
                    <div className="col-sm-10">
                      <input type="number" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-4">
                  <button type="submit" className="brand-bg text-white px-4 py-3 fs-6 rounded-pill" style={{ width: '100%' }}>
                    Proceed
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Plans;