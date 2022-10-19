import React from "react";
import { Link } from "react-router-dom";

function Bvn() {
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div>
              <form>
                <div className="invest-form">
                  <div className="mb-4">
                    <label className="form-label">BVN</label>
                    <input type="number" className="form-control" maxLength={10} placeholder="Enter your bvn" required/>
                  </div>
                </div>
                <div className="title mt-5">
                  <h3>Liquidation Bank Details</h3>
                </div>
                <div className="invest-form">
                  <div className="mb-4">
                    <label className="form-label">Select Bank</label>
                    <select className="form-select " id="bank">
                      {/* <option selected>Choose</option> */}
                      <option value="access">Access Bank</option>
                      <option value="citibank">Citibank</option>
                      <option value="diamond">Diamond Bank</option>
                      <option value="ecobank">Ecobank</option>
                      <option value="fidelity">Fidelity Bank</option>
                      <option value="firstbank">First Bank</option>
                      <option value="fcmb">First City Monument Bank (FCMB)</option>
                      <option value="gtb">Guaranty Trust Bank (GTB)</option>
                      <option value="gtb">Globus Bank</option>
                      <option value="heritage">Heritage Bank</option>
                      <option value="keystone">Keystone Bank</option>
                      <option value="polaris">Polaris Bank</option>
                      <option value="providus">Providus Bank</option>
                      <option value="stanbic">Stanbic IBTC Bank</option>
                      <option value="standard">Standard Chartered Bank</option>
                      <option value="sterling">Sterling Bank</option>
                      <option value="suntrust">Suntrust Bank</option>
                      <option value="union">Union Bank</option>
                      <option value="uba">United Bank for Africa (UBA)</option>
                      <option value="unity">Unity Bank</option>
                      <option value="wema">Wema Bank</option>
                      <option value="zenith">Zenith Bank</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Account Name</label>
                    <input type="text" className="form-control" placeholder="Enter your account name" required/>
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Account Number</label>
                    <input type="number" className="form-control" maxLength={10} placeholder="Enter your account number" required/>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-8 otp">
                    <h6>A one-time password will be sent to <br/>your email - <span style={{fontSize: "30px"}}>expires after <span style={{color :"#F6B736"}}>60 secs</span></span></h6>
                  </div>
                  <div className="col-md-4" style={{marginTop: "20px"}}>
                    <Link className='btn brand-bg text-white px-5 py-3 rounded-pill brand-bg text-white fs-6' to="#">Request OTP</Link>
                  </div>
                </div>
                <div className="invest-form mb-5">
                  <div className="mb-4">
                    <label className="form-label">Enter OTP</label>
                    <input type="number" className="form-control" maxLength={10} placeholder="Enter OTP" required/>
                  </div>
                </div>
                <div className="nextofkin">
                  <div className="">
                    <h3>Next of Kin Details</h3>
                  </div>
                  <div className="invest-form mb-5">
                    <div className="row mb-4">
                      <div className="col">
                        <label className="form-label">First Name</label>
                        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
                      </div>
                      <div className="col">
                        <label className="form-label">Last Name</label>
                        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col">
                        <label className="form-label">Relationship</label>
                        <select className="form-select " id="relationship">
                          <option value="0">Uncle</option>
                          <option value="1">Wife</option>
                          <option value="2">Child</option>
                        </select>
                      </div>
                      <div className="col">
                        <label className="form-label">Phone Number</label>
                        <input type="text" className="form-control" placeholder="Phone number"/>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col">
                        <label className="form-label">Email Address</label>
                        <input type="email" className="form-control" placeholder="Email address"/>
                      </div>
                      <div className="col">
                        <label className="form-label">Date of Birth</label>
                        <input type="date" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 my-3 consent">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label className="form-check-label">
                        <h6>I agree to the <span style={{color: "#F6B736"}}>terms and conditions</span> of this service</h6>
                      </label>
                    </div>
                    <div
                      className="float-end fp desktop"
                      style={{ marginTop: '-39px' }}
                    >
                      <h6>
                        <Link to="#"><span style={{color: "#F6B736"}}>Download Agreement Form</span></Link>
                      </h6>
                    </div>
                  </div>
                  <div className="my-5 text-center">
                    <Link className='btn brand-bg text-white px-5 py-3 rounded-pill brand-bg text-white fs-6' to="#">Invest</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bvn;