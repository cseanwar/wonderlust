import { Button } from "@heroui/react";
import DestinationCard from "./DestinationCard";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Featured = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`);
  const destinations = await res.json();

  return (
    <div className="my-10 px-4 lg:px-0 lg:max-w-7xl lg:mx-auto">

      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#0C0B0B] font-normal mb-2">
            Featured Destinations
          </h1>
          <p className="text-[#6C696D] text-base md:text-lg">
            Handpicked travel experiences for the adventure seekers
          </p>
        </div>

        <Link href={"/destinations"} className="shrink-0">
          <Button
            variant="outline"
            className="rounded-none px-6 py-6 border-[#15A1BF] border-2 text-[#15A1BF] w-full sm:w-auto"
          >
            ALL DESTINATIONS
            <FaArrowRightLong />
          </Button>
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
        {destinations.map((destination) => (
          <DestinationCard key={destination._id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default Featured;