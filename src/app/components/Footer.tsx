import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark t relative mt-20 w-full pb-4 md:mt-32 md:p-5 md:pb-10">
      <div className="flex max-w-[1500px] flex-col items-center md:flex-row md:justify-around">
        <div className="relative h-20 w-[200px] md:h-44 md:w-[350px]">
          <Image
            src={"/icons/lb-logo.png"}
            fill
            alt="lb-logo"
            className="object-contain"
          ></Image>
        </div>
        <div className="text-light flex flex-col gap-3 md:gap-4">
          <div className="flex items-center gap-3">
            <p className="text-[10px] md:text-[14px]">Get in touch</p>
            <div className="flex items-center gap-1 md:gap-2">
              <div className="relative h-3.5 w-3.5 md:h-5 md:w-5">
                <a href="https://www.facebook.com/elbilagunaph/?locale=tl_PH">
                  <Image
                    src={"/icons/facebook_light.png"}
                    fill
                    alt="fb"
                  ></Image>
                </a>
              </div>
              <div className="relative h-3.5 w-3.5 md:h-5 md:w-5">
                <a href="mailto:lbmunicipality@gmail.com">
                  <Image
                    src={"/icons/email_light.png"}
                    fill
                    alt="email"
                  ></Image>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 text-[8px] md:gap-3.5 md:text-[12px]">
            <div className="flex items-center gap-1.5 md:gap-3">
              <div className="relative h-3 w-3 md:h-5 md:w-5">
                <Image src={"/icons/location.png"} fill alt="location"></Image>
              </div>
              <p>Barangay Timugan, Los Baños, Philippines, 4030</p>
            </div>
            <div className="flex items-center gap-1.5 md:gap-3">
              <div className="relative h-3 w-3 md:h-5 md:w-5">
                <Image src={"/icons/phone.png"} fill alt="phone"></Image>
              </div>
              <p>(049) 530-2589</p>
            </div>
            <div className="flex items-center gap-1.5 md:gap-3">
              <div className="relative h-3 w-3 md:h-5 md:w-5">
                <Image src={"/icons/web.png"} fill alt="website"></Image>
              </div>

              <a href="https://losbanos.gov.ph/">
                <p>losbanos.gov.ph</p>
              </a>
            </div>
          </div>

          <div className="mt-3 text-center text-[6px] md:absolute md:bottom-3 md:left-1/2 md:-translate-x-1/2 md:text-[9px]">
            <p>&copy; Disaster Map Evacuation System. </p>
            <p>All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
