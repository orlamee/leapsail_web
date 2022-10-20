import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ChangePassword() {
  const [resetPassword, setRestPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { id } = useParams();

  console.log(id);

  return (
    <section className="login-form">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="form-box">
              <div className="passform">
                <h4 className="text-center">Change your password</h4>
                <h6 className="mt-3 text-center">Enter your new password</h6>
                <form className="row mt-5">
                  <div className="mb-4">
                    <input
                      type="password"
                      id="passwordreset"
                      className="form-control"
                      placeholder="Enter new password"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      id="passwordresetconfirm"
                      className="form-control"
                      placeholder="Confirm new password"
                      required
                    />
                  </div>
                  <div className="">
                    <button
                      type="button"
                      className="brand-bg text-white px-4 py-3 fs-6 rounded-pill"
                      style={{ width: '100%' }}
                    >
                      Reset Password
                    </button>
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

export default ChangePassword;
