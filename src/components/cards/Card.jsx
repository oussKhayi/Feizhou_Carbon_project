import React from "react";

const Card = ({ card }) => {
  return (
    <div className="parent">
      <div class="container1 bg-violet-4000 min-h-[36dvh] md:h-auto">
        <div class="front side rounded-3xl">
          <div class="content-card flex flex-col gap-y-4 md:gap-y-8 items-center min-w-full min-h-full">
            <div className="p-1 w-16">{card?.icon}</div>
            <p className="text-xl font-semibold">{card.content1.title}</p>
            <p className="text-balance">{card.content1.description}</p>
          </div>
        </div>
        <div class="back side rounded-3xl">
          <div class="content-card flex flex-col gap-y-4 md:gap-y-8 items-center min-w-full min-h-full">
            <div className="p-1 w-16">{card?.icon}</div>
            <p className="text-xl font-semibold">{card.content1.title}</p>
            <ul className="list-disc space-y-2">
              {card.content2.description.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
