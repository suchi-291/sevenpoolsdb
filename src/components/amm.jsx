import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../styles/dashboard.css";
import CoinTable from "./dbWallet";

export default class AMM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      selectedPlatform: "Binance", // Initial button label
    };
  }

  updatePlatformBasedOnPath = () => {
    const currentPath = window.location.pathname;
    let platformName = "Binance";

    if (currentPath.includes("amm-binance")) {
      platformName = "Binance";
    } else if (currentPath.includes("amm-bitget")) {
      platformName = "Bitget";
    }

    if (this.state.selectedPlatform !== platformName) {
      this.setState({ selectedPlatform: platformName });
    }
  };

  componentDidMount() {
    this.updatePlatformBasedOnPath();
  }

  componentDidUpdate(prevProps) {
    // Check if the route has changed and update the platform accordingly
    if (window.location.pathname !== prevProps.location?.pathname) {
      this.updatePlatformBasedOnPath();
    }
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
    const { selectedPlatform, isDropdownOpen } = this.state;
    const { theme } = this.props;

    return (
      <div className={`amm-main-wrapper ${theme}`}>
        <div className={`amm-left-wrap ${theme}`}>
          <div className="coinTable-amm">
            <CoinTable theme={theme} />
          </div>
        </div>
        <div className={`amm-right-wrap ${theme}`}>
          <div className={`amm-market-header-wrap ${theme}`}>
            <h2 className={`amm-header ${theme}`}>Spot Market</h2>
            <div className={`platform-dropdown ${theme}`}>
              Select Platform &nbsp;
              <button
                className={`platform-dropdown-toggle ${theme}`}
                onClick={this.toggleDropdown}
              >
                {selectedPlatform}
              </button>
              {isDropdownOpen && (
                <ul className={`platform-dropdown-menu ${theme}`}>
                  <li>
                    <NavLink
                      to="/dashboard/amm-market/amm-binance"
                      className={({ isActive }) =>
                        `platform-dropdown-item ${isActive ? "active" : ""}`
                      }
                      onClick={() => this.handlePlatformChange("Binance")} // Close dropdown on selection
                    >
                      Binance
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/amm-market/amm-bitget"
                      className={({ isActive }) =>
                        `platform-dropdown-item ${isActive ? "active" : ""}`
                      }
                      onClick={() => this.handlePlatformChange("Bitget")} // Close dropdown on selection
                    >
                      Bitget
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    );
  }
}
