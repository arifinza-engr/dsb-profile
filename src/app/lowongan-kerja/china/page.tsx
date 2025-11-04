import { Metadata } from "next";
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Star,
  ArrowRight,
} from "lucide-react";
import { getJobs } from "@/lib/cms";
import { Job } from "@/lib/types";

export const metadata: Metadata = {
  title: "Lowongan Kerja - PT. Duta Samudera Bahari",
  description:
    "Temukan peluang karir di industri maritim. Lowongan kerja Pelaut profesional dengan kompensasi kompetitif dan kontrak internasional",
};

export default async function LowonganKerjaChinaPage() {
  const jobVacancies = await getJobs('china');
  const featuredJobs = jobVacancies.filter((job) => job.featured);
  const regularJobs = jobVacancies.filter((job) => !job.featured);

  return (
    <>
      {/* Featured Jobs Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container-maritime">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Posisi Unggulan
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Lowongan kerja dengan prioritas tinggi untuk posisi strategis di
              kapal
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredJobs.map((job: Job) => (
              <div
                key={job.id}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-blue-100 dark:border-slate-700 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {job.title}
                    </h3>
                  </div>
                  <div className="bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 text-yellow-600 dark:text-yellow-400 inline mr-1" />
                    <span className="text-sm font-medium text-yellow-700 dark:text-yellow-300">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {job.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {job.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {job.salary}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {job.type}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      Persyaratan:
                    </h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      Kualifikasi:
                    </h4>
                    <ul className="space-y-1">
                      {job.qualifications.map((qual, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                          {qual}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">
                    Benefit:
                  </h4>
                  <ul className="space-y-1">
                    {job.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Lamar Posisi Ini
                </button>
              </div>
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
                <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Usia</h3>
              <p className="text-gray-600 dark:text-gray-300">18-55 tahun</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Pendidikan
              </h3>
              <p className="text-gray-600 dark:text-gray-300">SMA sederajat</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600 dark:text-purple-400" />
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
                <Clock className="w-8 h-8 text-orange-600 dark:text-orange-400" />
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