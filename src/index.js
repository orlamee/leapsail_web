import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; 
import Login from './pages/login';
import ForgotPassword from './pages/forgotPassword';
import Signup from './pages/register';
import Investment from './pages/investment';
import Invest from './pages/invest';
import InvestPage from './pages/investment-page';
import ScrollToTop from './js/scrollTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <ScrollToTop/>
  <Routes>
    <Route path="/" element={<App />}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
    <Route path="/register" element={<Signup/>}></Route>
    <Route path="/investment" element={<Investment/>}></Route>
    <Route path="/invest" element={<Invest/>}></Route>
    <Route path="/investment-page" element={<InvestPage/>}></Route>
  </Routes>
</BrowserRouter>
);