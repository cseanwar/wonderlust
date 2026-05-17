import DestinationCard from "@/components/DestinationCard";

const DestinationPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations`);
  const destinations = await res.json();

  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden px-4 lg:px-0 xl:max-w-7xl xl:mx-auto py-10 md:py-16 lg:py-20">

      {/* Header */}
      <div className="pb-8 md:pb-10">
        <h1 className="text-[#0C0B0B] font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 leading-tight">
          Explore All Destinations
        </h1>
        <p className="text-[#6C696D] font-normal text-base md:text-lg lg:text-xl">
          Find your perfect travel experience from our curated collection
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {destinations.map((destination) => (
          <DestinationCard key={destination._id} destination={destination} />
        ))}
      </div>

    </div>
  );
};

export default DestinationPage;