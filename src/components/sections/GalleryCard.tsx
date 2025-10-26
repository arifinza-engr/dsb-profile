"use client";

import { GalleryItem } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { id } from "date-fns/locale";

interface GalleryCardProps {
  item: GalleryItem;
  onImageClick?: (item: GalleryItem) => void;
}

export function GalleryCard({ item, onImageClick }: GalleryCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const formattedDate = format(new Date(item.date), "dd MMMM yyyy", {
    locale: id,
  });

  return (
    <Card
      variant="default"
      className="h-full overflow-hidden group cursor-pointer"
    >
      {/* Image Container */}
      <div
        className="relative h-64 bg-gray-200 dark:bg-gray-700 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => onImageClick?.(item)}
      >
        <Image
          src={item.image}
          alt={item.alt || item.title}
          fill
          className={`object-cover transition-transform duration-300 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />

        {/* Category Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
            {item.category}
          </span>
        </div>

        {/* Overlay on Hover */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-300">
            <div className="text-center text-white">
              <div className="text-4xl mb-2">👁️</div>
              <p className="font-semibold">Lihat Detail</p>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <CardHeader>
        <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors text-lg">
          {item.title}
        </CardTitle>
        <CardDescription className="line-clamp-2 mt-2">
          {item.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Meta Info */}
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <Calendar className="w-4 h-4" />
          <span>{formattedDate}</span>
        </div>

        {/* View More Link */}
        <button className="w-full bg-primary text-white py-2 rounded hover:bg-blue-700 transition-colors font-semibold text-sm">
          Lihat Detail
        </button>
      </CardContent>
    </Card>
  );
}
