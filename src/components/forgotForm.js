import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

function ForgotForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(
        'https://lps-ng-app.herokuapp.com/api/user/forgot-password',
        {
          email,
        }
      );

      console.log(data);

      Swal.fire({
        icon: 'success',
        title: 'Email Verification.',
        text: 'check your email and verify your account',
        // footer: '<a href="">Why do I have this issue?</a>',
      });

      setLoading(false);
    } catch (error) {
      setLoading(false);
      Swal.fire(error.response.data.message);
      console.log(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <section className="login-form">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="form-box">
              <div className="passform">
                <h4 className="text-center">Forgot your password?</h4>
                <h6 className="mt-3 text-center">
                  Enter your email below and we'll send you instructions to
                  create a<br />
                  new password.
                </h6>
                <form className="row mt-5" onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="Enter email address"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <h6 className="text-center">
                      Make sure you enter the same email you used to create your
                      profile.
                    </h6>
                  </div>
                  {loading ? (
                    <div className="col-12">
                      <button
                        type="button"
                        className="brand-bg text-white px-4 py-3 fs-6 rounded-pill"
                        style={{ width: '100%' }}
                      >
                        Loading
                      </button>
                    </div>
                  ) : (
                    <div className="col-12">
                      <button
                        type="submit"
                        className="brand-bg text-white px-4 py-3 fs-6 rounded-pill"
                        style={{ width: '100%' }}
                      >
                        Send
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForgotForm;
