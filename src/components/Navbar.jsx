import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../styles/dashboard.css";
import brandlogo from "../assets/brandlogo.png";
import dbdp from "../assets/dbdp.jpg";

const Navbar = ({
  activeTab,
  setActiveTab,
  toggleTheme,
  theme,
  handleLogout,
}) => {
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const path = location.pathname;
    if (path.includes("/dashboard/db")) {
      setActiveTab("dashboard");
    } else if (path === "/dashboard/odb2") {
      setActiveTab("odb2");
    } else if (path.includes("/dashboard/amm-market")) {
      setActiveTab("amm");
    } else if (path.includes("/dashboard/futures-market")) {
      setActiveTab("futures");
    }
  }, [location.pathname, setActiveTab]);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  return (
    <nav className={`db-nav ${theme}`}>
      <div className="db-left-nav">
        <div className="db-navbar-brand">
          <Link to="/" className={`db-navbar-link ${theme}`}>
            <img src={brandlogo} alt="7-pools-logo" className="db-logo" />{" "}
            7Pools
          </Link>
        </div>
        <ul>
          <li>
            <NavLink
              to="/dashboard/db"
              className={`db-nav-link ${theme} ${
                activeTab === "dashboard" ? `db-nav-link-active ${theme}` : ""
              }`}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/odb2"
              className={`db-nav-link ${theme} ${
                activeTab === "odb2" ? `db-nav-link-active ${theme}` : ""
              }`}
            >
              Db2
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/amm-market"
              className={`db-nav-link ${theme} ${
                activeTab === "amm" ? `db-nav-link-active ${theme}` : ""
              }`}
            >
              Spot
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/futures-market"
              className={`db-nav-link ${theme} ${
                activeTab === "futures" ? `db-nav-link-active ${theme}` : ""
              }`}
            >
              Futures
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="db-right-nav">
        <div className="db-theme-btn" onClick={toggleTheme}>
          <i className={`bx bx-sun db-theme ${theme}`}></i>
        </div>
        <div className="db-profile-wrap">
          <button
            className={`db-profile-btn ${theme}`}
            onClick={toggleDropdown}
          >
            <div className="db-profile-picture">
              <img src={dbdp} alt="profile" className="db-pro-pic" />
            </div>
            Jenny Wilson
            <i
              className={`bx ${
                isDropdownOpen ? "bxs-chevron-up" : "bxs-chevron-down"
              } db-dropdown-icon ${theme}`}
            ></i>
          </button>
          {isDropdownOpen && (
            <div className={`db-dropdown-menu ${theme}`}>
              <div className="dropdown-link-wrap">
                <Link
                  to="/dashboard/api-page"
                  className={`db-dropdown-link ${theme}`}
                  onClick={() => setDropdownOpen(false)}
                >
                  Configure API
                </Link>
              </div>
              <div className="dropdown-link-wrap">
                <Link
                  to="/dashboard/admin-coins"
                  className={`db-dropdown-link ${theme}`}
                  onClick={() => setDropdownOpen(false)}
                >
                  Admin Coins
                </Link>
              </div>
              <div className="dropdown-link-wrap">
                <Link
                  to="/dashboard/admin-page"
                  className={`db-dropdown-link ${theme}`}
                  onClick={() => setDropdownOpen(false)}
                >
                  Admin
                </Link>
              </div>
              <div className="dropdown-link-wrap">
                <button
                  className={`db-dropdown-link ${theme} db-dropdown-btn`}
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
