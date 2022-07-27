import React from "react";

export const Card = ({ item }) => {
  return (
    <div className="card">
      <img src={item.image_url} alt="product" />
      <h3>{item.rest_name}</h3>
      <p>{item.desc}</p>
      <p>{item.cost_of_two}</p>
      <p>₹.{item.price} For two | 30 min</p>
      <p>
        <b className="rating">{item.rating}</b> {item.votes} votes |{" "}
        {item.review} review
      </p>
      <p>
        {item.off} OFF | {item.coupon}
      </p>
      <button>Order Online</button>
    </div>
  );
};
