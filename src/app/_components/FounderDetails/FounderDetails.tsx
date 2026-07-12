// "use client";

// import { motion, AnimatePresence } from "motion/react";
// import Image from "next/image";
// import {
//   Quote,
//   CalendarDays,
//   Building2,
//   BriefcaseBusiness,
// } from "lucide-react";

// import { FounderType } from "../founders";

// type FounderDetailsProps = {
//   founder: FounderType | null;
// };

// export default function FounderDetails({
//   founder,
// }: FounderDetailsProps) {
//   return (
//     <AnimatePresence mode="wait">
//       {founder && (
//         <motion.section
//           key={founder.id}
//           initial={{
//             opacity: 0,
//             y: 60,
//             scale: .98,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//             scale: 1,
//           }}
//           exit={{
//             opacity: 0,
//             y: 40,
//           }}
//           transition={{
//             duration: .6,
//           }}
//           className="mt-24"
//         >
//           <div
//             className="
//               overflow-hidden
//               rounded-[40px]
//               border
//               border-[#ECE4DA]
//               bg-white
//               shadow-[0_30px_80px_rgba(0,0,0,.08)]
//             "
//           >
//             <div className="grid lg:grid-cols-2">

//               {/* LEFT */}

//               <div className="relative">

//                 <Image
//                   src={founder.image}
//                   alt={founder.name}
//                   className="
//                     h-[750px]
//                     w-full
//                     object-cover
//                   "
//                 />

//                 <div
//                   className="
//                     absolute
//                     inset-0
//                     bg-gradient-to-t
//                     from-black/60
//                     via-black/10
//                     to-transparent
//                   "
//                 />

//                 <div className="absolute bottom-10 left-10">

//                   <h3 className="font-serif text-2xl  md:text-5xl text-white">

//                     {founder.name}

//                   </h3>

//                   <p className="mt-3 text-3xl text-[#F2D5BC]">

//                     {founder.role}

//                   </p>

//                 </div>

//               </div>

//               {/* RIGHT */}

//               <div className="relative p-10 lg:p-16">

//                 <Quote
//                   size={120}
//                   className="
//                     absolute
//                     right-10
//                     top-10
//                     text-[#C89A7B]/10
//                   "
//                 />

//                 <span
//                   className="
//                     rounded-full
//                     bg-[#F7F3EE]
//                     px-5
//                     py-2
//                     text-sm
//                     uppercase
//                     tracking-[.25em]
//                     text-[#C89A7B]
//                   "
//                 >
//                   Founder Story
//                 </span>

//                 <blockquote
//                   dir="rtl"
//                   className="
//                     mt-8
//                     text-xl
//                     md:text-2xl
                    
//                     leading-relaxed
//                     font-semibold
//                     text-[#0F4C4C]
//                   "
//                 >
//                   "{founder.quote}"
//                 </blockquote>

//                 <p
//                   dir="rtl"
//                   className="
//                     mt-10
//                     leading-9
//                     text-gray-600
//                   "
//                 >
//                   {founder.description}
//                 </p>

//                 {/* INFO */}

//                 <div className="mt-12 grid gap-5">

//                   <div className="flex items-center gap-4">

//                     <CalendarDays
//                       className="text-[#C89A7B]"
//                     />

//                     <div>

//                       <p className="text-sm text-gray-400">

//                         الخبرة منذ

//                       </p>

//                       <h4 className="font-semibold">

//                         {founder.since}

//                       </h4>

//                     </div>

//                   </div>

//                   <div className="flex items-center gap-4">

//                     <Building2
//                       className="text-[#C89A7B]"
//                     />

//                     <div>

//                       <p className="text-sm text-gray-400">

//                         الشركة

//                       </p>

//                       <h4 className="font-semibold">

//                         {founder.company}

//                       </h4>

//                     </div>

//                   </div>

//                   <div className="flex items-center gap-4">

//                     <BriefcaseBusiness
//                       className="text-[#C89A7B]"
//                     />

//                     <div>

//                       <p className="text-sm text-gray-400">

//                         المنصب

//                       </p>

//                       <h4 className="font-semibold">

//                         {founder.role}

//                       </h4>

//                     </div>

//                   </div>

//                 </div>

//                 {/* Signature */}

//                 <div className="mt-14">

//                   <p className="font-allura text-5xl text-[#C89A7B]">

//                     {founder.name}

//                   </p>

//                 </div>

//               </div>

//             </div>
//           </div>
//         </motion.section>
//       )}
//     </AnimatePresence>
//   );
// }