"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

const NavDesktop = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Calamities", href: "/calamities" },
    { name: "Emergency Resources", href: "/emergency-resources" },
    { name: "Realtime Updates", href: "/realtime-updates" },
    { name: "Prone Areas", href: "/prone-areas" },
    { name: "About us", href: "/about" },
  ];

  const pathname = usePathname();
  const isPathInNav = navLinks.some((link) => pathname === link.href);
  const [activeStyle, setActiveStyle] = useState({ left: 0, width: 0 });
  const refs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  useEffect(() => {
    if (!isPathInNav) return;
    const el = refs.current[pathname];

    if (el) {
      const { offsetLeft, offsetWidth } = el;
      setActiveStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [pathname]);

  return (
    <div className=" items-center justify-around h-28 hidden md:flex">
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          width={110}
          height={110}
          alt="logo"
          className="cursor-pointer"
        ></Image>
      </Link>

      <nav className="relative">
        <ul className="flex gap-5 lg:gap-10">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (pathname.startsWith(link.href) && link.href !== "/");

            return (
              <Link
                ref={(el) => {
                  refs.current[link.href] = el;
                }}
                className={`${
                  isActive ? "text-primary" : ""
                } text-xs lg:text-sm 3xl:text-lg`}
                key={link.name}
                href={link.href}
              >
                {link.name}
              </Link>
            );
          })}

          {isPathInNav && (
            <div
              className="absolute bottom-[-10px] h-1 bg-primary rounded-t-full transition-all duration-500 ease-in-out"
              style={{
                left: activeStyle.left,
                width: activeStyle.width,
              }}
            ></div>
          )}
        </ul>
      </nav>

      <Link
        href="/report"
        className={`${
          pathname.startsWith("/report")
            ? "bg-transparent text-primary border-1 border-primary"
            : "bg-primary text-light"
        }cursor-pointer bg-primary  py-2 lg:py-3 px-6 lg:px-8 rounded-full text-light text-[10px] lg:text-xs 3xl:text-lg border-1 border-primary hover:bg-transparent hover:text-primary transition-all duration-500 ease-in-out`}
      >
        Report
      </Link>
    </div>
  );
};

export default NavDesktop;
