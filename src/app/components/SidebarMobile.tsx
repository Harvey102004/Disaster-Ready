"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function SidebarMobile() {
  const [showSideBar, setShowSideBar] = useState(false);

  const handleSideBar = () => {
    setShowSideBar((prev) => !prev);
  };

  const pathname = usePathname();

  const navLinks = [
    { icon: "/home.png", name: "Home", href: "/" },
    {
      icon: "/phone.png",
      name: "Emergency Resources",
      href: "/emergency-resources",
    },
    {
      icon: "/map.png",
      name: "Realtime Updates",
      href: "/realtime-updates",
    },
    {
      icon: "/prone.png",
      name: "Prone Areas",
      href: "/prone-areas",
    },
    {
      icon: "/report.png",
      name: "Report",
      href: "/report",
    },
    {
      icon: "/calamities.png",
      name: "Calamities",
      href: "/calamities",
    },
    {
      icon: "/about.png",
      name: "About us",
      href: "/about",
    },
  ];

  return (
    <>
      {/* HEADER SA MOBILE*/}
      <div className="md:hidden">
        <div className="flex items-center justify-between px-5 ">
          <Image
            src={"/menu.png"}
            width={18}
            height={18}
            alt="menu"
            onClick={handleSideBar}
            className="cursor-pointer"
          />
        </div>
      </div>

      {showSideBar && (
        <div className="fixed inset-0 bg-labo z-40" onClick={handleSideBar} />
      )}

      {/* SIDEBAR NAV */}
      <div
        className={`fixed top-0 left-0 h-full w-[85%] bg-dark py-8 z-50 transition-transform duration-300 ease-in-out
          ${showSideBar ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="absolute h-[100px] w-[200px] blur-3xl bg-primary rounded-t-full bottom-0 left-1/2 -translate-x-1/2"></div>
        <div className="flex items-center justify-between gap-4 border-b-[0.5px] border-light w-full px-5 pb-4 z-50">
          <div className="flex items-center gap-5">
            <Image
              src={"/close.png"}
              width={13}
              height={13}
              alt="close"
              onClick={handleSideBar}
              className="cursor-pointer"
            />
            <p className="text-light text-sm">Menu</p>
          </div>

          <Image
            src={"/logo_light.png"}
            width={65}
            height={65}
            alt="logo"
          ></Image>
        </div>
        <nav>
          <ul className="flex flex-col gap-2 mt-5 ">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (pathname.startsWith(link.href) && link.href !== "/");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-5 py-3 px-5 text-light text-xs ${
                    isActive ? "bg-primary" : ""
                  }`}
                  onClick={handleSideBar}
                >
                  <Image
                    src={link.icon}
                    width={20}
                    height={20}
                    alt={link.name}
                  ></Image>
                  {link.name}
                </Link>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
