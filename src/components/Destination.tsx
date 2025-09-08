import Header from "./Header";
import destinationMobile from "../assets/destination/background-destination-mobile.jpg";
import destinationTablet from "../assets/destination/background-destination-tablet.jpg";
import destinationDesktop from "../assets/destination/background-destination-desktop.jpg";

import { Destinations } from "../data/Destinations";
import { useState } from "react";
import type { Destination } from "../types";

function Destination() {
  const [active, setActive] = useState(0);
  return (
    <section className="relative min-h-screen text-white">
      <div className="absolute inset-0 -z-10">
        <img
          src={destinationMobile}
          alt="Background"
          className="w-full h-full object-cover md:hidden"
        />
        <img
          src={destinationTablet}
          alt="Background"
          className="hidden w-full h-full object-cover md:block xl:hidden"
        />
        <img
          src={destinationDesktop}
          alt="Background"
          className="hidden w-full h-full object-cover xl:block"
        />
      </div>

      <Header />

      {/* MAIN CONTENT */}
      <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:gap-20 px-6 md:px-16 lg:px-32 py-10 lg:py-20">
        {/* Title & Planet */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="uppercase tracking-widest text-lg md:text-xl lg:text-2xl py-10">
            <span className="font-bold text-gray-500">01</span> Pick Your
            Destination
          </h3>
          <img
            src={Destinations[active].image}
            alt={Destinations[active].name}
            className="w-40 h-40 md:w-72 md:h-72 lg:w-[20rem] lg:h-[20rem] object-contain"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-10 lg:mt-0 max-w-xl gap-6">
          {/* Tabs */}
          <ul className="flex gap-6 uppercase tracking-widest text-sm md:text-base">
            {Destinations.map((Dest, index: number) => (
              <li
                key={Dest.name}
                onClick={() => setActive(index)}
                className={`cursor-pointer pb-2 border-b-2 transition ${
                  active === index
                    ? "border-white"
                    : "border-transparent hover:border-gray-400"
                }`}
              >
                {Dest.name}
              </li>
            ))}
          </ul>

          {/* Planet title */}
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-belleFair uppercase">
            {Destinations[active].name}
          </h2>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed max-w-lg">
            {Destinations[active].description}
          </p>

          {/* Stats */}
          <div className="w-full h-px bg-gray-700 my-6" />
          <div className="flex flex-col justify-center md:flex-row gap-8 md:gap-20 uppercase">
            <div>
              <p className="text-sm text-gray-400">Avg. Distance</p>
              <p className="text-2xl font-belleFair">
                {Destinations[active].distance}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Est. Travel Time</p>
              <p className="text-2xl font-belleFair">
                {Destinations[active].travelTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Destination;
