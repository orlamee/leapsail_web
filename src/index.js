import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
import Office from './pages/consultatonFormOffice';
import Educational from './pages/educational';
import LondonUniversity from './pages/londonUniversity';
import Tours from './pages/tours';
import Error from './pages/error404';
import Otp from './pages/otp';
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
      <Route path="/consultation-form/call" element={<ConsultationForm/>}></Route>
      <Route path="/consultation-form/office" element={<Office/>}></Route>
      <Route path="/educational" element={<Educational/>}></Route>
      <Route path="/educational/london-university" element={<LondonUniversity/>}></Route>
      <Route path="/tours" element={<Tours/>}></Route>
      <Route path="/otp" element={<Otp/>}></Route>
      <Route path="/404" element={<Error/>}></Route>
      <Route path="*" element={ <Navigate to="/404" replace />}></Route>
    </Routes>
  </BrowserRouter>
);
