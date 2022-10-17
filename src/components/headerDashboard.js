import React from "react";
// import { Link } from "react-router-dom";
import logo from "../img/logo-white.png";

function Header() {
  return (
    <section className="login-header">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <img src={logo} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header;