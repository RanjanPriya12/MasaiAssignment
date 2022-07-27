import React from "react";
import { Card } from "./Card";

export const Container = ({ data }) => {
  //console.log(data);
  return (
    <div className="grid">
      {data.map((item, i) => (
        <Card key={i} item={item} />
      ))}
    </div>
  );
};
