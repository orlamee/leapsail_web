import React from "react";

function ErrorPage() {
  return (
    <section className="errorpage">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7">
            <h1 className="mb-3">Ooooops!!</h1>
            <p className="mb-5">We cannot seem to find the page you are looking for</p>
            <a className='brand-bg text-white px-4 fs-6 py-3 rounded-pill' href="/">Back Home</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage;