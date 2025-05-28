"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    if (showSideBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showSideBar]);

  return (
    <>
      {/* HEADER SA MOBILE*/}
      <div className="z-50 md:hidden">
        <div className="flex items-center justify-between px-5">
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
        <div className="bg-labo fixed inset-0 z-40" onClick={handleSideBar} />
      )}

      {/* SIDEBAR NAV */}
      <div
        className={`bg-dark fixed top-0 left-0 z-50 h-full w-[85%] py-8 transition-transform duration-300 ease-in-out ${showSideBar ? "translate-x-0" : "-translate-x-full"} `}
      >
        <div className="bg-primary absolute bottom-0 left-1/2 z-50 h-[100px] w-[200px] -translate-x-1/2 rounded-t-full blur-3xl"></div>
        <div className="border-light z-50 flex w-full items-center justify-between gap-4 border-b-[0.5px] px-8 pb-4">
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
          <ul className="mt-5 flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (pathname.startsWith(link.href) && link.href !== "/");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-light flex items-center gap-5 px-8 py-3 text-xs ${
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
