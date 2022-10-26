/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function HeroEdu() {
  return (
    <section className="edu">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 edu-left">
            <h1>Lorem ipsum dolor sit 
            amet, consectetur 
            adipiscing</h1>
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing</p>
          </div>
          <div className="col-md-7 edu-right"></div>
        </div>
      </div>
      <div className="container button-groups desktop">
        <div className="row justify-content-center">
          <div className="col-md-9 text-center">
            <div className="d-flex flex-row mb-3">
              <div className="p-2">
                <a className='bg-purple text-white px-5 fs-6 py-3 rounded-pill' href="#">List of Schools</a>
              </div>
              <div className="p-2">
                <a className='bg-red text-white px-5 fs-6 py-3 rounded-pill' href="#">Courses</a>
              </div>
              <div className="p-2">
                <a className='bg-sky text-white px-5 fs-6 py-3 rounded-pill' href="#">Programme Type</a>
              </div>
              <div className="p-2">
                <a className='bg-blue text-white px-5 fs-6 py-3 rounded-pill' href="#">Programme Type</a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="container button-groups mobile">
        <div className="row justify-content-center">
          <div className="col-md-3 col-6 text-center mb-5">
            <a className='bg-purple text-white px-4 fs-6 py-3 rounded-pill' href="#">List of Schools</a>
          </div>
          <div className="col-md-3 col-6 text-center mb-5">
            <a className='bg-red text-white px-4 fs-6 py-3 rounded-pill' href="#">Courses</a>
          </div>
          <div className="col-md-3 col-6 text-center mb-5">
            <a className='bg-sky text-white px-4 fs-6 py-3 rounded-pill' href="#">Programme Type</a>
          </div>
          <div className="col-md-3 col-6 text-center mb-5">
            <a className='bg-blue text-white px-4 fs-6 py-3 rounded-pill' href="#">Programme Type</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroEdu;