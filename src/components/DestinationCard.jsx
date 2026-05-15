import { Button } from "@heroui/react";
import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";
import { PiCalendarBold } from "react-icons/pi";
const DestinationCard = ({ destination }) => {
  const { _id, imageUrl, price, destinationName, duration, country } = destination;

  return (
    <div className="shadow-sm">
      <Image
        className="h-57.75 mb-6 object-cover"
        alt={destinationName}
        src={imageUrl?.trimStart()}
        height={400}
        width={400}
      />

      <div className="px-2">
        <div className="flex items-center gap-1 text-[#6C696D] text-base mb-3">
          <LuMapPin /> <span>{country}</span>
        </div>
        <div className="flex justify-between mb-4">
          <div>
            <div className="mb-3">
              <h2 className="text-2xl font-medium text-[#0C0B0B]">{destinationName}</h2>
            </div>
            <div className="flex gap-1 items-center text-[#6C696D] font-medium text-base">
              <PiCalendarBold /> {duration}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium text-[#0C0B0B]">${price}<span className="text-[#6C696D] text-sm">/person</span></h3>
          </div>
        </div>
        <Link href={`/destinations/${_id}`}><Button variant="ghost" className={'text-[#15A1BF] font-medium text-base mb-2 rounded-sm'}>Book Now <RiArrowRightUpLine /></Button></Link>
      </div>
    </div>
  );
};

export default DestinationCard;