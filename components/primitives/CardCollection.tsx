import React from "react";
import Card from "./Card";

export default function CardCollection() {
  const cards = require("./cards.json");

  return (
    <div className="mt-8 grid lg:grid-cols-3 gap-10">
      {cards.map((card: any) => Card(card))}
    </div>
  );
}
