/**
 * Image optimization utilities for Next.js Image component
 */

// Base64 placeholder for blur effect
export const BLUR_DATA_URL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

// Common sizes for responsive images
export const IMAGE_SIZES = {
  card: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  hero: "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw",
  avatar: "(max-width: 768px) 64px, 96px",
  logo: "32px",
  gallery: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  news: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
};

// Image quality settings
export const IMAGE_QUALITY = {
  low: 50,
  medium: 75,
  high: 90,
  max: 100,
};

/**
 * Generate optimized image props for Next.js Image component
 */
export function getOptimizedImageProps(
  src: string,
  alt: string,
  options: {
    sizes?: string;
    quality?: number;
    priority?: boolean;
    placeholder?: "blur" | "empty";
    blurDataURL?: string;
  } = {}
) {
  return {
    src,
    alt,
    sizes: options.sizes || IMAGE_SIZES.card,
    quality: options.quality || IMAGE_QUALITY.medium,
    priority: options.priority || false,
    placeholder: options.placeholder || "blur",
    blurDataURL: options.blurDataURL || BLUR_DATA_URL,
  };
}

/**
 * Check if image is from external source
 */
export function isExternalImage(src: string): boolean {
  return src.startsWith("http://") || src.startsWith("https://");
}

/**
 * Get appropriate loading strategy based on image position
 */
export function getLoadingStrategy(isAboveFold: boolean = false) {
  return {
    priority: isAboveFold,
    loading: isAboveFold ? "eager" : "lazy" as const,
  };
}