import React from "react";
import Card from "./Card";
import hero from "../assets/hero.jpg";

const Experience = () => {
  const cards = [
    {
      imageUrl: hero,
      title: "Colosseum Underground and Arena Floor Tour",
      price:
        "20,000",
    },
    {
      imageUrl: hero,
      title: "Colosseum Underground and Arena Floor Tour",
      price: "45,899",
    },
    {
      imageUrl: hero,
      title: "Colosseum Underground and Arena Floor Tour",
      price: "14,500",
    },
    {
      imageUrl: hero,
      title: "Colosseum Underground and Arena Floor Tour",
      price: "90,000",
    },
  ];

  return (
    <div className="container-fluid flex flex-col mt-5 mb-3 px-2">
      <h4 className="font-bold text-[1.7rem] mb-4">
        Looking for Similar Experiences?
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
