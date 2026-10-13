import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    // Add your registration API here
  };

  return (
    <div>

      {/* Page Header Start */}
      <div className="page-header dark-section parallaxie">

        <div className="container">

          <div className="row">

            <div className="col-lg-12">

              <div className="page-header-box">

                <h1 className="text-anime-style-3">
                  Register
                </h1>

                <nav>

                  <ol className="breadcrumb">

                    <li className="breadcrumb-item">
                      <Link to="/">
                        Home
                      </Link>
                    </li>

                    <li
                      className="breadcrumb-item active"
                      aria-current="page"
                    >
                      Register
                    </li>

                  </ol>

                </nav>

              </div>

            </div>

          </div>

        </div>

      </div>
      {/* Page Header End */}


      {/* Register Section Start */}
      <div className="page-login">

        <div className="container">

          <div className="row">

            <div className="col-xl-12">

              <div className="login-content-box">

                <div className="login-content-form-item">

                  <form onSubmit={handleSubmit}>

                    <div className="login-form-content">

                      <div className="section-title">

                        <h2 className="text-anime-style-3">
                          Create your account
                        </h2>

                        <p>
                          Sign up to explore our exclusive collection,
                          track your orders and enjoy a personalized
                          shopping experience.
                        </p>

                      </div>


                      <div
                        className="checkout-login-form"
                        data-wow-delay="0.2s"
                      >

                        {/* Email */}
                        <div className="form-group">

                          <label>
                            Email address *
                          </label>

                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter your e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />

                          <div className="help-block with-errors"></div>

                        </div>


                        {/* Password */}
                        <div className="form-group">

                          <label>
                            Password *
                          </label>

                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />

                          <div className="help-block with-errors"></div>

                        </div>


                        {/* Privacy */}
                        <div className="login-form-info">

                          <p>
                            Your personal data will be used to support
                            your experience throughout this website and
                            for other purposes described in our{" "}

                            <Link to="/PrivacyPolicy">
                              privacy policy.
                            </Link>

                          </p>

                        </div>


                        {/* Register Button */}
                        <div className="checkout-login-btn signup-form-btn">

                          <button
                            type="submit"
                            className="btn-default btn-accent"
                          >
                            Register
                          </button>

                        </div>


                        {/* Login Link */}
                        <div className="login-content-form-btn">

                          <p>
                            Already have an account?{" "}

                            <Link to="/Login">
                              Login here
                            </Link>
                          </p>

                        </div>

                      </div>

                    </div>

                  </form>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
      {/* Register Section End */}

    </div>
  );
}