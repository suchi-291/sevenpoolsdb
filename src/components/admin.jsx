import React, { Component } from "react";
import "../styles/dashboard.css";
import "../styles/admin.css";

class AdminControls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      controls: {
        Register: false,
        Login: false,
        AMM: false,
        Futures: false,
      },
    };
  }

  // Handle toggle button click
  handleToggle = (controlName) => {
    this.setState((prevState) => ({
      controls: {
        ...prevState.controls,
        [controlName]: !prevState.controls[controlName],
      },
    }));
  };

  render() {
    const { controls } = this.state;
    const { theme } = this.props;
    return (
      <div className={`admin-main-wrapper ${theme}`}>
        <div className={`admin-main ${theme}`}>
          <h2>Admin Controls</h2>
          <table className={`admin-table ${theme}`}>
            <thead className={`admin-table-head ${theme}`}>
              <tr>
                <th className={`header-cell-style ${theme}`}>Admin Controls</th>
                <th className={`header-cell-style ${theme}`}>Status</th>
                <th className={`header-cell-style ${theme}`}>Enable/Disable</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(controls).map((control) => (
                <tr key={control}>
                  <td className={`body-cell-style ${theme}`}>{control}</td>
                  <td className={`body-cell-style ${theme}`}>
                    {controls[control] ? "Enabled" : "Disabled"}
                  </td>
                  <td className={`body-cell-style ${theme}`}>
                    <button
                      onClick={() => this.handleToggle(control)}
                      style={{
                        padding: "5px 10px",
                        backgroundColor: controls[control]
                          ? "#d9534f"
                          : "#5cb85c",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                      }}
                    >
                      {controls[control] ? "Disable" : "Enable"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AdminControls;
