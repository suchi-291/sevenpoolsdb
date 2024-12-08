import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Login from "./components/login";
import OTP from "./components/otp";
import Dashboard from "./components/dashboard";
import OverallDb from "./components/overallDb"; // Import the new OverallDb component
import Amm from "./components/amm";
import Futures from "./components/futures";
import AmmBinBot from "./components/ammBinBot";
import AmmBitBot from "./components/ammBitBot";
import FuturesBinBot from "./components/futuresBinBot";
import FuturesBitBot from "./components/futuresBitBot";
import Api from "./components/api";
import { amm_binance_data, amm_bitget_data, futures_binance_data, futures_bitget_data } from "./components/data";
import AdminControls from "./components/admin";
import AmmBinancePort from "./components/ammBinancePort";
import AmmBitgetPort from "./components/ammBitgetPort";
import FuturesBinancePort from "./components/futuresBinancePort";
import FuturesBitgetPort from "./components/futuresBitgetPort";
import AdminCoins from "./components/adminCoins";
import OverallDb2 from "./components/OverallDb2";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: true,
      isOTPVerified: true,
      theme: "light",
      ammBinanceData: amm_binance_data,
      ammBitgetData: amm_bitget_data,
      futuresBinanceData: futures_binance_data,
      futuresBitgetData: futures_bitget_data,
      activeTab: "amm"
    };
  }

  componentDidMount() {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    const isOTPVerified = localStorage.getItem("isOTPVerified") === "true";
    const savedTheme = localStorage.getItem("theme") || "light";
    this.setState({ isAuthenticated, isOTPVerified, theme: savedTheme });
  }

  handleLogin = (email, password) => {
    if (email === "admin@gmail.com" && password === "Abc@1234") {
      this.setState({ isAuthenticated: true });
      localStorage.setItem("isAuthenticated", "true");
      return true;
    }
    return false;
  };

  handleOTP = (otp) => {
    if (otp === "654321") {
      this.setState({ isOTPVerified: true });
      localStorage.setItem("isOTPVerified", "true");
      return true;
    }
    return false;
  };

  handleLogout = () => {
    this.setState({ isAuthenticated: false, isOTPVerified: false });
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("isOTPVerified");
    window.location.href = "/";
  };

  toggleTheme = () => {
    this.setState((prevState) => {
      const newTheme = prevState.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return { theme: newTheme };
    });
  };

  setActiveTab = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      isAuthenticated,
      isOTPVerified,
      theme,
      ammBinanceData,
      ammBitgetData,
      futuresBinanceData,
      futuresBitgetData,
      activeTab,
      } = this.state;

    return (
      <>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <Navigate to="/otp" />
                ) : (
                  <Login onLogin={this.handleLogin} />
                )
              }
            />

            <Route
              path="/otp"
              element={
                isAuthenticated ? (
                  isOTPVerified ? (
                    <Navigate to="/dashboard" />
                  ) : (
                    <OTP onVerify={this.handleOTP} />
                  )
                ) : (
                  <Navigate to="/" />
                )
              }
            />

            <Route
              path="/dashboard"
              element={
                isAuthenticated && isOTPVerified ? (
                  <Dashboard
                    theme={theme}
                    activeTab={activeTab}
                    setActiveTab={this.setActiveTab}
                    toggleTheme={this.toggleTheme}
                    handleLogout={this.handleLogout}
                  >
                    <Outlet />
                  </Dashboard>
                ) : (
                  <Navigate to="/" />
                )
              }
            >
              {/* Default route to OverallDb */}
              <Route index element={<Navigate to="db" />} />
              
              {/* OverallDb as the default component */}
              <Route path="db" element={<OverallDb theme={theme} />} />

              
              <Route path="odb2" element={<OverallDb2 theme={theme} />} />

              {/* AMM market with nested bots */}
              <Route path="amm-market" element={<Amm theme={theme} />}>
                <Route index element={<Navigate to="amm-binance" />} />
                <Route
                  path="amm-binance"
                  element={
                    <AmmBinBot
                      theme={theme}
                      platform="binance"
                      data={ammBinanceData}
                      direct={"/dashboard/amm-binance-portfolio"}
                    />
                  }
                />
                <Route
                  path="amm-bitget"
                  element={
                    <AmmBitBot
                      theme={theme}
                      platform="bitget"
                      data={ammBitgetData}
                      direct={"/dashboard/amm-bitget-portfolio"}
                    />
                  }
                />
              </Route>

              {/* Futures market with nested bots */}
              <Route path="futures-market" element={<Futures theme={theme} />}>
                <Route index element={<Navigate to="futures-binance" />} />
                <Route
                  path="futures-binance"
                  element={
                    <FuturesBinBot
                      theme={theme}
                      platform="binance"
                      data={futuresBinanceData}
                      direct={"/dashboard/futures-binance-portfolio"}
                    />
                  }
                />
                <Route
                  path="futures-bitget"
                  element={
                    <FuturesBitBot
                      theme={theme}
                      platform="bitget"
                      data={futuresBitgetData}
                      direct={"/dashboard/futures-bitget-portfolio"}
                    />
                  }
                />
              </Route>

              {/* API page */}
              <Route path="api-page" element={<Api theme={theme} />} />
              <Route path="admin-coins" element={<AdminCoins theme={theme} />} />
              <Route path="admin-page" element={<AdminControls theme={theme} />} />

              {/* Portfolio pages */}
              <Route path="amm-binance-portfolio" element={<AmmBinancePort theme={theme} />} />
              <Route path="amm-bitget-portfolio" element={<AmmBitgetPort theme={theme} />} />
              <Route path="futures-binance-portfolio" element={<FuturesBinancePort theme={theme} />} />
              <Route path="futures-bitget-portfolio" element={<FuturesBitgetPort theme={theme} />} />
            </Route>
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
