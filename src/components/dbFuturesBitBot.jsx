import React, { Component } from "react";
import { futures_bitget_data } from "./data";
import DbTable from "./db-bot-table";

export default class DbFuturesBitBot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: {
        start: { isActive: true, isVisible: true },
        enable: { isActive: false, isVisible: true },
        edit: { isActive: false, isVisible: false },
        disable: { isActive: false, isVisible: false },
      },
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
    // Step 1: Retrieve the saved state from localStorage
    const savedState = localStorage.getItem("futuresBitgetState");
    if (savedState) {
      // If state exists in localStorage, set it to this.state
      this.setState(JSON.parse(savedState));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // Step 2: Save the current state to localStorage if it changes
    if (prevState !== this.state) {
      localStorage.setItem("futuresBitgetState", JSON.stringify(this.state));
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
    const { formData } = this.state;
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
      investment: formData.investment,
      platform: formData.platform,
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
    const { formData } = this.state;
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
      investment: formData.investment,
      platform: formData.platform,
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
      isMessageTimeoutActive: true,
    });

    setTimeout(() => {
      this.setState({
        components: {
          ...this.state.components,
          showMessage: false,
          showTable: true,
        },
        isMessageTimeoutActive: false,
      });
    }, 1000);
  };
  render() {
    const { theme } = this.props;
    return (
      <>
        {/* <div className={`db-bot-header-2 ${theme}`}>
          {showInvestment && (
            <div>
              <p>Total Investment: ${investment}</p>
            </div>
          )}
          {showPlatform && (
            <div>
              <p>Platform : {platform}</p>
            </div>
          )}

          {!showInvestment && !showPlatform && (
            <div>
              <p>Hi there! Welcome to 7 Pools AMM market place on Binance</p>
            </div>
          )}

          <div className="db-bot-header-2-btns">
            {buttons.start.isVisible && (
              <button
                disabled={!buttons.start.isActive}
                onClick={this.handleStartClick}
                className={`db-bot-btn ${theme}`}
              >
                Start
              </button>
            )}
            {buttons.enable.isVisible && (
              <button
                disabled={!buttons.enable.isActive}
                onClick={this.handleEnableClick}
                className={`db-bot-btn ${theme}`}
              >
                Enable
              </button>
            )}
            {buttons.edit.isVisible && (
              <button
                disabled={!buttons.edit.isActive}
                onClick={this.handleEditClick}
                className={`db-bot-btn ${theme}`}
              >
                Edit
              </button>
            )}
            {buttons.disable.isVisible && (
              <button
                disabled={!buttons.disable.isActive}
                onClick={this.handleDisableClick}
                className={`db-bot-btn ${theme}`}
              >
                Disable
              </button>
            )}
          </div>
        </div> */}

        {/* {components.showMessage && !isMessageTimeoutActive && (
          <div className="db-bot-content">
            {message}
            <div className="bot-img db">
              <img src={robo} alt="bot" className="bot-imgg " />
            </div>
          </div>
        )} */}

        {/* {components.showForm && (
          <div className="db-bot-content">
            <form
              onSubmit={this.handleFormSubmit}
              className={`db-form ${theme}`}
            >
              <h3>Configure Bot</h3>
              <div>
                <label>Platform:</label>
                <select
                  name="platform"
                  value={formData.platform}
                  onChange={this.handleInputChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="Binance">Binance</option>
                </select>
              </div> 

              <div>
                <label>Investment Amount:</label>
                <input
                  type="number"
                  name="investment"
                  value={formData.investment}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        )} */}
        <div className="db-bot-content">
          <DbTable
            data={futures_bitget_data}
            showViewAll={true}
            theme={theme}
            direct="/dashboard/futures-market/futures-bitget"
          />
        </div>
      </>
    );
  }
}
