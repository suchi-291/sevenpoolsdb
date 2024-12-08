import React, { Component } from "react";
import CoinCard from "./coinCard";
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
import { Link } from "react-router-dom";

import "../styles/dashboard.css";

export default class Coins extends Component {
  coins = [
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

  render() {
    const maxVisibleCoins = 5; // Number of coins that fit within the fixed height
    const visibleCoins = this.coins.slice(0, maxVisibleCoins);
    const showAll = this.coins.length > maxVisibleCoins;

    const { theme, direct } = this.props;
    return (
      <div className="coins-list">
        {visibleCoins.map((coin, index) => (
          <CoinCard
            key={coin._id}
            coin={coin}
            color={this.colors[index % this.colors.length]}
            theme={theme}
          />
        ))}
        {showAll && (
          <div className={`coin-card show-all-card ${theme}`}>
            <Link to={direct}>Show All</Link>
          </div>
        )}
      </div>
    );
  }
}
