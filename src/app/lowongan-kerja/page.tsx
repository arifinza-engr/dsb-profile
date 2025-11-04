import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { getJobs } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Lowongan Kerja - PT. Duta Samudera Bahari",
  description:
    "Temukan peluang karir di industri maritim. Lowongan kerja Pelaut profesional dengan kompensasi kompetitif dan kontrak internasional",
};

const countries = [
  {
    name: "China",
    href: "/lowongan-kerja/china",
    description: "Lowongan kerja untuk kapal perikanan berbendera China dengan kontrak internasional",
    flag: "🇨🇳"
  },
  {
    name: "Taiwan",
    href: "/lowongan-kerja/taiwan",
    description: "Lowongan kerja untuk kapal perikanan berbendera Taiwan dengan kontrak internasional",
    flag: "🇹🇼"
  }
];

export default async function LowonganKerjaPage() {
  const allJobs = await getJobs();
  return (
    <>
      {/* Countries Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container-maritime">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Pilih Negara Tujuan
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Kami menyediakan lowongan kerja untuk berbagai negara dengan
              standar internasional
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {countries.map((country) => (
              <Link
                key={country.name}
                href={country.href}
                className="group bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-slate-700 hover:shadow-xl hover:border-primary transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">{country.flag}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {country.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {country.description}
                  </p>
                  <div className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg group-hover:bg-blue-700 transition-colors font-medium">
                    Lihat Lowongan
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section
        id="requirements"
        className="py-20 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900"
      >
        <div className="container-maritime">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Persyaratan Umum
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Kualifikasi dasar yang harus dipenuhi untuk bergabung dengan
              armada maritim
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Usia</h3>
              <p className="text-gray-600 dark:text-gray-300">18-55 tahun</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-600 dark:bg-green-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">📚</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Pendidikan
              </h3>
              <p className="text-gray-600 dark:text-gray-300">SMA sederajat</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-purple-600 dark:bg-purple-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">❤️</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Kesehatan
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Medical fitness
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-orange-600 dark:bg-orange-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">⚓</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Pengalaman
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Bervariasi per posisi
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Siap memulai karir maritim Anda? Hubungi kami untuk informasi
              lebih lanjut.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Hubungi Kami
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
