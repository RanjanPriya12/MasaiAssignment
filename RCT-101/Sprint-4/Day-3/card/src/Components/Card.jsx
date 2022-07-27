import React from "react";

export const Card = ({ cardDetails }) => {
  console.log(cardDetails.color);
  return (
    <div
      className="parent"
      className={`${cardDetails.color == "yellow" ? "yellow" : "white"}`}
    >
      <div className="flex">
        <b>{cardDetails.date}</b>
        <span>
          <img src={cardDetails.logo_url} />
        </span>
      </div>
      <button>Case Study</button>
      <h1>{cardDetails.gift}</h1>
      <h3>{cardDetails.method}</h3>
      <div className="flex">
        <h2>{cardDetails.device}</h2>
        <span className="arrow">&#8594;</span>
      </div>
    </div>
  );
};
