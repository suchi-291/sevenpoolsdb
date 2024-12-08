import React, { Component } from "react";
import { futures_binance_data } from "./data";
import "../styles/dashboard.css";
import "../styles/port.css";
import InvSummary from "./invSummary";

export default class FuturesBinancePort extends Component {
  render() {
    const { theme } = this.props;
    return (
      <div className="db-port-table-wrap">
        <div className="trade-table">
          <InvSummary
            theme={theme}
            marketPlace={"Binance Futures Marketplace"}
          />
          <div className={`spot-table-wrap ${theme}`}>
            <h2>Futures Trades</h2>
            <table className={`db-bot-table ${theme}`}>
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Order ID</th>
                  <th>Price</th>
                  <th>Original Qty</th>
                  <th>Side</th>
                  <th>Status</th>
                  <th>Stop Price</th>
                </tr>
              </thead>
              <tbody className="db-bot-table-body">
                {futures_binance_data.map((row, index) => (
                  <React.Fragment key={index}>
                    <tr className="db-row-wrap">
                      <td className="db-bot-item-wrap">
                        <div>
                          <img
                            src={row.image}
                            width="20px"
                            height="20px"
                            alt=""
                          />
                          &nbsp;&nbsp;
                          {row.symbol}
                        </div>
                      </td>
                      <td className="db-bot-item-wrap">
                        <div>{row.orderId}</div>
                      </td>
                      <td className="db-bot-item-wrap">
                        <div>{row.price}</div>
                      </td>
                      <td className="db-bot-item-wrap">
                        <div>{row.originalQty}</div>
                      </td>
                      <td className="db-bot-item-wrap">
                        <div>{row.side}</div>
                      </td>
                      <td className="db-bot-item-wrap">
                        <div>{row.status}</div>
                      </td>
                      <td className="db-bot-item-wrap">
                        <div>{row.stopPrice}</div>
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
