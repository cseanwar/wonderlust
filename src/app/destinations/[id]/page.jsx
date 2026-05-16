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
    `${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const destination = await res.json();

  const { imageUrl, price, destinationName, duration, country, description } =
    destination;

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center">
        <div>
          <Link href={"/destinations"}>
            <Button
              variant="ghost"
              className="text-[#6C696D] font-normal text-xl rounded-sm"
            >
              <BiArrowBack />
              Back to Destinations
            </Button>
          </Link>
        </div>
        <div className="flex  items-center gap-4 justify-end mt-5 mb-3">
          <EditModal destination={destination} />
          <DeleteAlert destination={destination} />
        </div>
      </div>

      {imageUrl?.trimStart() && (
        <Image
          className="w-full h-135 object-cover"
          alt={destinationName}
          src={imageUrl.trimStart()}
          height={500}
          width={800}
        />
      )}
      {/* <Image
        className="w-full h-135 object-cover"
        alt={destinationName}
        src={imageUrl}
        height={500}
        width={800}
      /> */}

      <Separator className="my-6" />

      <div className="flex justify-between">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 text-[#6C696D] text-base mb-4">
            <LuMapPin /> <span>{country}</span>
          </div>
          <div className="flex justify-between">
            <div>
              <div>
                <h2 className="text-6xl text-[#0C0B0B] mb-4">
                  {destinationName}
                </h2>
              </div>
              <div className="flex gap-2 items-center text-[#0C0B0B] text-lg">
                <PiCalendarBold /> {duration}
              </div>
            </div>
          </div>

          <h1 className="mt-10 text-[#0C0B0B] text-[32px] mb-1">Overview</h1>

          <p className="text-lg text-[#6C696D] leading-relaxed text-justify">
            {description}
          </p>
        </div>

        <BookingCard destination={destination} />
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
