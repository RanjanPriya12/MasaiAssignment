import React from "react";
import "../styles.css";

export const Navbar = () => {
  const navList = [
    {
      title: "logo",
      to: "/"
    },
    {
      title: "Search"
    },
    {
      title: "Help",
      to: "/help"
    },
    {
      title: "SignIn",
      to: "/sign"
    },
    {
      title: "Whislist",
      to: "/whislist"
    },
    {
      title: "Cart",
      to: "/cart"
    }
  ];
  return (
    <div className="navbar">
      {navList.map((item, i) => (
        <h2 key={i}>{item.title}</h2>
      ))}
    </div>
  );
};
