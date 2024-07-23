import React, { useState } from "react";
import axios from "axios";
import feizhouCom from "../assets/feizhouCom.png";

const HeroSection = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState();
  const handleSearch = async () => {
    console.log("clicked");
    // search with axios :
    const response = await axios.get(
      `https://api.websitecarbon.com/site?url=${encodeURIComponent(
        inputValue
      )}`,
      // headers with access origin :
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET",
          "Access-Control-Allow-Headers": "Content-Type",
          "Content-Type": "application/json",
          // Origin: "*",
        },
      }
    );
    console.log("response.data");
    console.log(response.data);
    setData(response.data);
  };

  return (
    <div className="md:px-32 pt-28 lg:py-16 bg-[#1a835d] min-w-[100%] min-h-[82dvh]">
      <div className="w-[100%] h-fit text-center pt-20 md:pt-52 flex flex-col items-center justify-center">
        <div id="titles" className="flex flex-col gap-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Website Checker
          </h1>
          <p className="text-md text-white px-3 md:px-0">
            Free online tool for quick web page audits.
          </p>
        </div>
        <div
          id="inputs"
          className="flex flex-col lg:flex-row mt-8 gap-y-2 w-full px-8 md:px-0 sm:min-w-[45vw] md:w-[35dvw]"
        >
          <input
            type="text"
            placeholder="Enter your website"
            className="w-full text-base py-3 px-4 border-none focus:outline-none"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="w-full py-3 text-white bg-[#5656a6] rounded-3xl lg:rounded-s-none lg:w-fit text-nowrap px-8 font-semibold"
          >
            Get you results
          </button>
        </div>
        <p className="mt-5 text-[.9rem] px-8 text-gray-200">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
        <div className="mt-6 md:mt-8 flex flex-col gap-y-2 md:gap-y-3 md:flex-row gap-x-4 p-4 items-center">
          <p className="text-[.8rem] text-gray-200">
            {/* &copy; {new Date().getFullYear()} , */}
            Powered by
          </p>
          <a
            href="https://FeizhouCom.com"
            target="_blank"
            className="text-white md:relative md:bottom-1.5"
          >
            <img src={feizhouCom} alt="" width={155} srcset="" />
          </a>
          <p className="text-[.8rem] text-gray-200">company</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
