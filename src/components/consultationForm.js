import React from "react";


function ConsultForm() {
  return (
    <section className="login-form">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7">
            <div className="form-box">
              <div className="consultationform">
                <form>
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
                </form>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConsultForm;