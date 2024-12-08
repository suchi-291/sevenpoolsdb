import React, { Component } from "react";
import "../styles/overallDb.css";
import Balance from "./balance";
import "../styles/dashboard.css";
import CoinTable from "./dbWallet";
import SpotMarket from "./dbamm";
import FuturesMarket from "./dbfutures";

export default class OverallDb extends Component {
  render() {
    const { theme } = this.props;
    return (
      <>
        <div className="dsb-main-wrapper">
          <div className="dsb-data-wrapper">
            <div className="dsb-balance-cards">
              <div className="dsb-balance-card">
                <Balance
                  amount={20793.8}
                  raise={5.38}
                  theme={theme}
                  portfolio={"Spot"}
                />
              </div>
              <div className="dsb-balance-card">
                <Balance
                  amount={7393.8}
                  raise={3.38}
                  theme={theme}
                  portfolio={"Futures"}
                />
              </div>
            </div>
            <div className="dsb-market-data">
              <div className={`dsb-amm-table ${theme}`}>
                <SpotMarket theme={theme} />
              </div>
              <div className="dsb-futures-table">
                <FuturesMarket theme={theme} />
              </div>
              <div className={`dsb-wallet-wrapper ${theme}`}>
                <CoinTable theme={theme} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
