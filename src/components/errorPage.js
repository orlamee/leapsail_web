import React from "react";
import error from "../img/error.jpg";

function ErrorPage() {
  return (
    <section className="errorpage">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <img src={error} alt="" className="img-fluid" width={350}/>
            <h1 className="mb-3">404 - Page Not Found</h1>
            <p className="mb-5">Ooooops!!! We cannot seem to find the page you are looking for</p>
            <a className='brand-bg text-white px-4 fs-6 py-3 rounded-pill' href="/">Back to Home</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage;