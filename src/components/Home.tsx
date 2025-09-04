import bgMobile from "../assets/home/background-home-mobile.jpg";
import bgTablet from "../assets/home/background-home-tablet.jpg";
import bgDesktop from "../assets/home/background-home-desktop.jpg";
import Header from "./Header";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0 -z-10">
        <img
          src={bgMobile}
          alt="Background"
          className="w-full h-full object-cover md:hidden"
        />
        <img
          src={bgTablet}
          alt="Background"
          className="hidden md:block  xl:hidden w-full h-full object-cover"
        />
        <img
          src={bgDesktop}
          alt="Background"
          className="hidden  xl:block w-full h-full object-cover"
        />
      </div>
      <Header />
      <div className="flex flex-col items-center pt-20 lg:flex-row  lg:max-w-[50rem]  xl:justify-between px-10  xl:py-[10rem]  xl:pb[-15rem] lg:gap-x-[18rem]">
        <div className="home-text flex flex-col justify-center items-center gap-5 md:mt-40 xl:mt-20 text-white xl:items-start">
          <p className="uppercase text-xl">So, you want to travel to</p>
          <h1 className="font-light font-belleFair text-8xl tracking-wider">
            SPACE
          </h1>
          <p className="text-center items-center font-light max-w-[20rem] text- xl  xl:text-left">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="explore-button">
          <li className="bg-white rounded-full w-40 h-40 text-xl flex justify-center items-center cursor:pointer my-20">
            <NavLink to="/destination">EXPLORE</NavLink>
          </li>
        </div>
      </div>
    </section>
  );
}

export default Home;
