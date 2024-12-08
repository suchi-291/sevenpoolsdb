import React, { Component } from "react";
import { futures_binance_data, futures_bitget_data } from "./data";
import DbFuturesBinBot from "./dbFuturesBinBot";
import DbFuturesBitBot from "./dbFuturesBitBot";

class FuturesMarket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlatform: "Binance", // Default selection
      isDropdownOpen: false, // Dropdown state
    };
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      isDropdownOpen: !prevState.isDropdownOpen,
    }));
  };

  handlePlatformChange = (platform) => {
    this.setState({
      selectedPlatform: platform,
      isDropdownOpen: false, // Close the dropdown after selection
    });
  };

  render() {
    const { theme } = this.props;
    const { selectedPlatform, isDropdownOpen } = this.state;

    return (
      <div className={`db-bot-wrap ${theme}`}>
        <div className={`db-bot-header ${theme}`}>
          <h2 className={`amm-header ${theme}`}>Futures Market</h2>
          <div className={`platform-dropdown ${theme}`}>
            Select &nbsp;
            <button
              className={`platform-dropdown-toggle db ${theme}`}
              onClick={this.toggleDropdown}
            >
              {selectedPlatform}
            </button>
            {isDropdownOpen && (
              <ul className={`platform-dropdown-menu db ${theme}`}>
                <li
                  className={`platform-dropdown-item ${theme}`}
                  onClick={() => this.handlePlatformChange("Binance")}
                >
                  Binance
                </li>
                <li
                  className={`platform-dropdown-item ${theme}`}
                  onClick={() => this.handlePlatformChange("Bitget")}
                >
                  Bitget
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Dynamically render component based on selectedPlatform */}
        <div className="platform-content db">
          {selectedPlatform === "Binance" ? (
            <DbFuturesBinBot
              theme={theme}
              platform="binance"
              data={futures_binance_data}
              direct={"/"}
            />
          ) : (
            <DbFuturesBitBot
              theme={theme}
              platform="bitget"
              data={futures_bitget_data}
              direct={"/"}
            />
          )}
        </div>
      </div>
    );
  }
}

export default FuturesMarket;
