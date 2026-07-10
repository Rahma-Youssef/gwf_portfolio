// import Image from "next/image";
// import leaf from "./../../../../public/images/leaf.png";
// import heroimage from "./../../../../public/images/hero.png";
// import logogwg from "./../../../../public/images/Logogwg.png";
// export default function HeroImage() {
//   return (
//     <div className="relative flex items-center justify-center">

//       {/* Glow خلف الصورة */}
//       <div className="" />

//       {/* أوراق يسار */}
//   <Image
//   src={leaf}
//   alt="Left Leaf"
//   width={0}
//   height={0}
//   sizes="100vw"
//   className="
//     absolute
//     bottom-6
//     -left-6
//     w-20
//     sm:w-24
//     md:w-32
//     lg:w-40
//     xl:w-48
//     h-auto
//     scale-x-[-1]
//     pointer-events-none
//     select-none
//   "
// />

// <Image
//   src={leaf}
//   alt="Right Leaf"
//   width={0}
//   height={0}
//   sizes="100vw"
//   className="
//     absolute
//     top-6
//     -right-6
//     w-20
//     sm:w-24
//     md:w-32
//     lg:w-40
//     xl:w-48
//     h-auto
//     pointer-events-none
//     select-none
//   "
// />
  

//       {/* الصورة */}
//       <div className="relative ">

//         <Image
//           src={logogwg}
//           alt="Golden Glow Events"
//           width={900}
//           height={950}
//           priority
//           className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[650px] lg:w-[620px]"
//         />

//         {/* Overlay */}
//         {/* <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/10" /> */}

//         {/* اللوجو فوق الصورة */}
//         <div className="absolute inset-0 flex items-center justify-center">

//           {/* <div className="rounded-3xl bg-white/20 p-6 backdrop-blur-md">

//             <Image
//               src="/images/logo.png"
//               alt="GWG Logo"
//               width={280}
//               height={280}
//               className="drop-shadow-xl"
//             />

//           </div> */}

//         </div>

//         {/* نجوم بسيطة */}
//         <span className="absolute left-10 top-12 text-2xl text-[#C89A7B]">
//           ✦
//         </span>

//         <span className="absolute right-12 top-24 text-xl text-[#C89A7B]">
//           ✦
//         </span>

//         <span className="absolute bottom-16 left-16 text-xl text-[#C89A7B]">
//           ✦
//         </span>

//       </div>

//       {/* Card أسفل الصورة */}
//       {/* <div className="absolute -bottom-8 left-1/2 w-[90%] -translate-x-1/2 rounded-3xl bg-white/90 p-6 shadow-2xl backdrop-blur">

//         <div className="flex items-center justify-between">

//           <div className="text-center">
//             <h3 className="text-2xl font-semibold text-[#0F4C4C]">
//               Luxury
//             </h3>

//             <p className="text-sm text-gray-500">
//               Event Planning
//             </p>
//           </div>

//           <div className="h-12 w-px bg-gray-200" />

//           <div className="text-center">
//             <h3 className="text-2xl font-semibold text-[#0F4C4C]">
//               Since 2018
//             </h3>

//             <p className="text-sm text-gray-500">
//               Creating Memories
//             </p>
//           </div>

//         </div>

//       </div> */}

//     </div>
//   );
// }

"use client";

import { motion } from "motion/react";
import Image from "next/image";

import leaf from "./../../../../public/images/leaf.png";
import logogwg from "./../../../../public/images/Logogwg.png";

export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center ">

      {/* Glow */}
      <motion.div
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[450px] w-[450px] rounded-full bg-[#EAD6C3]/30 blur-[120px]"
      />

      {/* Left Leaf */}
     <motion.div
  initial={{ opacity: 0, x: -40 }}
  animate={{
    opacity: 1,
    x: 0,
    rotate: [-4, 1, -4],
  }}
  transition={{
    opacity: { duration: 1 },
    x: { duration: 1 },
    rotate: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
  className="absolute bottom-6 -left-6 origin-bottom-right lg:-left-200"
>
  <Image
    src={leaf}
    alt="Left Leaf"
    width={0}
    height={0}
    sizes="100vw"
    className="w-23 sm:w-40 md:w-52 lg:w-40 xl:w-48 h-auto scale-x-[-1] block "
  />
</motion.div>

      {/* Right Leaf */}
    <motion.div
  initial={{ opacity: 0, x: 40 }}
  animate={{
    opacity: 1,
    x: 0,
    rotate: [4, -1, 4],
  }}
  transition={{
    opacity: { duration: 1 },
    x: { duration: 1 },
    rotate: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
  className="absolute top-6 -right-6 origin-top-left  lg:-right-40"
>
  <Image
    src={leaf}
    alt="Right Leaf"
    width={0}
    height={0}
    sizes="100vw"
    className="w-23 sm:w-40 md:w-52 lg:w-40 xl:w-48 h-auto block "
  />
</motion.div>

      {/* Logo */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.85,
          y: 50,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -10, 0],
        }}
        transition={{
          opacity: {
            duration: 1,
          },
          scale: {
            duration: 1,
          },
          y: {
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          },
        }}
        className="relative z-10"
      >
        <Image
          src={logogwg}
          alt="Golden Glow Events"
          priority
          className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[650px] lg:w-[620px]"
        />
      </motion.div>

      {/* Sparkle 1 */}
      <motion.span
        animate={{
          opacity: [0.2, 1, 0.2],
          scale: [1, 1.4, 1],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute left-10 top-12 text-2xl text-[#C89A7B]"
      >
        ✦
      </motion.span>

      {/* Sparkle 2 */}
      <motion.span
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [1, 1.5, 1],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 2.5,
          delay: 0.5,
          repeat: Infinity,
        }}
        className="absolute right-12 top-24 text-xl text-[#C89A7B]"
      >
        ✦
      </motion.span>

      {/* Sparkle 3 */}
      <motion.span
        animate={{
          opacity: [0.2, 1, 0.2],
          scale: [1, 1.3, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 3,
          delay: 1,
          repeat: Infinity,
        }}
        className="absolute bottom-16 left-16 text-xl text-[#C89A7B]"
      >
        ✦
      </motion.span>
    </div>
  );
}