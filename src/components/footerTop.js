import React from "react";

function FooterTop() {
  return (
    <section className="footertop">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 text-center">
            <h2 className="mb-4">Try leapsail.com for your comfort</h2>
            <h6 className="mb-5">Coman buy our market | Debit card go dey needed</h6>
            <a className='bg-white text-white px-5 py-3 rounded-pill brand-bg brand-color fs-6' href="/register">Get Started <i className="bi bi-arrow-right fs-6"></i></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FooterTop;