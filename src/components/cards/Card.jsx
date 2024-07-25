import React from "react";

const Card = ({ card }) => {
  return (
    <div class="container bg-violet-4000 p-2 min-h-[40dvh]">
      <div class="front side">
        <div class="content-card flex flex-col gap-y-8 items-center">
          <div className="p-1 w-20">{card?.icon}</div>
          <p className="text-xl font-semibold">{card.content1.title}</p>
          <p>{card.content1.description}</p>
        </div>
      </div>
      <div class="back side">
        <div class="content-card flex flex-col gap-y-8 items-center">
          <div className="p-1 w-20">{card?.icon}</div>
          <p className="text-xl font-semibold">{card.content1.title}</p>
          <ul className="list-disc space-y-2">
            {card.content2.description.map((item, i) => {
              return <li key={i}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
