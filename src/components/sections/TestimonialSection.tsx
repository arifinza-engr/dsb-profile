"use client";

import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  image: string;
  content: string;
  rating: number;
  contractDuration: string;
  shipType: string;
}

interface TestimonialSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialSection({ testimonials }: TestimonialSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-900">
      <div className="container-maritime">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Testimoni Pelaut
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Dengarkan pengalaman langsung dari para pelaut yang telah berhasil ditempatkan melalui layanan kami
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full mt-4" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12">
            <Quote className="absolute top-6 left-6 w-8 h-8 text-primary opacity-20" />
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < currentTestimonial.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                
                <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-6 italic">
                  "{currentTestimonial.content}"
                </blockquote>
                
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-foreground">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-primary font-semibold">
                    {currentTestimonial.position}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {currentTestimonial.company}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500 dark:text-gray-400 mt-4">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Kontrak: {currentTestimonial.contractDuration}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Jenis Kapal: {currentTestimonial.shipType}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="Testimoni sebelumnya"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex
                        ? "bg-primary"
                        : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                    }`}
                    aria-label={`Pergi ke testimoni ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="Testimoni selanjutnya"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}