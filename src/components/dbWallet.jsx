import React from "react";
import "../styles/dbtable.css"; // Make sure the CSS is properly linked
import bitcoin from "../assets/bitcoin.png";
import cardano from "../assets/cardano.png";
import dogecoin from "../assets/dogecoin.png";
import ethereum from "../assets/ethereum.png";
import litecoin from "../assets/litecoin.png";
import ripple from "../assets/ripple.png";
import uni from "../assets/uni.png";
import agix from "../assets/agix.png";
import ton from "../assets/ton.png";
import usdt from "../assets/usdt.png";
import grt from "../assets/grt.png";
import solana from "../assets/solana.png";

const coins = [
  {
    _id: "1",
    c_name: "BTC",
    price: 520.77,
    increased_by: "+2.92",
    image: bitcoin,
  },
  {
    _id: "2",
    c_name: "ETH",
    price: 45.66,
    increased_by: "+4.52",
    image: ethereum,
  },
  {
    _id: "3",
    c_name: "TON",
    price: 123.44,
    increased_by: "-4.42",
    image: ton,
  },
  {
    _id: "4",
    c_name: "UNI",
    price: 458.34,
    increased_by: "-9.12",
    image: uni,
  },
  {
    _id: "5",
    c_name: "USDT",
    price: 750.52,
    increased_by: "+7.92",
    image: usdt,
  },
  {
    _id: "6",
    c_name: "AGIX",
    price: 535.08,
    increased_by: "-5.52",
    image: agix,
  },
  {
    _id: "7",
    c_name: "LTC",
    price: 452.72,
    increased_by: "+1.82",
    image: litecoin,
  },
  {
    _id: "8",
    c_name: "GRT",
    price: 452.32,
    increased_by: "-7.72",
    image: grt,
  },
  {
    _id: "9",
    c_name: "SOL",
    price: 320.55,
    increased_by: "+1.72",
    image: solana,
  },
  {
    _id: "10",
    c_name: "DOGE",
    price: 320.55,
    increased_by: "+1.72",
    image: dogecoin,
  },
  {
    _id: "11",
    c_name: "ADA",
    price: 320.55,
    increased_by: "+1.72",
    image: cardano,
  },

  {
    _id: "12",
    c_name: "XRP",
    price: 320.55,
    increased_by: "+1.72",
    image: ripple,
  },
];

class CoinTable extends React.Component {
  render() {
    const { theme } = this.props;
    return (
      <div className="dsb-bot-table-wrap">
        <h3 style={{ padding: "1rem 0 2rem 1rem", height: "20%" }}>
          Wallet Summary
        </h3>
        <table className={`dsb-bot-table ${theme}`}>
          <thead className={`dsb-bot-table-head ${theme}`}>
            <tr>
              <th>Coin</th>
              <th>Price</th>
              <th>Change</th>
            </tr>
          </thead>

          <tbody className={`dsb-bot-table-body ${theme}`}>
            {coins.map((coin) => (
              <tr key={coin._id} className="dsb-row-wrap">
                <td>
                  <div className="dsb-bot-item-wrap">
                    <img
                      src={coin.image}
                      width="40px"
                      height="40px"
                      alt={coin.c_name}
                      className="coin-image"
                    />
                    &nbsp;&nbsp;{coin.c_name}
                  </div>
                </td>
                <td>
                  <div className="dsb-bot-item-wrap">{coin.price}</div>
                </td>
                <td>
                  <div className="dsb-bot-item-wrap">{coin.increased_by}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CoinTable;
