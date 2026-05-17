import { Separator } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('/assets/Banner.png')] bg-cover bg-center w-full text-white flex flex-col justify-between items-center lg:h-150 xl:h-187.5">

      {/* Hero content */}
      <div className="w-full flex-1 flex flex-col justify-center items-center text-center px-4 py-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-4 max-w-4xl">
          Discover Your <br /> Next Adventure
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mb-6">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs sm:max-w-none sm:w-auto">
          <Link href="/destinations" className="w-full sm:w-auto">
            <button className="uppercase bg-cyan-500 px-6 py-3 cursor-pointer w-full sm:w-auto hover:bg-cyan-600 transition-colors text-sm md:text-base">
              Explore Now
            </button>
          </Link>
          <Link href="/destinations" className="w-full sm:w-auto">
            <button className="uppercase px-6 py-3 bg-white/50 cursor-pointer w-full sm:w-auto hover:bg-white/60 transition-colors text-sm md:text-base">
              View Destinations
            </button>
          </Link>
        </div>
      </div>

      {/* Search bar — pinned to bottom, full width */}
      <div className="bg-white/30 backdrop-blur-sm w-full shrink-0">

        {/* Mobile & tablet: stacked */}
        <div className="flex flex-col lg:hidden divide-y divide-white/30">
          <div className="px-4 py-3">
            <h3 className="text-sm font-semibold">Location</h3>
            <p className="text-xs text-white/80">Address, City or Zip</p>
          </div>
          <div className="px-4 py-3">
            <h3 className="text-sm font-semibold">Date / Duration</h3>
            <p className="text-xs text-white/80">Anytime / 3 Days</p>
          </div>
          <div className="px-4 py-3">
            <h3 className="text-sm font-semibold">Budget</h3>
            <p className="text-xs text-white/80">$0 – $3000</p>
          </div>
          <div className="px-4 py-3">
            <h3 className="text-sm font-semibold">People</h3>
            <p className="text-xs text-white/80">5 – 10</p>
          </div>
          <button className="bg-cyan-500 hover:bg-cyan-600 transition-colors py-3 px-6 w-full font-semibold uppercase tracking-wide text-sm">
            Search
          </button>
        </div>

        {/* Desktop: horizontal, full width */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto] w-full">
          <div className="px-6 py-4">
            <h3 className="text-sm font-semibold">Location</h3>
            <p className="text-xs text-white/80">Address, City or Zip</p>
          </div>
          <div className="w-px bg-white/30 my-3" />
          <div className="px-6 py-4">
            <h3 className="text-sm font-semibold">Date / Duration</h3>
            <p className="text-xs text-white/80">Anytime / 3 Days</p>
          </div>
          <div className="w-px bg-white/30 my-3" />
          <div className="px-6 py-4">
            <h3 className="text-sm font-semibold">Budget</h3>
            <p className="text-xs text-white/80">$0 – $3000</p>
          </div>
          <div className="w-px bg-white/30 my-3" />
          <div className="px-6 py-4">
            <h3 className="text-sm font-semibold">People</h3>
            <p className="text-xs text-white/80">5 – 10</p>
          </div>
          <button className="bg-cyan-500 hover:bg-cyan-600 transition-colors px-10 font-semibold uppercase tracking-wide text-sm">
            Search
          </button>
        </div>

      </div>
    </div>
  );
};

export default Banner;