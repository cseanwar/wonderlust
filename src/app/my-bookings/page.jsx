import { BookingCancelAlert } from "@/components/BookingCancelAlert";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { Calendar, CheckCircle, Eye, MapPin } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const user = session?.user;

  if (!user) {
    return (
      <div className="w-full px-4 py-10">
        <p className="text-red-500">Please log in to view your bookings.</p>
      </div>
    );
  }

  let bookings = [];
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user.id}`,
      {
        headers: { authorization: `Bearer ${token}` },
        cache: "no-store",
      },
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    bookings = await res.json();
  } catch (err) {
    console.error("Failed to fetch bookings:", err);
    return (
      <div className="w-full px-4 py-10">
        <p className="text-red-500 text-xl">
          Failed to load bookings. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-30 py-8 md:py-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 text-[#0C0B0B]">
        My Bookings
      </h1>
      <p className="text-[#6C696D] text-base md:text-xl mb-8 md:mb-10">
        Manage and view your upcoming travel plans
      </p>

      {bookings.length === 0 ? (
        <div className="text-center py-20 text-[#6C696D]">
          <p className="text-xl md:text-2xl mb-2">No bookings yet</p>
          <p className="mb-6 text-sm md:text-base">
            Start exploring and book your next adventure!
          </p>
          <Link href="/destinations">
            <Button className="rounded-none bg-[#15A1BF]">
              Browse Destinations
            </Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="flex flex-col sm:flex-row gap-0 p-6 bg-white overflow-hidden shadow-sm border border-gray-100"
            >
              {/* Image */}
              <div className="relative w-full h-52 sm:w-44 sm:h-auto md:w-56 shrink-0">
                <Image
                  src={booking.imageUrl?.trimStart()}
                  alt={booking.destinationName}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 176px, 224px"
                />
              </div>

              {/* Content — min-w-0 is critical to prevent overflow */}
              <div className="flex flex-col justify-between flex-1 min-w-0 p-4 md:p-5">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full mb-2">
                    <CheckCircle size={12} />
                    Confirmed
                  </span>

                  <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#0C0B0B] mb-2 leading-tight truncate">
                    {booking.destinationName}
                  </h2>

                  <div className="space-y-1.5 text-xs sm:text-sm text-[#6C696D]">
                    <p className="flex items-start gap-1.5">
                      <Calendar
                        size={13}
                        className="text-gray-400 mt-0.5 shrink-0"
                      />
                      <span className="break-words">
                        Departure:{" "}
                        {new Date(booking.departureDate).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                            timeZone: "UTC",
                          },
                        )}
                      </span>
                    </p>
                    <p className="flex items-start gap-1.5">
                      <MapPin
                        size={13}
                        className="text-gray-400 mt-0.5 shrink-0"
                      />
                      <span className="break-all text-xs">{booking._id}</span>
                    </p>
                  </div>
                </div>

                {/* Price + actions */}
                <div className="flex items-center justify-between gap-2 mt-3 flex-wrap">
                  <p className="text-lg md:text-xl font-bold text-[#15A1BF]">
                    ${booking.price}
                  </p>
                  <div className="flex gap-2 shrink-0">
                    <BookingCancelAlert bookingId={booking._id} />
                    <Link href={`/destinations/${booking.destinationId}`}>
                      <Button className="rounded-none bg-[#15A1BF] text-xs md:text-sm px-3">
                        <Eye size={13} />
                        View
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookingPage;
