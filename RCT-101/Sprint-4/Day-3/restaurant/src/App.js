import "./styles.css";
import dataValue from "../data.json";
import { Container } from "./Components/Container";
import { SortFilter } from "./Components/SortFilter";
import { Navbar } from "./Components/Navbar";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState(dataValue.product);

  const filterHandler = (value) => {
    console.log(value);
    if (value === "star5") {
      setData(
        dataValue.product
          .filter((data) => data.rating >= 4.5)
          .sort((a, b) => a.price - b.price)
      );
    } else if (value === "star4") {
      setData(
        dataValue.product
          .filter((data) => data.rating >= 4)
          .sort((a, b) => a.price - b.price)
      );
    } else if (value === "star3") {
      setData(
        dataValue.product
          .filter((data) => data.rating >= 3.5)
          .sort((a, b) => a.price - b.price)
      );
    } else if (value === "star2") {
      setData(
        dataValue.product
          .filter((data) => data.rating >= 3)
          .sort((a, b) => a.price - b.price)
      );
    } else {
      setData(dataValue.product);
    }
  };

  const sortHandler = (value) => {
    console.log(value);
    if (value === "htl") {
      setData([...(data).sort((a, b) => b.price - a.price)]);
    } else if (value === "lth") {
      setData([...(data).sort((a, b) => a.price - b.price)]);
    } else {
      setData(data);
    }
  };

  return (
    <div className="App">
      <Navbar />

      <br />
      <br />
      <br />
      <SortFilter sortHandler={sortHandler} filterHandler={filterHandler} />
      <Container data={data} />
    </div>
  );
}
