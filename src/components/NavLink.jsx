"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, className, children }) => {
  const pathname = usePathname();
//   console.log(pathname, "pathname");

  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={`${isActive ? "border-b-2 border-b-[#15A1BF] py-1" : ""} ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;