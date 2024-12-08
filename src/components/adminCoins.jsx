import React, { Component } from "react";
import "../styles/adminCoins.css";

class AdminCoins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coinData: [
        {
          coin: "BTC",
          coinID: "1",
          status: "Active",
          pricePrecision: "2",
          quantityPrecision: "3",
          targetPercentage: "5%",
          platform: "Binance",
          bot: "AMM",
        },
        {
          coin: "ETH",
          coinID: "2",
          status: "Inactive",
          pricePrecision: "2",
          quantityPrecision: "4",
          targetPercentage: "4%",
          platform: "Bitget",
          bot: "Futures",
        },
      ],
      showModal: false,
      newCoin: {
        coin: "",
        coinID: "",
        status: "",
        pricePrecision: "",
        quantityPrecision: "",
        targetPercentage: "",
        platform: "",
        bot: "",
      },
    };
  }

  handleDelete = (index) => {
    const { coinData } = this.state;
    const updatedData = coinData.filter((_, i) => i !== index);
    this.setState({ coinData: updatedData });
  };

  handleEdit = (coin) => {
    this.setState({
      showModal: true,
      newCoin: { ...coin },
    });
  };

  handleModalClose = () => {
    this.setState({
      showModal: false,
      newCoin: {
        coin: "",
        coinID: "",
        status: "",
        pricePrecision: "",
        quantityPrecision: "",
        targetPercentage: "",
        platform: "",
        bot: "",
      },
    });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      newCoin: {
        ...prevState.newCoin,
        [name]: value,
      },
    }));
  };

  handleSave = () => {
    const { coinData, newCoin } = this.state;
    this.setState({
      coinData: [...coinData, newCoin],
      showModal: false,
      newCoin: {
        coin: "",
        coinID: "",
        status: "",
        pricePrecision: "",
        quantityPrecision: "",
        targetPercentage: "",
        platform: "",
        bot: "",
      },
    });
  };

  render() {
    const { coinData, showModal, newCoin } = this.state;
    const { theme } = this.props;

    return (
      <div className={`admin-coins-wrapper ${theme}`}>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            padding: "1rem",
          }}
        >
          <h3 className="admin-coins-title">Coins List</h3>

          <div className="search-container">
            <div className="search-input-wrapper">
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
              <i className="bx bx-search search-icon"></i>
            </div>
          </div>
        </div>

        <table className={`admin-coins-table ${theme}`}>
          <thead className="admin-coins-table-head">
            <tr>
              <th className="header-cell-style">Coin</th>
              <th className="header-cell-style">CoinID</th>
              <th className="header-cell-style">Status</th>
              <th className="header-cell-style">Price Precision</th>
              <th className="header-cell-style">Quantity Precision</th>
              <th className="header-cell-style">Target Percentage</th>
              <th className="header-cell-style">Platform</th>
              <th className="header-cell-style">Bot</th>
              <th className="header-cell-style">Action</th>
            </tr>
          </thead>
          <tbody>
            {coinData.map((item, index) => (
              <tr key={index}>
                <td className="body-cell-style">{item.coin}</td>
                <td className="body-cell-style">{item.coinID}</td>
                <td className="body-cell-style">{item.status}</td>
                <td className="body-cell-style">{item.pricePrecision}</td>
                <td className="body-cell-style">{item.quantityPrecision}</td>
                <td className="body-cell-style">{item.targetPercentage}</td>
                <td className="body-cell-style">{item.platform}</td>
                <td className="body-cell-style">{item.bot}</td>
                <td className="action-cell-style">
                  <button
                    onClick={() => this.handleEdit(item)}
                    className="edit-btn"
                  >
                    <i className="bx bx-edit"></i>
                  </button>
                  <button
                    onClick={() => this.handleDelete(index)}
                    className="delete-btn"
                  >
                    <i className="bx bx-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showModal && (
          <div className="modal-container">
            <div className="modal-content">
              <h4 className="modal-header">Add/Edit Coin</h4>
              <div className="modal-body">
                <label>Coin:</label>
                <input
                  type="text"
                  name="coin"
                  value={newCoin.coin}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="modal-body">
                <label>CoinID:</label>
                <input
                  type="text"
                  name="coinID"
                  value={newCoin.coinID}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="modal-body">
                <label>Status:</label>
                <input
                  type="text"
                  name="status"
                  value={newCoin.status}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="modal-body">
                <label>Price Precision:</label>
                <input
                  type="text"
                  name="pricePrecision"
                  value={newCoin.pricePrecision}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="modal-body">
                <label>Quantity Precision:</label>
                <input
                  type="text"
                  name="quantityPrecision"
                  value={newCoin.quantityPrecision}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="modal-body">
                <label>Target Percentage:</label>
                <input
                  type="text"
                  name="targetPercentage"
                  value={newCoin.targetPercentage}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="modal-body">
                <label>Platform:</label>
                <input
                  type="text"
                  name="platform"
                  value={newCoin.platform}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="modal-body">
                <label>Bot:</label>
                <input
                  type="text"
                  name="bot"
                  value={newCoin.bot}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="modal-footer">
                <button onClick={this.handleModalClose} className="close-btn">
                  Close
                </button>
                <button onClick={this.handleSave} className="save-btn">
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default AdminCoins;
