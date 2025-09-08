import techMobile from "../assets/technology/background-technology-mobile.jpg";
import techTablet from "../assets/technology/background-technology-tablet.jpg";
import techDesktop from "../assets/technology/background-technology-desktop.jpg";

import { TechnologyData } from "../data/TechData";
import { useState } from "react";
import Header from "./Header";


function Technology() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tech = TechnologyData[activeIndex];

  return (
    <section className="relative min-h-screen text-white">
      <Header />

      <div className="absolute inset-0 -z-10">
        <img
          src={techMobile}
          alt="Background"
          className="w-full h-full object-cover md:hidden"
        />
        <img
          src={techTablet}
          alt="Background"
          className="hidden w-full h-full object-cover md:block xl:hidden"
        />
        <img
          src={techDesktop}
          alt="Background"
          className="hidden w-full h-full object-cover xl:block"
        />
      </div>

      {/* MAIN CONTENT */}
      <main className="relative w-full ">
        {/* title */}
        <h2 className="uppercase text-center lg:text-left text-white tracking-widest text-lg md:text-xl lg:text-2xl px-6 md:px-16 lg:px-32 pt-24 md:pt-32 lg:pt-40">
          <span className="opacity-50 mr-2">03</span> Space Launch 101
        </h2>

        {/* LAYOUT */}
        <div className="flex flex-col items-center xl:flex-row-reverse xl:items-start justify-between gap-12 px-6 md:px-16 lg:px-32 py-5">
          {/* Image */}
          <div className="flex justify-center xl:justify-end flex-1 order-2 xl:order-none w-full">
            <img
              src={tech.image}
              alt={tech.name}
              className="block w-screen h-auto object-cover xl:hidden"
            />

            <img
              src={tech.image2}
              alt={tech.name}
              className="hidden xl:block w-[28rem] h-[28rem] object-cover ml-auto"
            />
          </div>

          {/* Text + Navigation */}
          <div className="flex flex-col items-center xl:items-start text-center xl:text-left gap-8 flex-1 order-3 xl:order-none">
            <div className="flex flex-col xl:flex-row items-center gap-10">
              {/* Navigation Circles */}
              <div className="flex xl:flex-col gap-6">
                {TechnologyData.map((tech, index: number) => (
                  <button
                    key={tech.name}
                    onClick={() => setActiveIndex(index)}
                    className={`w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full border transition-colors text-lg md:text-2xl font-belleFair ${
                      activeIndex === index
                        ? "bg-white text-black"
                        : "border-gray-500 text-white hover:bg-gray-400 hover:text-black"
                    }`}
                    aria-label={`Show technology ${index + 1}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              {/* Info */}
              <div className="max-w-lg flex flex-col gap-4">
                <p className="uppercase text-gray-400 tracking-widest">
                  The terminology...
                </p>
                <h1 className="uppercase text-2xl md:text-4xl lg:text-5xl font-belleFair">
                  {tech.name}
                </h1>
                <p className="text-sm md:text-base leading-relaxed text-gray-300">
                  {tech.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Technology;
