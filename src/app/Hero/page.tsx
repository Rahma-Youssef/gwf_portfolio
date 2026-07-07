// import Image from "next/image";
// import Link from "next/link";
// import heroimage from "./../../../public/images/hero.png";

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-[#FAF7F2] py-28 lg:pt-36 ">
//       {/* Background Blur */}
//       <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#0F4C4C]/10 blur-[120px]" />
//       <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#D7B89A]/20 blur-[140px]" />

//       <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
//         {/* Left Content */}
//         <div className="text-center lg:text-left">
//           {/* <Image
//             src="/images/logo.png"
//             alt="GWG Logo"
//             width={150}
//             height={150}
//             className="mx-auto mb-6 lg:mx-0"
//           /> */}

//           <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#C89A7B]">
//             We Plan. You Celebrate.
//           </p>

//           <h1 className="font-serif text-5xl leading-tight text-[#0F4C4C] md:text-6xl">
//             Creating Moments
//           </h1>

//           <h2 className="mt-2 font-serif text-4xl italic text-[#C89A7B] md:text-5xl">
//             That Last Forever
//           </h2>

//           <p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-gray-600 lg:mx-0">
//             We design unforgettable weddings, birthdays, corporate events,
//             and celebrations with elegance, creativity and perfection.
//           </p>

//           <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
//             <Link
//               href="#contact"
//               className="rounded-full bg-[#0F4C4C] px-8 py-4 text-center font-medium text-white transition hover:scale-105"
//             >
//               Book Your Event
//             </Link>

//             <Link
//               href="#portfolio"
//               className="rounded-full border border-[#C89A7B] px-8 py-4 text-center font-medium text-[#0F4C4C] transition hover:bg-[#C89A7B]/10"
//             >
//               View Portfolio
//             </Link>
//           </div>

//           {/* Stats */}
//           {/* <div className="mt-12 grid grid-cols-3 rounded-3xl bg-white p-6 shadow-xl">
//             <div className="text-center">
//               <h3 className="text-3xl font-semibold text-[#0F4C4C]">500+</h3>
//               <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
//                 Events
//               </p>
//             </div>

//             <div className="border-x text-center">
//               <h3 className="text-3xl font-semibold text-[#0F4C4C]">5.0</h3>
//               <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
//                 Rating
//               </p>
//             </div>

//             <div className="text-center">
//               <h3 className="text-3xl font-semibold text-[#0F4C4C]">98%</h3>
//               <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
//                 Satisfaction
//               </p>
//             </div>
//           </div> */}
//         </div>

//         {/* Right Image */}
//         <div className="relative">
//           <div className="overflow-hidden rounded-[40px] shadow-2xl">
//             <Image
//               src={heroimage}
//               alt="Luxury Event"
//               width={900}
//               height={900}
//               priority
//               className="h-full w-full object-cover"
//             />
//           </div>

//           {/* Floating Card */}
//           {/* <div className="absolute -bottom-6 left-1/2 w-[90%] -translate-x-1/2 rounded-3xl bg-white/90 p-5 shadow-xl backdrop-blur">
//             <div className="flex justify-between text-center">
//               <div>
//                 <h4 className="text-2xl font-semibold text-[#0F4C4C]">
//                   Weddings
//                 </h4>
//                 <p className="text-sm text-gray-500">Luxury Decoration</p>
//               </div>

//               <div>
//                 <h4 className="text-2xl font-semibold text-[#0F4C4C]">
//                   Events
//                 </h4>
//                 <p className="text-sm text-gray-500">Since 2018</p>
//               </div>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client"; // This directive is used to indicate that the following code should be executed on the client side in a Next.js application.

import FallingLeaf from "../_components/FallingLeaf/FallingLeaf";
import HeroContent from "../_components/HeroContent/HeroContent";
import HeroImage from "../_components/HeroImage/HeroImage";
import { useRef } from "react";
import { useInView } from "motion/react";




export default function Hero() {
    const heroRef = useRef(null);

    const isHeroInView = useInView(heroRef, {
        amount: 0.4,
    });
    return (
        <section
            ref={heroRef}
            className="bg-[#FAF7F2] py-20 overflow-hidden">
            <FallingLeaf isActive={isHeroInView} />
            <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2  flex-column-reverse">

                <div className="order-2 lg:order-1">
                    <HeroContent />
                </div>

                <div className="order-1 lg:order-2">
                    <HeroImage />
                </div>


            </div>
        </section>
    );
}