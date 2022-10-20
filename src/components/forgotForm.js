import React from "react";


function ForgotForm() {
  return (
    <section className="login-form">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="form-box">
              <div className="passform">
                <h4 className="text-center">Forgot your password?</h4>
                <h6 className="mt-3 text-center">Enter your email below and we'll send you instructions to create a<br/>new password.</h6>
                <form className='row mt-5'>
                  <div className="mb-4">
                    <input type="email" className="form-control" id="formGroupExampleInput" placeholder="Enter email address" required/>
                  </div>
                  <div className="mb-4">
                    <h6 className="text-center">Make sure you enter the same email you used to create your profile.</h6>
                  </div>
                  <div className="">
                    <button type="button" className="brand-bg text-white px-4 py-3 fs-6 rounded-pill" style={{width: "100%"}}>Send</button>
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

export default ForgotForm;