"use client";

import InfoCard from "@/components/InfoCard";
import NavBar from "@/components/NavBar";

import { Toaster } from "@/components/ui/toaster";
import { cardData } from "@/data/cardData";

import { TypeAnimation } from "react-type-animation";

import Link from "next/link";
import { ContactUsButton } from "../components/ContactUsButton";
import CallMadeIcon from '@mui/icons-material/CallMadeRounded';
import East from '@mui/icons-material/EastRounded';
export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center text-slate-700">
        <NavBar />
        <div className="flex flex-col gap-3 sm:gap-6 mx-12 mt-6 sm:mt-14 justify-center items-center align-top">
          <div
            className="flex flex-col md:flex-row items-center justify-center md:min-w-[448px]
          font-bold text-4xl sm:text-5xl 2xl:text-6xl"
          >
            <div className="whitespace-nowrap">Where are my&nbsp;</div>
            {<ExampleComponent />}
          </div>

          <p className="mb-2 mt-2 text-md sm:text-xl text-slate-500 max-w-xl text-center">
            Track your animals and monitor the status of your ranch like never
            before with <b>MicroTraks Ranch.</b>
          </p>
          <div className="flex flex-row items-start justify-center ">
            <div className="flex flex-col items-center justify-center ">
              <Link
                href="https://app.microtraksranch.com/"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <button className="px-2 sm:px-4 py-2 text-lg font-semibold text-white transition duration-200 ease-in-out bg-green-700 border-solid border-2 hover:border-green-600 hover:bg-green-600 border-green-700 rounded-md  hover:custom-scale-102">
                  <div className="flex flex-row gap-1 items-center justify-center">
                    <div>Go to Ranch</div>
                    <CallMadeIcon fontSize="small" />

                  </div>
                </button>
              </Link>

              <p className="mt-1 italic text-sm text-gray-500">
                Already a customer?
              </p>
            </div>

            <ContactUsButton>
              <button className="px-2 sm:px-6 py-2 ml-4 text-lg font-semibold  text-green-700 transition duration-200 border-solid border-2 border-green-700 ease-in-out bg-transparent hover:bg-gray-100 rounded-md hover:bg-gray-100 hover:custom-scale-102">
                Contact Us
              </button>
            </ContactUsButton>
          </div>
        </div>
        <div className="-mt-10 -mb-6 md:-mt-32 md:-mb-20 lg:-mt-56 lg:-mb-28 xl:-mt-72 2xl:-mt-96 2xl:-mb-36 -z-50 w-full">
          <YourComponent />
        </div>

        <div className="flex flex-col items-center justify-center gap-10  mx-3 sm:mx-8">
          <div className="text-3xl sm:text-4xl  md:text-[44px]  2xl:text-6xl font-semibold text-center">
            We&apos;ve got you covered.
          </div>
          <div className="lg:px-12 pb-16 grid text-center grid-cols-2 gap-3 2xl:gap-12 lg:max-w-5xl xl:max-w-6xl md:grid-cols-3">
            {cardData.map((card) => (
              <InfoCard
                key={card.title}
                title={card.title}
                description={card.description}
                content={card.content}
                footer={card.footer}
                icon={card.icon}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-2 mb-4">
          <a
            className="text-sm text-gray-500 hover:text-gray-700"
            href="https://www.microtraks.com"
          >
            © 2024 MicroTraks, Inc.
          </a>
        </div>
      </main>
      <Toaster />
    </>
  );
}

/**
 *
Location Tracking:
Automatically collect...

Historical Data:
Actively monitor animals at water and feed stations, for example, with mesh zones created by MicroTraks receivers

Ranch sensors:
Monitor your ranch infrastructure remotely with MicroTraks' line of sensors, including water and gate
 */

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "gemsbok?",
        2400, // wait 1s before replacing "Mice" with "Hamsters"
        "kudu?",
        2400,
        "cape buffalo?",
        2400,
        "addax?",
        2400,
        "zebras?",
        2400,
        "oryx?",
        2400,
        "animals?",
        6000,
      ]}
      wrapper="span"
      // speed= {{type: 'keyStrokeDelayInMs', value: 100}}
      speed={8}
      className="whitespace-nowrap text-green-700"
      repeat={Infinity}
      cursor={true}
      preRenderFirstString={true}
    />
  );
};

const YourComponent = () => {
  return (
    <div className="relative w-full">
      <img
        src="/oryx_copy.jpg"
        alt="Oryx in a field"
        width={1920}
        height={1080}
        className="w-full h-full"
      />

      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 gradient-overlay"></div>
    </div>
  );
};
