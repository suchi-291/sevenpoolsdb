import React, { Component } from "react";
import DashboardTable from "./bot";
import Form from "./form";
import bot from "../assets/bot.png";
import "../styles/dashboard.css";

export default class AmmBinBot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initial button states
      buttons: {
        start: { isActive: true, isVisible: true },
        enable: { isActive: false, isVisible: true },
        edit: { isActive: false, isVisible: false },
        disable: { isActive: false, isVisible: false },
      },
      // Initial component visibility
      components: {
        showForm: false,
        showMessage: true,
        showTable: false,
      },
      showPlatform: false,
      showInvestment: false,
      platform: "",
      investment: "",
      message: "Start the bot to get started!",
      isMessageTimeoutActive: false,
      formData: {
        investment: "",
        platform: "",
      },
    };
  }

  componentDidMount() {
    // Retrieve state from localStorage if it exists
    const savedState = localStorage.getItem("ammBinBotState");
    if (savedState) {
      this.setState(JSON.parse(savedState));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // Save state to localStorage whenever it changes
    if (prevState !== this.state) {
      localStorage.setItem("ammBinBotState", JSON.stringify(this.state));
    }
  }

  handleStartClick = () => {
    this.setState({
      buttons: {
        ...this.state.buttons,
        start: { isActive: false, isVisible: true },
      },
      components: {
        showForm: true,
        showMessage: false,
        showTable: false,
      },
      message: "",
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({
      buttons: {
        start: { isActive: false, isVisible: false },
        enable: { isActive: false, isVisible: false },
        edit: { isActive: true, isVisible: true },
        disable: { isActive: true, isVisible: true },
      },
      components: {
        showForm: false,
        showMessage: false,
        showTable: true,
      },
      message: "",
      investment: this.state.formData.investment,
      platform: this.state.formData.platform,
      showInvestment: true,
      showPlatform: true,
    });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  handleEditClick = () => {
    this.setState({
      buttons: {
        ...this.state.buttons,
        edit: { isActive: false, isVisible: true },
        disable: { isActive: false, isVisible: true },
        enable: { isActive: false, isVisible: false },
      },
      components: {
        showForm: true,
        showMessage: false,
        showTable: false,
      },
    });
  };

  handleEditFormSubmit = (e) => {
    e.preventDefault();
    this.setState({
      buttons: {
        ...this.state.buttons,
        edit: { isActive: true, isVisible: true },
        disable: { isActive: true, isVisible: true },
      },
      components: {
        showForm: false,
        showMessage: false,
        showTable: true,
      },
      message: "",
      investment: this.state.formData.investment,
      platform: this.state.formData.platform,
    });
  };

  handleDisableClick = () => {
    this.setState({
      buttons: {
        ...this.state.buttons,
        enable: { isActive: true, isVisible: true },
        disable: { isActive: false, isVisible: false },
        edit: { isActive: true, isVisible: true },
      },
      components: {
        showForm: false,
        showMessage: true,
        showTable: false,
      },
      message: "Bot ended, resume the bot by enabling.",
    });
  };

  handleEnableClick = () => {
    this.setState({
      buttons: {
        ...this.state.buttons,
        enable: { isActive: false, isVisible: false },
        edit: { isActive: true, isVisible: true },
        disable: { isActive: true, isVisible: true },
      },
      components: {
        showForm: false,
        showMessage: true,
        showTable: false,
      },
      message: "Bot resumed, you're all set, please wait!",
    });

    setTimeout(() => {
      this.setState({
        components: {
          ...this.state.components,
          showMessage: false,
          showTable: true,
        },
      });
    }, 1000);
  };

  render() {
    const {
      buttons,
      components,
      investment,
      message,
      isMessageTimeoutActive,
      formData,
      showInvestment,
      showPlatform,
    } = this.state;
    const { theme, platform, data, direct } = this.props;

    return (
      <>
        <div className={`db-bot-table-nav-bottom ${theme}`}>
          {showInvestment && (
            <div className={`db-total-investment`}>
              <p className={`db-total-inv-p ${theme}`}>
                Total Investment: ${investment}
              </p>
            </div>
          )}
          {showPlatform && (
            <div className={`db-platform-name-wrap`}>
              <p className={`db-platform-p ${theme}`}>Platform : {platform}</p>
            </div>
          )}

          {!showInvestment && !showPlatform && (
            <div className={`db-bot-header`}>
              <p className={`db-bot-header-p ${theme}`}>
                Hi there! Welcome to 7 Pools AMM market place on Binance
              </p>
            </div>
          )}

          <div className="db-nav-bottom-btn-wrap">
            {buttons.start.isVisible && (
              <button
                className={`db-nav-bottom-btn ${theme}`}
                disabled={!buttons.start.isActive}
                onClick={this.handleStartClick}
              >
                Start
              </button>
            )}
            {buttons.enable.isVisible && (
              <button
                className={`db-nav-bottom-btn ${theme}`}
                disabled={!buttons.enable.isActive}
                onClick={this.handleEnableClick}
              >
                Enable
              </button>
            )}
            {buttons.edit.isVisible && (
              <button
                disabled={!buttons.edit.isActive}
                onClick={this.handleEditClick}
                className={`db-nav-bottom-btn ${theme}`}
              >
                Edit
              </button>
            )}
            {buttons.disable.isVisible && (
              <button
                disabled={!buttons.disable.isActive}
                onClick={this.handleDisableClick}
                className={`db-nav-bottom-btn ${theme}`}
              >
                Disable
              </button>
            )}
          </div>
        </div>

        {components.showMessage && !isMessageTimeoutActive && (
          <div className={`bot-start-msg ${theme}`}>
            {message}
            <div className="bot-img">
              <img src={bot} alt="bot" className="bot-imgg" />
            </div>
          </div>
        )}

        {components.showForm && (
          <div className="bot-components">
            <Form
              onSubmit={this.handleFormSubmit}
              onInputChange={this.handleInputChange}
              platform={platform}
              investment={investment}
              theme={theme}
              formData={formData}
              choice="Binance"
            />
          </div>
        )}

        {components.showTable && !components.showMessage && (
          <div className="bot-components">
            <DashboardTable
              data={data}
              showViewAll={true}
              theme={theme}
              direct={direct}
            />
          </div>
        )}
      </>
    );
  }
}
