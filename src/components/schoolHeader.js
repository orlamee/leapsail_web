import React from "react";
import header from "../img/header-school.png";

function SchoolHeader() {
  return (
    <section>
      <div className="container-fluid" style={{padding: "0"}}>
        <img src={header} alt="" className="img-fluid" />
      </div>
    </section>
  )
}

export default SchoolHeader;