
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
            className="bg-[#FAF7F2] py-15 overflow-hidden">
            <FallingLeaf isActive={isHeroInView} />
            <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2  flex-column-reverse">

                <div className="order-2 lg:order-1">
                    <HeroContent />
                </div>

                <div className="order-1 lg:order-2">
                    <HeroImage isActive={isHeroInView} />
                </div>


            </div>
        </section>
    );
}