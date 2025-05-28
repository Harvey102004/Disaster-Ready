import "./globals.css";
import NavDesktop from "./components/NavDesktop";

import { Poppins } from "next/font/google";
import NavMobile from "./components/NavMobile";
import SidebarMobile from "./components/SidebarMobile";
import Footer from "./components/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-light pt-5 pb-20 md:pt-0 md:pb-0`}
      >
        <header>
          <NavDesktop />
          <NavMobile />
          <SidebarMobile />
        </header>

        {children}

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
