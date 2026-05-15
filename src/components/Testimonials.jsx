"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      '"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable."',
    name: "Michael Chen",
    location: "Singapore",
    image: "/assets/person01.png",
  },
  {
    id: 2,
    quote:
      '"Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!"',
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "/assets/person02.png",
  },
  {
    id: 3,
    quote:
      '"The Santorini Tour Was A Dream Come True. Everything Was Seamlessly Organized And The Sunsets Were Absolutely Stunning. Will Book Again!"',
    name: "Emma Williams",
    location: "London, UK",
    image: "/assets/person03.jpg",
  },
  {
    id: 4,
    quote:
      '"Our Safari In Kenya Was Life-Changing. The Wildlife Encounters Were Incredible And The Camp Was Beyond Comfortable. Truly Unforgettable."',
    name: "James Okafor",
    location: "Lagos, Nigeria",
    image: "/assets/person04.png",
  },
];

const TestimonialCard = ({ quote, name, location, image }) => (
  <div className="flex gap-12 border border-gray-200 overflow-hidden p-6">
    {/* Text side */}
    <div className="flex flex-col justify-between flex-1">
      <p className="text-[#0C0B0B] text-base leading-relaxed text-justify">{quote}</p>
      <div className="mt-8">
        <p className="text-[#15A1BF] font-medium">— {name}</p>
        <p className="text-[#6C696D] text-sm">{location}</p>
      </div>
    </div>
    {/* Image side */}
    <div className="relative w-48 shrink-0">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover"
      />
    </div>
  </div>
);

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Show 2 cards at a time
  const visible = [
    testimonials[index % testimonials.length],
    testimonials[(index + 1) % testimonials.length],
  ];

  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () =>
    setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className="container mx-auto py-16">
      {/* Header row */}
      <div className="flex justify-between items-start mb-10">
        <div>
          <h2 className="text-5xl text-[#0C0B0B] mb-2">What Travelers Say</h2>
          <p className="text-[#6C696D] text-base">
            Real experiences from our happy travelers
          </p>
        </div>

        {/* Nav arrows */}
        <div className="flex gap-3 mt-2">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-[#6C696D] hover:border-[#15A1BF] hover:text-[#15A1BF] transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-[#6C696D] hover:border-[#15A1BF] hover:text-[#15A1BF] transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 gap-6">
        {visible.map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} {...t} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;