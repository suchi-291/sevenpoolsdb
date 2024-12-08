import React, { Component } from "react";
import "../styles/overallDb.css";
import Balance2 from "./dbBalance";
import "../styles/dashboard.css";
import SpotMarket from "./dbamm";
import FuturesMarket from "./dbfutures";
import CoinsList from "./dbComps";
import LineChart from "./Linechart";
import BarChart from "./BarChart";

export default class OverallDb2 extends Component {
  render() {
    const { theme } = this.props;

    // Define colors based on theme
    const lightThemeColors = {
      lineChart: ["#00D251", "#FF4300"],
      barChart: ["#00D251", "#FF4300"],
    };

    const darkThemeColors = {
      lineChart: ["#00CEBF", "#FF0042"],
      barChart: ["#00CEBF", "#FF0042"],
    };

    const currentColors = theme === "dark" ? darkThemeColors : lightThemeColors;

    return (
      <>
        <div className="dsb-main-wrapper2">
          <div className="dsb-data-wrapper">
            <div className="dsb-row1">
              <div className="dsb-col1">
                <div className="dsb-balance-cards">
                  <div className="dsb-balance-card">
                    <Balance2
                      amount={20793.8}
                      raise={5.38}
                      theme={theme}
                      portfolio={"Spot"}
                    />
                  </div>
                  <div className="dsb-balance-card">
                    <Balance2
                      amount={7393.8}
                      raise={3.38}
                      theme={theme}
                      portfolio={"Futures"}
                    />
                  </div>
                </div>

                <div className="dsb-graphs">
                  <div className={`dsb-graph ${theme}`}>
                    {/* LineChart with theme-based colors */}
                    <h5 style={{ paddingLeft: "1rem" }}>Spot</h5>
                    <LineChart
                      color1={currentColors.lineChart[0]}
                      color2={currentColors.lineChart[1]}
                    />
                  </div>

                  <div className={`dsb-graph ${theme}`}>
                    {/* BarChart with theme-based colors */}
                    <h5 style={{ paddingLeft: "1rem" }}>Futures</h5>
                    <BarChart
                      color1={currentColors.barChart[0]}
                      color2={currentColors.barChart[1]}
                    />
                  </div>
                </div>
              </div>
              <div className="dsb-col2">
                <div className={`dsb-wallet-card ${theme}`}>
                  <CoinsList />
                </div>
              </div>
            </div>

            <div className="dsb-market-data2">
              <div className={`dsb-amm-table2 ${theme}`}>
                <SpotMarket theme={theme} />
              </div>
              <div className="dsb-futures-table2">
                <FuturesMarket theme={theme} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
