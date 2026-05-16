import { BookingCancelAlert } from "@/components/BookingCancelAlert";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { Calendar, CheckCircle, Columns2, Eye, MapPin } from "lucide-react";
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
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const bookings = await res.json();

  return (
    <div className="w-full px-30 py-10">
      <h1 className="text-6xl mb-4 text-[#0C0B0B]">My Bookings</h1>
      <p className="text-[#6C696D] text-xl mb-10">
        Manage and view your upcoming travel plans
      </p>
      <div className="space-y-6">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="flex gap-6 bg-white overflow-hidden p-6 shadow-sm border border-gray-100"
          >
            <div className="relative w-100 shrink-0">
              <Image
                src={booking.imageUrl}
                alt={booking.destinationName}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-between flex-1">
              <div>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mb-2">
                  <CheckCircle size={14} />
                  Confirmed
                </span>
                <h2 className="text-[40px] font-semibold text-[#0C0B0B] mb-4.5">
                  {booking.destinationName}
                </h2>

                <div className="space-y-3 text-base text-[#6C696D]">
                  <p className="flex items-center gap-2">
                    <Calendar size={14} className="text-gray-400" />
                    Departure:{" "}
                    {new Date(booking.departureDate).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        timeZone: "UTC",
                      },
                    )}
                  </p>

                  <p className="flex items-center gap-2">
                    <MapPin size={14} className="text-gray-400" />
                    Booking Id: {booking._id}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4.5">
                <p className="text-2xl font-bold text-[#15A1BF]">
                  ${booking.price}
                </p>
                <div className="flex gap-4">
                  <BookingCancelAlert bookingId={booking._id} />

                  <Link href={`/destinations/${booking.destinationId}`}>
                    <Button className="rounded-none bg-[#15A1BF]">
                      <Eye size={14} />
                      View
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookingPage;
