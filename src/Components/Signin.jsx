import React, { useState } from "react";
import "../Style.css";
import logo from "../Assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/', { email, password })
      .then(result => {
        console.log(result);
        if(result.data === "Success"){
          navigate('/home');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <div className="nav-mobile"> </div>
      <div className="signin-container">
        <header>
          <img src={logo} alt="MusiCart Logo" className="logo" />
          <h1>MusiCart</h1>
        </header>
        <div className="form-container">
          <form id="sign-in-form" onSubmit={handleSubmit}>
            <h2>Sign in</h2>
            <div className="form-group">
              <label htmlFor="email-or-mobile">
                Enter your email 
              </label>
              <input
                type="text"
                id="email-or-mobile"
                name="email-or-mobile"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button className="continuebtn" type="submit">Continue</button>
            <p className="privacy-notice">
              By continuing, you agree to MusiCart privacy notice and conditions
              of use.
            </p>
          </form>
        </div>
        <div className="new-musicart">
          <p className="new-to-musicart">New to MusiCart?</p>
          <Link to="/signup" className="signup-link">
            <button type="button" className="create-account-button">
              Create your MusiCart account
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Signin;
