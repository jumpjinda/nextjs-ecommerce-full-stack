import Image from "next/image";
import React from "react";
import { links } from "../Navbar/Navbar";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

const phone =
  "https://images.pexels.com/photos/1156684/pexels-photo-1156684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const socials = [
  {
    id: 1,
    title: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100000207189191",
    socialIcon: faFacebookSquare,
  },
  {
    id: 2,
    title: "Instagram",
    url: "https://www.instagram.com/jumpjinda/",
    socialIcon: faInstagram,
  },
  {
    id: 3,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/tanawat-jinda-28802a185/",
    socialIcon: faLinkedin,
  },
  {
    id: 4,
    title: "Twitter",
    url: "https://twitter.com/JumpJinda",
    socialIcon: faTwitterSquare,
  },
];

const Footer = () => {
  return (
    <div className="w-screen flex px-20 justify-between h-72 pt-8 bg-black text-white">
      <div className="hidden xl:block">
        <Image
          src={phone}
          width={150}
          height={200}
          alt="phone"
          className="rounded-xl"
        />
      </div>
      <div className="hidden lg:block font-bold">
        <p className="text-2xl">Navigation</p>
        <ul className="mt-5">
          {/* import links from Navbar.jsx */}
          {links.map((link) => (
            <Link href={link.url}>
              <li key={link.id} className="mb-3 font-bold italic">
                {link.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-2xl font-bold">Address</p>
        <p className="mt-5">TJ Store, CA 93244 USA</p>
        <p>Phone +11111111111</p>
      </div>
      <div>
        <p className="text-2xl font-bold">Contact</p>
        <ul className="mt-5">
          <li>
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffff" }} />
            <span className="ml-5">tanawat.jinda.work@gmail.com</span>
          </li>
          {socials.map((item) => (
            <li key={item.id} className="mt-2">
              <Link href={item.url} target="_blank">
                <FontAwesomeIcon
                  icon={item.socialIcon}
                  style={{ color: "#ffffff" }}
                />
                <span className="ml-5">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
