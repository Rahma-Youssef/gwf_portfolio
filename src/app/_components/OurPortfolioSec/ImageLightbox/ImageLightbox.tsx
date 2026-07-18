"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";

type ImageLightboxProps = {
  images: string[];
  currentIndex: number;
  open: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export default function ImageLightbox({
  images,
  currentIndex,
  open,
  onClose,
  onNext,
  onPrev,
}: ImageLightboxProps) {

  useEffect(() => {

    const handleKey = (e: KeyboardEvent) => {

      if (!open) return;

      if (e.key === "Escape") onClose();

      if (e.key === "ArrowRight") onNext();

      if (e.key === "ArrowLeft") onPrev();

    };

    window.addEventListener("keydown", handleKey);

    return () =>
      window.removeEventListener("keydown", handleKey);

  }, [open, onClose, onNext, onPrev]);

  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed
            inset-0
            z-[999]
            bg-black/95
          "
        >
                    <button
            onClick={onClose}
            className="
              absolute
              right-8
              top-8
              z-50
              rounded-full
              bg-white/10
              p-3
              text-white
              backdrop-blur
            "
          >
            <X />
          </button>

          <button
            onClick={onPrev}
            className="
              absolute
              left-8
              top-1/2
              z-50
              -translate-y-1/2
              rounded-full
              bg-white/10
              p-4
              text-white
              backdrop-blur
            "
          >
            <ChevronLeft />
          </button>

          <button
            onClick={onNext}
            className="
              absolute
              right-8
              top-1/2
              z-50
              -translate-y-1/2
              rounded-full
              bg-white/10
              p-4
              text-white
              backdrop-blur
            "
          >
            <ChevronRight />
          </button>
                    <div
            className="
              absolute
              left-1/2
              top-8
              z-50
              -translate-x-1/2
              rounded-full
              bg-white/10
              px-6
              py-2
              text-white
              backdrop-blur
            "
          >
            {currentIndex + 1} / {images.length}
          </div>
                    <div
            className="
              flex
              h-full
              items-center
              justify-center
              p-8
            "
          >

            <motion.div
              key={images[currentIndex]}
              initial={{
                opacity: 0,
                scale: .9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: .3,
              }}
              className="
                relative
                h-[90vh]
                w-full
                max-w-6xl
              "
            >

              <Image
                src={images[currentIndex]}
                alt=""
                fill
                className="object-contain"
              />

            </motion.div>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}