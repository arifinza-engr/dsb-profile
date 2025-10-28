import { Metadata } from "next";
import Link from "next/link";
import { HeroSection } from "@/components/sections/HeroSection";
import { VisionMissionSection } from "@/components/sections/VisionMissionSection";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { NewsCard } from "@/components/sections/NewsCard";
import { GalleryCard } from "@/components/sections/GalleryCard";
import { getCompanyProfile, getServices, getNews, getGalleryItems } from "@/lib/cms";
import { NewsPost, Service, GalleryItem } from "@/lib/types";
import { ArrowRight, Award, Users, Globe, LucideIcon } from "lucide-react";

interface WhyChooseUsItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default async function Home() {
  const company = await getCompanyProfile();
  const services = await getServices();
  const news = await getNews();
  const galleryItems = await getGalleryItems();

  return (
    <>
      <HeroSection
        title="Karir Cemerlang di Industri Maritim Global"
        subtitle={company.name}
        description="Kami menyediakan layanan rekrutmen dan penempatan ABK berkualitas tinggi dengan standar internasional terbaik. Bergabunglah dengan ribuan ABK sukses yang telah ditempatkan di kapal-kapal terkemuka dunia."
        ctaText="Daftar Sekarang"
        ctaHref="/contact"
        secondaryCtaText="Pelajari Layanan"
        secondaryCtaHref="/services"
        // backgroundImages={[
        //   "https://images.unsplash.com/photo-1585793753011-397e6e4668d6?w=1920&h=1080&fit=crop",
        //   "https://images.unsplash.com/photo-1522911715181-6ce196f07c76?w=1920&h=1080&fit=crop",
        //   "https://images.unsplash.com/photo-1719242513420-89bd1c5a7248?w=1920&h=1080&fit=crop",
        // ]}
        backgroundVideo="/Video/hero-video.mp4"
      />

      {/* Company Profile Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container-maritime">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-4xl font-bold text-foreground">
                  Tentang {company.name}
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-400 rounded-full" />
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Sejak didirikan pada tahun 2015, kami telah menjadi mitra
                terpercaya dalam rekrutmen dan penempatan ABK di Indonesia.
                Dengan komitmen penuh terhadap profesionalisme dan standar
                internasional, kami telah membantu ribuan ABK mendapatkan
                penempatan di kapal-kapal terkemuka dunia.
              </p>

              <div className="grid grid-cols-3 gap-4 py-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Tahun Pengalaman
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    ABK Terlatih
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Negara Partner
                  </p>
                </div>
              </div>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Lihat Selengkapnya
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Image */}
            <div className="relative h-96 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800 rounded-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl opacity-20">⚓</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <VisionMissionSection />

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container-maritime">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Layanan Kami
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Kami menyediakan solusi lengkap untuk kebutuhan rekrutmen dan
              penempatan ABK Anda
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service: Service, idx: number) => (
              <ServiceCard
                key={service.id}
                service={service}
                featured={idx === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-900">
        <div className="container-maritime">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Mengapa Memilih Kami?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {([
              {
                icon: Award,
                title: "Standar Internasional",
                description:
                  "Seleksi ABK yang ketat sesuai standar maritim internasional",
              },
              {
                icon: Users,
                title: "Tim Profesional",
                description:
                  "Tim berpengalaman siap mendampingi proses rekrutmen dan penempatan Anda",
              },
              {
                icon: Globe,
                title: "Jangkauan Global",
                description:
                  "Partnership dengan shipping companies terkemuka di seluruh dunia",
              },
            ] as WhyChooseUsItem[]).map((item: WhyChooseUsItem, idx: number) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-800 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container-maritime">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-2">
                Berita Terbaru
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-400 rounded-full" />
            </div>
            <Link
              href="/news"
              className="hidden md:inline-flex items-center gap-2 text-primary hover:text-blue-700 font-semibold transition-colors"
            >
              Lihat Semua
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {news.map((post: NewsPost) => (
              <NewsCard key={post.id} post={post} />
            ))}
          </div>

          <div className="text-center md:hidden">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-primary hover:text-blue-700 font-semibold transition-colors"
            >
              Lihat Semua Berita
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container-maritime">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-2">
                Galeri Kegiatan
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-400 rounded-full" />
            </div>
            <Link
              href="/gallery"
              className="hidden md:inline-flex items-center gap-2 text-primary hover:text-blue-700 font-semibold transition-colors"
            >
              Lihat Semua
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {galleryItems.slice(0, 3).map((item: GalleryItem) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>

          <div className="text-center md:hidden">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-primary hover:text-blue-700 font-semibold transition-colors"
            >
              Lihat Galeri Lengkap
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950">
        <div className="container-maritime text-center text-white space-y-6">
          <h2 className="text-4xl font-bold">
            Siap Memulai Karir Maritim Anda?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Daftarkan diri Anda sekarang dan dapatkan kesempatan penempatan di
            armada kapal terkemuka dunia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2 group"
            >
              Daftar Sekarang
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
