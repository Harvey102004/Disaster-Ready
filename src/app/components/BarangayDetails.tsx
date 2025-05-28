"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ContactInfoBrgy,
  BrgyDetails,
} from "../../../types/emergency-resources";

export default function BarangayDetails({ onclick, brgyId }: BrgyDetails) {
  // LALAGYAN NG DATA NG CONTACT INFO PER BRGY

  const [brgyContactInfo, setBrgyContactInfo] =
    useState<ContactInfoBrgy | null>(null);

  // VARIABLE TO PARA SA PROPS NA IPAPASA PARA PANG FETCH

  const barangayId = brgyId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://192.168.137.1:3001/barangay_contact/${barangayId}`,
        );
        const data: ContactInfoBrgy = await res.json();
        setBrgyContactInfo(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (barangayId) fetchData();
  }, [barangayId]);

  // PARA HINDI MAG SCROLL YUNG PAGE PAG ACTIVE YUNG DETAILS

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="bg-labo fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-light box-shadow relative flex w-[90%] flex-col items-center gap-7 rounded-2xl px-5 py-8 pb-12 md:max-w-[500px] md:px-8">
        <div className="absolute top-5 right-5" onClick={onclick}>
          <div className="relative h-2.5 w-2.5 cursor-pointer">
            <Image
              src={"/icons/close_blue.png"}
              fill
              alt=""
              className="object-contain"
            ></Image>
          </div>
        </div>
        <h1 className="text-primary text-xs font-bold md:text-base">
          Barangay Contact Information
        </h1>
        <div className="flex w-full flex-col gap-5">
          <div className="flex items-center justify-between text-[10px] md:text-sm">
            <div className="flex items-center gap-2 md:gap-5">
              <div className="relative h-3.5 w-3.5 md:h-6 md:w-6">
                <Image
                  src={"/icons/home_blue.png"}
                  fill
                  alt=""
                  className="object-contain"
                ></Image>
              </div>
              <p>Barangay name:</p>
            </div>
            <p className="font-medium">
              {brgyContactInfo ? brgyContactInfo.brgy_name : "Loading..."}
            </p>
          </div>

          <div className="flex items-center justify-between text-[10px] md:text-sm">
            <div className="flex items-center gap-2 md:gap-5">
              <div className="relative h-3.5 w-3.5 md:h-6 md:w-6">
                <Image
                  src={"/icons/phone_blue.png"}
                  fill
                  alt=""
                  className="object-contain"
                ></Image>
              </div>
              <p> Contact number:</p>
            </div>
            <p className="font-medium">
              {brgyContactInfo ? brgyContactInfo?.phone : "Loading..."}
            </p>
          </div>

          <div className="flex items-center justify-between text-[10px] md:text-sm">
            <div className="flex items-center gap-2 md:gap-5">
              <div className="relative h-3.5 w-3.5 md:h-6 md:w-6">
                <Image
                  src={"/icons/landline_blue.png"}
                  fill
                  alt=""
                  className="object-contain"
                ></Image>
              </div>
              <p> Landline:</p>
            </div>
            <p className="font-medium">
              {brgyContactInfo ? brgyContactInfo?.landline : "Loading..."}
            </p>
          </div>

          <div className="flex items-center justify-between text-[10px] md:text-sm">
            <div className="flex items-center gap-2 md:gap-5">
              <div className="relative h-3.5 w-3.5 md:h-6 md:w-6">
                <Image
                  src={"/icons/email_blue.png"}
                  fill
                  alt=""
                  className="object-contain"
                ></Image>
              </div>
              <p> Email:</p>
            </div>
            <p className="font-medium">
              {brgyContactInfo ? brgyContactInfo?.email : "Loading..."}{" "}
            </p>
          </div>

          <div className="flex items-center justify-between text-[10px] md:text-sm">
            <div className="flex items-center gap-2 md:gap-5">
              <div className="relative h-3.5 w-3.5 md:h-6 md:w-6">
                <Image
                  src={"/icons/facebook_blue.png"}
                  fill
                  alt=""
                  className="object-contain"
                ></Image>
              </div>
              <p> Facebook Page:</p>
            </div>
            <a
              className="text-primary font-medium"
              href={brgyContactInfo?.fb_page}
            >
              Visit Page
            </a>
          </div>

          <div className="flex items-center justify-between text-[10px] md:text-sm">
            <div className="flex items-center gap-2 md:gap-5">
              <div className="relative h-3.5 w-3.5 md:h-6 md:w-6">
                <Image
                  src={"/icons/user_blue.png"}
                  fill
                  alt=""
                  className="object-contain"
                ></Image>
              </div>
              <p> Barangay Captaion:</p>
            </div>
            <p className="font-medium">
              {brgyContactInfo ? brgyContactInfo?.captain : "Loading..."}
            </p>
          </div>

          <div className="flex items-center justify-between text-[10px] md:text-sm">
            <div className="flex items-center gap-2 md:gap-5">
              <div className="relative h-3.5 w-3.5 md:h-6 md:w-6">
                <Image
                  src={"/icons/user_blue.png"}
                  fill
                  alt=""
                  className="object-contain"
                ></Image>
              </div>
              <p> Barangay Secretary:</p>
            </div>
            <p className="font-medium">
              {brgyContactInfo ? brgyContactInfo?.secretary : "Loading..."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
