import Image from "next/image";
import React from "react";
import logo from "../../../public/next-js-icon-seeklogo.com.svg";
import Link from "next/link";

export const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Products",
    url: "/products",
  },
  {
    id: 4,
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    id: 5,
    title: "Sign in",
    url: "/signin",
  },
];

const Navbar = () => {
  return (
    <div className="w-screen bg-black text-white flex justify-between px-20 h-20 items-center sticky top-0 z-50">
      <Link href="/">
        <div className="px-5 py-2 bg-green-500 rounded-xl">TJ Dev</div>
      </Link>
      <ul className="flex gap-5 items-center">
        {links.map((link) => (
          <Link href={link.url}>
            <li key={link.id}>{link.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
