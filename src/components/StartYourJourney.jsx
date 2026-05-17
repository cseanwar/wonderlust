import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const StartYourJourney = () => {
  return (
    <div className="bg-[url('/assets/CTA.png')] bg-cover bg-center w-full min-h-72 md:min-h-96 lg:h-110">
      <div className="w-full h-full min-h-72 md:min-h-96 lg:min-h-110 bg-[linear-gradient(to_right,#1A1A1A_0%,#1A1A1A66_33%,#1A1A1A66_46%,#1A1A1A_100%)] flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-30 text-center">
        <h1 className="text-[#FFFFFF] text-3xl md:text-5xl lg:text-6xl mb-3 leading-tight w-full">
          Ready to Start Your Journey?
        </h1>
        <p className="text-[#EDFCFF] text-base md:text-lg mb-8 md:mb-10 w-full max-w-xl">
          Join thousands of travelers who have discovered the world with us
        </p>
        <Link href="/destinations">
          <Button
            variant="tertiary"
            className="rounded-none bg-[#FFFFFF] hover:bg-gray-300 flex gap-4 py-5 md:py-6 px-6 md:px-8 text-sm md:text-base"
          >
            BOOK YOUR TRIP TODAY <FaArrowRightLong />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default StartYourJourney;