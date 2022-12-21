import React from "react";
import "../Login/Login.css";
import loginBanner from "../../images/login-banner.png";

import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <div className="login-section  container mt-2">
        <div className="row align-content-center">
          <div className="col-md-7 col-lg-7 col-sm-12 image-container text-center">
            <img src={loginBanner} alt="" />
          </div>
          <div className="col-md-5 col-lg-5 col-sm-12 p-2 ">
            <div className="p-3 login-Form text-center mt-md-0 mt-lg-0 mt-sm-5">
              <div className="login-heading">
                <h4 className="fw-bold me-5 text-start">Welcome to RentUs</h4>
                <p>
                  Have an account? <Link to="/logIn">Login</Link>
                </p>
              </div>
              <div className="text-center">
                <h3 className="fw-bolder">Sign Up</h3>
              </div>
              <form action="">
                <div className="m-3">
                  <label
                    for="exampleFormControlInput1"
                    className="form-label float-start"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter your name"
                  />
                  <label
                    for="exampleFormControlInput2"
                    className="form-label float-start"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput2"
                    placeholder="name@example.com"
                  />
                  <label
                    for="exampleFormControlInput3"
                    className="form-label float-start"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput3"
                    placeholder="Phone"
                  />
                  <label
                    for="inputPassword"
                    className="form-label float-start mt-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    id="password"
                  />
                  <input
                    type="password"
                    className="form-control mt-3"
                    placeholder="Confirm password"
                    id="confirmPassword"
                  />
                  <input
                    type="checkbox"
                    className=" m-3"
                    onclick="myFunction()"
                  />
                  Show Password
                </div>
              </form>
              <button className="signIn-btn mb-5 login-btn">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
