import React from "react";
import "./styles.css";
//import card1

import cardsArr from "./data";

import Card from "./components/Card";

console.log(cardsArr);

export default function App() {
  const cardComponents = cardsArr.map((object, arrayIndex) => {
    return (
      <Card
        key={arrayIndex}
        /*
      img={object.img}
      title={object.title}
      text={object.text}
      url={object.url}
      */
        {...object}
        //^^spread operator, does same thing as defining each prop individually
      />
    );
  });
  console.log(cardComponents);
  return (
    <div className="App">
      <h1>Bootstrap Cards To Component Example</h1>
      <section className="cards">{cardComponents}</section>
    </div>
  );
}
