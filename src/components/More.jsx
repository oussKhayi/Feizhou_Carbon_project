import React from "react";

const More = () => {
  return (
    <div
      className="flex flex-col items-center gap-y-8 p-8  bg-[#f4f7fa]  md:px-32
      md:py-16
      lg:px-12
      xl:px-72"
    >
      <h1 className="text-2xl font-semibold">More “Wow” for your website</h1>
      <p>
        Let us show you how Feizhoucom can help you achieve your goals. No
        obligation, straightforward and personal.
      </p>
      <div className="button">
        <button className="text-sm px-8 py-3 bg-[#5656a6] text-white rounded-3xl">
          Book a free demo
        </button>
      </div>
    </div>
  );
};

export default More;
