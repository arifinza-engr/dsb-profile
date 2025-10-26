import { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { GalleryCard } from "@/components/sections/GalleryCard";
import Link from "next/link";
import { Filter } from "lucide-react";

export const metadata: Metadata = {
  title: "Galeri - PT. Duta Samudera Bahari",
  description: "Dokumentasi kegiatan, pelatihan, dan pengalaman ABK kami",
};

export default function GalleryPage() {
  // Sample gallery data
  const galleryItems = [
    {
      id: "1",
      title: "Pelatihan STCW di Simulator Kapal",
      description:
        "Para peserta pelatihan menjalankan simulasi navigasi kapal di fasilitas modern kami",
      image:
        "https://images.unsplash.com/photo-1753526372680-7d368f2f068e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVsYXV0JTIwaW5kb25lc2lhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      category: "Pelatihan",
      alt: "Pelatihan STCW",
      date: "2024-01-15",
    },
    {
      id: "2",
      title: "Penempatan ABK di Kapal Tanker",
      description:
        "ABK lulusan kami bersiap di atas kapal tanker minyak untuk pelayaran internasional",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      category: "Penempatan",
      alt: "Penempatan ABK",
      date: "2024-01-10",
    },
    {
      id: "3",
      title: "Workshop Keselamatan Kerja",
      description:
        "Peserta mengikuti workshop intensif tentang prosedur keselamatan maritim terkini",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      category: "Workshop",
      alt: "Workshop Keselamatan",
      date: "2024-01-08",
    },
    {
      id: "4",
      title: "Sertifikasi Internasional",
      description:
        "Peserta menerima sertifikat STCW dan IMO setelah lulus ujian komprehensif",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      category: "Sertifikasi",
      alt: "Sertifikasi",
      date: "2024-01-05",
    },
    {
      id: "5",
      title: "Event Networking Maritim",
      description:
        "Gathering ABK, calon ABK, dan profesional maritim untuk networking dan knowledge sharing",
      image:
        "https://images.unsplash.com/photo-1587355794919-a5ee00b7f563?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVsYXV0JTIwaW5kb25lc2lhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      category: "Event",
      alt: "Event Networking",
      date: "2024-01-01",
    },
    {
      id: "6",
      title: "Fasilitas Pelatihan Modern",
      description:
        "Laboratorium dan simulator kami dilengkapi dengan teknologi terkini untuk pembelajaran optimal",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      category: "Fasilitas",
      alt: "Fasilitas",
      date: "2023-12-28",
    },
    {
      id: "7",
      title: "Program Mentoring One-on-One",
      description:
        "Mentor berpengalaman memberikan panduan karir langsung kepada peserta pelatihan",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      category: "Mentoring",
      alt: "Mentoring",
      date: "2023-12-25",
    },
    {
      id: "8",
      title: "Kunjungan ke Pelabuhan Internasional",
      description:
        "Peserta mengunjungi pelabuhan untuk belajar langsung tentang operasi logistik dan pelayaran",
      image:
        "https://images.unsplash.com/photo-1683029638112-897a5f8da5d1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlbGF1dCUyMGluZG9uZXNpYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      category: "Study Tour",
      alt: "Study Tour",
      date: "2023-12-20",
    },
    {
      id: "9",
      title: "Upacara Kelulusan 2023",
      description:
        "Para lulusan program pelatihan menerima ijazah dan siap memulai karir maritim mereka",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      category: "Event",
      alt: "Upacara Kelulusan",
      date: "2023-12-15",
    },
  ];

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
      {/* Hero Section */}
      <HeroSection
        title="Galeri Kegiatan Kami"
        subtitle="Dokumentasi Program Pelatihan & Penempatan"
        description="Lihat dokumentasi lengkap kegiatan, pelatihan, dan perjalanan karir ABK kami"
        ctaText="Hubungi Kami"
        ctaHref="/contact"
        secondaryCtaText="Kembali ke Beranda"
        secondaryCtaHref="/"
      />

      {/* Gallery Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
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
