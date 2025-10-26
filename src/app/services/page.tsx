import { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { SERVICES } from "@/lib/constants";
import { CheckCircle2, Briefcase, Award, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Layanan Kami - PT. Duta Samudera Bahari",
  description:
    "Layanan rekrutmen, pelatihan, dan penempatan ABK profesional dengan standar internasional",
};

export default function ServicesPage() {
  const processSteps = [
    {
      number: "1",
      title: "Registrasi & Assessment",
      description:
        "Daftar dan ikuti penilaian kemampuan dasar untuk menentukan jalur pelatihan yang sesuai",
      icon: Briefcase,
    },
    {
      number: "2",
      title: "Pelatihan Intensif",
      description:
        "Mengikuti program pelatihan sesuai standar STCW dan regulasi internasional IMO",
      icon: Award,
    },
    {
      number: "3",
      title: "Sertifikasi",
      description:
        "Mendapatkan sertifikat yang diakui secara internasional dan legal untuk bekerja di kapal",
      icon: Shield,
    },
    {
      number: "4",
      title: "Penempatan",
      description:
        "Ditempatkan di kapal yang sesuai dengan kualifikasi dan pengalaman Anda",
      icon: CheckCircle2,
    },
  ];

  const additionalServices = [
    {
      title: "Program Magang",
      description:
        "Program magang di kapal untuk pengalaman langsung dengan mentor berpengalaman",
      features: [
        "Durasi 3-12 bulan",
        "Mentor berpengalaman",
        "Tunjangan harian",
        "Asuransi kesehatan",
      ],
    },
    {
      title: "Pelatihan Khusus",
      description:
        "Pelatihan spesifik untuk keahlian seperti Advanced Firefighting, Tanker Operations, dan Container Handling",
      features: [
        "Instruktur bersertifikat",
        "Fasilitas modern",
        "Sertifikat internasional",
        "Job placement guarantee",
      ],
    },
    {
      title: "Konsultasi Karir",
      description:
        "Bimbingan karir dari tim profesional untuk memaksimalkan potensi Anda",
      features: [
        "Mentor 1-on-1",
        "Career planning",
        "Interview coaching",
        "Networking events",
      ],
    },
    {
      title: "Support Berkelanjutan",
      description:
        "Dukungan penuh selama menjalani karir maritim Anda di kapal",
      features: [
        "On-call support 24/7",
        "Contract negotiation",
        "Legal assistance",
        "Benefit management",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Layanan Pemberangkatan ABK Terpadu"
        subtitle="Solusi Lengkap untuk Karir Maritim"
        description="Dari pelatihan hingga penempatan, kami menyediakan layanan komprehensif untuk mengembangkan karir Anda di industri maritim internasional"
        ctaText="Hubungi Kami"
        ctaHref="/contact"
        secondaryCtaText="Kembali ke Beranda"
        secondaryCtaHref="/"
      />

      {/* Main Services Grid */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container-maritime">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Layanan Utama Kami
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Kami menawarkan paket lengkap layanan rekrutmen dan penempatan ABK
              dengan standar kualitas tertinggi
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <ServiceCard
                key={service.id}
                service={service}
                featured={idx === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-900">
        <div className="container-maritime">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Proses Pemberangkatan
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Langkah-langkah sistematis untuk memastikan Anda siap dan terlatih
              dengan baik
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative">
                  {/* Connector line */}
                  {idx < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[60%] w-[40%] h-0.5 bg-gradient-to-r from-primary to-transparent" />
                  )}

                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center h-full">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-primary text-white rounded-full mb-4">
                      <Icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container-maritime">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Layanan Tambahan
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Layanan khusus untuk mendukung pengembangan karir Anda
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {additionalServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-700 rounded-xl p-8 border border-blue-200 dark:border-slate-600 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-200">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="container-maritime text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Kualifikasi & Standar</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mb-8" />

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Persyaratan Dasar</h3>
                <ul className="space-y-3">
                  {[
                    "Usia minimal 18 tahun, maksimal 55 tahun",
                    "Pendidikan minimal SMA/SMK",
                    "Kesehatan fisik dan mental terjamin",
                    "Tidak memiliki tunggakan hukum",
                    "Dapat berbahasa Inggris dasar",
                  ].map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-blue-400 font-bold text-xl mt-1">
                        ✓
                      </span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Sertifikasi Internasional
                </h3>
                <ul className="space-y-3">
                  {[
                    "STCW 95/2010 Certificate",
                    "IMO Certification",
                    "SOLAS & MARPOL",
                    "Medical Certificate (IHM)",
                    "Crewing Certificate",
                  ].map((cert, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-blue-400 font-bold text-xl mt-1">
                        ✓
                      </span>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container-maritime">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Pertanyaan Umum
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "Berapa lama durasi pelatihan?",
                a: "Durasi pelatihan bervariasi dari 2 minggu hingga 3 bulan tergantung posisi dan level sertifikasi yang diinginkan.",
              },
              {
                q: "Apakah ada biaya pelatihan?",
                a: "Ada biaya registrasi awal, namun kami menyediakan paket cicilan dan beasiswa untuk kandidat berprestasi.",
              },
              {
                q: "Bagaimana jaminan penempatan?",
                a: "Kami memiliki MoU dengan ratusan perusahaan pelayaran internasional yang menjamin penempatan bagi lulusan kami.",
              },
              {
                q: "Apa saja benefit yang diterima saat bekerja?",
                a: "Gaji kompetitif, asuransi kesehatan, tunjangan keluarga, bonus, dan akses pendidikan berkelanjutan.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-blue-50 dark:bg-slate-800 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950">
        <div className="container-maritime text-center text-white space-y-6">
          <h2 className="text-4xl font-bold">Siap Mengembangkan Karir Anda?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Hubungi kami hari ini untuk informasi lebih lanjut tentang program
            pelatihan dan penempatan kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2 group"
            >
              Hubungi Kami
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
            <a
              href="/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Kembali ke Beranda
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
