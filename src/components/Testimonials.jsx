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
  <div className="flex flex-col sm:flex-row gap-6 border border-gray-200 overflow-hidden p-6">
    {/* Text side */}
    <div className="flex flex-col justify-between flex-1">
      <p className="text-[#0C0B0B] text-base leading-relaxed text-justify">
        {quote}
      </p>
      <div className="mt-6">
        <p className="text-[#15A1BF] font-medium">— {name}</p>
        <p className="text-[#6C696D] text-sm">{location}</p>
      </div>
    </div>
    {/* Image side */}
    <div className="relative w-full h-48 sm:w-40 sm:h-auto md:w-48 shrink-0">
      <Image src={image} alt={name} fill className="object-cover" />
    </div>
  </div>
);

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Mobile: show 1 card; tablet+: show 2 cards
  const isSingle = typeof window !== "undefined" && window.innerWidth < 768;

  const visible = [
    testimonials[index % testimonials.length],
    testimonials[(index + 1) % testimonials.length],
  ];

  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () =>
    setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className="container mx-auto px-4 lg:px-0 py-12 md:py-16">
      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-8 md:mb-10">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#0C0B0B] mb-2">
            What Travelers Say
          </h2>
          <p className="text-[#6C696D] text-base">
            Real experiences from our happy travelers
          </p>
        </div>

        {/* Nav arrows */}
        <div className="flex gap-3 sm:mt-2 shrink-0">
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

      {/* Cards — 1 col on mobile, 2 cols on md+ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Mobile: show only 1 card */}
        <div className="md:hidden">
          <TestimonialCard {...testimonials[index % testimonials.length]} />
        </div>

        {/* Tablet & desktop: show 2 cards */}
        {visible.map((t, i) => (
          <div key={`${t.id}-${i}`} className="hidden md:block">
            <TestimonialCard {...t} />
          </div>
        ))}
      </div>

      {/* Dot indicators — mobile only */}
      <div className="flex justify-center gap-2 mt-6 md:hidden">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === index % testimonials.length
                ? "bg-[#15A1BF]"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;