import { Metadata } from "next";
import { GallerySection } from "@/components/sections/GallerySection";
import { getGalleryItems } from "@/lib/cms";
import Link from "next/link";
import { Image } from "lucide-react";

export const metadata: Metadata = {
  title: "Galeri - PT. Duta Samudera Bahari",
  description: "Dokumentasi kegiatan, pelatihan, dan pengalaman Pelaut kami",
};

export default async function GalleryPage() {
  const galleryItems = await getGalleryItems();

  return (
    <>
      {/* Header Section */}
      {/* <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800"></section> */}

      {/* Gallery Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container-maritime text-center mb-20">
          <h1 className="text-4xl font-bold text-foreground mb-4">Galeri</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-0">
            Dokumentasi kegiatan, pelatihan, dan pengalaman Pelaut kami
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full mt-4" />
        </div>
        <div className="container-maritime">
          <GallerySection galleryItems={galleryItems} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="container-maritime text-center text-white space-y-6">
          <h2 className="text-4xl font-bold">Ingin Melihat Lebih Banyak?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Kunjungi media sosial kami untuk update terbaru tentang kegiatan dan
            program pelatihan kami
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Instagram", url: "#" },
              { name: "Facebook", url: "#" },
              { name: "TikTok", url: "#" },
              { name: "YouTube", url: "#" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 transition-colors rounded-lg font-bold"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
