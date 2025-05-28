"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavMobile() {
  const navLinks = [
    { icon: "/home.png", label: "Home", href: "/" },
    {
      icon: "/phone.png",
      label: "Emergency Resources",
      href: "/emergency-resources",
    },
    { icon: "/map.png", label: "Realtime Updates", href: "/realtime-updates" },
    { icon: "/prone.png", label: "Prone Areas", href: "/prone-areas" },
    { icon: "/report.png", label: "Report", href: "/report" },
  ];

  const pathname = usePathname();

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const index = navLinks.findIndex(
      (link) =>
        pathname === link.href ||
        (pathname.startsWith(link.href) && link.href !== "/"),
    );
    setActiveIndex(index);
  }, [pathname]);

  return (
    <div className="bg-light fixed bottom-0 z-30 block w-full pt-4 md:hidden">
      <nav className="bg-primary relative mx-auto flex h-14 w-[95%] items-center rounded-xl">
        {activeIndex !== null && activeIndex !== -1 && (
          <div
            className="bg-light absolute -top-3 flex h-[55px] w-[55px] items-center justify-center rounded-full transition-all duration-300 ease-in-out"
            style={{
              left: `calc(${(100 / navLinks.length) * activeIndex}% + ${
                100 / navLinks.length / 2
              }% - 27.5px)`,
            }}
          >
            <div className="bg-primary flex h-[45px] w-[45px] items-center justify-center rounded-full">
              <Image
                src={navLinks[activeIndex].icon}
                width={20}
                height={20}
                alt={navLinks[activeIndex].label}
              />
            </div>
          </div>
        )}

        <ul className="z-10 flex w-full items-center justify-between">
          {navLinks.map((link, index) => {
            const isActive =
              pathname === link.href ||
              (pathname.startsWith(link.href) && link.href !== "/");

            return (
              <Link
                href={link.href}
                key={link.label}
                className="relative flex h-full w-1/5 items-center justify-center"
              >
                {!isActive && (
                  <Image
                    src={link.icon}
                    width={20}
                    height={20}
                    alt={link.label}
                    className="transition-all duration-300"
                  />
                )}
              </Link>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
