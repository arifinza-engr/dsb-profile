"use client";

import { useState } from "react";
import { GalleryCard } from "./GalleryCard";
import { GalleryItem } from "@/lib/types";

interface GalleryGridProps {
  items: GalleryItem[];
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const [visibleCount, setVisibleCount] = useState(6);

  const visibleItems = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;

  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {visibleItems.map((item) => (
          <GalleryCard key={item.id} item={item} />
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="text-center mt-16">
          <button
            onClick={loadMore}
            className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
          >
            Muat Lebih Banyak
          </button>
        </div>
      )}
    </>
  );
}