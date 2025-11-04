import { Metadata } from "next";
import { NewsCard } from "@/components/sections/NewsCard";
import Link from "next/link";
import { Search, ArrowRight, Newspaper } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { getNews, getNewsCategories } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Berita & Blog - PT. Duta Samudera Bahari",
  description: "Berita terbaru, tips karir, dan artikel industri maritim",
};

export default async function NewsPage() {
  const newsPosts = await getNews();
  const allCategories = getNewsCategories();

  const categories = [
    { name: "Semua", value: "all", count: newsPosts.length },
    ...allCategories.map((cat) => ({
      name: cat.name,
      value: cat.id,
      count: newsPosts.filter((p) => p.category === cat.name).length,
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
