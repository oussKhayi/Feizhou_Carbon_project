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
          className="max-w-[20rem] md:max-w-[19rem] h-auto"
        />
      </div>
      <div className="content text-center  flex flex-col space-y-2">
        <h1 className="text-xl text-start ps-7 font-semibold text-gray-900">
          FeizouCom consists of six pillars:
        </h1>
        <p className="text-base text-start ps-7 p-2 text-gray-700">
          In 6 essential tool pillars, the Ryte Platform delivers automated and
          prioritized recommendations that enable you to bring the perfect
          Website User Experience (WUX) live on your website.{" "}
        </p>
      </div>
    </section>
  );
};

export default FeizouComConsists;
