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

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/destinations`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(destination),
      },
    );

    const data = await res.json();
    toast.success("Destination added successfully");
  };

  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden px-4 sm:px-6 md:px-10 lg:px-16 xl:max-w-7xl xl:mx-auto py-10 md:py-16 lg:py-20">
      <h1 className="text-[#0C0B0B] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold pb-6 md:pb-10 break-words">
        Add New Travel Package
      </h1>

      {/* Replace Card with plain div to avoid HeroUI fixed widths */}
      <div className="w-full border border-gray-200 shadow-sm overflow-hidden">
        <form
          onSubmit={onSubmit}
          className="p-5 sm:p-6 md:p-8 lg:p-10 space-y-6 md:space-y-8 w-full"
          style={{ width: "100%" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            {/* Destination Name */}
            <div className="col-span-1 md:col-span-2 w-full">
              <TextField
                name="destinationName"
                isRequired
                style={{ width: "100%" }}
              >
                <Label className="text-[#0C0B0B] text-base md:text-lg font-medium">
                  Destination Name
                </Label>
                <Input
                  placeholder="Bali Paradise"
                  className="bg-[#F8FAFC] text-[#6C696D] rounded-sm"
                  style={{ width: "100%", minWidth: "0" }}
                />
                <FieldError />
              </TextField>
            </div>

            {/* Country */}
            <div className="col-span-1 w-full">
              <TextField name="country" isRequired style={{ width: "100%" }}>
                <Label className="text-[#0C0B0B] text-base md:text-lg font-medium">
                  Country
                </Label>
                <Input
                  placeholder="Indonesia"
                  className="bg-[#F8FAFC] text-[#6C696D] rounded-sm"
                  style={{ width: "100%", minWidth: "0" }}
                />
                <FieldError />
              </TextField>
            </div>

            {/* Category */}
            <div className="col-span-1 w-full">
              <Select
                name="category"
                isRequired
                style={{ width: "100%" }}
                placeholder="Select category"
              >
                <Label className="text-[#0C0B0B] text-base md:text-lg font-medium">
                  Category
                </Label>
                <Select.Trigger
                  className="bg-[#F8FAFC] text-[#6C696D] rounded-sm"
                  style={{ width: "100%", minWidth: "0" }}
                >
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
            <div className="col-span-1 w-full">
              <TextField
                name="price"
                type="number"
                isRequired
                style={{ width: "100%" }}
              >
                <Label className="text-[#0C0B0B] text-base md:text-lg font-medium">
                  Price (USD)
                </Label>
                <Input
                  type="number"
                  placeholder="e.g., 1299"
                  className="bg-[#F8FAFC] text-[#6C696D] rounded-sm"
                  style={{ width: "100%", minWidth: "0" }}
                />
                <FieldError />
              </TextField>
            </div>

            {/* Duration */}
            <div className="col-span-1 w-full">
              <TextField name="duration" isRequired style={{ width: "100%" }}>
                <Label className="text-[#0C0B0B] text-base md:text-lg font-medium">
                  Duration
                </Label>
                <Input
                  placeholder="e.g., 7 Days/6 Nights"
                  className="bg-[#F8FAFC] text-[#6C696D] rounded-sm"
                  style={{ width: "100%", minWidth: "0" }}
                />
                <FieldError />
              </TextField>
            </div>

            {/* Departure Date */}
            <div className="col-span-1 md:col-span-2 w-full">
              <TextField
                name="departureDate"
                type="date"
                isRequired
                style={{ width: "100%" }}
              >
                <Label className="text-[#0C0B0B] text-base md:text-lg font-medium">
                  Departure Date
                </Label>
                <Input
                  type="date"
                  className="bg-[#F8FAFC] text-[#6C696D] rounded-sm"
                  style={{ width: "100%", minWidth: "0" }}
                />
                <FieldError />
              </TextField>
            </div>

            {/* Image URL */}
            <div className="col-span-1 md:col-span-2 w-full">
              <TextField name="imageUrl" isRequired style={{ width: "100%" }}>
                <Label className="text-[#0C0B0B] text-base md:text-lg font-medium">
                  Image URL
                </Label>
                <Input
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  className="bg-[#F8FAFC] text-[#6C696D] rounded-sm"
                  style={{ width: "100%", minWidth: "0" }}
                />
                <FieldError />
              </TextField>
            </div>

            {/* Description */}
            <div className="col-span-1 md:col-span-2 w-full">
              <TextField
                name="description"
                isRequired
                style={{ width: "100%" }}
              >
                <Label className="text-[#0C0B0B] text-base md:text-lg font-medium">
                  Description
                </Label>
                <TextArea
                  placeholder="Describe the travel experience..."
                  className="bg-[#F8FAFC] text-[#6C696D] rounded-sm min-h-32"
                  style={{ width: "100%", minWidth: "0" }}
                />
                <FieldError />
              </TextField>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 pt-2">
            <Button
              type="button"
              variant="danger"
              className="bg-white text-[#EF4444] border-2 border-[#EF4444] text-sm md:text-base rounded-none w-full sm:w-auto"
            >
              <FaRegTrashAlt /> Cancel
            </Button>
            <Button
              type="submit"
              className="bg-[#15A1BF] text-white text-sm md:text-base rounded-none w-full sm:w-auto"
            >
              <LiaSaveSolid /> Add Travel Package
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDestination;
