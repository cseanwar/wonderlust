import Image from "next/image";

const WhyWondurlust = () => {
  return (
    <div className="bg-[#EDFCFF]">
      <div className="container mx-auto px-4 lg:px-0 py-12 md:py-20">
        <div className="flex flex-col gap-2 justify-center items-center text-center">
          <h2 className="text-[#0C0B0B] text-4xl md:text-5xl lg:text-6xl">
            Why Choose Wanderlust
          </h2>
          <p className="text-base md:text-lg text-[#6C696D] mb-8">
            Your trusted partner for exceptional travel experiences
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            <div className="p-8 md:p-10 flex flex-col gap-4 bg-[#FFFFFF]">
              <Image src="/assets/ShieldCheck.png" alt="Shield check icon" width={48} height={48} className="mb-2" />
              <h3 className="text-[#0C0B0B] text-2xl md:text-[32px]">Safe & Secure</h3>
              <p className="text-base text-[#6C696D]">
                Your safety is our priority with comprehensive travel insurance
                and 24/7 support.
              </p>
            </div>

            <div className="p-8 md:p-10 flex flex-col gap-4 bg-[#FFFFFF]">
              <Image src="/assets/MapTrifold.png" alt="Map trifold icon" width={48} height={48} className="mb-2" />
              <h3 className="text-[#0C0B0B] text-2xl md:text-[32px]">Expert Guides</h3>
              <p className="text-base text-[#6C696D]">
                Our experienced local guides ensure you discover hidden gems and
                authentic cultural experiences.
              </p>
            </div>

            <div className="p-8 md:p-10 flex flex-col gap-4 bg-[#FFFFFF] sm:col-span-2 lg:col-span-1">
              <Image src="/assets/Headset.png" alt="Headset icon" width={48} height={48} className="mb-2" />
              <h3 className="text-[#0C0B0B] text-2xl md:text-[32px]">24/7 Support</h3>
              <p className="text-base text-[#6C696D]">
                Round-the-clock customer support so you are never alone on your
                journey, wherever you are.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWondurlust;