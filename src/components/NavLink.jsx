"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, className, children, onClick, mobile }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        ${mobile
          ? isActive
            ? "text-[#15A1BF] font-semibold"
            : "text-[#0C0B0B]"
          : isActive
            ? "text-[#15A1BF] text-lg font-semibold py-1"
            : ""
        }
        ${className ?? ""}
      `}
    >
      {children}
    </Link>
  );
};

export default NavLink;