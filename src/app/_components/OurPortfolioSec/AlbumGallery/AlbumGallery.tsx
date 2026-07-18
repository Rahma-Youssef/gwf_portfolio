"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowLeft,
  MapPin,
  CalendarDays,
} from "lucide-react";

import { PortfolioItem } from "@/data/portfolio";

type PortfolioGalleryProps = {
  item: PortfolioItem;
  onBack: () => void;
  onImageClick: (index: number) => void;
};

export default function AlbumGallery({
  item,
  onBack,
  onImageClick,
}: PortfolioGalleryProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* =========================
          STICKY BACK BUTTON
      ========================== */}

      <div
        className="
          sticky
          top-25
          z-50
          mb-10
        "
      >
        <button
          onClick={onBack}
          className="
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-[#0F4C4C]/10
            bg-[#FAF7F2]/90
            px-5
            py-3
            text-sm
            text-[#0F4C4C]
            shadow-lg
            backdrop-blur-md
            transition-all
            hover:-translate-x-1
            hover:bg-white
            mt-10
          "
        >
          <ArrowLeft size={18} />

          Back to Portfolio
        </button>
      </div>

      {/* =========================
          ALBUM INFO
      ========================== */}

      <div className="mb-14">
        <p
          className="
            text-xs
            uppercase
            tracking-[0.3em]
            text-[#C89A7B]
          "
        >
          Portfolio Album
        </p>

        <h2
          className="
            mt-4
            font-serif
            text-4xl
            text-[#0F4C4C]

            sm:text-5xl
          "
        >
          {item.title}
        </h2>

        <p className="mt-3 text-lg text-gray-500">
          {item.subtitle}
        </p>

        {(item.location || item.year) && (
          <div
            className="
              mt-6
              flex
              flex-wrap
              gap-6
              text-sm
              text-gray-500
            "
          >
            {item.location && (
              <div className="flex items-center gap-2">
                <MapPin size={18} />

                {item.location}
              </div>
            )}

            {item.year && (
              <div className="flex items-center gap-2">
                <CalendarDays size={18} />

                {item.year}
              </div>
            )}
          </div>
        )}
      </div>

      {/* =========================
          GALLERY
      ========================== */}

      <div
        className="
          grid
          gap-5

          sm:grid-cols-2

          lg:grid-cols-3
        "
      >
        {item.images.map((image, index) => (
          <motion.div
            key={image}
            whileHover={{
              y: -6,
            }}
            transition={{
              duration: 0.3,
            }}
            onClick={() => onImageClick(index)}
            className="
              group
              cursor-pointer
              overflow-hidden
              rounded-[28px]
              bg-white
              p-2
              shadow-lg
            "
          >
            <div
              className="
                relative
                aspect-[4/5]
                overflow-hidden
                rounded-[22px]
              "
            >
              <Image
                src={image}
                alt={`${item.title} image ${index + 1}`}
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

              <div
                className="
                  absolute
                  inset-0
                  bg-black/0
                  transition-all
                  duration-500
                  group-hover:bg-black/10
                "
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}