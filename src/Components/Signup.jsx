import React, { useState } from "react";
import "../Style.css";
import logo from "../Assets/logo.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/signup', { name, number, email, password })
      .then(result => {console.log(result)
        navigate('/');
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <div className="nav-mobile"></div>
      <div className="signin-container">
        <header>
          <img src={logo} alt="MusiCart Logo" className="logo" />
          <h1>MusiCart</h1>
        </header>
        <div className="signup-form-container">
          <form id="create-account-form" action="" onSubmit={handleSubmit}>
            <h2>Create Account</h2>
            <div className="form-group">
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile number</label>
              <input type="tel" id="mobile" name="mobile" required onChange={(e) => setNumber(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Id</label>
              <input type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="continuebtn" type="submit">Continue</button>
            <p className="privacy-notice">
              By continuing, you agree to MusiCart privacy notice and conditions of use.
            </p>
            <p className="already-account">
              Already have an account? <Link to="/">Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
