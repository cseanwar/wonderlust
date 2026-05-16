"use client";

import { UpdateUserModal } from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import {
  Plane,
  Globe,
  TrendingUp,
  DollarSign,
  MapPin,
  Camera,
  Pencil,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (!user?.id) return;
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user.id}`)
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.error("Failed to fetch bookings:", err));
  }, [user?.id]);

  // ── Derived stats from bookings ──
  const totalBookings = bookings.length;
  const totalSpent = bookings.reduce(
    (sum, b) => sum + (Number(b.price) ?? 0),
    0,
  );
  const countriesVisited = new Set(
    bookings.map((b) => b.country).filter(Boolean),
  ).size;
  const upcomingTrips = bookings.filter(
    (b) => new Date(b.departureDate) > new Date(),
  ).length;

  const stats = [
    {
      label: "Total Bookings",
      value: totalBookings,
      icon: <Plane size={20} className="text-[#15A1BF]" />,
      iconBg: "bg-cyan-100",
    },
    {
      label: "Countries Visited",
      value: countriesVisited,
      icon: <Globe size={20} className="text-emerald-500" />,
      iconBg: "bg-emerald-100",
    },
    {
      label: "Upcoming Trips",
      value: upcomingTrips,
      icon: <TrendingUp size={20} className="text-orange-500" />,
      iconBg: "bg-orange-100",
    },
    {
      label: "Total Spent",
      value: `$${totalSpent.toLocaleString()}`,
      icon: <DollarSign size={20} className="text-purple-500" />,
      iconBg: "bg-purple-100",
    },
  ];

  const memberSince = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
        timeZone: "UTC",
      })
    : "—";

  return (
    <div className="container mx-auto py-20">
      {/* Page header */}
      <h1 className="text-5xl text-[#0C0B0B] mb-2">My Profile</h1>
      <p className="text-[#6C696D] text-base mb-10">
        Manage your account settings and travel preferences
      </p>

      <div className="flex gap-6 items-start">
        {/* ── Left card ── */}
        <div className="shadow-md p-6 w-80 shrink-0">
          {/* Avatar */}
          <div className="flex justify-center mb-5">
            <div className="relative">
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-gray-100">
                {user?.image ? (
                  <Image
                    src={user.image.trimStart()}
                    alt={user.name ?? "Profile"}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-3xl font-semibold text-gray-500">
                    {user?.name?.charAt(0) ?? "?"}
                  </div>
                )}
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#15A1BF] rounded-full flex items-center justify-center text-white shadow">
                <Camera size={14} />
              </button>
            </div>
          </div>

          {/* Name & location */}
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold text-[#0C0B0B]">
              {user?.name ?? "—"}
            </h2>
            <p className="flex items-center justify-center gap-1 text-[#6C696D] text-sm mt-1">
              <MapPin size={13} />
              Dhaka
            </p>
          </div>

          {/* Meta rows */}
          <div className="border-t border-gray-100 pt-5 space-y-3 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-[#6C696D]">Member since</span>
              <span className="font-semibold text-[#0C0B0B]">
                {memberSince}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#6C696D]">Nationality</span>
              <span className="font-semibold text-[#0C0B0B]">Bangladesh</span>
            </div>
          </div>

          <UpdateUserModal />
        </div>

        {/* ── Right: Travel Statistics ── */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-[#0C0B0B] mb-5">
            Travel Statistics
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border border-gray-200 p-6 flex justify-between items-start"
              >
                <div>
                  <p className="text-[#6C696D] text-sm mb-2">{stat.label}</p>
                  <p className="text-3xl font-semibold text-[#0C0B0B]">
                    {stat.value}
                  </p>
                </div>
                <div
                  className={`w-11 h-11 rounded-full ${stat.iconBg} flex items-center justify-center`}
                >
                  {stat.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
