import React from "react";
import ChangePassword from "../components/changePassword";
import Header from "../components/headerDashboard";
import LoginFooter from "../components/loginFooter";
import "../css/Login.css";

function ResetPassword() {
  return (
    <div>
      <Header/>
      <ChangePassword/>
      <LoginFooter/>
    </div>
  )
}


export default ResetPassword;