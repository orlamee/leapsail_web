import React from "react";
import { Link } from "react-router-dom";
import callcenter from "../img/callcenter.png";
import audiences from "../img/userss.png";

function ReachUs() {
  return (  
    <section className="reachus">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h3>How do you want to reach us?</h3>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-3 text-center">
            <Link to="/consultation-form"><img src={callcenter} alt="" className="img-fluid" width={185}/></Link>
            <h6>Call</h6>
            <p>Lorem ipsum dolor sit amet, 
            consectetur adipiscing</p>
          </div>
          <div className="col-md-3 text-center mt-2">
            <img src={audiences} alt="" className="img-fluid" width={176}/>
            <h6>Audience with us</h6>
            <p>Lorem ipsum dolor sit amet, 
            consectetur adipiscing</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReachUs;