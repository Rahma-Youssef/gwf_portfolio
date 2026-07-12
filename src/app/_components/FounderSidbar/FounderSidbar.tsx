"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { FounderType } from "../founders";

type FounderSidebarProps = {
  founders: FounderType[];
  selectedFounder: FounderType;
  onSelect: (founder: FounderType) => void;
};

export default function FounderSidebar({
  founders,
  selectedFounder,
  onSelect,
}: FounderSidebarProps) {
  return (
    <aside className="sticky top-28 h-fit">

      <div className="mb-8">

        <p className="text-sm uppercase tracking-[.35em] text-[#C89A7B]">
          Leadership
        </p>

        <h3 className="mt-3 font-serif text-3xl text-[#0F4C4C]">
          Our Visionaries
        </h3>

      </div>

      <div className="space-y-6">

        {founders.map((founder) => {

          const active = founder.id === selectedFounder.id;

          return (
            <motion.button
              key={founder.id}
              onClick={() => onSelect(founder)}
              whileHover={{
                x: 8,
                scale: 1.02,
              }}
              whileTap={{
                scale: .98,
              }}
              className={`
                group
                relative
                w-full
                overflow-hidden
                rounded-[30px]
                border
                bg-white
                p-5
                text-left
                transition-all
                duration-500

                ${
                  active
                    ? "border-[#C89A7B] shadow-[0_30px_70px_rgba(200,154,123,.25)]"
                    : "border-[#ECE4DA] hover:border-[#D8B89A]"
                }
              `}
            >

              {/* Active Line */}

              {active && (
                <motion.div
                  layoutId="activeFounder"
                  className="
                    absolute
                    left-0
                    top-0
                    h-full
                    w-1.5
                    bg-[#C89A7B]
                  "
                />
              )}

              {/* Glow */}

              <div
                className="
                  absolute
                  -right-12
                  -top-12
                  h-28
                  w-28
                  rounded-full
                  bg-[#C89A7B]/10
                  blur-3xl
                "
              />

              <div className="flex items-center gap-4">

                {/* Image */}

                <div className="relative">

                  <div
                    className="
                      absolute
                      inset-0
                      rounded-full
                      bg-[#C89A7B]/30
                      blur-md
                    "
                  />

                  <Image
                    src={founder.image}
                    alt={founder.name}
                    className={`
                      relative
                      h-20
                      w-20
                      rounded-full
                      object-cover
                      border-4

                      ${
                        active
                          ? "border-[#C89A7B]"
                          : "border-white"
                      }
                    `}
                  />

                </div>

                {/* Content */}

                <div className="flex-1">

                  <h4
                    className="
                      font-serif
                      text-2xl
                      text-[#0F4C4C]
                    "
                  >
                    {founder.name}
                  </h4>

                  <p
                    className="
                      mt-1
                      text-xs
                      uppercase
                      tracking-[.35em]
                      text-[#C89A7B]
                    "
                  >
                    {founder.role}
                  </p>

                  <p
                    dir="rtl"
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-gray-500
                      line-clamp-2
                    "
                  >
                    {founder.shortDescription}
                  </p>

                </div>

                <ChevronRight
                  size={22}
                  className={`
                    transition-all

                    ${
                      active
                        ? "translate-x-1 text-[#C89A7B]"
                        : "text-gray-300"
                    }
                  `}
                />

              </div>

            </motion.button>
          );

        })}

      </div>

    </aside>
  );
}