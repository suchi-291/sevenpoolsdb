import React, { Component } from "react";

import "../styles/dashboard.css";

export default class Form extends Component {
  render() {
    const { onSubmit, onInputChange, theme, formData, choice } = this.props;
    return (
      <form onSubmit={onSubmit} className={`platform-form db ${theme}`}>
        <h3 className={`db-form-header ${theme}`}>Configure Bot</h3>
        <div className="db-platform-selection">
          <label className={`platform-label ${theme}`}>Platform:</label>
          <select
            name="platform"
            value={formData.platform}
            onChange={onInputChange}
            required
            className={`db-platform-select-input ${theme}`}
          >
            <option value="" className="db-platform-select-option">
              Select
            </option>
            <option value="Bitget" className="db-platform-select-option">
              {choice}
            </option>
          </select>
        </div>

        <div className="db-platform-inv-amt">
          <label className={`investment-label ${theme}`}>
            Investment Amount:
          </label>
          <input
            type="number"
            name="investment"
            value={formData.investment}
            onChange={onInputChange}
            required
            className={`db-platform-inv-input ${theme}`}
          />
        </div>
        <button type="submit" className={`platform-submit-btn ${theme}`}>
          Submit
        </button>
      </form>
    );
  }
}
