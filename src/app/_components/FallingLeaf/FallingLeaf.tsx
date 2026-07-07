"use client";

import { motion } from "motion/react";
import Image from "next/image";

import leaf1 from "./../../../../public/images/leaf1.png";
import leaf2 from "./../../../../public/images/leaf2.png";
import leaf3 from "./../../../../public/images/leaf3.png";

type FallingLeafProps = {
  isActive: boolean;
};

const leaves = [
  {
    image: leaf1,
    left: "40%",
    size: "w-20",
    delay: 0,
    duration: 10,
    rotate: 25,
  },
  {
    image: leaf2,
    left: "68%",
    size: "w-20",
    delay: 3,
    duration: 11,
    rotate: -35,
  },
  {
    image: leaf3,
    left: "20%",
    size: "w-20",
    delay: 6,
    duration: 12,
    rotate: 40,
  },
];

export default function FallingLeaf({ isActive }: FallingLeafProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-20">
      {leaves.map((leafItem, index) => (
        <motion.div
          key={index}
          initial={{
            y: -150,
            opacity: 0,
            rotate: 0,
          }}
          animate={
            isActive
              ? {
                  y: ["0vh", "110vh"],
                  x: [0, 20, -15, 10, 0],
                  rotate: [0, leafItem.rotate, -leafItem.rotate, 0],
                  opacity: [0, 1, 1, 0],
                }
              : {
                  opacity: 0,
                }
          }
          transition={{
            duration: leafItem.duration,
            delay: leafItem.delay,
            repeat: isActive ? Infinity : 0,
            ease: "linear",
          }}
          style={{
            left: leafItem.left,
          }}
          className="absolute top-0"
        >
          <Image
            src={leafItem.image}
            alt="leaf"
            width={0}
            height={0}
            sizes="100vw"
            className={`${leafItem.size} h-auto opacity-60`}
          />
        </motion.div>
      ))}
    </div>
  );
}