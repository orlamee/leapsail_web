import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const navigate = useNavigate();

  const createUser = async () => {
    try {
      // const { data } = await axios.post(
      //   'http://localhost:8000/api/auth/register',
      //   {
      //     firstName,
      //     lastName,
      //     email,
      //     password,
      //   }
      // );
      // console.log(data);
      // navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    // e.preventDefault();

    // if (password === repeatPassword) {
    //   createUser();
    // } else {
    //   console.log('wrong credientials');
    // }
    console.log('submit user demilade');
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
                  {/* <div className="row">
                    <div className="col-12 col-md-6 mb-4">
                      <select className="form-select">
                        <option defaultValue="Gender" >Gender</option>
                        <option value="2">Male</option>
                        <option value="3">Female</option>
                      </select>
                    </div>
                    <div className="col-12 col-md-6 mb-4">
                      <input className="form-control" type="date" min="1900-08-01" max="2004-01-01" placeholder="Age" required/>
                    </div>
                  </div> */}
                  {/* <div className="mb-4">
                    <input className="form-control" type="tel" maxLength="14" placeholder="Phone Number ( Format: 080-23-456-789 )" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{3}" required/>
                  </div> */}
                  {/* <div className="row">
                    <div className="col mb-4">
                      <select className="form-select">
                        <option defaultValue="Have you traveled before?" >Have you traveled before?</option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                      </select>
                    </div>
                    <div className="col-12 col-md-6 mb-4">
                      <input type="text" className="form-control" placeholder="Where would that be?" required/>
                    </div>
                  </div> */}
                  {/* <div className="row">
                    <div className="col-12 col-md-6 mb-4">
                      <input type="text" className="form-control" placeholder="Street Name" required/>
                    </div>
                    <div className="col-12 col-md-6 mb-4">
                      <input className="form-control" type="number" maxLength="10" placeholder="Street Number" required/>
                    </div>
                  </div>   */}
                  {/* <div className="row">
                    <div className="col-12 col-md-6 mb-4">
                      <select className="selectpicker" data-show-subtext="false" data-live-search="true">
                        <option value=""> Select State</option>
                        <option value="Abia">Abia</option>
                        <option value="Adamawa">Adamawa</option>
                        <option value="AkwaIbom">AkwaIbom</option>
                        <option value="Anambra">Anambra</option>
                        <option value="Bauchi">Bauchi</option>
                        <option value="Bayelsa">Bayelsa</option>
                        <option value="Benue">Benue</option>
                        <option value="Borno">Borno</option>
                        <option value="Cross River">Cross River</option>
                        <option value="Delta">Delta</option>
                        <option value="Ebonyi">Ebonyi</option>
                        <option value="Edo">Edo</option>
                        <option value="Ekiti">Ekiti</option>
                        <option value="Enugu">Enugu</option>
                        <option value="FCT">FCT</option>
                        <option value="Gombe">Gombe</option>
                        <option value="Imo">Imo</option>
                        <option value="Jigawa">Jigawa</option>
                        <option value="Kaduna">Kaduna</option>
                        <option value="Kano">Kano</option>
                        <option value="Katsina">Katsina</option>
                        <option value="Kebbi">Kebbi</option>
                        <option value="Kogi">Kogi</option>
                        <option value="Kwara">Kwara</option>
                        <option value="Lagos">Lagos</option>
                        <option value="Nasarawa">Nasarawa</option>
                        <option value="Niger">Niger</option>
                        <option value="Ogun">Ogun</option>
                        <option value="Ondo">Ondo</option>
                        <option value="Osun">Osun</option>
                        <option value="Oyo">Oyo</option>
                        <option value="Plateau">Plateau</option>
                        <option value="Rivers">Rivers</option>
                        <option value="Sokoto">Sokoto</option>
                        <option value="Taraba">Taraba</option>
                        <option value="Yobe">Yobe</option>
                        <option value="Zamfara">Zamafara</option>
                      </select>
                    </div>
                    <div className="col-12 col-md-6 mb-4">
                      <select className="selectpicker" data-show-subtext="false" data-live-search="true">
                        <option value=""> Select LGA</option>
                        <option value="Aba North">Aba North</option>
                        <option value="Aba South">Aba South</option>
                        <option value="Arochukwu">Arochukwu</option>
                        <option value="Bende">Bende</option>
                        <option value="Ikwuano">Ikwuano</option>
                        <option value="Isuikwuato">Isuikwuato</option>
                        <option value="Ohafia">Ohafia</option>
                        <option value="Agege">Agege</option>
                        <option value="Ajeromi-Ifelodun">Ajeromi-Ifelodun</option>
                        <option value="Alimosho">Alimosho</option>
                        <option value="Apapa">Apapa</option>
                        <option value="Amuwo-Odofin">Amuwo-Odofin</option>
                        <option value="Badagry">Badagry</option>
                        <option value="Epe">Epe</option>
                        <option value="Eti-osa">Eti Osa</option>
                        <option value="Lekki">Lekki</option>
                        <option value="Ikeja">Ikeja</option>
                        <option value="Ifako-Ijaiye">Ifako-Ijaiye</option>
                        <option value="Ikorodu">Ikorodu</option>
                        <option value="Yaba">Yaba</option>
                        <option value="Kosofe">Kosofe</option>
                        <option value="Mushin">Mushin</option>
                        <option value="Shomolu">Shomolu</option>
                        <option value="Oshodi-Isolo">Oshodi-Isolo</option>
                        <option value="Ojo">Ojo</option>
                      </select>
                    </div>
                  </div> */}
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
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn brand-bg text-white px-4 py-3 fs-6 rounded-pill"
                      style={{ width: '100%' }}
                    >
                      Register
                    </button>
                  </div>
                  <div className="mt-5">
                    <h5 className="text-center">
                      You already have an account?{' '}
                      <span>
                        <Link to="/login">Login</Link>
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
