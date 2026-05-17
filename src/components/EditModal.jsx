"use client";

import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import { FaRegTrashAlt } from "react-icons/fa";
import { LiaSaveSolid } from "react-icons/lia";
import { RiEdit2Line } from "react-icons/ri";

export function EditModal({ destination }) {
  const {
    _id,
    imageUrl,
    price,
    destinationName,
    duration,
    country,
    description,
    category,
    departureDate,
  } = destination;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/destinations/${_id}`,
      {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(destination),
        credentials: "include",
      },
    );

    const data = await res.json();
    console.log(data);
  };

  return (
    <Modal>
      <Button variant="outline" className="rounded-none text-[#0C0B0B] text-sm md:text-base">
        <RiEdit2Line /> Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="w-[95vw] sm:w-[90vw] md:max-w-xl p-0 overflow-hidden">
            <Modal.CloseTrigger />

            {/* Header */}
            <Modal.Header className="px-5 sm:px-8 pt-6 pb-4">
              <Modal.Heading className="text-[#0C0B0B] text-xl md:text-2xl">
                Update Travel Package
              </Modal.Heading>
              <p className="text-[#6C696D] text-sm md:text-base mt-1">
                Make changes to the travel package details below
              </p>
            </Modal.Header>

            {/* Body */}
            <Modal.Body className="px-5 sm:px-8 pb-0 overflow-y-auto max-h-[65vh]">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="space-y-5 py-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">

                    {/* Destination Name */}
                    <div className="col-span-1 sm:col-span-2">
                      <TextField
                        defaultValue={destinationName}
                        name="destinationName"
                        isRequired
                        style={{ width: "100%" }}
                      >
                        <Label className="text-sm md:text-base font-medium">
                          Destination Name
                        </Label>
                        <Input
                          placeholder="Bali Paradise"
                          className="bg-[#F8FAFC] rounded-none text-sm"
                          style={{ width: "100%", minWidth: "0" }}
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Country */}
                    <div className="col-span-1">
                      <TextField
                        defaultValue={country}
                        name="country"
                        isRequired
                        style={{ width: "100%" }}
                      >
                        <Label className="text-sm md:text-base font-medium">Country</Label>
                        <Input
                          placeholder="Indonesia"
                          className="bg-[#F8FAFC] rounded-none text-sm"
                          style={{ width: "100%", minWidth: "0" }}
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Category */}
                    <div className="col-span-1">
                      <Select
                        defaultValue={category}
                        name="category"
                        isRequired
                        placeholder="Select category"
                        style={{ width: "100%" }}
                      >
                        <Label className="text-sm md:text-base font-medium">Category</Label>
                        <Select.Trigger
                          className="bg-[#F8FAFC] rounded-none text-sm"
                          style={{ width: "100%", minWidth: "0" }}
                        >
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item id="Beach" textValue="Beach">Beach<ListBox.ItemIndicator /></ListBox.Item>
                            <ListBox.Item id="Mountain" textValue="Mountain">Mountain<ListBox.ItemIndicator /></ListBox.Item>
                            <ListBox.Item id="City" textValue="City">City<ListBox.ItemIndicator /></ListBox.Item>
                            <ListBox.Item id="Adventure" textValue="Adventure">Adventure<ListBox.ItemIndicator /></ListBox.Item>
                            <ListBox.Item id="Cultural" textValue="Cultural">Cultural<ListBox.ItemIndicator /></ListBox.Item>
                            <ListBox.Item id="Luxury" textValue="Luxury">Luxury<ListBox.ItemIndicator /></ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    {/* Price */}
                    <div className="col-span-1">
                      <TextField
                        defaultValue={price}
                        name="price"
                        type="number"
                        isRequired
                        style={{ width: "100%" }}
                      >
                        <Label className="text-sm md:text-base font-medium">Price (USD)</Label>
                        <Input
                          type="number"
                          placeholder="1299"
                          className="bg-[#F8FAFC] rounded-none text-sm"
                          style={{ width: "100%", minWidth: "0" }}
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Duration */}
                    <div className="col-span-1">
                      <TextField
                        defaultValue={duration}
                        name="duration"
                        isRequired
                        style={{ width: "100%" }}
                      >
                        <Label className="text-sm md:text-base font-medium">Duration</Label>
                        <Input
                          placeholder="7 Days / 6 Nights"
                          className="bg-[#F8FAFC] rounded-none text-sm"
                          style={{ width: "100%", minWidth: "0" }}
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Departure Date */}
                    <div className="col-span-1 sm:col-span-2">
                      <TextField
                        defaultValue={departureDate}
                        name="departureDate"
                        type="date"
                        isRequired
                        style={{ width: "100%" }}
                      >
                        <Label className="text-sm md:text-base font-medium">Departure Date</Label>
                        <Input
                          type="date"
                          className="bg-[#F8FAFC] rounded-none text-sm"
                          style={{ width: "100%", minWidth: "0" }}
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Image URL */}
                    <div className="col-span-1 sm:col-span-2">
                      <TextField
                        defaultValue={imageUrl}
                        name="imageUrl"
                        isRequired
                        style={{ width: "100%" }}
                      >
                        <Label className="text-sm md:text-base font-medium">Image URL</Label>
                        <Input
                          type="url"
                          placeholder="https://example.com/image.jpg"
                          className="bg-[#F8FAFC] rounded-none text-sm"
                          style={{ width: "100%", minWidth: "0" }}
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Description */}
                    <div className="col-span-1 sm:col-span-2">
                      <TextField
                        defaultValue={description}
                        name="description"
                        isRequired
                        style={{ width: "100%" }}
                      >
                        <Label className="text-sm md:text-base font-medium">Description</Label>
                        <TextArea
                          placeholder="Describe the travel experience..."
                          className="bg-[#F8FAFC] rounded-none text-sm min-h-24"
                          style={{ width: "100%", minWidth: "0" }}
                        />
                        <FieldError />
                      </TextField>
                    </div>
                  </div>

                  {/* Buttons */}
                  <Modal.Footer className="flex flex-col sm:flex-row gap-3 px-0 pt-2 pb-4">
                    <Button
                      type="button"
                      slot="close"
                      variant="danger"
                      className="bg-white text-[#EF4444] border-2 border-[#EF4444] text-sm rounded-none w-full sm:w-auto"
                    >
                      <FaRegTrashAlt /> Cancel
                    </Button>
                    <Button
                      type="submit"
                      slot="close"
                      className="bg-[#15A1BF] text-white text-sm rounded-none w-full sm:w-auto"
                    >
                      <LiaSaveSolid /> Save Changes
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}