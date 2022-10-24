/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import callcenter from "../img/userss.png";

function ConsultFormOffice() {
  return (
    <form className="login-form">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7">
            <div className="form-box">
              <div className="consultationform">
                <div>
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control"/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control"/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input type="tel" className="form-control"/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Product Type</label>
                    <select className="form-select">
                      <option value="1">Visa</option>
                      <option value="2">Investment</option>
                      <option value="3">Ticketing</option>
                      <option value="3">Educational</option>
                      <option value="3">Tours</option>
                      <option value="3">Hubs</option>
                      <option value="3">Real Estate</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Enquiry Type</label>
                    <select className="form-select">
                      <option value="1">Vistor Visa</option>
                      <option value="2">POF</option>
                      <option value="2">POE</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Other, please specify</label>
                    <input type="text" className="form-control"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center call">
              <div className="col-md-10 text-center">
                <h3>How do you want to reach us?</h3>
              </div>
            </div>
            <div className="row justify-content-center my-5 call">
              <div className="col-md-6 text-center">
                <img src={callcenter} alt="" className="img-fluid" width={185}/>
                <h6 className="mt-3">Our office</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row desktop">
          <div className="col-12" style={{marginLeft: "-17px"}}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.399467770209!2d3.343338314628676!3d6.597174624133112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93d9cbcfe81f%3A0x54a4fa66f9220ff8!2sLeapsail%20Limited!5e0!3m2!1sen!2sng!4v1666612954380!5m2!1sen!2sng" width="1980" height="450" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className="row mobile">
          <div className="col-12" style={{marginLeft: "-17px"}}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.399467770209!2d3.343338314628676!3d6.597174624133112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93d9cbcfe81f%3A0x54a4fa66f9220ff8!2sLeapsail%20Limited!5e0!3m2!1sen!2sng!4v1666612954380!5m2!1sen!2sng" width="400" height="400" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <section className="bg-white py-5">
        <div className="container">
          <div className="row justify-content-center mx-2">
            <div className="col-md-6 call">
              <h3 className="mb-4 text-center">Choose a date and time for consultation</h3>
              <div className="mb-3">
                <label className="form-label">Duration</label>
                <select className="form-select">
                  <option value="1">5 Minutes</option>
                  <option value="2">10 Minutes</option>
                  <option value="3">30 Minutes</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Time Zone</label>
                <select className="form-select">
                  <option value="1">Nigeria, Lagos (GMT +1:00)</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Date/Time</label>
                <input type="datetime-local" className="form-control"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="official">
        <div className="container">
          <div className="row justify-content-center mx-2">
            <div className="col-md-7 officialform">
              <div className="text-center mb-3">
                <h5>For Official Use Only</h5>
              </div>
              <div className="mb-3">
                <label className="form-label">Name of organization</label>
                <input type="text" className="form-control"/>
              </div>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control"/>
              </div>
              <div className="mb-3">
                <label className="form-label">Position</label>
                <input type="text" className="form-control"/>
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control"/>
              </div>
            </div>
            <div className="col-8 text-center mb-5">
              <a className='brand-bg text-white px-5 fs-6 py-3 rounded-pill' href="#">Schedule</a>
            </div>
          </div>
        </div>
      </section>
    </form>
  )
}

export default ConsultFormOffice;