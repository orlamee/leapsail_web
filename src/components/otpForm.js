import React from "react";

function OtpForm() {
  return (
    <section className="login-form">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="form-box">
              <div className="passform">
                <h4 className="text-center">OTP Verification</h4>
                <h6 className="mt-3 text-center">We will send you a one time password on this Mobile Number</h6>
                <div className="text-center fw-bolder">234040348483</div>
                <form className="my-4">
                  <div className="d-flex flex-row">
                    <div className="me-2"><input type="text" className="form-control rounded" maxLength="1"/></div>
                    <div className="me-2"><input type="text" className="form-control rounded" maxLength="1"/></div>
                    <div className="me-2"><input type="text" className="form-control rounded" maxLength="1"/></div>
                    <div className="me-2"><input type="text" className="form-control rounded" maxLength="1"/></div>
                    <div className="me-2"><input type="text" className="form-control rounded" maxLength="1"/></div>
                    <div className="me-2"><input type="text" className="form-control rounded" maxLength="1"/></div>
                  </div>
                  <div className="col-12 mt-4">
                    <button type="submit" className="brand-bg text-white px-4 py-3 fs-6 rounded-pill" style={{ width: '100%' }}>
                      Validate
                    </button>
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

export default OtpForm;