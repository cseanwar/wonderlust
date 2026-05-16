"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="bg-white py-5">
      <nav className="flex items-center justify-between container mx-auto">
        <ul className="flex gap-8">
          <li>
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink href={"/destinations"}>Destinations</NavLink>
          </li>
          <li>
            <NavLink href={"/my-bookings"}>My Bookings</NavLink>
          </li>

          <li>
            <NavLink href={"/add-destination"}>Add Destination</NavLink>
          </li>
        </ul>

        <div>
          <Image
            src={"/assets/Wanderlast.png"}
            height={150}
            width={150}
            alt="logo"
          />
        </div>

        <ul className="flex items-center gap-8">
          <li>
            <NavLink href={"/profile"}>Profile</NavLink>
          </li>

          {user ? (
            <>
              <li>
                <Avatar>
                  <Avatar.Image
                    referrerPolicy="no-referrer"
                    alt="John Doe"
                    src={user?.image}
                  />
                  <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
              </li>
              <li>
                <Button
                  onClick={handleSignOut}
                  variant="danger"
                  className={"rounded-none"}
                >
                  Logout
                </Button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink href={"/login"}>Login</NavLink>
              </li>
              <li>
                <NavLink href={"/signup"}>Sign Up</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
