"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
    setMenuOpen(false);
  };

  return (
    <div className="bg-white py-4 shadow-sm relative z-50">
      <nav className="flex items-center justify-between container mx-auto px-4 lg:px-0">
        {/* Desktop nav links — hidden on mobile */}
        <ul className="hidden lg:flex gap-8">
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

        {/* Logo — always visible */}
        <Link href="/">
          <Image
            src={"/assets/Wanderlast.png"}
            height={150}
            width={150}
            alt="logo"
          />
        </Link>

        {/* Desktop right section */}
        <ul className="hidden lg:flex items-center gap-6">
          <li>
            <NavLink href={"/profile"}>Profile</NavLink>
          </li>
          {user ? (
            <>
              <li>
                <Avatar>
                  <Avatar.Image
                    referrerPolicy="no-referrer"
                    alt={user.name}
                    src={user?.image}
                  />
                  <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
              </li>
              <li>
                <Button
                  onClick={handleSignOut}
                  variant="danger"
                  className="rounded-none"
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

        {/* Mobile hamburger button */}
        <button
          className="lg:hidden text-[#0C0B0B] p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-md">
          <NavLink mobile href={"/"} onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink
            mobile
            href={"/destinations"}
            onClick={() => setMenuOpen(false)}
          >
            Destinations
          </NavLink>
          <NavLink
            mobile
            href={"/my-bookings"}
            onClick={() => setMenuOpen(false)}
          >
            My Bookings
          </NavLink>
          <NavLink
            mobile
            href={"/add-destination"}
            onClick={() => setMenuOpen(false)}
          >
            Add Destination
          </NavLink>
          <NavLink mobile href={"/profile"} onClick={() => setMenuOpen(false)}>
            Profile
          </NavLink>

          <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
            {user ? (
              <>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <Avatar.Image
                      referrerPolicy="no-referrer"
                      alt={user.name}
                      src={user?.image}
                    />
                    <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                  </Avatar>
                  <span className="text-sm font-medium text-[#0C0B0B]">
                    {user.name}
                  </span>
                </div>
                <Button
                  onClick={handleSignOut}
                  variant="danger"
                  className="rounded-none text-sm"
                >
                  Logout
                </Button>
              </>
            ) : (
              <div className="flex gap-4 w-full">
                <NavLink
                  mobile
                  href={"/login"}
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </NavLink>
                <NavLink
                  mobile
                  href={"/signup"}
                  onClick={() => setMenuOpen(false)}
                >
                  Sign Up
                </NavLink>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
