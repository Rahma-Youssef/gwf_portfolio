"use client";
import Image from "next/image";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import navbarLogo from "./../../../../public/images/logo.png";


const links = [
  { name: "Home", href: "#" },
  { name: "About", href: "#About" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500   ${scroll
        ? "backdrop-blur-xl bg-[#ebd6c2]/70 shadow-lg py-3"
        : "bg-transparent py-6 "
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

        {/* Logo */}

        <a href="/" className="flex items-center gap-3">
          <Image
            src={navbarLogo}
            alt="GWG"
            className={`transition-all duration-500 ${scroll ? "w-12" : "w-16"
              }`}
          />

          <div>
            <h2 className="font-serif text-xl text-[#0F4C4C] font-semibold">
              Golden Glow
            </h2>

          </div>
        </a>

        {/* Desktop */}

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative group font-medium text-[#163636]"
            >
              {link.name}

              <span className="absolute left-0 -bottom-2 h-[2px] bg-[#0F4C4C] w-0 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Button */}

        {/* <a
          href="#contact"
          className="hidden lg:flex px-6 py-3 rounded-full bg-[#0F4C4C] text-white hover:scale-105 transition"
        >
          Book Now
        </a> */}

        {/* Mobile */}


        <button
          onClick={() => setOpen(!open)}
          className="
    lg:hidden
    flex
    items-center
    justify-center
    w-10
    h-10
    rounded-full
    border
    border-[#DCC8B5]
    bg-[#0F4C4C]
    text-w
    backdrop-blur-md
    shadow-lg
    transition-all
    duration-300
    hover:scale-105
    active:scale-95
  "
        >
          <div
            className={`transition-transform duration-500 ${open ? "rotate-180" : ""
              }`}
          >
            {open ? (
              <X size={22} className="text-[#0F4C4C]" />
            ) : (
              <Menu size={22} className="text-white" />
            )}
          </div>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="
fixed
top-0
left-0
w-screen
h-dvh
z-[999]
flex
flex-col
bg-[#FAF7F2]
overflow-hidden
lg:hidden
"
          >
            {/* Close */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-2 hover:bg-[#ECE3D8] transition"
              >
                <X size={28} className="text-[#0F4C4C]" />
              </button>
            </div>

            {/* Logo */}
            <div className="flex flex-col items-center">
              <Image
                src={navbarLogo}
                alt="Golden Glow"
                width={110}
                height={110}
              />

              <h2 className="mt-4 text-3xl font-semibold font-cormorant  text-[#0F4C4C]">
                Golden Glow
              </h2>

              <p className="font-allura mt-1 text-2xl text-[#C89A7B]">
                Creating Moments
              </p>

              <p className="font-allura text-xl text-[#C89A7B]">
                That Last Forever
              </p>
            </div>

            {/* Links */}
            <div className="mt-4 flex flex-1 flex-col items-center justify-center gap-4">
              {links.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="
              text-2xl
              font-medium
              text-[#0F4C4C]
              transition
              hover:text-[#C89A7B]
              hover:scale-105
            "
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Button */}
            <div className="p-8">
              <a
                href="#Contact"
                onClick={() => setOpen(false)}
                className="
            flex
            items-center
            justify-center
            rounded-full
            bg-[#0F4C4C]
            py-4
            text-lg
            font-medium
            text-white
            transition-all
            duration-300
            hover:bg-[#144F4F]
            active:scale-95
          "
              >
                Book Your Event
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

