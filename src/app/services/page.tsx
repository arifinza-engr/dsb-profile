import { Metadata } from "next";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { getServices, getServicesPageData } from "@/lib/cms";
import { CheckCircle2, Briefcase, Award, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Layanan Kami - PT. Duta Samudera Bahari",
  description:
    "Layanan rekrutmen dan penempatan ABK profesional dengan standar internasional",
};

export default async function ServicesPage() {
  const services = await getServices();
  const servicesPageData = await getServicesPageData();
  const processSteps = servicesPageData.processSteps || [];
  const additionalServices = servicesPageData.additionalServices || [];

  return (
    <>
      {/* Header Section */}
      {/* <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800">
        <div className="container-maritime text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 dark:bg-primary/20 rounded-full mb-6">
            <Briefcase className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Layanan</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            Layanan rekrutmen dan penempatan ABK profesional dengan standar
            internasional tertinggi
          </p>
        </div>
      </section> */}

      {/* Main Services Grid */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container-maritime">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Layanan Utama Kami
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Kami menawarkan layanan rekrutmen dan penempatan ABK dengan
              standar kualitas tertinggi
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service: any, idx: number) => (
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
              Proses Rekrutmen dan Penempatan
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Langkah-langkah sistematis untuk memastikan Anda mendapatkan
              penempatan yang tepat
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step: any, idx: number) => {
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
            {additionalServices.map((service: any, idx: number) => (
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
                  {service.features.map((feature: string, featureIdx: number) => (
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
                  {servicesPageData.qualifications?.requirements?.map((req: string, idx: number) => (
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
                  Dokumen yang Diperlukan
                </h3>
                <ul className="space-y-3">
                  {servicesPageData.qualifications?.documents?.map((cert: string, idx: number) => (
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
            {servicesPageData.faq?.map((faq: any, idx: number) => (
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
            Hubungi kami hari ini untuk informasi lebih lanjut tentang layanan
            rekrutmen dan penempatan kami
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
