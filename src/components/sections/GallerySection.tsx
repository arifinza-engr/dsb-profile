"use client";

import { useState, useMemo } from "react";
import { GalleryGrid } from "./GalleryGrid";
import { GalleryItem } from "@/lib/types";
import { Filter } from "lucide-react";

interface GallerySectionProps {
  galleryItems: GalleryItem[];
}

export function GallerySection({ galleryItems }: GallerySectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = useMemo(() => [
    { name: "Semua", value: "all", count: galleryItems.length },
    ...Array.from(new Set(galleryItems.map((g) => g.category))).map((cat) => ({
      name: cat,
      value: cat.toLowerCase().replace(" ", "-"),
      count: galleryItems.filter((g) => g.category === cat).length,
    })),
  ], [galleryItems]);

  const filteredItems = useMemo(() => {
    if (selectedCategory === "all") {
      return galleryItems;
    }
    return galleryItems.filter((item) => item.category === selectedCategory);
  }, [galleryItems, selectedCategory]);

  return (
    <>
      {/* Category Filter */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Filter className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">
            Filter Kategori
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value === "all" ? "all" : cat.name)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                (selectedCategory === "all" && cat.value === "all") ||
                (selectedCategory === cat.name)
                  ? "bg-primary text-white"
                  : "bg-gray-100 dark:bg-slate-800 text-foreground hover:bg-primary hover:text-white"
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <GalleryGrid items={filteredItems} />
    </>
  );
}