"use client";

import { useRef } from "react";
import { useInView } from "motion/react";

import Header from "../_components/Header/Header";


export default function OurPortfolio() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    amount: 0.3,
  });

  return (
    <section
      ref={sectionRef}
      id="OurPortfolio"
      className="py-20"
    >
      <Header
        title="Our Portfolio"
        description="نقدم مجموعة متكاملة من خدمات تنظيم المناسبات لتناسب جميع احتياجاتكم."
        isInView={isInView}
      />
    </section>
  );
}