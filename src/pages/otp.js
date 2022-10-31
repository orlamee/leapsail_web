import React from "react";
import Header from "../components/headerDashboard";
import LoginFooter from "../components/loginFooter";
import OtpForm from "../components/otpForm";

function Otp() {
  return (
    <div>
      <Header/>
      <OtpForm/>
      <LoginFooter/>
    </div>
  )
}

export default Otp;