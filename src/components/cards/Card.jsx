import React from "react";

const Card = ({ content1, content2 }) => {
  return (
    <div className="card-parent relative w-full items-center flex flex-col h-[400px] py-24 my-4 cursor-pointer bg-gray-200 rounded-lg bg-base-100 shadow-xl">
      <div className="card card-front absolute bg-gray-200 p-2 rounded-2xl shadow-xl shadow-indigo-100">
        <div className="icon w-[4rem]">
          {content1?.icon ? content1?.icon : <h1>ICON</h1>}
        </div>
        <div className="p-4">
          <h2 className="text-lg font-bold">
            {content1?.title ? content1?.title : "title here"}
          </h2>
          <ul className="text-gray-700">
            {content1?.description
              ? content1.description?.map((element, i) => {
                  return (
                    <ol key={i} className="text-sm">
                      -{element}
                    </ol>
                  );
                })
              : "description here"}
          </ul>
        </div>
      </div>
      <div className="card card-back absolute bg-gray-200 p-2 rounded-2xl shadow-xl shadow-indigo-100">
        <div className="icon w-[4rem]">
          {content2?.icon ? content2?.icon : <h1>ICON</h1>}
        </div>
        <div className="p-4">
          <h2 className="text-lg font-bold">
            {content2?.title ? content2?.title : "title here"}
          </h2>
          <ul className="text-gray-700">
            {content2?.description
              ? content2.description?.map((element, i) => {
                  return (
                    <ol key={i} className="text-sm">
                      -{element}
                    </ol>
                  );
                })
              : "description here"}
          </ul>
        </div>{" "}
      </div>
    </div>
    // <div className="h-96 bg-green-500"></div>
  );
};

export default Card;
