import { Metadata } from "next";
import { GalleryCard } from "@/components/sections/GalleryCard";
import { getGalleryItems } from "@/lib/cms";
import Link from "next/link";
import { Filter, Image } from "lucide-react";

export const metadata: Metadata = {
  title: "Galeri - PT. Duta Samudera Bahari",
  description: "Dokumentasi kegiatan, pelatihan, dan pengalaman ABK kami",
};

export default async function GalleryPage() {
  const galleryItems = await getGalleryItems();

  const categories = [
    { name: "Semua", value: "all", count: galleryItems.length },
    ...Array.from(new Set(galleryItems.map((g) => g.category))).map((cat) => ({
      name: cat,
      value: cat.toLowerCase().replace(" ", "-"),
      count: galleryItems.filter((g) => g.category === cat).length,
    })),
  ];

  return (
    <>
      {/* Header Section */}
      {/* <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800"></section> */}

      {/* Gallery Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container-maritime text-center mb-20">
          <h1 className="text-4xl font-bold text-foreground mb-4">Galeri</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-0">
            Dokumentasi kegiatan, pelatihan, dan pengalaman ABK kami
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full mt-4" />
        </div>
        <div className="container-maritime">
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
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    cat.value === "all"
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
          <div className="grid md:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
              Muat Lebih Banyak
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950">
        <div className="container-maritime">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: "500+", label: "Foto Kegiatan" },
              { number: "100+", label: "Event Terdokumentasi" },
              { number: "5000+", label: "ABK Terlatih" },
              { number: "50+", label: "Negara Partner" },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Album Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container-maritime">
          <h2 className="text-4xl font-bold text-foreground mb-12">
            Album Khusus
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Program Pelatihan 2024",
                description: "Dokumentasi lengkap program pelatihan tahun 2024",
                imageCount: 45,
                image:
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
              },
              {
                title: "Penempatan Internasional",
                description:
                  "ABK kami bekerja di berbagai negara dan kapal internasional",
                imageCount: 120,
                image:
                  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop",
              },
              {
                title: "Corporate Events",
                description:
                  "Kegiatan perusahaan, gathering, dan networking sessions",
                imageCount: 67,
                image:
                  "https://images.unsplash.com/photo-1516321318423-f06f70674e90?w=500&h=400&fit=crop",
              },
            ].map((album, idx) => (
              <Link
                key={idx}
                href={`/gallery/${album.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="group relative h-64 rounded-xl overflow-hidden cursor-pointer"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundImage: `url(${album.image})` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{album.title}</h3>
                  <p className="text-blue-100 mb-4">{album.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      📷 {album.imageCount} Foto
                    </span>
                    <span className="text-xl">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
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
              { name: "LinkedIn", url: "#" },
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
