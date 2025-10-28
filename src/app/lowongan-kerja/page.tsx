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

export const metadata: Metadata = {
  title: "Lowongan Kerja - PT. Duta Samudera Bahari",
  description:
    "Temukan peluang karir di industri maritim. Lowongan kerja ABK profesional dengan kompensasi kompetitif dan kontrak internasional",
};

const jobVacancies = [
  {
    id: 1,
    title: "Chief Officer",
    department: "Deck Department",
    location: "Internasional",
    type: "Full-time",
    salary: "Rp 45.000.000 - Rp 65.000.000/bulan",
    duration: "6-12 bulan",
    requirements: [
      "Sertifikat Chief Officer STCW",
      "Pengalaman minimal 3 tahun",
      "Bahasa Inggris lancar",
      "Medical fitness certificate",
    ],
    benefits: [
      "Asuransi kesehatan",
      "Tunjangan keluarga",
      "Bonus performance",
      "Paid leave",
    ],
    featured: true,
  },
  {
    id: 2,
    title: "Chief Engineer",
    department: "Engine Department",
    location: "Internasional",
    type: "Full-time",
    salary: "Rp 50.000.000 - Rp 75.000.000/bulan",
    duration: "6-12 bulan",
    requirements: [
      "Sertifikat Chief Engineer STCW",
      "Pengalaman minimal 5 tahun",
      "Class 1 CoC",
      "Medical fitness certificate",
    ],
    benefits: [
      "Asuransi kesehatan",
      "Tunjangan keluarga",
      "Bonus performance",
      "Paid leave",
    ],
    featured: true,
  },
  {
    id: 3,
    title: "Able Seaman",
    department: "Deck Department",
    location: "Internasional",
    type: "Full-time",
    salary: "Rp 15.000.000 - Rp 25.000.000/bulan",
    duration: "6-12 bulan",
    requirements: [
      "Sertifikat Able Seaman STCW",
      "Pengalaman minimal 1 tahun",
      "Bahasa Inggris aktif",
      "Medical fitness certificate",
    ],
    benefits: [
      "Asuransi kesehatan",
      "Tunjangan makan",
      "Bonus performance",
      "Paid leave",
    ],
    featured: false,
  },
  {
    id: 4,
    title: "Oiler",
    department: "Engine Department",
    location: "Internasional",
    type: "Full-time",
    salary: "Rp 12.000.000 - Rp 18.000.000/bulan",
    duration: "6-12 bulan",
    requirements: [
      "Sertifikat Oiler STCW",
      "Pengalaman minimal 6 bulan",
      "Basic safety training",
      "Medical fitness certificate",
    ],
    benefits: [
      "Asuransi kesehatan",
      "Tunjangan makan",
      "Bonus performance",
      "Paid leave",
    ],
    featured: false,
  },
  {
    id: 5,
    title: "Cook",
    department: "Galley Department",
    location: "Internasional",
    type: "Full-time",
    salary: "Rp 10.000.000 - Rp 15.000.000/bulan",
    duration: "6-12 bulan",
    requirements: [
      "Sertifikat Cook STCW",
      "Pengalaman memasak",
      "Hygiene certificate",
      "Medical fitness certificate",
    ],
    benefits: [
      "Asuransi kesehatan",
      "Tunjangan makan",
      "Bonus performance",
      "Paid leave",
    ],
    featured: false,
  },
  {
    id: 6,
    title: "Motorman",
    department: "Engine Department",
    location: "Internasional",
    type: "Full-time",
    salary: "Rp 14.000.000 - Rp 20.000.000/bulan",
    duration: "6-12 bulan",
    requirements: [
      "Sertifikat Motorman STCW",
      "Pengalaman engine room",
      "Basic safety training",
      "Medical fitness certificate",
    ],
    benefits: [
      "Asuransi kesehatan",
      "Tunjangan makan",
      "Bonus performance",
      "Paid leave",
    ],
    featured: false,
  },
];

export default function LowonganKerjaPage() {
  const featuredJobs = jobVacancies.filter((job) => job.featured);
  const regularJobs = jobVacancies.filter((job) => !job.featured);

  return (
    <>
      {/* Header Section */}
      {/* <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800">
        <div className="container-maritime text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 dark:bg-primary/20 rounded-full mb-6">
            <Briefcase className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Lowongan Kerja</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            Temukan peluang karir di industri maritim. Lowongan kerja ABK profesional dengan kompensasi kompetitif dan kontrak internasional
          </p>
        </div>
      </section> */}

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

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-blue-100 dark:border-slate-700 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {job.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {job.department}
                    </p>
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

                <div className="mb-6">
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

      {/* All Jobs Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container-maritime">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Semua Lowongan Kerja
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Jelajahi berbagai posisi yang tersedia untuk karir maritim Anda
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularJobs.map((job) => (
              <div
                key={job.id}
                className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 hover:shadow-md transition-shadow"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {job.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                    {job.department}
                  </p>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {job.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {job.salary}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {job.duration}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2 text-sm">
                    Persyaratan Utama:
                  </h4>
                  <ul className="space-y-1">
                    {job.requirements.slice(0, 2).map((req, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-gray-600 dark:text-gray-300 flex items-center gap-2"
                      >
                        <div className="w-1 h-1 bg-blue-500 rounded-full" />
                        {req}
                      </li>
                    ))}
                    {job.requirements.length > 2 && (
                      <li className="text-xs text-gray-500">
                        +{job.requirements.length - 2} lainnya
                      </li>
                    )}
                  </ul>
                </div>

                <button className="w-full bg-primary text-white py-2 rounded hover:bg-blue-700 transition-colors text-sm font-medium">
                  Lihat Detail
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
