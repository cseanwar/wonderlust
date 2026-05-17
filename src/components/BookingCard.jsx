"use client";

import { Button, Card, Separator } from "@heroui/react";
import React, { useState } from "react";
import { DateField, Label } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import { redirect } from "next/navigation";

const BookingCard = ({ destination }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [departureDate, setDepartureDate] = useState(null);

  const { price, _id, destinationName, imageUrl, country } = destination;

  const handleBooking = async () => {
    const bookingData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      destinationId: _id,
      destinationName,
      price,
      imageUrl,
      country,
      departureDate: new Date(departureDate),
    };

    const { data: tokenData } = await authClient.token();

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(bookingData),
    });

    const data = await res.json();

    if (data) {
      toast.success("You have booked successfully!");
      redirect("/my-bookings");
    }
  };

  return (
    <Card className="rounded-none border p-5 w-full">
      {/* Price */}
      <div className="mb-5">
        <p className="text-[#6C696D] text-sm md:text-base">Starting from</p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#15A1BF]">${price}</h2>
        <p className="text-[#6C696D] text-sm md:text-base">per person</p>
      </div>

      {/* Date picker — full width */}
      <DateField
        onChange={setDepartureDate}
        className="w-full"
        name="date"
      >
        <Label className="font-semibold text-[#0C0B0B] text-sm md:text-base">
          Departure Date
        </Label>
        <DateField.Group>
          <DateField.Input className="bg-[#F8FAFC] rounded-none w-full">
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>

      <Separator className="my-3" />

      {/* Book Now button */}
      <Button
        onClick={handleBooking}
        className="w-full rounded-none bg-[#15A1BF] py-4 font-semibold mb-4"
      >
        Book Now
        <FaArrowRightLong />
      </Button>

      {/* Features */}
      <div className="flex flex-col gap-2">
        {[
          "Free cancellation up to 7 days",
          "Travel insurance included",
          "24/7 customer support",
        ].map((feature) => (
          <div key={feature} className="flex gap-2 items-center text-[#6C696D] text-sm md:text-base">
            <Image
              src="/assets/Check.png"
              alt="Check Icon"
              width={18}
              height={18}
              className="shrink-0"
            />
            <p>{feature}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default BookingCard;