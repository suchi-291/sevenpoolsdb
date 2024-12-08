import React, { Component } from "react";
import "../styles/login.css";
import loginbg from "../assets/loginbg.png";
import brandlogo from "../assets/brandlogo.png";
import loginv2 from "../assets/loginv2.mp4";
import poster from "../assets/poster.png";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showPassword: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const success = this.props.onLogin(email, password);
    if (!success) {
      alert("Invalid credentials!");
    }
  };

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  render() {
    const { showPassword } = this.state;

    return (
      <>
        <div className="login-page">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="background-video"
            poster={poster}
          >
            <source src={loginv2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="background-overlay"></div>

          <div className="login-page-wrap">
            <div className="login-form-wrap">
              <div className="login-logo-wrap">
                <img className="login-logo" src={brandlogo} alt="7pools-logo" />
              </div>
              <div className="login-form-content-wrap">
                <div className="login-form-content-header">
                  <h2 className="login-welcome">
                    Welcome to <span className="login-h2-decor">7 Pools</span>
                  </h2>
                  <p className="login-text">Login to access your account</p>
                </div>
                <div className="login-form-wrap">
                  <form className="login-form" onSubmit={this.handleSubmit}>
                    <div className="login-form-field">
                      <label htmlFor="email" className="login-label">
                        EMAIL
                      </label>
                      <input
                        type="text"
                        name="email"
                        placeholder="Enter your email"
                        className="login-input"
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
                      />
                    </div>
                    <div className="login-form-field">
                      <label htmlFor="password" className="login-label">
                        PASSWORD
                      </label>
                      <div
                        className="login-password-wrap"
                        style={{
                          display: "flex",
                          gap: "0.1rem",
                          width: "125%",
                          justifyContent: "space-between",
                        }}
                      >
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          placeholder="Enter Password"
                          className="login-input"
                          onChange={(e) =>
                            this.setState({ password: e.target.value })
                          }
                          style={{ width: "80%" }}
                        />
                        {/*<button
                          type="button"
                          className="login-password-toggle-btn"
                          onClick={this.togglePasswordVisibility}
                        >
                          {showPassword ? "Show password" : "close Password"}
                        </button>*/}
                      </div>
                    </div>
                    <div className="login-links-wrap">
                      <p className="login-forgot-link">Forgot Password?</p>
                      <button type="submit" className="login-btn">
                        LOGIN
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="login-img-wrap">
              <img className="login-bg-img" src={loginbg} alt="login-bg" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
