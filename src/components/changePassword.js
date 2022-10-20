import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function ChangePassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (password === confirmPassword) {
      try {
        const { data } = await axios.post(
          `https://lps-ng-app.herokuapp.com/api/user/reset-password/${id}`,
          {
            password,
          }
        );

        console.log(data);
        setLoading(false);

        Swal.fire({
          icon: 'success',
          title: 'Reset password.',
          text: 'Yay, password has been reset',
        });

        navigate('/login');
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
          <div className="col-md-6">
            <div className="form-box">
              <div className="passform">
                <h4 className="text-center">Change your password</h4>
                <h6 className="mt-3 text-center">Enter your new password</h6>
                <form className="row mt-5" onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <input
                      type="password"
                      id="passwordreset"
                      className="form-control"
                      placeholder="Enter new password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      id="passwordresetconfirm"
                      className="form-control"
                      placeholder="Confirm new password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
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
                        Set Password
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

export default ChangePassword;
