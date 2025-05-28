"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

type IconGuidePops = {
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
};

const MapView = dynamic(() => import("../components/MapView"), {
  ssr: false,
});

// ICON GUIDE COMPONENTS

const IconGuide = ({ src, width, height, alt, title }: IconGuidePops) => {
  return (
    <div className="border-primary flex h-full w-auto flex-shrink-0 items-center justify-center gap-2 rounded-full border px-3">
      <Image src={src} width={width} height={height} alt={alt} />
      <p className="text-[7px]">{title}</p>
    </div>
  );
};

export default function RealtimeUpdates() {
  const allIconGuides = [
    {
      src: "/map-icon/evacuation.png",
      width: 15,
      height: 15,
      alt: "evacuation center",
      title: "Evacuation Center",
    },
    {
      src: "/map-icon/stop.png",
      width: 20,
      height: 20,
      alt: "road blockage",
      title: "Road Blockage",
    },
    {
      src: "/map-icon/tree.png",
      width: 20,
      height: 20,
      alt: "fallen tree",
      title: "Fallen Tree",
    },
    {
      src: "/map-icon/flood.png",
      width: 20,
      height: 20,
      alt: "flood",
      title: "Flood",
    },
  ];

  return (
    <div className="md flex flex-col gap-4 md:gap-7">
      <div className="mx-auto flex w-[80%] flex-col gap-1.5 text-center md:gap-3">
        <h1 className="text-primary text-sm font-bold md:mt-4 md:text-lg lg:text-2xl">
          LosBaños Guide Map
        </h1>
        <p className="text-[9px] md:text-sm">
          Stay updated with real-time info on road blockages, floods, fallen
          trees, hospitals, and evacuation centers.
        </p>
      </div>
      <div className="box-shadow mx-auto h-[50vh] w-full overflow-hidden md:h-[60vh] md:w-[70%] md:rounded-2xl">
        <MapView />
      </div>
      <div className="hide-scrollbar flex h-10 w-full flex-nowrap gap-1.5 overflow-x-auto px-2 pb-2">
        {allIconGuides.map((icons) => (
          <IconGuide
            key={icons.title}
            src={icons.src}
            width={icons.width}
            height={icons.height}
            alt={icons.alt}
            title={icons.title}
          />
        ))}
      </div>
    </div>
  );
}
