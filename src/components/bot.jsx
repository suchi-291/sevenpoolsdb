import React from "react";
import "../styles/dashboard.css";
import "../styles/dbtable.css";

function DashboardTable({ data, showViewAll, theme, direct }) {
  return (
    <div className={`dsb-bot-table-wrap ${theme}`}>
      <table className={`dsb-bot-table ${theme}`}>
        <thead className={`dsb-bot-table-head ${theme}`}>
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
        <tbody className={`db-bot-table-body ${theme}`}>
          {data.map((row, index) => (
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
                  <div className="dsb-bot-item-wrap">{row.orderId}</div>
                </td>
                <td>
                  <div className="dsb-bot-item-wrap">{row.price}</div>
                </td>
                <td>
                  <div className="dsb-bot-item-wrap">{row.originalQty}</div>
                </td>
                <td>
                  <div className="dsb-bot-item-wrap">{row.side}</div>
                </td>
                <td>
                  <div className="dsb-bot-item-wrap">{row.status}</div>
                </td>
                <td>
                  <div className="dsb-bot-item-wrap">{row.stopPrice}</div>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
      {/* {showViewAll && data.length > 5 && (
        <div className="view-all-container">
          <Link to={direct} className={`view-all-btn ${theme}`}>
            View All
          </Link>
        </div>
      )} */}
    </div>
  );
}

export default DashboardTable;
