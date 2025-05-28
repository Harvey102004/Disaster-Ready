"use client";

import Image from "next/image";
import BarangayDetails from "../components/BarangayDetails";
import { useState, useEffect } from "react";
import {
  BrgyHotlineProps,
  LocalHotlineProps,
} from "../../../types/emergency-resources";

const BarangayHotlines = ({ src, brgy, onclick }: BrgyHotlineProps) => {
  return (
    <div className="mx-auto w-[80%] cursor-pointer">
      <div className="relative flex items-center">
        <div className="relative z-20 ml-[-3px] h-16 w-16 rounded-full md:h-18 md:w-18">
          <Image
            src={`/emergency-resources-images/${src}.png`}
            fill
            alt=""
            className="object-contain"
          ></Image>
        </div>
        <div
          className="box-shadow-2 text-light absolute left-0 z-10 h-12 w-full overflow-hidden rounded-full md:h-14"
          onClick={onclick}
        >
          <div className="bg-primary absolute top-1/2 flex h-[85%] w-[85%] -translate-y-1/2 items-center rounded-full">
            <p className="ml-20 text-[9px] font-medium md:text-[10px]">
              Barangay {brgy}
            </p>
          </div>

          <div className="absolute top-1/2 right-4 h-3 w-3 -translate-y-1/2 md:h-3.5 md:w-3.5">
            <Image
              src={"/icons/go.png"}
              fill
              alt=""
              className="object-contain"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

const LocalHotlines = ({ src, name, bg, textColor }: LocalHotlineProps) => {
  return (
    <div className="mx-auto w-[80%] cursor-pointer">
      <div className="relative flex items-center">
        <div className="relative z-20 ml-[-3px] h-16 w-16 rounded-full md:h-18 md:w-18">
          <Image
            src={`/emergency-resources-images/${src}.png`}
            fill
            alt=""
            className="object-contain"
          ></Image>
        </div>
        <div className="box-shadow-2 text-light absolute left-0 z-10 h-12 w-full overflow-hidden rounded-full md:h-14">
          <div
            className="absolute top-1/2 flex h-[85%] w-[85%] -translate-y-1/2 items-center rounded-full"
            style={{ backgroundColor: bg }}
          >
            <p
              className="ml-20 text-[9px] font-medium md:text-[10px]"
              style={{ color: textColor }}
            >
              {name}
            </p>
          </div>

          <div className="absolute top-1/2 right-4 h-3 w-3 -translate-y-1/2 md:h-3.5 md:w-3.5">
            <Image
              src={"/icons/go.png"}
              fill
              alt=""
              className="object-contain"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function EmergencyResources() {
  const barangays = [
    { id: "1", image: "anos-logo", brgy: "Anos" },
    { id: "2", image: "batong-malake-logo", brgy: "Batong Malake" },
    { id: "3", image: "bayog-logo", brgy: "Bayog" },
    { id: "4", image: "bambang-logo", brgy: "Bambang" },
    { id: "5", image: "baybayin-logo", brgy: "Baybayin" },
    { id: "6", image: "bagong-silang-logo", brgy: "Bagong Silang" },
    { id: "7", image: "lalakay-logo", brgy: "Lalakay" },
    { id: "8", image: "maahas-logo", brgy: "Maahas" },
    { id: "9", image: "malinta-logo", brgy: "Malinta" },
    { id: "10", image: "mayondon-logo", brgy: "Mayondon" },
    { id: "11", image: "timugan-logo", brgy: "Timugan" },
    { id: "12", image: "tuntungin-logo", brgy: "Tuntungin Putho" },
    { id: "13", image: "tadlac-logo", brgy: "Tadlac" },
    { id: "14", image: "san-antonio-logo", brgy: "San Antonio" },
  ];

  const locals = [
    {
      image: "national",
      name: "National Emergency Hotline",
      background: "#AF0000",
      textColor: "#fff",
    },
    {
      image: "redcross",
      name: "Philippine Red Cross",
      background: "#E9252B",
      textColor: "#fff",
    },
    {
      image: "laguna",
      name: "Laguna Municipal Police",
      background: "#FFC000",
      textColor: "#051B9B",
    },
    {
      image: "bfp",
      name: "BFP R4A Los Baños Fire Station",
      background: "#332D59",
      textColor: "#fff",
    },
  ];

  const [openDetails, setOpenDetails] = useState<boolean>(false);
  const [selectedBrgyId, setSelectedBrgyId] = useState<string>("");

  const handleOpenDetails = () => {
    setOpenDetails((prev) => !prev);
  };

  return (
    <>
      {openDetails && (
        <BarangayDetails onclick={handleOpenDetails} brgyId={selectedBrgyId} />
      )}

      <div>
        <div className="flex flex-col items-center gap-5">
          <div className="relative h-24 w-56 md:h-36 md:w-72 lg:h-44 lg:w-80">
            <Image
              src={"/icons/logo_lb_dark.png"}
              fill
              alt=""
              className="object-contain"
            ></Image>
          </div>
          <p className="w-[75%] text-center text-[12px] md:max-w-[500px] md:text-sm lg:max-w-[650px] lg:text-base">
            In case of emergencies, contact the appropriate authorities
            immediately. Below are the important emergency hotlines available
            for assistance:
          </p>

          <h1 className="mt-10 text-sm font-bold md:text-base">
            Barangay Emergency Hotlines
          </h1>
        </div>

        <div className="mx-auto mt-12 flex max-w-[1200px] flex-col gap-5 md:mt-16 md:grid md:w-[90%] md:grid-cols-2 md:gap-y-8 lg:grid-cols-3">
          {barangays.map((b, i) => (
            <BarangayHotlines
              key={i}
              src={b.image}
              brgy={b.brgy}
              onclick={() => {
                setSelectedBrgyId(b.id), handleOpenDetails();
              }}
            ></BarangayHotlines>
          ))}
        </div>

        <h1 className="mt-16 text-center text-sm font-bold md:text-base">
          Local Emergency Hotlines
        </h1>

        <div className="justify mx-auto mt-12 flex max-w-[1200px] flex-col gap-5 md:mt-16 md:grid md:w-[90%] md:grid-cols-2 md:gap-y-8 lg:grid-cols-3">
          {locals.map((b, i) => (
            <LocalHotlines
              key={i}
              src={b.image}
              name={b.name}
              bg={b.background}
              textColor={b.textColor}
            ></LocalHotlines>
          ))}
        </div>
      </div>
    </>
  );
}
