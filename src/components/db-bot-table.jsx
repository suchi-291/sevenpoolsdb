import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/dbtable.css";

class DbTable extends Component {
  render() {
    const { data, showViewAll, theme, direct } = this.props;

    return (
      <div className={`dsb-bot-table-wrap ${theme}`}>
        <table className={`dsb-bot-table ${theme}`}>
          <thead className={`dsb-bot-table-head ${theme}`}>
            <tr>
              <th>Symbol</th>
              <th>Price</th>
              <th>Original Qty</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className={`dsb-bot-table-body ${theme}`}>
            {data.slice(0, 3).map((row, index) => (
              <React.Fragment key={index}>
                <tr className="dsb-row-wrap">
                  <td>
                    <div className="dsb-bot-item-wrap">
                      <img src={row.image} width="40px" height="40px" alt="" />
                      &nbsp;&nbsp;
                      {row.symbol}
                    </div>
                  </td>
                  <td>
                    <div className="dsb-bot-item-wrap">{row.price}</div>
                  </td>
                  <td>
                    <div className="dsb-bot-item-wrap">{row.originalQty}</div>
                  </td>
                  <td>
                    <div className="dsb-bot-item-wrap">{row.status}</div>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
        {showViewAll && data.length > 3 && (
          <div className="view-all-container">
            <Link to={direct} className={`dsb-view-all-btn ${theme}`}>
              View All
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default DbTable;
