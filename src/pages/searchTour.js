import React from "react";
import Footer from "../components/footer";
import Header from "../components/navBar";
import SearchTour from "../components/searchTour";

function InnerTour() {
  return (
    <div>
      <Header/>
      <SearchTour/>
      <Footer/>
    </div>
  )
}

export default InnerTour;