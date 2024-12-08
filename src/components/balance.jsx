import React, { Component } from "react";

import "../styles/dashboard.css";

export default class Balance extends Component {
  render() {
    const { amount, raise, theme, portfolio } = this.props;
    return (
      <>
        <div className={`balance-wrap ${theme}`}>
          <h3>{portfolio}</h3>
          <p>Total Value</p>
          <div className={`balance ${theme}`}>
            <h2>${amount}</h2>
            <span className={`balance-raise ${theme}`}>+${raise}</span>
          </div>
          {/*<p>7.46 growth trades (Past 2 months)</p>*/}
        </div>
      </>
    );
  }
}
