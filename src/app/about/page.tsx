import Image from "next/image";

type CardProps = {
  src: string;
  alt: string;
  title: string;
  text: string;
};

const CardAbout = ({ src, alt, title, text }: CardProps) => {
  return (
    <div className="flex max-w-[125px] flex-col gap-1.5 md:max-w-[180px] md:gap-2">
      <div className="relative mb-2 h-6 w-6 md:mb-3 md:h-8 md:w-8">
        <Image src={src} alt={alt} fill className="object-contain" />
      </div>
      <p className="text-[12px] font-bold text-nowrap md:text-[14px]">
        {title}
      </p>
      <p className="text-[10px] md:text-[12px]">{text}</p>
    </div>
  );
};

export default function About() {
  const aboutCardMessage = [
    {
      src: "/icons/route.png",
      width: 25,
      height: 25,
      alt: "route",
      title: "Emergency Routes",
      text: "Quickly find the safest way to get to evacuation centers with routes that help you avoid blocked roads or dangerous areas.",
    },
    {
      src: "/icons/announce.png",
      width: 25,
      height: 25,
      alt: "announce",
      title: "News & Updates",
      text: "Stay alert and prepared by keeping up with real-time news and updates about ongoing disasters.",
    },
    {
      src: "/icons/evacuation.png",
      width: 25,
      height: 25,
      alt: "evacuation",
      title: "Evacuation Center",
      text: "Know the safe places to stay, including clear directions and contact details.",
    },
    {
      src: "/icons/donate.png",
      width: 25,
      height: 25,
      alt: "donate",
      title: "Donate",
      text: "Donate to help those affected by disasters and provide them with the assistance they need to recover.",
    },
    {
      src: "/icons/relief.png",
      width: 25,
      height: 25,
      alt: "relief",
      title: "Relief Distribution",
      text: "Get the latest information on when and where relief goods will be distributed",
    },
  ];

  return (
    <div className="md:mt-20">
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-15 lg:gap-20">
        <div className="order-2 flex max-w-[300px] flex-col gap-4 text-center md:order-1 md:max-w-[450px] md:gap-3 md:text-start lg:max-w-[650px] lg:gap-5">
          <h1 className="text-primary text-xl font-extrabold md:text-3xl lg:text-4xl">
            About DisasterReady
          </h1>

          <p className="text-md lg:text-md text-xs leading-5 text-wrap md:text-sm">
            Disaster Ready! is here to help keep the people of Los Baños safe.
            We provide real-time updates about disasters, safe routes, and where
            to find evacuation centers. Our goal is to make sure everyone has
            quick and easy access to important information during emergencies.
          </p>
        </div>
        <div className="bg-primary box-shadow relative order-1 h-40 w-40 shrink-0 rounded-full md:order-2 md:h-60 md:w-60 lg:h-80 lg:w-80">
          <div className="absolute bottom-0 -left-5 z-20 h-28 w-28 md:-left-5 md:h-40 md:w-40 lg:-left-10 lg:h-60 lg:w-60">
            <Image
              src={"/icons/about-search.png"}
              fill
              alt="magnifying-glass"
              className="object-contain"
            ></Image>
          </div>
          <Image
            src={"/icons/about-map.png"}
            fill
            alt="map"
            className="rounded-full object-cover"
          />
        </div>
      </div>
      <div className="mx-auto mt-14 flex w-[90%] max-w-[1100px] flex-wrap justify-around gap-y-10 md:mt-25 lg:mt-32">
        {aboutCardMessage.map((mess, index) => (
          <CardAbout
            key={index}
            src={mess.src}
            alt={mess.alt}
            title={mess.title}
            text={mess.text}
          />
        ))}
      </div>
    </div>
  );
}
