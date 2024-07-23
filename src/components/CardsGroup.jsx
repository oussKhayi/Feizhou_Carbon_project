import React from "react";
import Card from "./cards/Card";

const CardsGroup = () => {
  return (
    <div>
      <div className="text-3xl px-8 font-bold py-8">Cards Group</div>
      <section className="grid grid-cols-1 gap-y-8 md:gap-x-8 px-8 md:grid-cols-2 xl:grid-cols-3 xl:px-36 xl:gap-x-4 2xl:px-72">
        {[
          {
            content1: {
              title: "Speed Optimization",
              description: [
                "Analyze your website's loading speed, identify bottlenecks, and implement optimization techniques.",
                "Analyze your website's loading speed, identify bottlenecks, and implement optimization techniques.",
                "Analyze your website's loading speed, identify bottlenecks, and implement optimization techniques.",
              ],
            },
            content2: {
              title: "Website Speed Optimization",
              description: [
                "Analyze your website's loading speed, identify bottlenecks, and implement optimization techniques.",
                "Analyze your website's loading speed, identify bottlenecks, and implement optimization techniques.",
                "Analyze your website's loading speed, identify bottlenecks, and implement optimization techniques.",
              ],
            },
          },
          {
            content1: {
              title: "Speed Optimization",
              description: [
                "Analyze your website's loading speed, identify bottlenecks, and implement optimization techniques.",
                "Analyze your website's loading speed, identify bottlenecks, and implement optimization techniques.",
                "Analyze your website's loading speed, identify bottlenecks, and implement optimization techniques.",
              ],
            },
            content2: {
              title: "Website Speed Optimization",
              description: [
                "Analyze your website's loading speed, identify bottlenecks, and implement optimization techniques.",
                "Analyze your website's loading speed, identify bottlenecks, and implement optimization techniques.",
                "Analyze your website's loading speed, identify bottlenecks, and implement optimization techniques.",
              ],
            },
          },
          {
            content1: {
              title: "Speed Optimization",
              description: [
                "Analyze your website's loading speed, identify bottlenecks, and implement optimization techniques.",
                "Analyze your website's loading speed, identify bottlenecks, and implement optimization techniques.",
                "Analyze your website's loading speed, identify bottlenecks, and implement optimization techniques.",
              ],
            },
            content2: {
              title: "Website Speed Optimization",
              description: [
                "Analyze your website's loading speed, identify bottlenecks, and implement optimization techniques.",
                "Analyze your website's loading speed, identify bottlenecks, and implement optimization techniques.",
                "Analyze your website's loading speed, identify bottlenecks, and implement optimization techniques.",
              ],
            },
          },
          {
            content1: {
              title: "Speed Optimization",
              description: [
                "Analyze your website's loading speed, identify bottlenecks, and implement optimization techniques.",
                "Analyze your website's loading speed, identify bottlenecks, and implement optimization techniques.",
                "Analyze your website's loading speed, identify bottlenecks, and implement optimization techniques.",
              ],
            },
            content2: {
              title: "Website Speed Optimization",
              description: [
                "Analyze your website's loading speed, identify bottlenecks, and implement optimization techniques.",
                "Analyze your website's loading speed, identify bottlenecks, and implement optimization techniques.",
                "Analyze your website's loading speed, identify bottlenecks, and implement optimization techniques.",
              ],
            },
          },
          {
            content1: {
              title: "Speed Optimization",
              description: [
                "Analyze your website's loading speed, identify bottlenecks, and implement optimization techniques.",
                "Analyze your website's loading speed, identify bottlenecks, and implement optimization techniques.",
                "Analyze your website's loading speed, identify bottlenecks, and implement optimization techniques.",
              ],
            },
            content2: {
              title: "Website Speed Optimization",
              description: [
                "Analyze your website's loading speed, identify bottlenecks, and implement optimization techniques.",
                "Analyze your website's loading speed, identify bottlenecks, and implement optimization techniques.",
                "Analyze your website's loading speed, identify bottlenecks, and implement optimization techniques.",
              ],
            },
          },
        ].map((card, index) => {
          return (
            <Card
              key={index}
              content1={card.content1}
              content2={card.content2}
            />
          );
        })}
      </section>
    </div>
  );
};

export default CardsGroup;
