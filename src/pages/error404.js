import React from "react";
import '../css/Login.css';
import Header from "../components/navBar";
import Footer from "../components/footer";
import ErrorPage from "../components/errorPage";


function Error() {
  return (
    <div>
      <Header/>
      <ErrorPage/>
      <Footer/>
    </div>
  )
}

export default Error;