import { Button } from "@heroui/react";
import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";
import { PiCalendarBold } from "react-icons/pi";

const DestinationCard = ({ destination }) => {
  const { _id, imageUrl, price, destinationName, duration, country } = destination;

  return (
    <div className="shadow-sm w-full overflow-hidden">
      {/* Image */}
      <div className="relative w-full h-48 sm:h-52 md:h-56 lg:h-60">
        <Image
          className="object-cover"
          alt={destinationName}
          src={imageUrl?.trimStart()}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="px-3 pt-4 pb-2">
        <div className="flex items-center gap-1 text-[#6C696D] text-sm md:text-base mb-2">
          <LuMapPin className="shrink-0" />
          <span className="truncate">{country}</span>
        </div>

        <div className="flex justify-between items-start gap-2 mb-3">
          <div className="min-w-0 flex-1">
            <h2 className="text-lg md:text-xl font-medium text-[#0C0B0B] truncate">
              {destinationName}
            </h2>
            <div className="flex gap-1 items-center text-[#6C696D] text-sm mt-1">
              <PiCalendarBold className="shrink-0" />
              <span>{duration}</span>
            </div>
          </div>

          <div className="shrink-0 text-right">
            <h3 className="text-lg md:text-xl font-medium text-[#0C0B0B]">
              ${price}
              <span className="text-[#6C696D] text-xs">/person</span>
            </h3>
          </div>
        </div>

        <Link href={`/destinations/${_id}`}>
          <Button
            variant="ghost"
            className="text-[#15A1BF] font-medium text-sm md:text-base mb-1 rounded-sm px-0"
          >
            Book Now <RiArrowRightUpLine />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;