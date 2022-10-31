/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import React, { useState } from 'react';
import callcenter from '../img/callcenter.png';
import Swal from 'sweetalert2';

function ConsultForm() {
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNuber] = useState('');
  const [productType, setProductType] = useState('');
  const [enquiryType, setEnquiryType] = useState('');
  const [others, setOther] = useState('');
  const [duration, setDuration] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const [nameOfOrg, setNameOfOrg] = useState('');
  const [fullname2, setFullName2] = useState('');
  const [position, setPosition] = useState('');
  const [email2, setEmail2] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        'https://lps-ng-app.herokuapp.com/leapsail/api/contact/',
        {
          fullname,
          email,
          phoneNumber,
          productType,
          enquiryType,
          others,
          duration,
          timeZone,
          nameOfOrg,
          fullname2,
          position,
          email2,
        }
      );

      console.log(data);
      Swal.fire({
        icon: 'success',
        title: 'Done.',
        text: 'contact form submitted successfully',
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error.',
        text: `${error.response.data.message}`,
      });
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7">
            <div className="form-box">
              <div className="consultationform">
                <div>
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={fullname}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="tel"
                      className="form-control"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNuber(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Product Type</label>
                    <select
                      className="form-select"
                      onChange={(e) => setProductType(e.target.value)}
                    >
                      <option value="1">Visa</option>
                      <option value="2">Investment</option>
                      <option value="3">Ticketing</option>
                      <option value="3">Educational</option>
                      <option value="3">Tours</option>
                      <option value="3">Hubs</option>
                      <option value="3">Real Estate</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Enquiry Type</label>
                    <select
                      className="form-select"
                      onChange={(e) => setEnquiryType(e.target.value)}
                    >
                      <option value="1">Vistor Visa</option>
                      <option value="2">POF</option>
                      <option value="2">POE</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Other, please specify</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setOther(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center call">
              <div className="col-md-10 text-center">
                <h3>How do you want to reach us?</h3>
              </div>
            </div>
            <div className="row justify-content-center my-5 call">
              <div className="col-md-6 text-center">
                <img
                  src={callcenter}
                  alt=""
                  className="img-fluid"
                  width={185}
                />
                <h6 className="mt-3">Call on the provided number</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-white py-5">
        <div className="container">
          <div className="row justify-content-center mx-2">
            <div className="col-md-6 call">
              <h3 className="mb-4 text-center">
                Choose a date and time for consultation
              </h3>
              <div className="mb-3">
                <label className="form-label">Duration</label>
                <select
                  className="form-select"
                  onChange={(e) => setDuration(e.target.value)}
                >
                  <option value="1">5 Minutes</option>
                  <option value="2">10 Minutes</option>
                  <option value="3">30 Minutes</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Time Zone</label>
                <select
                  className="form-select"
                  onChange={(e) => setTimeZone(e.target.value)}
                >
                  <option value="1">Nigeria, Lagos (GMT +1:00)</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Date/Time</label>
                <input type="datetime-local" className="form-control" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="official">
        <div className="container">
          <div className="row justify-content-center mx-2">
            <div className="col-md-7 officialform">
              <div className="text-center mb-3">
                <h5>For Official Use Only</h5>
              </div>
              <div className="mb-3">
                <label className="form-label">Name of organization</label>
                <input
                  type="text"
                  className="form-control"
                  value={nameOfOrg}
                  onChange={(e) => setNameOfOrg(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={fullname2}
                  onChange={(e) => setFullName2(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Position</label>
                <input
                  type="text"
                  className="form-control"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email2}
                  onChange={(e) => setEmail2(e.target.value)}
                />
              </div>
            </div>
            <div className="col-8 text-center mb-5">
              <button
                type="submit"
                className="brand-bg text-white px-5 fs-6 py-3 rounded-pill"
                href="#"
              >
                Schedule
              </button>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
}

export default ConsultForm;
