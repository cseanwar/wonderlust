import DestinationCard from "@/components/DestinationCard";

const DestinationPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations`)
  const destinations = await res.json();

  return (
    <div className="max-w-7xl mx-auto py-20">
      <div className="pb-10">
        <h1 className="text-[#0C0B0B] font-normal text-6xl">
          Explore All Destinations
        </h1>
        <p className="text-[#6C696D] font-normal text-xl">
          Find your perfect travel experience from our curated collection
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {destinations.map((destination) => (
          <DestinationCard key={destination._id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default DestinationPage;
