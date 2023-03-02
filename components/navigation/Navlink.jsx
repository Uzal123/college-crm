"use client";
import React from "react";
import Link from "next/link";

const Navlink = ({ href, exact, children, myProfile, ...props }) => {
  return (
    <Link href={href} className="hover:text-primary text-white" {...props}>
      {children}
    </Link>
  );
};

export default Navlink;
