"use client";

import Link from "next/link";
import { ArrowRight, Anchor } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  backgroundImage?: string;
  showAnchor?: boolean;
}

export function HeroSection({
  title,
  subtitle,
  description,
  ctaText = "Daftar Sekarang",
  ctaHref = "/contact",
  secondaryCtaText = "Pelajari Lebih Lanjut",
  secondaryCtaHref = "/about",
  backgroundImage,
  showAnchor = true,
}: HeroSectionProps) {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60 z-10" />

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative z-20 container-maritime text-center text-white space-y-8">
        {/* Icon */}
        {showAnchor && (
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
              <Anchor className="w-8 h-8 text-white animate-bounce" />
            </div>
          </div>
        )}

        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-semibold">
            {subtitle}
          </p>
        </div>

        {/* Description */}
        {description && (
          <p className="text-lg text-blue-50 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href={ctaHref}
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 group shadow-lg hover:shadow-xl"
          >
            {ctaText}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href={secondaryCtaHref}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            {secondaryCtaText}
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
