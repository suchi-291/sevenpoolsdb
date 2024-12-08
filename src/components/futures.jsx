import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../styles/dashboard.css";

export default class Futures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlatform: "Binance",
      isDropdownOpen: false,
    };
  }

  updatePlatformBasedOnPath = () => {
    const currentPath = window.location.pathname;
    let platformName = "Binance";

    if (currentPath.includes("futures-binance")) {
      platformName = "Binance";
    } else if (currentPath.includes("futures-bitget")) {
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
      <div className={`f-main-wrapper ${theme}`}>
        <div className={`f-right-wrap ${theme}`}>
          <div className={`amm-market-header-wrap ${theme}`}>
            <h2 className={`f-header ${theme}`}>Futures Market</h2>
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
                      to="/dashboard/futures-market/futures-binance"
                      className={({ isActive }) =>
                        `platform-dropdown-item ${isActive ? "active" : ""}`
                      }
                      onClick={() => this.handlePlatformChange("Binance")}
                    >
                      Binance
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/futures-market/futures-bitget"
                      className={({ isActive }) =>
                        `platform-dropdown-item ${isActive ? "active" : ""}`
                      }
                      onClick={() => this.handlePlatformChange("Bitget")}
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
