import { Metadata } from "next";
import { NewsCard } from "@/components/sections/NewsCard";
import Link from "next/link";
import { Search, ArrowRight, Newspaper } from "lucide-react";
import { Input } from "@/components/ui/Input";

export const metadata: Metadata = {
  title: "Berita & Blog - PT. Duta Samudera Bahari",
  description: "Berita terbaru, tips karir, dan artikel industri maritim",
};

export default function NewsPage() {
  // Sample news data - in real app, this would come from Contentlayer
  const newsPosts = [
    {
      id: "1",
      title: "Selamat Datang di PT. Duta Samudera Bahari",
      description:
        "Kami menghadirkan solusi terpadu untuk pemberangkatan dan penempatan ABK dengan standar internasional.",
      author: "Tim Komunikasi",
      date: "2024-01-20",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      category: "Berita",
      tags: ["pemberangkatan", "abk"],
      slug: "selamat-datang-di-pt-duta-samudera-bahari",
      readingTime: { text: "5 min read", minutes: 5, time: 300000, words: 850 },
    },
    {
      id: "2",
      title: "10 Tips Sukses Menghadapi Interview Kapal Asing",
      description:
        "Pelajari tips dan trik dari HR profesional kami untuk mempersiapkan interview internasional Anda.",
      author: "Budi Hartono",
      date: "2024-01-18",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      category: "Tips",
      tags: ["interview", "karir", "tips"],
      slug: "10-tips-sukses-menghadapi-interview-kapal-asing",
      readingTime: {
        text: "8 min read",
        minutes: 8,
        time: 480000,
        words: 1400,
      },
    },
    {
      id: "3",
      title: "Program Beasiswa Pelatihan 2024 Sudah Dibuka",
      description:
        "Kami menawarkan 50 beasiswa penuh untuk program pelatihan STCW tahun ini. Daftar sekarang sebelum kuota penuh!",
      author: "HRD Team",
      date: "2024-01-15",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      category: "Pengumuman",
      tags: ["beasiswa", "pelatihan", "program"],
      slug: "program-beasiswa-pelatihan-2024",
      readingTime: { text: "4 min read", minutes: 4, time: 240000, words: 680 },
    },
    {
      id: "4",
      title: "Pengalaman ABK Kami Bekerja di Kapal Kontainer Terbesar Dunia",
      description:
        "Testimoni menarik dari Andi Kurniawan yang kini bekerja sebagai Chief Engineer di Ever Given.",
      author: "Media Team",
      date: "2024-01-12",
      image:
        "https://images.unsplash.com/photo-1757876804410-6a0702805fbe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlbGF1dCUyMGluZG9uZXNpYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      category: "Testimoni",
      tags: ["karir", "sukses", "testimoni"],
      slug: "pengalaman-abk-kami-bekerja-di-kapal-kontainer",
      readingTime: {
        text: "6 min read",
        minutes: 6,
        time: 360000,
        words: 1050,
      },
    },
    {
      id: "5",
      title: "Standar Keselamatan Maritime IMO 2024: Apa yang Berubah?",
      description:
        "Update terbaru tentang standar keselamatan dan regulasi maritim internasional yang perlu Anda ketahui.",
      author: "Capt. Rudi Santoso",
      date: "2024-01-10",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      category: "Regulasi",
      tags: ["keselamatan", "imo", "regulasi"],
      slug: "standar-keselamatan-maritime-imo-2024",
      readingTime: {
        text: "7 min read",
        minutes: 7,
        time: 420000,
        words: 1200,
      },
    },
    {
      id: "6",
      title: "Bergabunglah dengan Event Networking ABK di Jakarta",
      description:
        "Kesempatan emas bertemu dengan expert industri maritim dan network dengan ABK lainnya.",
      author: "Events Team",
      date: "2024-01-08",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      category: "Event",
      tags: ["networking", "event", "community"],
      slug: "bergabunglah-dengan-event-networking-abk-jakarta",
      readingTime: { text: "3 min read", minutes: 3, time: 180000, words: 520 },
    },
  ];

  const categories = [
    { name: "Semua", value: "all", count: newsPosts.length },
    ...Array.from(new Set(newsPosts.map((p) => p.category))).map((cat) => ({
      name: cat,
      value: cat.toLowerCase(),
      count: newsPosts.filter((p) => p.category === cat).length,
    })),
  ];

  return (
    <>
      {/* Header Section */}
      {/* <section className="py-20 bg-white dark:bg-slate-900 mb-0">
        <div className="container-maritime text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Berita & Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-0">
            Berita terbaru, tips karir, dan artikel industri maritim
          </p>
        </div>
      </section> */}

      {/* Main Content */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container-maritime">
          <div className="container-maritime text-center mb-10">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Berita & Blog
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-0">
              Berita terbaru, tips karir, dan artikel industri maritim
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full mt-4" />
          </div>
          {/* Search Section */}
          <div className="mb-12">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Cari artikel..."
                className="pl-12 py-3 rounded-lg border-2 focus:border-primary w-full"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 justify-center">
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

          {/* Featured Post */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Artikel Pilihan
            </h3>
            <NewsCard post={newsPosts[0]} featured={true} />
          </div>

          {/* News Grid */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Artikel Terbaru
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {newsPosts.slice(1).map((post) => (
                <NewsCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 py-8">
            <button className="px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors">
              ← Sebelumnya
            </button>
            <div className="flex gap-2">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    page === 1
                      ? "bg-primary text-white"
                      : "bg-gray-100 dark:bg-slate-800 hover:bg-primary hover:text-white"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button className="px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors">
              Selanjutnya →
            </button>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-900">
        <div className="container-maritime max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Berlangganan Newsletter
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Dapatkan artikel terbaru dan tips karir langsung ke email Anda
            setiap minggunya
          </p>

          <form className="flex gap-2">
            <Input
              type="email"
              placeholder="Masukkan email Anda"
              className="flex-1 py-3 rounded-lg border-2 focus:border-primary"
            />
            <button
              type="submit"
              className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container-maritime">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Tag Populer
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "abk",
              "karir",
              "pelatihan",
              "maritim",
              "internasional",
              "tips",
              "keselamatan",
              "networking",
            ].map((tag) => (
              <Link
                key={tag}
                href={`/news?tag=${tag}`}
                className="px-4 py-2 bg-blue-100 dark:bg-slate-800 text-primary dark:text-blue-400 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-colors font-medium"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
