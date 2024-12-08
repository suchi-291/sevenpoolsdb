import React, { Component } from "react";
import Navbar from "./Navbar";
import "../styles/dashboard.css";
import { Outlet } from "react-router-dom";

export default class Dashboard extends Component {
  render() {
    const { activeTab, theme, setActiveTab, toggleTheme, handleLogout } =
      this.props;

    return (
      <>
        <div className={`db-main ${theme}`}>
          {/* Navbar component to navigate through different sections */}
          <Navbar
            className="db-navbar" // Class for styling the navbar
            activeTab={activeTab} // Pass the currently active tab to Navbar
            setActiveTab={setActiveTab} // Pass down method to change the active tab
            toggleTheme={toggleTheme} // Pass down method to toggle theme
            theme={theme} // Pass current theme (light/dark)
            handleLogout={handleLogout} // Pass logout function to Navbar
          />

          {/* Container for the market sections, applying the theme class */}
          <div className={`market-wrapper ${theme}`}>
            {/* The Outlet will render nested routes like amm-market, futures-market */}
            <Outlet />
          </div>
        </div>
      </>
    );
  }
}
