"use client";

import Image from "next/image";
import NavBar from "@/components/NavBar";
import InfoCard from "@/components/InfoCard";
import { Button } from "@/components/ui/button";

import { cardData } from "@/data/cardData";
import OpenIcon from "@mui/icons-material/OpenInNew";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { TypeAnimation } from "react-type-animation";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import PublicIcon from "@mui/icons-material/Public";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { ReactNode } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center text-slate-700">
        <NavBar />
        <div className="flex flex-col gap-6 mx-12 mt-14 justify-center items-center align-top">
          <div className="flex flex-row items-center justify-center min-w-[448px]">
            <div className="text-5xl font-bold whitespace-nowrap">
              Where are my&nbsp;
            </div>
            {<ExampleComponent />}
          </div>

          <p className="mb-2 mt-2 text-xl text-slate-500 max-w-xl text-center">
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
                <button className="px-6 py-2 text-lg font-semibold text-white transition duration-200 ease-in-out bg-green-700 border-solid border-2 hover:border-green-600 hover:bg-green-600 border-green-700 rounded-md  hover:custom-scale-102">
                  Go to Ranch
                </button>{" "}
              </Link>

              <p className="mt-1 italic text-sm text-gray-500">
                Already a customer?
              </p>
            </div>

            <ContactUsButton>
              <button className="px-6 py-2 ml-4 text-lg font-semibold  text-green-700 transition duration-200 border-solid border-2 border-green-700 ease-in-out bg-transparent hover:bg-gray-100 rounded-md hover:bg-gray-100 hover:custom-scale-102">
                Contact Us
              </button>
            </ContactUsButton>
          </div>
        </div>
        <div className="-mt-48 -mb-28 -z-50">
          <YourComponent />
        </div>

        <div className="flex flex-col items-center justify-center gap-10  mx-12">
          <div className="text-5xl font-semibold">We've got you covered.</div>
          <div className="lg:px-12 pb-16 grid text-center grid-cols-2 gap-3 lg:max-w-5xl lg:mb-0 lg:grid-cols-3">
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
            © 2023 MicroTraks, Inc.
          </a>
        </div>
      </main>
      <Toaster />
    </>
  );
}

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "kudu?",
        2400, // wait 1s before replacing "Mice" with "Hamsters"
        "gemsbock?",
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
      wrapper="strong"
      // speed= {{type: 'keyStrokeDelayInMs', value: 100}}
      speed={8}
      className="text-5xl font-bold whitespace-nowrap text-green-700"
      repeat={Infinity}
      cursor={true}
      preRenderFirstString={true}
    />
  );
};

const YourComponent = () => {
  return (
    <div className="relative">
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

type ContactUsButtonProps = {
  children: ReactNode;
};

export function ContactUsButton({ children }: ContactUsButtonProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div>{children}</div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center text-2xl">
            We'd love to hear from you
          </AlertDialogTitle>
          <AlertDialogDescription className="flex justify-center">
            <ContactInfo />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Done</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

const ContactInfo = () => {
  const { toast } = useToast();

  return (
    <div className="flex flex-col space-y-2 my-4 text-lg">
      <div className="flex items-center space-x-2">
        <a
          href="https://www.microtraks.com/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          <PublicIcon className="text-green-700" />
          <button>microtraks.com/contact</button>
        </a>
      </div>
      <div className="flex items-center space-x-2">
        <CallIcon className="text-green-700" />
        <CopyToClipboard
          text="(443) 995-8658"
          onCopy={() => {
            toast({
              title: "Phone number copied to clipboard",
            });
          }}
        >
          <button>(443) 995-8658</button>
        </CopyToClipboard>
      </div>
      <div className="flex items-center space-x-2">
        <EmailIcon className="text-green-700" />
        <CopyToClipboard
          text="sales@microtraks.com"
          onCopy={() => {
            toast({
              title: "Email copied to clipboard",
            });
          }}
        >
          <button>sales@microtraks.com</button>
        </CopyToClipboard>
      </div>
    </div>
  );
};
