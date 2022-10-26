import React from "react";
import Footer from "../components/footer";
import LondonHeader from "../components/londonHeader";
import Header from "../components/navBar";
import SchoolHeader from "../components/schoolHeader";

function LondonUniversity() {
  return (
    <div>
      <Header/>
      <LondonHeader/>
      <SchoolHeader/>
      <Footer/>
    </div>
  )
}

export default LondonUniversity;