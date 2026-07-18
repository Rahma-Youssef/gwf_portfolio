"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import Header from "../_components/Header/Header";
import AboutImage from "../_components/AboutSec/AboutImage/AboutImage";
import AboutContent from "../_components/AboutSec/AboutContent/AboutContent.";
import Count from "../_components/AboutSec/count/count";
import TrustedClients from "../_components/AboutSec/TrustedClients/TrustedClients";





export default function About() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    amount: 0.05,
  });

  return (
    <section
      ref={sectionRef}
      id="About"
      className="relative overflow-hidden py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <Header
          title="About Us"
          description="نحول كل مناسبة إلى تجربة استثنائية تجمع بين الفخامة والإبداع."
          isInView={isInView}
        />

        <div className="mt-20 grid gap-20 lg:grid-cols-2">

          <AboutImage isInView={isInView} />

          <div>
            <AboutContent />

            <Count isInView={isInView} />


          </div>


        </div>

        <TrustedClients isInView={isInView} />

      </div>
    </section>
  );
}