"use client";
import {
  FieldError,
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  TextArea,
  Button,
  Card,
} from "@heroui/react";
import Link from "next/link";
import toast from "react-hot-toast";
import { FaRegTrashAlt } from "react-icons/fa";
import { LiaSaveSolid } from "react-icons/lia";

const AddDestination = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());

    console.log(destination);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/destinations`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(destination),
      },
    );

    const data = await res.json();
    toast.success("Destination added successfully", data);
  };
  return (
    <div className="py-20 max-w-7xl mx-auto">
      <h1 className="text-[#0C0B0B] text-6xl font-semibold pb-10">
        Add New Travel Package
      </h1>
      <Card>
        <form onSubmit={onSubmit} className="p-10 space-y-8 w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Destination Name */}
            <div className="md:col-span-2">
              <TextField name="destinationName" isRequired>
                <Label className="text-[#0C0B0B] text-lg font-medium">
                  Destination Name
                </Label>
                <Input
                  placeholder="Bali Paradise"
                  className="bg-[#F8FAFC] text-[#6C696D] font-normal text-lg rounded-sm"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Country */}
            <TextField name="country" isRequired>
              <Label className="text-[#0C0B0B] text-lg font-medium">
                Country
              </Label>
              <Input
                placeholder="Indonesia"
                className="bg-[#F8FAFC] text-[#6C696D] font-normal text-lg rounded-sm"
              />
              <FieldError />
            </TextField>

            {/* Category - Updated Select Component */}
            <div>
              <Select
                name="category"
                isRequired
                className="bg-[#F8FAFC] text-[#6C696D] font-normal text-lg rounded-sm"
                placeholder="Select category"
              >
                <Label className="text-[#0C0B0B] text-lg font-medium">
                  Category
                </Label>
                <Select.Trigger className="bg-[#F8FAFC] text-[#6C696D] font-normal text-lg rounded-sm">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Beach" textValue="Beach">
                      Beach
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Mountain" textValue="Mountain">
                      Mountain
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="City" textValue="City">
                      City
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Adventure" textValue="Adventure">
                      Adventure
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Cultural" textValue="Cultural">
                      Cultural
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Luxury" textValue="Luxury">
                      Luxury
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Price */}
            <TextField name="price" type="number" isRequired>
              <Label className="text-[#0C0B0B] text-lg font-medium">
                Price (USD)
              </Label>
              <Input
                type="number"
                placeholder="e.g., 1299"
                className="bg-[#F8FAFC] text-[#6C696D] font-normal text-lg rounded-sm"
              />
              <FieldError />
            </TextField>

            {/* Duration */}
            <TextField name="duration" isRequired>
              <Label className="text-[#0C0B0B] text-lg font-medium">
                Duration
              </Label>
              <Input
                placeholder="e.g., 7 Days/6 Nights"
                className="bg-[#F8FAFC] text-[#6C696D] font-normal text-lg rounded-sm"
              />
              <FieldError />
            </TextField>

            {/* Departure Date */}
            <div className="md:col-span-2">
              <TextField name="departureDate" type="date" isRequired>
                <Label className="text-[#0C0B0B] text-lg font-medium">
                  Departure Date
                </Label>
                <Input
                  type="date"
                  className="bg-[#F8FAFC] text-[#6C696D] font-normal text-lg rounded-sm"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Image URL - Removed preview */}
            <div className="md:col-span-2">
              <TextField name="imageUrl" isRequired>
                <Label className="text-[#0C0B0B] text-lg font-medium">
                  Image URL
                </Label>
                <Input
                  type="url"
                  placeholder="https://example.com/bali-paradise.jpg"
                  className="bg-[#F8FAFC] text-[#6C696D] font-normal text-lg rounded-sm"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label className="text-[#0C0B0B] text-lg font-medium">
                  Description
                </Label>
                <TextArea
                  placeholder="Describe the travel experience..."
                  className="bg-[#F8FAFC] text-[#6C696D] font-normal text-lg rounded-sm"
                />
                <FieldError />
              </TextField>
            </div>
          </div>

          {/* Buttons */}

          <div className="flex justify-end gap-4">
            <Button
              type="cancel"
              slot="close"
              variant="danger"
              className="bg-[#FFFFFF] text-[#EF4444] border-2 border-[#EF4444] text-base rounded-none"
            >
              <FaRegTrashAlt /> Cancel
            </Button>
            <Link href={"/destination"}>
              <Button
                type="submit"
                slot="close"
                className="bg-[#15A1BF] text-[#FFFFFF] text-base rounded-none"
              >
                <LiaSaveSolid /> Add Travel Package
              </Button>
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddDestination;
