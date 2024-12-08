import React from "react";
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
import "../styles/overallDb.css";
// Sample coin data
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

const CoinsList = ({ theme }) => {
  // Repeat coins to fill the container if necessary
  const repeatedCoins = [...coins, ...coins, ...coins];

  return (
    <>
      <div
        className="totalWrap"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          className="walletSummary"
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem",
          }}
        >
          <h3 style={{ height: "20%" }}>Wallet Summary</h3>
          <p>Balance: $4567</p>
        </div>
        <div
          className={`wallet-scroll ${theme}`}
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            boxSizing: "border-box",
            overflow: "auto",
            gap: "1rem",
            padding: "1rem",

            borderRadius: "10px",
          }}
        >
          {repeatedCoins.map((coin) => (
            <div key={coin._id} className={`wallet-coin-dsb ${theme}`}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <img
                  src={coin.image}
                  alt={coin.c_name}
                  style={{
                    width: "40px",
                    height: "40px",
                    objectFit: "contain",
                  }}
                />
                <div>
                  <h3
                    className={`wallet-coin-dsb-h ${theme}`}
                    style={{ margin: 0, fontSize: "1.2rem" }}
                  >
                    {coin.c_name}
                  </h3>
                  <p style={{ margin: 0, color: "#888" }}>${coin.price}</p>
                </div>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: coin.increased_by.includes("+") ? "green" : "red",
                }}
              >
                {coin.increased_by}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CoinsList;
