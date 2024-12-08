import React, { Component } from "react";
import "../styles/otp.css";
import loginbg from "../assets/loginbg.png";
import brandlogo from "../assets/brandlogo.png";
import loginv2 from "../assets/loginv2.mp4";
import poster from "../assets/poster.png";

export default class Otp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { otp } = this.state;
    const success = this.props.onVerify(otp);
    if (!success) {
      alert("Invalid OTP!");
    }
  };

  render() {
    return (
      <>
        <div className="otp-page">
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
          <div className="otp-page-wrap ">
            <div className="otp-form-wrap">
              <div className="otp-logo-wrap">
                <img className="otp-logo" src={brandlogo} alt="7pools-logo" />
              </div>
              <div className="otp-form-content-wrap">
                <div className="otp-form-content-header">
                  <h2 className="otp-welcome">
                    Welcome to <span className="otp-h2-decor">7 Pools</span>
                  </h2>
                  <p className="otp-text">
                    A One time 6-digit code has been sent to your mail.
                  </p>
                </div>
                <div className="otp-form-wrap">
                  <form className="otp-form" onSubmit={this.handleSubmit}>
                    <div className="otp-form-field">
                      <label htmlFor="number" className="otp-label">
                        Enter OTP
                      </label>
                      <input
                        type="password"
                        name="number"
                        placeholder="Enter the 6-digit One time Password"
                        className="otp-input"
                        onChange={(e) => this.setState({ otp: e.target.value })}
                      />
                    </div>

                    <div className="otp-links-wrap">
                      <p className="otp-forgot-link">Resend OTP</p>
                      <button type="submit" className="otp-btn">
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="otp-img-wrap">
              <img className="otp-bg-img" src={loginbg} alt="otp-bg" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
