import React, { Component } from "react";
import "../styles/api.css";
import "../styles/dashboard.css";
import doc1 from "../assets/doc1.png";
import doc2 from "../assets/doc2.png";

class Api extends Component {
  state = {
    selectedPlatform: "binance",
    apiKey: "",
    secretKey: "",
    documentation: {
      binance: (
        <div>
          <h2>How to Get Your Binance API Key:</h2>
          <p>
            To allow your bot to interact with Binance, you will need to create
            an API Key. This key acts as a connection between 7LP Bot and the
            exchange, enabling your bot to perform tasks such as placing
            automated orders and accessing your balance for its calculations.
            Essentially, the API Key serves as a way for your bot to communicate
            with the exchange and execute the actions necessary for automated
            trading.
          </p>
          <p>
            Step one: If you haven't already, go to Binance's website and create
            an account. Step two: Verify your account and get started on the API
            by navigating to API Management.
          </p>
          <h3>Step one</h3>
          <p>
            If you haven't already, go to{" "}
            <a
              href="https://www.binance.com/"
              target="_blank"
              className={`link`}
              rel="noopener noreferrer"
            >
              Binance's
            </a>{" "}
            website and create an account.
          </p>
          <img src={doc1} alt="doc1" width="800px" height="300px" />

          <h3>Step two</h3>
          <p>
            Verify your account and get started on the API by navigating to API
            Management.
          </p>
          <h3>Step Three</h3>
          <p>
            Click on “Create API”, select “System generated API Key” and click
            on Next.
          </p>
          <h3>Step Four</h3>
          <p>
            Start by naming the API something memorable such as “7LP API”. Your
            API Key and secret are now created, but they cannot be used for
            trading yet. To enhance the security of your funds on Binance, you
            must whitelist the IP (“13.234.42.140”) addresses of 7LP servers in
            your API Key settings. This will allow only 7LP servers to perform
            actions on your Binance account, preventing any unauthorized third
            parties from accessing it, even if your API Keys are compromised. By
            following this step, you can ensure that your funds remain safe
            while trading.
          </p>
          <img src={doc2} alt="doc2" width="800px" height="300px" />
          <p>
            To enable trading, click on "Edit" and check the box next to "Enable
            spot & Margin Trading." No other API restrictions need to be
            enabled, and 7LP will never ask for "Withdrawal" or "Universal
            Transfer" rights. Do not click "Save" yet, as there is one more step
            to complete.
          </p>
          <p>
            Copy the API Keys shown on Binance and paste them into 7LP. Then,
            save the changes on both Binance and 7LP. Allow a moment for the bot
            to link everything together, and your balance should become visible.
          </p>
        </div>
      ),
      bitget: (
        <div>
          <h2>How to Get Your Bitget API Key:</h2>
          <p>
            To allow your bot to interact with Bitget, you will need to create
            an API Key. This key acts as a connection between 7LP Bot and the
            exchange, enabling your bot to perform tasks such as placing
            automated orders and accessing your balance for its calculations.
            Essentially, the API Key serves as a way for your bot to communicate
            with the exchange and execute the actions necessary for automated
            trading.
          </p>
          <br />
          <br />
          <h3>Step one</h3>

          <p>
            If you haven't already, go to{" "}
            <a
              href="https://www.binance.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`link`}
            >
              Bitget's
            </a>{" "}
            website and create an account.
          </p>
          <img src={doc1} alt="doc1" width="800px" height="300px" />
          <br />
          <br />
          <h3>Step two</h3>
          <p>
            Verify your account and get started on the API by navigating to API
            Management.
          </p>
          <br />
          <br />
          <h3>Step Three</h3>
          <p>
            Click on “Create API”, select “System generated API Key” and click
            on Next.
          </p>
          <br />
          <br />
          <h3>Step Four</h3>
          <p>
            Start by naming the API something memorable such as “7LP API”. Your
            API Key and secret are now created, but they cannot be used for
            trading yet. To enhance the security of your funds on Binance, you
            must whitelist the IP (“13.234.42.140”) addresses of 7LP servers in
            your API Key settings. This will allow only 7LP servers to perform
            actions on your Binance account, preventing any unauthorized third
            parties from accessing it, even if your API Keys are compromised. By
            following this step, you can ensure that your funds remain safe
            while trading.
          </p>
          <img src={doc2} alt="doc2" width="800px" height="300px" />
          <p>
            To enable trading, click on "Edit" and check the box next to "Enable
            spot & Margin Trading." No other API restrictions need to be
            enabled, and 7LP will never ask for "Withdrawal" or "Universal
            Transfer" rights. Do not click "Save" yet, as there is one more step
            to complete.
          </p>
          <p>
            Copy the API Keys shown on Binance and paste them into 7LP. Then,
            save the changes on both Binance and 7LP. Allow a moment for the bot
            to link everything together, and your balance should become visible.
          </p>
        </div>
      ),
    },
    successMessage: "",
  };

  handlePlatformChange = (event) => {
    this.setState({ selectedPlatform: event.target.value });
  };

  handleApiKeyChange = (event) => {
    this.setState({ apiKey: event.target.value });
  };

  handleSecretKeyChange = (event) => {
    this.setState({ secretKey: event.target.value });
  };

  handleSave = () => {
    const { apiKey, secretKey, selectedPlatform } = this.state;

    if (apiKey && secretKey) {
      this.setState({
        successMessage: `${
          selectedPlatform.charAt(0).toUpperCase() + selectedPlatform.slice(1)
        } API keys saved successfully!`,
      });
    } else {
      this.setState({
        successMessage: "Please enter both API Key and Secret Key.",
      });
    }
  };

  render() {
    const {
      selectedPlatform,
      apiKey,
      secretKey,
      documentation,
      successMessage,
    } = this.state;

    const { theme } = this.props;

    return (
      <div className={`api-page ${theme}`}>
        <h1>API Settings</h1>
        <p>
          Enter your API keys for Binance or Bitget to connect to the platform.
        </p>

        <div className={`documentation-wrapper ${theme}`}>
          <div className={`api-docs ${theme}`}>
            <div className={`doc-content ${theme}`}>
              {documentation[selectedPlatform]}
            </div>
          </div>
          <div className={`doc-forms ${theme}`}>
            <div className={`api-keys ${theme}`}>
              <h2>Enter API Keys</h2>
              <div className={`platform-selection ${theme}`}>
                <label>Select Platform:</label>
                <select
                  value={selectedPlatform}
                  onChange={this.handlePlatformChange}
                >
                  <option value="binance">Binance</option>
                  <option value="bitget">Bitget</option>
                </select>
              </div>
              <label>API Key</label>
              <input
                type="text"
                value={apiKey}
                onChange={this.handleApiKeyChange}
                placeholder="Enter API Key"
              />
              <label>Secret Key</label>
              <input
                type="text"
                value={secretKey}
                onChange={this.handleSecretKeyChange}
                placeholder="Enter Secret Key"
              />
              <button onClick={this.handleSave}>Save</button>
            </div>
            {successMessage && (
              <div className={`success-message ${theme}`}>{successMessage}</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Api;
