"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

import { PortfolioItem } from "@/data/portfolio";

type PortfolioCardProps = {
  item: PortfolioItem;
  onClick: () => void;
};

export default function PortfolioCard({
  item,
  onClick,
}: PortfolioCardProps) {
  const previewImages = item.images.slice(0, 3);

  const [isFocused, setIsFocused] = useState(false);

  const handleClick = () => {
    // Mobile / Touch devices
    const isTouchDevice =
      window.matchMedia("(hover: none)").matches;

    if (isTouchDevice && !isFocused) {
      setIsFocused(true);
      return;
    }

    // Second tap or Desktop click
    onClick();
  };

  return (
    <motion.article
      onClick={handleClick}
      initial="initial"
      animate={isFocused ? "hover" : "initial"}
      whileHover="hover"
      className="
        group
        cursor-pointer
        outline-none
      "
    >
      {/* =========================
          ALBUM STACK
      ========================== */}

      <div
        className="
          relative
          h-[390px]

          sm:h-[440px]
        "
      >
        {/* =========================
            BACK IMAGE
        ========================== */}

        {previewImages[2] && (
          <motion.div
            variants={{
              initial: {
                rotate: 8,
                x: 0,
                y: 0,
              },

              hover: {
                rotate: 10,
                x: 18,
                y: -8,
              },
            }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            className="
              absolute
              inset-x-5
              top-2
              bottom-5
              rotate-[8deg]
              overflow-hidden
              rounded-[26px]
              bg-white
              p-2
              shadow-xl
            "
          >
            <div className="relative h-full overflow-hidden rounded-[20px]">
              <Image
                src={previewImages[2]}
                alt={`${item.title} preview`}
                fill
                sizes="400px"
                className="object-cover"
              />
            </div>
          </motion.div>
        )}

        {/* =========================
            MIDDLE IMAGE
        ========================== */}

        {previewImages[1] && (
          <motion.div
            variants={{
              initial: {
                rotate: -5,
                x: 0,
                y: 0,
              },

              hover: {
                rotate: -8,
                x: -18,
                y: -5,
              },
            }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            className="
              absolute
              inset-x-3
              top-3
              bottom-3
              rotate-[-5deg]
              overflow-hidden
              rounded-[26px]
              bg-white
              p-2
              shadow-2xl
            "
          >
            <div className="relative h-full overflow-hidden rounded-[20px]">
              <Image
                src={previewImages[1]}
                alt={`${item.title} preview`}
                fill
                sizes="400px"
                className="object-cover"
              />
            </div>
          </motion.div>
        )}

        {/* =========================
            MAIN IMAGE
        ========================== */}

        <motion.div
          variants={{
            initial: {
              y: 0,
              scale: 1,
            },

            hover: {
              y: -10,
              scale: 1.02,
            },
          }}
          transition={{
            duration: 0.45,
            ease: "easeOut",
          }}
          className="
            absolute
            inset-0
            z-10
            overflow-hidden
            rounded-[26px]
            bg-white
            p-2
            shadow-[0_25px_60px_rgba(15,76,76,0.16)]
          "
        >
          <div className="relative h-full overflow-hidden rounded-[20px]">
            <Image
              src={item.cover}
              alt={item.title}
              fill
              sizes="
                (max-width: 640px) 90vw,
                (max-width: 1024px) 45vw,
                33vw
              "
              className="
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            {/* Gradient */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/80
                via-black/10
                to-transparent
              "
            />

            {/* Photo Count */}

            <div
              className="
                absolute
                right-4
                top-4
                rounded-full
                border
                border-white/40
                bg-black/20
                px-3
                py-2
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-white
                backdrop-blur-md
              "
            >
              {item.images.length} Photos
            </div>

            {/* Content */}

            <div
              className="
                absolute
                inset-x-0
                bottom-0
                p-6
                text-white
              "
            >
              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-white/70
                "
              >
                Album
              </p>

              <h2
                className="
                  mt-3
                  font-serif
                  text-3xl
                "
              >
                {item.title}
              </h2>

              <p
                className="
                  mt-2
                  text-sm
                  text-white/70
                "
              >
                {item.subtitle}
              </p>

              <div
                className="
                  mt-5
                  flex
                  items-center
                  justify-between
                  border-t
                  border-white/20
                  pt-4
                "
              >
                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-white/70
                  "
                >
                  Explore Album
                </span>

                <motion.div
                  variants={{
                    initial: {
                      rotate: 0,
                    },

                    hover: {
                      rotate: 45,
                    },
                  }}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/50
                  "
                >
                  <ArrowUpRight size={18} />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Album Label */}

      <div
        className="
          mt-5
          flex
          items-center
          justify-between
          px-2
        "
      >
        <span
          className="
            text-[10px]
            uppercase
            tracking-[0.3em]
            text-[#C89A7B]
          "
        >
          Portfolio
        </span>

        <span
          className="
            text-xs
            text-gray-400
          "
        >
          {item.year || ""}
        </span>
      </div>
    </motion.article>
  );
}