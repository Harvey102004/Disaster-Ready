"use client";

import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Home() {
  const heroPageNews = [
    {
      img: "/home-images/image1.png",
      text: ` Base sa pinakahuling ulat ng DOST-PAGASA (November 16, 2024, 8PM)
            nakataas ang TCWS No. 3 sa hilagang-silangang bahagi ng Laguna
            (Santa Maria, Famy, Mabitac, Pangil, Pakil, Siniloan, Paete,
            Kalayaan, Lumban, Cavinti). Samantalang TCWS No. 2 naman sa
            natitirang bahagi ng lalawigan.Base sa pinakahuling ulat ng
            DOST-PAGASA (November 16, 2024, 8PM) nakataas ang TCWS No. 3 sa
            hilagang-silangang bahagi ng Laguna (Santa Maria, Famy, Mabitac,
            Pangil, Pakil, Siniloan, Paete, Kalayaan, Lumban, Cavinti).
            Samantalang TCWS No. 2 naman sa natitirang bahagi ng lalawigan.`,
    },
    {
      img: "/home-images/image2.png",
      text: `Base sa pinakahuling ulat ng DOST-PAGASA (November 16, 2024, 8PM)
            nakataas ang TCWS No. 3 sa hilagang-silangang bahagi ng Laguna
            (Santa Maria, Famy, Mabitac, Pangil, Pakil, Siniloan, Paete,
            Kalayaan, Lumban, Cavinti). Samantalang TCWS No. 2 naman sa
            natitirang bahagi ng lalawigan.Base sa pinakahuling ulat ng
            DOST-PAGASA (November 16, 2024, 8PM) nakataas ang TCWS No. 3 sa
            hilagang-silangang bahagi ng Laguna (Santa Maria, Famy, Mabitac,
            Pangil, Pakil, Siniloan, Paete, Kalayaan, Lumban, Cavinti).
            Samantalang TCWS No. 2 naman sa natitirang bahagi ng lalawigan.`,
    },
    {
      img: "/home-images/image3.png",
      text: `Base sa pinakahuling ulat ng DOST-PAGASA (November 16, 2024, 8PM)
            nakataas ang TCWS No. 3 sa hilagang-silangang bahagi ng Laguna
            (Santa Maria, Famy, Mabitac, Pangil, Pakil, Siniloan, Paete,
            Kalayaan, Lumban, Cavinti). Samantalang TCWS No. 2 naman sa
            natitirang bahagi ng lalawigan.Base sa pinakahuling ulat ng
            DOST-PAGASA (November 16, 2024, 8PM) nakataas ang TCWS No. 3 sa
            hilagang-silangang bahagi ng Laguna (Santa Maria, Famy, Mabitac,
            Pangil, Pakil, Siniloan, Paete, Kalayaan, Lumban, Cavinti).
            Samantalang TCWS No. 2 naman sa natitirang bahagi ng lalawigan.`,
    },
    {
      img: "/home-images/image4.png",
      text: `Base sa pinakahuling ulat ng DOST-PAGASA (November 16, 2024, 8PM)
            nakataas ang TCWS No. 3 sa hilagang-silangang bahagi ng Laguna
            (Santa Maria, Famy, Mabitac, Pangil, Pakil, Siniloan, Paete,
            Kalayaan, Lumban, Cavinti). Samantalang TCWS No. 2 naman sa
            natitirang bahagi ng lalawigan.Base sa pinakahuling ulat ng
            DOST-PAGASA (November 16, 2024, 8PM) nakataas ang TCWS No. 3 sa
            hilagang-silangang bahagi ng Laguna (Santa Maria, Famy, Mabitac,
            Pangil, Pakil, Siniloan, Paete, Kalayaan, Lumban, Cavinti).
            Samantalang TCWS No. 2 naman sa natitirang bahagi ng lalawigan.`,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 20000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <div className="relative mt-6 h-auto w-full lg:mt-0">
        <div className="absolute">
          <div className="relative top-3 left-3 z-40 h-8 w-40 md:h-12 md:w-64 lg:top-5 lg:h-14 lg:w-80">
            <Image
              src={"/icons/lb-logo.png"}
              fill
              alt=""
              className="object-contain"
            />
          </div>
        </div>
        <button className="bg-primary absolute top-1/2 left-1/2 z-40 -translate-1/2 rounded-full px-4 py-2 text-[9px] text-white md:px-6 md:py-4 md:text-xs">
          Donate Now!
        </button>
        <div className="h-full w-full">
          <Slider {...settings}>
            {heroPageNews.map((news, i) => {
              return (
                <div
                  className="relative z-20 h-72 w-full md:h-[500px] lg:h-[550px]"
                  key={i}
                >
                  <div className="bg-labo-3 absolute top-0 left-0 z-30 h-full w-full"></div>
                  <Image
                    src={news.img}
                    fill
                    alt=""
                    className="object-cover"
                  ></Image>

                  <div className="absolute bottom-3 z-40 max-h-18 w-full overflow-y-auto px-3 text-[8px] text-white md:max-h-24 md:text-xs lg:max-h-32 lg:text-base">
                    <p className="text-align-center">{news.text}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>

      <h2 className="text-primary mt-18 text-center text-sm font-bold md:mt-20 md:text-base lg:text-xl">
        Latest Updates
      </h2>
    </>
  );
}
