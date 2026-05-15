import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const StartYourJourney = () => {
  return (
    <div className="bg-[url('/assets/CTA.png')] bg-cover bg-center w-full h-110">
      <div className="w-full h-full bg-[linear-gradient(to_right,#1A1A1A_0%,#1A1A1A66_33%,#1A1A1A66_46%,#1A1A1A_100%)] flex flex-col justify-center items-center py-30">
        <h1 className="text-[#FFFFFF] text-6xl mb-3">
          Ready to Start Your Journey?
        </h1>
        <p className="text-[#EDFCFF] text-lg mb-10">
          Join thousands of travelers who have discovered the world with us
        </p>
        <Link href={'/destinations'}>
          <Button
            variant="tertiary"
            className="rounded-none bg-[#FFFFFF] hover:bg-gray-300"
          >
            BOOK YOUR TRIP TODAY <FaArrowRightLong />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default StartYourJourney;
