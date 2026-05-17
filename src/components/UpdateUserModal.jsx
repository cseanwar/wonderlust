"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { Pencil } from "lucide-react";
import { BiUser } from "react-icons/bi";

export function UpdateUserModal() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    await authClient.updateUser({ name, image });
  };

  return (
    <Modal>
      {/* Trigger */}
      <Button className="w-full rounded-none bg-[#15A1BF] hover:bg-cyan-700 text-white text-sm md:text-base">
        <Pencil size={14} />
        Edit Profile
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="w-[90vw] sm:w-[80vw] md:max-w-md p-5 sm:p-6">
            <Modal.CloseTrigger />

            {/* Header */}
            <Modal.Header className="pb-3">
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <BiUser className="size-5" />
              </Modal.Icon>
              <Modal.Heading className="text-base sm:text-lg md:text-xl text-[#0C0B0B]">
                Update Profile
              </Modal.Heading>
            </Modal.Header>

            {/* Body */}
            <Modal.Body className="px-0 py-3">
              <Surface variant="default">
                <form
                  onSubmit={onSubmit}
                  className="flex flex-col gap-4"
                  style={{ width: "100%" }}
                >
                  {/* Name */}
                  <TextField
                    name="name"
                    type="text"
                    style={{ width: "100%" }}
                  >
                    <Label className="text-sm md:text-base font-medium text-[#0C0B0B]">
                      Name
                    </Label>
                    <Input
                      placeholder="Enter your name"
                      className="bg-[#F8FAFC] rounded-none text-sm"
                      style={{ width: "100%", minWidth: "0" }}
                    />
                  </TextField>

                  {/* Image URL */}
                  <TextField
                    name="image"
                    type="url"
                    style={{ width: "100%" }}
                  >
                    <Label className="text-sm md:text-base font-medium text-[#0C0B0B]">
                      Image URL
                    </Label>
                    <Input
                      placeholder="https://example.com/photo.jpg"
                      className="bg-[#F8FAFC] rounded-none text-sm"
                      style={{ width: "100%", minWidth: "0" }}
                    />
                  </TextField>

                  {/* Footer buttons */}
                  <Modal.Footer className="flex flex-col sm:flex-row gap-3 px-0 pt-2">
                    <Button
                      slot="close"
                      variant="secondary"
                      className="rounded-none text-sm w-full sm:w-auto order-2 sm:order-1"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      slot="close"
                      className="rounded-none bg-[#15A1BF] text-white text-sm w-full sm:w-auto order-1 sm:order-2"
                    >
                      Save Changes
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