import React, { Component } from "react";
import "../styles/summary.css";

export default class InvSummary extends Component {
  render() {
    const { theme, marketPlace } = this.props;
    return (
      <div className={`investment-summary-card ${theme}`}>
        <h2>Investment Summary</h2>
        <p>
          Welcome to the {marketPlace}! Here, you can track and manage your
          automated trades with ease. This section provides a comprehensive
          overview of your trading activity, including real-time updates on your
          &nbsp;<b>profits and losses</b>, your &nbsp;
          <b>available balance</b>.{" "}
        </p>
        <div className={`summary-items-wrap ${theme}`}>
          <div className={`summary-item ${theme}`}>
            <span>Total Investment:{}</span>
            <span></span>
          </div>
          <div className={`summary-item ${theme}`}>
            <span>Profit / Loss:</span>
            <span
              style={{
                color: "green",
              }}
            >
              {}
            </span>
          </div>
          <div className={`summary-item ${theme}`}>
            <span>Available Balance:</span>
            <span>{}</span>
          </div>
        </div>
      </div>
    );
  }
}
