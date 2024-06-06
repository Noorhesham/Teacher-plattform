"use client";
import React, { useState, useEffect } from "react";
import ButtonGlow from "./ButtonGlow";
import Link from "next/link";
import ToggleDarkModeButton from "./ToggleDarkModeButton";
import { navigation } from "../constants";
import PhoneNav from "./PhoneNav";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <nav
      className={`flex px-16 py-7 w-full fixed z-50 top-0 left-0 items-center justify-between transition-all duration-300 ${
        isScrolled ? "bg-white dark:bg-slate-800/50 bg-opacity-50 backdrop-blur-md" : ""
      }`}
    >
      <h3>Logo</h3>
      <ul className="hidden lg:flex gap-10 ml-20 items-center">
        {navigation.map((nav) => (
          <li
            className={`block relative text-base uppercase transition-colors dark:hover:text-purple-500 hover:text-purple-500 px-3 py-1 lg:-mr-0.25 lg:font-semibold ${
              nav.link === pathName
                ? "z-2 text-purple-600"
                : "text-gray-800 dark:text-gray-100"
            } lg:leading-5`}
            key={nav.id}
          >
            <Link href={nav.link}>{nav.text}</Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-4 items-center">
        <ToggleDarkModeButton />
        <Link href={"/signup"} className="">
          انشئ حساب جديد
        </Link>
        <ButtonGlow padding={"py-2 px-4"} className="text-base" text="تسجيل الدخول" />
        <PhoneNav />
      </div>
    </nav>
  );
};

export default NavBar;
