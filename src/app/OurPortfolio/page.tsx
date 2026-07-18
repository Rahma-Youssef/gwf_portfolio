"use client";

import { useRef, useState } from "react";

import {
  portfolio,
  PortfolioItem,
} from "../../data/portfolio";

import PortfolioHeader from "../_components/OurPortfolioSec/PortfolioHeader/PortfolioHeader";
import FeaturedEvent from "../_components/OurPortfolioSec/FeaturedEvent/FeaturedEvent";

import ImageLightbox from "../_components/OurPortfolioSec/ImageLightbox/ImageLightbox";
import AlbumGallery from "../_components/OurPortfolioSec/AlbumGallery/AlbumGallery";
import PortfolioGrid from "../_components/OurPortfolioSec/AlbumsGrid/AlbumsGrid";

export default function OurPortfolio() {
  const portfolioRef = useRef<HTMLElement>(null);

  const [selectedItem, setSelectedItem] =
    useState<PortfolioItem | null>(null);

  const [selectedImageIndex, setSelectedImageIndex] =
    useState<number | null>(null);

  const featuredItem = portfolio.find(
    (item) => item.featured
  );

  const openGallery = (item: PortfolioItem) => {
    setSelectedItem(item);

    setTimeout(() => {
      portfolioRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  const closeGallery = () => {
    setSelectedItem(null);
    setSelectedImageIndex(null);

    setTimeout(() => {
      portfolioRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (
      !selectedItem ||
      selectedImageIndex === null
    ) {
      return;
    }

    setSelectedImageIndex(
      (selectedImageIndex + 1) %
        selectedItem.images.length
    );
  };

  const prevImage = () => {
    if (
      !selectedItem ||
      selectedImageIndex === null
    ) {
      return;
    }

    setSelectedImageIndex(
      (selectedImageIndex -
        1 +
        selectedItem.images.length) %
        selectedItem.images.length
    );
  };

  return (
    <main
      ref={portfolioRef}
      id="portfolio"
      className="bg-[#FAF7F2]"
    >
      {!selectedItem && (
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">

            <PortfolioHeader isInView />

            {/* {featuredItem && (
              <FeaturedEvent
                item={featuredItem}
                onClick={() =>
                  openGallery(featuredItem)
                }
              />
            )} */}

            <PortfolioGrid
              items={portfolio}
              onSelect={openGallery}
            />

          </div>
        </section>
      )}

 {selectedItem && (
  <section className="relative">
    <div className="mx-auto max-w-7xl px-6">
      <AlbumGallery
        item={selectedItem}
        onBack={closeGallery}
        onImageClick={openLightbox}
      />
    </div>
  </section>
)}

      {selectedItem &&
        selectedImageIndex !== null && (
          <ImageLightbox
            images={selectedItem.images}
            currentIndex={selectedImageIndex}
            open={true}
            onClose={closeLightbox}
            onNext={nextImage}
            onPrev={prevImage}
          />
        )}
    </main>
  );
}