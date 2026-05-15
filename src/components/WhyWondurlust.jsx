import shieldCheck from "../../public/assets/ShieldCheck.png";
import mapTrifold from "../../public/assets/MapTrifold.png";
import headset from "../../public/assets/Headset.png";
import Image from "next/image";

const WhyWondurlust = () => {
  return (
    <div className="bg-[#EDFCFF]">
      <div className="container mx-auto py-20">
        <div className="flex flex-col gap-2 justify-center items-center">
          <h2 className="text-[#0C0B0B] text-6xl">Why Choose Wanderlust</h2>
          <p className="text-lg text-[#6C696D] mb-8">
            Your trusted partner for exceptional travel experiences
          </p>
          <div className="flex gap-6">
            <div className="p-10 flex flex-col gap-4 bg-[#FFFFFF]">
              <Image
                src={shieldCheck}
                alt="Check icon  in shield"
                width={48}
                height={48}
                className="mb-2"
              />
              <h3 className="text-[#0C0B0B] text-[32px]">Safe & Secure</h3>
              <p className="text-base text-[#6C696D]">
                Your safety is our priority with comprehensive travel insurance
                and 24/7 support.
              </p>
            </div>
            <div className="p-10 flex flex-col gap-4 bg-[#FFFFFF]">
              <Image
                src={mapTrifold}
                alt="Map in fold"
                width={48}
                height={48}
                className="mb-2"
              />
              <h3 className="text-[#0C0B0B] text-[32px]">Safe & Secure</h3>
              <p className="text-base text-[#6C696D]">
                Your safety is our priority with comprehensive travel insurance
                and 24/7 support.
              </p>
            </div>
            <div className="p-10 flex flex-col gap-4 bg-[#FFFFFF]">
              <Image
                src={headset}
                alt="Headset"
                width={48}
                height={48}
                className="mb-2"
              />
              <h3 className="text-[#0C0B0B] text-[32px]">Safe & Secure</h3>
              <p className="text-base text-[#6C696D]">
                Your safety is our priority with comprehensive travel insurance
                and 24/7 support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWondurlust;
