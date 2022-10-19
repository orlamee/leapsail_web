import React from "react";
import Account from "../components/accountSetup";
import Bvn from "../components/bvn";
import Footer from "../components/footer";
import Header from "../components/navBar";

function AccountSetup() {
  return (
    <section style={{background: "#E5E5E5"}}>
      <Header/>
      <Account/>
      <Bvn/>
      <Footer/>
    </section>
  )
}

export default AccountSetup;