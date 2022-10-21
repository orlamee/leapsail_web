import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import ForgotPassword from './pages/forgotPassword';
import ResetPassword from './pages/resetPassword';
import Signup from './pages/register';
import Investment from './pages/investment';
import Invest from './pages/invest';
import InvestPage from './pages/investment-page';
import ScrollToTop from './js/scrollTop';
import { ToastContainer } from 'react-toastify';
import { unregister as unregisterServiceWorker } from './js/registerServiceWorker';
import AccountSetup from './pages/investment-account';
import Success from './pages/invest-success';
import Contact from './pages/contact';
import ConsultationForm from './pages/consultationForm';
unregisterServiceWorker();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ToastContainer />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/forgot-password" element={<ForgotPassword />}></Route>
      <Route path="/reset-password/:id" element={<ResetPassword />}></Route>
      <Route path="/register" element={<Signup />}></Route>
      <Route path="/investment" element={<Investment />}></Route>
      <Route path="/invest" element={<Invest />}></Route>
      <Route path="/investment-page" element={<InvestPage />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/account-setup" element={<AccountSetup />}></Route>
      <Route path="/success" element={<Success />}></Route>
      <Route path="/consultation" element={<Contact/>}></Route>
      <Route path="/consultation-form" element={<ConsultationForm/>}></Route>
    </Routes>
  </BrowserRouter>
);
