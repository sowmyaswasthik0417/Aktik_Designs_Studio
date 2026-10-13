import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    // Add your login API here
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
                  Login
                </h1>

                <nav>
                  <ol className="breadcrumb">

                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>

                    <li
                      className="breadcrumb-item active"
                      aria-current="page"
                    >
                      Login
                    </li>

                  </ol>
                </nav>

              </div>

            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}


      {/* Login Section Start */}
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
                          Login your account
                        </h2>

                        <p>
                          Access your account to explore our latest
                          collections, track your orders and enjoy a
                          personalized shopping experience.
                        </p>

                      </div>


                      <div
                        className="checkout-login-form"
                        data-wow-delay="0.2s"
                      >

                        {/* Email */}
                        <div className="form-group">

                          <label>
                            Username or email address *
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


                        {/* Login Footer */}
                        <div className="checkout-login-form-footer">

                          <div className="checkout-login-btn">

                            <button
                              type="submit"
                              className="btn-default btn-accent"
                            >
                              Login
                            </button>

                          </div>


                          <div className="checkout-form-checkbox">

                            <input
                              type="checkbox"
                              id="remember"
                              name="remember"
                            />

                            <label htmlFor="remember">
                              Remember Me
                            </label>

                          </div>

                        </div>


                        {/* Forgot Password */}
                        <div className="login-content-form-btn">

                          <Link to="/ForgotPassword">
                            Forgot your password?
                          </Link>

                        </div>


                        {/* Register */}
                        <div className="login-content-form-btn">

                          <p>
                            Don't have an account?{" "}

                            <Link to="/Register">
                              Create an account
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
      {/* Login Section End */}

    </div>
  );
}