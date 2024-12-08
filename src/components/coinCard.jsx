import React, { Component } from "react";

import "../styles/dashboard.css";

export default class CoinCard extends Component {
  render() {
    const { coin, color, theme } = this.props;
    const { c_name, price, increased_by, image } = coin;

    return (
      <>
        <div className={`coin-card ${theme}`}>
          <h4
            style={{ color: theme === "light" ? color : "#7ef6f8" }}
            className={`coinCard-header ${theme}`}
          >
            <img src={image} alt="coin_image" width="30px" height="30px" />{" "}
            {c_name}
          </h4>
          <div className={`coin-balance ${theme}`}>
            <h4 className={`balance-amt ${theme}`}>{price.toFixed(2)}</h4>
            <p
              className={`balance-increase ${theme} ${
                increased_by.startsWith("+") ? "positive" : "negative"
              }`}
            >
              {increased_by}
            </p>
          </div>
        </div>
      </>
    );
  }
}
