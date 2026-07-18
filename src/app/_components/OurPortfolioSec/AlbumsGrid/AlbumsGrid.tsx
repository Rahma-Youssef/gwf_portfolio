"use client";

import { motion } from "motion/react";


import { PortfolioItem } from "@/data/portfolio";
import PortfolioCard from "../AlbumCard/AlbumCard";

type PortfolioGridProps = {
  items: PortfolioItem[];
  onSelect: (item: PortfolioItem) => void;
};

export default function PortfolioGrid({
  items,
  onSelect,
}: PortfolioGridProps) {
  return (
    <motion.div
      layout
      className="
        grid
        grid-cols-1
        gap-x-10
        gap-y-20
        sm:grid-cols-2
        lg:grid-cols-3
        xl:gap-x-14
      "
    >
      {items.map((item) => (
        <PortfolioCard
          key={item.id}
          item={item}
          onClick={() => onSelect(item)}
        />
      ))}
    </motion.div>
  );
}