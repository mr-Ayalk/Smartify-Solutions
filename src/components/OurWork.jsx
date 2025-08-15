import React from "react";
import Title from "./Title";
import smartHomeauto from "../assets/smarthomeauto.webp";
const OurWork = () => {
  const workData = [
    {
      title: "Smart Home Automation",
      description:
        "we turn bold ideas into powerful digital solutions that connect,engage...",
      image: smartHomeauto,
    },
    {
      title: "Smart Home Automation",
      description:
        "we turn bold ideas into powerful digital solutions that connect,engage...",
      image: smartHomeauto,
    },
    {
      title: "Smart Home Automation",
      description:
        "we turn bold ideas into powerful digital solutions that connect,engage...",
      image: smartHomeauto,
    },
  ];

  return (
    <div
      id="our-work"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Our latest work"
        desc="From strategy to execution ,we creft digital solutions that move your business forward"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workData.map((work, index) => (
          <div
            key={index}
            className="hover:scale-102 duration-500 transition-all cursor-pointer"
          >
            <img src={work.image} className="w-full rounded-xl " alt="" />
            <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
            <p className="text-sm opacity-60 w-5/6">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
