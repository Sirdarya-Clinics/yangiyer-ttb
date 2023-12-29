"use client";

import * as React from "react";
import { ModeToggle } from "@/components/theme/theme-provider";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { LanguageChanger } from "@/components/Lang";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Logout } from "@/components/LogOut";
export function Header2() {
  const path = usePathname();
  // console.log('usePathname :',path)
  let lang = path;
  const [useLang, setLang] = useState({
    header: "Yangiyer tuman tibbiyot birlashmasi",
    about: "Biz haqimizda",
    open_data: "Ochiq malumotlar",
    contact: "Bog&apos;lanish",
    address: "Manzil",
    docs: "Hujjatlar",
    news: "Yangiliklar",
  });
  useEffect(() => {
    if (lang === "/ru") {
      setLang({
        header: "Янгийерский районное медицинское объединение",
        about: "О нас",
        open_data: "Открытые данные",
        contact: "Контакты",
        address: "Адрес",
        docs: "Документы",
        news: "Новости",
      });
    } else if (lang === "/en") {
      setLang({
        header: "Yangiyer regional medical association",
        about: "About Us",
        open_data: "Open data",
        contact: "Contacts",
        address: "Address",
        docs: "Documents",
        news: "News",
      });
    }
    // console.log(useLang);
  }, [lang]);

  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-8 m-4 dark:bg-gray-900">
      <div className="hidden md:flex">
        <a className="items-center justify-center px-4" href="/">
          <Logo />
        </a>
        <div className="font-sans font-semibold text-3xl">
          <h1> {useLang.header}</h1>
        </div>
      </div>

      <nav>
        <section className="MOBILE-MENU flex lg:hidden mx-4">
          {isNavOpen || (
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>
          )}

          <div
            className={
              isNavOpen ? "showMenuNav dark:bg-slate-950" : "hideMenuNav"
            }
          >
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-11 "
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a onClick={() => setIsNavOpen(false)} href="#about">
                  {useLang.about}
                </a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a onClick={() => setIsNavOpen(false)} href="#hujjatlar">
                  {useLang.open_data}
                </a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a onClick={() => setIsNavOpen(false)} href="#footer">
                  {useLang.contact}
                </a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex ">
          <li>
            <a href="#about">{useLang.about}</a>
          </li>
          <li>
            <a href="#footer">{useLang.address}</a>
          </li>
          <li>
            <a href="#hujjatlar">{useLang.docs}</a>
          </li>
          <li>
            <a href="/news">{useLang.news}</a>
          </li>
          <li className="px-4">
            <ModeToggle />
          </li>
        </ul>
        <LanguageChanger />
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        background-color: white;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
      
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}

export function HeaderAdmin() {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition dark:bg-gray-dark dark:shadow-sticky-dark"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className=" w-40 max-w-full px-4 xl:mr-10">
              <Link
                href="/"
                className={`header-logo m-2 block w-full ${
                  sticky ? "py-5 lg:py-2" : "p-2"
                } `}
              >
                <Image
                  src="/logo.svg"
                  alt="logo"
                  width={100}
                  height={30}
                  className="w-full"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-2">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <div className="font-sans font-semibold text-3xl">
                    <h1> ADMIN PANEL</h1>
                  </div>
                </nav>
              </div>

              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <Logout />
              </div>
            </div>
          </div>
        </div>
        <ModeToggle />
      </header>
    </>
  );
}
