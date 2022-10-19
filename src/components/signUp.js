/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (password === repeatPassword) {
      try {
        const { data } = await axios.post(
          'https://lps-ng-app.herokuapp.com/api/auth/register',
          {
            firstName,
            lastName,
            email,
            password,
          }
        );

        console.log(data);

        Swal.fire({
          icon: 'success',
          title: 'Email Verification.',
          text: 'check your email and verify your account',
          footer: '<a href="">Why do I have this issue?</a>',
        });

        setLoading(false);
      } catch (error) {
        setLoading(false);
        Swal.fire(error.response.data.message);
        console.log(error.response.data.message);
        console.log(error);
      }
    } else {
      setLoading(false);
      Swal.fire('Check password & try again');
      console.log('wrong credentials');
    }
  };

  return (
    <section className="login-form">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="form-box">
              <div className="passform">
                <h4 className="text-center mb-5">
                  Welcome! Create your account.
                </h4>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12 col-md-6 mb-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div className="col-12 col-md-6 mb-4">
                      <input
                        className="form-control"
                        type="text"
                        maxLength="20"
                        placeholder="Last Name"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email Address"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="row">
                    <div className="col mb-4">
                      <input
                        id="password"
                        className="form-control"
                        type="password"
                        maxLength="20"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="col mb-4">
                      <input
                        id="passwordconfirm"
                        className="form-control"
                        type="password"
                        maxLength="20"
                        placeholder="Confirm Password"
                        required
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-5">
                    <h6 className="text-center">
                      By clicking finish I agree with the terms, Privacy Policy
                      and Fees.
                    </h6>
                  </div>
                  {loading ? (
                    <div className="col-12">
                      <button
                        // disabled={true}
                        type="button"
                        className="btn brand-bg text-white px-4 py-3 fs-6 rounded-pill"
                        style={{ width: '100%' }}
                      >
                        Loading
                      </button>
                    </div>
                  ) : (
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn brand-bg text-white px-4 py-3 fs-6 rounded-pill"
                        style={{ width: '100%' }}
                      >
                        Register
                      </button>
                    </div>
                  )}

                  <div className="mt-5">
                    <h5 className="text-center">
                      You already have an account?{' '}
                      <span>
                        <a href="/login">Login</a>
                      </span>
                    </h5>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
