import burgerBtn from "../assets/burger.svg";
import close from "../assets/close.svg";
import { useState } from "react";
import { Socials } from "./Socials";

export function Header() {
  const navItems = ["Home", "About Us", "Services", "Contact Us"];

  const [selectedPage, setSelectedPage] = useState(0);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  return (
    <header className="fixed lg:static text-purple font-sans w-screen z-10 shadow-md lg:shadow-none bg-white lg:bg-transparent">
      <div className="relative max-w-screen mx-auto flex flex-row justify-between items-center px-6 lg:px-[50px] py-[20px]">
        <div
          className="lg:hidden"
          onClick={() => setIsMobileMenuActive((prev) => !prev)}
        >
          {isMobileMenuActive ? (
            <img src={close} className="w-[32px]" />
          ) : (
            <img src={burgerBtn} className="w-[32px]" />
          )}
        </div>

        <nav
          className={`absolute pt-4 top-full left-0 bg-white w-1/2 h-screen z-10 shadow-xl -translate-x-full ${
            isMobileMenuActive && "translate-x-0"
          } transition-transform lg:static lg:pt-0 lg:h-auto lg:w-auto lg:shadow-none lg:translate-x-0 lg:top-0`}
        >
          <ul className="flex flex-col lg:flex-row justify-center items-center gap-6">
            {navItems.map((item, i) => (
              <li
                key={item}
                className={`${
                  selectedPage === i && "active"
                } border-b-[3px] border-transparent text-base text-purple/60 font-bold cursor-pointer nav-item-hover`}
                onClick={() => setSelectedPage(i)}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>

        <a href="#" className="font-serif font-bold text-2xl whitespace-nowrap">
          Dream Agency
        </a>

        <Socials />
      </div>
    </header>
  );
}
