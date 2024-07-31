import React from "react";
import LogoSolo from "../assets/Logo-solo.png";

const FeizouComConsists = () => {
  return (
    <section
      className="
      flex flex-col bg-[#f4f7fa] items-center
      md:flex-row md:px-32 pb-10 
      xl:px-72
  "
    >
      <div className="logo w-fit h-fit">
        <img
          src={LogoSolo}
          alt="Feizoucom Logo"
          className="max-w-[15rem] md:max-w-[19rem] h-auto"
        />
      </div>
      <div className="content text-center  flex flex-col space-y-2">
        <h1 className="text-2xl text-start ps-7 font-semibold text-gray-900">
          FeizhouCom Solution consists of 5 pillars:{" "}
        </h1>
        <p className="text-lg text-start ps-7 p-2 text-gray-700">
          Optimization of carbon transmission up to 80% and Minimizing Energy
          Consumption, ü Improvement of up to 50% in loading times, Employ
          modern security practices and technologies, we create a more appealing
          Design, easy to navigate, and optimize web seo.
        </p>
      </div>
    </section>
  );
};

export default FeizouComConsists;
