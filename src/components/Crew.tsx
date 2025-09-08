import crewMobile from "../assets/crew/background-crew-mobile.jpg";
import crewTablet from "../assets/crew/background-crew-tablet.jpg";
import crewDesktop from "../assets/crew/background-crew-desktop.jpg";
import Header from "./Header";

import { CrewMembers } from "../data/CrewMembers";
import { useState } from "react";


function Crew() {
  const [activeIndex, setActiveIndex] = useState(0);
  const member = CrewMembers[activeIndex];
  return (
    <section className="relative min-h-screen">
      <Header />

      <div className="absolute inset-0 -z-10">
        <img
          src={crewMobile}
          alt="Background"
          className="w-full h-full object-cover md:hidden"
        />
        <img
          src={crewTablet}
          alt="Background"
          className="hidden w-full h-full object-cover md:block xl:hidden"
        />
        <img
          src={crewDesktop}
          alt="Background"
          className="hidden w-full h-full object-cover xl:block"
        />
      </div>

      {/* MAIN CONTENT  */}

      <section className="relative w-full min-h-screen text-white px-6 py-[5rem] md:px-10 lg:px-20">
        {/* Title */}
        <h2 className="uppercase lg:text-left tracking-widest text-lg md:text-xl lg:text-2xl pt-6">
          <span className="opacity-50 mr-2">02</span> Meet your crew
        </h2>

        {/* Layout:*/}
        <div className="flex flex-col my-[5rem] xl:flex-row lg:items-center lg:justify-between gap-5">
          {/* Left (text + buttons) */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 flex-1">
            <div className="flex flex-col gap-2">
              <h3 className="uppercase font-belleFair tracking-wider text-gray-400 text-sm md:text-lg">
                {member.position}
              </h3>
              <h1 className="uppercase text-2xl md:text-4xl lg:text-5xl font-belleFair my-2">
                {member.name}
              </h1>
            </div>
            <p className="text-sm md:text-base max-w-md leading-relaxed">
              {member.description}
            </p>

            {/* Navigation Dots */}
            <div className="flex gap-4 mt-6">
              {CrewMembers.map((crew, index: number) => (
                <button
                  key={crew.name}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full mt-5 transition-colors ${
                    activeIndex === index
                      ? "bg-white"
                      : "bg-gray-500 hover:bg-gray-300"
                  }`}
                  aria-label={`Show crew member ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right (image) */}
          <div className="flex justify-center lg:justify-end flex-1">
            <img
              src={member.image}
              alt={member.name}
              className="w-48 md:w-52 lg:w-[28rem] h-auto object-fit mask-gradient"
            />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Crew;
