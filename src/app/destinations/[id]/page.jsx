import BookingCard from "@/components/BookingCard";
import { DeleteAlert } from "@/components/DeleteAlert";
import { EditModal } from "@/components/EditModal";
import { headers } from "next/headers";
import { Button, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import { LuMapPin } from "react-icons/lu";
import { PiCalendarBold } from "react-icons/pi";
import { auth } from "@/lib/auth";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/destinations/${id}`,
    {
      headers: { authorization: `Bearer ${token}` },
    },
  );
  const destination = await res.json();

  const { imageUrl, price, destinationName, duration, country, description } =
    destination;

  return (
    <div className="w-full px-4 lg:px-0 lg:container lg:mx-auto py-8 md:py-10">

      {/* Top bar */}
      <div className="flex flex-wrap justify-between items-center gap-3 mb-4">
        <Link href="/destinations">
          <Button
            variant="ghost"
            className="text-[#6C696D] font-normal text-base md:text-xl rounded-sm px-0"
          >
            <BiArrowBack />
            Back to Destinations
          </Button>
        </Link>
        <div className="flex items-center gap-3">
          <EditModal destination={destination} />
          <DeleteAlert destination={destination} />
        </div>
      </div>

      {/* Hero image */}
      {imageUrl?.trimStart() && (
        <div className="relative w-full h-52 sm:h-72 md:h-96 lg:h-[500px] mb-4">
          <Image
            className="object-cover"
            alt={destinationName}
            src={imageUrl.trimStart()}
            fill
            sizes="100vw"
          />
        </div>
      )}

      <Separator className="my-4 md:my-6" />

      {/* Content — stacks on mobile, side by side on lg */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8">

        {/* Left: details */}
        <div className="w-full lg:max-w-3xl">
          <div className="flex items-center gap-2 text-[#6C696D] text-sm md:text-base mb-4">
            <LuMapPin className="shrink-0" />
            <span>{country}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0C0B0B] leading-tight">
            {destinationName}
          </h2>

          <div className="flex gap-2 items-center text-[#0C0B0B] text-base md:text-lg mb-10">
            <PiCalendarBold className="shrink-0" /> {duration}
          </div>

          <h3 className="text-[#0C0B0B] text-2xl md:text-[32px] mb-2">
            Overview
          </h3>
          <p className="text-base md:text-lg text-[#6C696D] leading-relaxed text-justify">
            {description}
          </p>
        </div>

        {/* Right: booking card */}
        <div className="w-full lg:w-80 shrink-0">
          <BookingCard destination={destination} />
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;