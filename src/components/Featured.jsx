import { Button } from "@heroui/react";
import DestinationCard from "./DestinationCard";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Featured = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`);
  const destinations = await res.json();
  console.log(destinations);
  return (
    <div className="my-10 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-6xl text-[#0C0B0B] font-normal mb-2">Featured Destinations</h1>
          <p className="text-[#6C696D] text-lg">
            Handpicked travel experiences for the adventure seekers
          </p>
        </div>

        <Link href={"/destinations"}>
          {" "}
          <Button
            variant="outline"
            className={"rounded-none px-6 py-6 border-[#15A1BF] border-2 text-[#15A1BF]"}
          >
            ALL DESTINATIONS
            <FaArrowRightLong />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-5 mt-10">
        {destinations.map((destination) => (
          <DestinationCard key={destination._id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
