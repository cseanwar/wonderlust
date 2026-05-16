"use client";

import { Button, Card, Separator } from "@heroui/react";
import React, { useState } from "react";
import { DateField, Label } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { FaArrowRightLong } from "react-icons/fa6";
import checkImg from "../../public/assets/Check.png";
import Image from "next/image";
import Link from "next/link";

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
    <Card className="rounded-none border p-5">
      <div className="mb-5">
        <p className="text-[#6C696D] text-base">Starting from</p>
        <h2 className="text-3xl font-bold text-[#15A1BF]">${price}</h2>
        <p className="text-[#6C696D] text-base">per person</p>
      </div>

      <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
        <Label className="font-semibold text-[#0C0B0B]">Departure Date</Label>
        <DateField.Group>
          <DateField.Input className="bg-[#F8FAFC] rounded-none">
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>

      <Separator className="my-3" />

      <Link href={"/my-bookings"}>
        <Button
          onClick={handleBooking}
          className={"w-full rounded-none bg-[#15A1BF] py-4 font-semibold"}
        >
          Book Now
          <FaArrowRightLong />
        </Button>
      </Link>

      <div></div>
      <div className="flex gap-2 text-[#6C696D]">
        <Image src={checkImg} alt="Check Icon" width={20} height={20} />
        <p>Free cancellation up to 7 days</p>
      </div>
      <div className="flex gap-2 text-[#6C696D]">
        <Image src={checkImg} alt="Check Icon" width={20} height={20} />
        <p>Travel insurance included</p>
      </div>
      <div className="flex gap-2 text-[#6C696D]">
        <Image src={checkImg} alt="Check Icon" width={20} height={20} />
        <p>24/7 customer support</p>
      </div>
    </Card>
  );
};

export default BookingCard;
