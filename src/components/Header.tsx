import { useState } from "react";
import Logo from "../assets/shared/logo.svg";
import Hamburger from "../assets/shared/icon-hamburger.svg";
import Close from "../assets/shared/icon-close.svg";
import Line from "../assets/shared/line.svg";
import { NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="relative z-50">
      {/* Mobile Header */}
      <div className="bg-transparent absolute w-full right-o flex justify-between items-center p-4 md:hidden">
        <img src={Logo} alt="Space" className="w-fit h-fit" />

        {/* Mobile Menu Button */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden z-[1000]"
          >
            <img src={Hamburger} alt="Menu" className="w-6 h-6" />
          </button>
        )}

        {/* Sidebar Menu */}
        <nav
          className={`fixed top-0 right-0 w-64 h-full z-[999] bg-mobileNav backdrop-blur-3xl p-6 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="mb-6 md:hidden flex justify-end"
          >
            <img src={Close} alt="Close" className="w-6 h-6" />
          </button>

          {/* Menu Items */}
          <ul className="space-y-8 text-white">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "border-b-4" :"border-b-0"
                }
              >
                <span className="font-bold mr-1">00</span> HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/destination"
                className={({ isActive }) =>
                  isActive ? "border-b-4" : "border-b-0"
                }
              >
                <span className="font-bold mr-1">01</span> DESTINATION
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/crew"
                className={({ isActive }) =>
                  isActive ? "border-b-4" : "border-b-0"
                }
              >
                <span className="font-bold mr-1">02 </span>CREW
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/technology"
                className={({ isActive }) =>
                  isActive ? "border-b-4" : "border-b-0"
                }
              >
                <span className="font-bold mr-1">03</span> TECHNOLOGY
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Tablet & Desktop Header */}
      <div className="hidden md:flex justify-between items-center w-full px-10 py-3 md:bg-transparent absolute backdrop-blur-3xl">
        <div>
          <img src={Logo} alt="Space" />
        </div>

        {/* Divider */}
        <div>
          <img src={Line} alt="" className="md:hidden" />
        </div>

        <nav className="cursor-pointer ml-[-20rem]">
          <ul className="flex flex-row space-x-8 text-white">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "border-b-4" : "border-b-0"
                }
              >
                <span className="font-bold mr-1">00 </span>HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/destination"
                className={({ isActive }) =>
                  isActive ? "border-b-4" : "border-b-0"
                }
              >
                <span className="font-bold mr-1">01</span> DESTINATION
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/crew"
                className={({ isActive }) =>
                  isActive ? "border-b-4" : "border-b-0"
                }
              >
                <span className="font-bold mr-1">02</span> CREW
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/technology"
                className={({ isActive }) =>
                  isActive ? "border-b-4" : "border-b-0"
                }
              >
                <span className="font-bold mr-1">03</span>TECHNOLOGY
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
