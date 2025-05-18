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
        (pathname.startsWith(link.href) && link.href !== "/")
    );
    setActiveIndex(index);
  }, [pathname]);

  return (
    <div className="absolute block md:hidden bottom-2 w-full z-30">
      <nav className="w-[95%] rounded-xl bg-primary h-14 mx-auto  flex items-center relative">
        {activeIndex !== null && activeIndex !== -1 && (
          <div
            className="absolute -top-3 h-[55px] w-[55px] bg-light rounded-full transition-all duration-300 ease-in-out flex items-center justify-center"
            style={{
              left: `calc(${(100 / navLinks.length) * activeIndex}% + ${
                100 / navLinks.length / 2
              }% - 27.5px)`,
            }}
          >
            <div className="h-[45px] w-[45px] bg-primary rounded-full flex items-center justify-center">
              <Image
                src={navLinks[activeIndex].icon}
                width={20}
                height={20}
                alt={navLinks[activeIndex].label}
              />
            </div>
          </div>
        )}

        <ul className="flex items-center justify-between w-full z-10">
          {navLinks.map((link, index) => {
            const isActive =
              pathname === link.href ||
              (pathname.startsWith(link.href) && link.href !== "/");

            return (
              <Link
                href={link.href}
                key={link.label}
                className="relative flex justify-center items-center w-1/5 h-full"
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
