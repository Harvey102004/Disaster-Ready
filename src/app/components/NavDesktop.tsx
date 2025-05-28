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
    <div className="mx-auto hidden h-28 max-w-[1500px] items-center justify-around md:flex">
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
                } 3xl:text-lg text-xs lg:text-sm`}
                key={link.name}
                href={link.href}
              >
                {link.name}
              </Link>
            );
          })}

          {isPathInNav && (
            <div
              className="bg-primary absolute bottom-[-10px] h-1 rounded-t-full transition-all duration-500 ease-in-out"
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
            ? "text-primary border-primary border-1 bg-transparent"
            : "bg-primary text-light"
        }cursor-pointer bg-primary text-light 3xl:text-lg border-primary hover:text-primary rounded-full border-1 px-6 py-2 text-[10px] transition-all duration-500 ease-in-out hover:bg-transparent lg:px-8 lg:py-3 lg:text-xs`}
      >
        Report
      </Link>
    </div>
  );
};

export default NavDesktop;
