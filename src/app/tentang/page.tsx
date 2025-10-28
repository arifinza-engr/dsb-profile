import { Metadata } from "next";
import {
  Building2,
  Users,
  Globe,
  Award,
  Eye,
  Target,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Handshake,
  Ship,
  Shield,
} from "lucide-react";
import { COMPANY_NAME } from "@/lib/constants";
import companyData from "@/content/data.json";

export const metadata: Metadata = {
  title: `${COMPANY_NAME} - Tentang Kami`,
  description:
    "Pelajari lebih lanjut tentang PT. Duta Samudera Bahari, visi misi, struktur perusahaan, dan kemitraan internasional kami.",
};

export default function TentangPage() {
  return (
    <>
      {/* Company Profile */}
      <section className="pt-24 py-20 bg-white dark:bg-slate-900">
        <div className="container-maritime">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  Profil Perusahaan
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-400 rounded-full" />
              </div>

              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p className="text-lg leading-relaxed">
                  <strong className="text-foreground">
                    PT. Duta Samudera Bahari
                  </strong>{" "}
                  didirikan pada tahun 2010 dengan komitmen untuk menjadi
                  perusahaan rekrutmen dan penempatan Anak Buah Kapal (ABK)
                  terdepan di Indonesia. Kami telah membangun reputasi sebagai
                  mitra terpercaya dalam industri maritim global.
                </p>

                <p className="leading-relaxed">
                  Dengan pengalaman lebih dari satu dekade, kami telah berhasil
                  menempatkan ribuan ABK berkualitas di berbagai jenis kapal dan
                  armada internasional. Komitmen kami terhadap profesionalisme,
                  transparansi, dan standar internasional menjadikan kami
                  pilihan utama bagi shipping companies dan ABK di seluruh
                  dunia.
                </p>

                <p className="leading-relaxed">
                  Kami bangga menjadi bagian dari ekosistem maritim Indonesia
                  yang berkontribusi dalam meningkatkan daya saing SDM maritim
                  nasional di kancah internasional.
                </p>
              </div>

              {/* Company Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    10+
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Tahun Pengalaman
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    8000+
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    ABK Ditempatkan
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    25+
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Negara Partner
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    50+
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Karyawan
                  </p>
                </div>
              </div>
            </div>

            {/* Company Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800 rounded-2xl p-12 text-center">
                <div className="text-8xl opacity-20 mb-4">⚓</div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {COMPANY_NAME}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Your Trusted Maritime Partner
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-900 dark:to-slate-800">
        <div className="container-maritime">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Visi & Misi Kami
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="group bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-700">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Visi</h3>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                Menjadi perusahaan rekrutmen dan penempatan ABK terpercaya dan
                profesional dengan standar internasional tertinggi, yang
                memberikan peluang karir terbaik dan kesejahteraan optimal bagi
                setiap ABK serta menjadi mitra strategis bagi industri maritim
                global.
              </p>
            </div>

            {/* Mission */}
            <div className="group bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-700">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Misi</h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary dark:text-blue-400 font-bold text-lg">
                    ✓
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    Menyediakan layanan rekrutmen dan penempatan ABK berkualitas
                    tinggi sesuai kebutuhan industri maritim global
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary dark:text-blue-400 font-bold text-lg">
                    ✓
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    Memastikan kesejahteraan, perlindungan, dan hak ABK sesuai
                    standar hukum internasional (ICCPR, MLC)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary dark:text-blue-400 font-bold text-lg">
                    ✓
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    Bermitra dengan shipping companies terkemuka dan memberikan
                    peluang karir internasional
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary dark:text-blue-400 font-bold text-lg">
                    ✓
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    Memastikan proses rekrutmen yang transparan, adil, dan
                    sesuai standar internasional
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary dark:text-blue-400 font-bold text-lg">
                    ✓
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    Mengembangkan kompetensi SDM maritim Indonesia melalui
                    pelatihan dan sertifikasi berkelanjutan
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Structure */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container-maritime">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Struktur Organisasi
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Tatanan organisasi perusahaan dari komisaris hingga kepala divisi
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full mt-4" />
          </div>

          {/* Organizational Chart */}
          <div className="max-w-7xl mx-auto">
            <div className="relative">
              {/* Level 1 - Komisaris Utama */}
              <div className="flex justify-center mb-12">
                {companyData.company.organizationalStructure
                  .filter((person) => person.level === 1)
                  .map((person) => (
                    <div
                      key={person.id}
                      className="relative bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 rounded-2xl p-6 md:p-8 shadow-xl text-white text-center transform hover:scale-105 transition-all duration-300 max-w-sm mx-auto"
                    >
                      <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden mx-auto mb-4 md:mb-6 border-4 border-white shadow-lg">
                        <img
                          src={person.photo}
                          alt={person.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2">
                        {person.name}
                      </h3>
                      <p className="text-blue-100 font-semibold text-base md:text-lg">
                        {person.position}
                      </p>
                      {/* Connecting line down */}
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-blue-400 dark:bg-blue-500" />
                    </div>
                  ))}
              </div>

              {/* Level 2 - Direktur Utama */}
              <div className="flex justify-center mb-12">
                {companyData.company.organizationalStructure
                  .filter((person) => person.level === 2)
                  .map((person) => (
                    <div
                      key={person.id}
                      className="relative bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800 rounded-2xl p-6 md:p-7 shadow-xl text-white text-center transform hover:scale-105 transition-all duration-300 max-w-sm mx-auto"
                    >
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mx-auto mb-4 md:mb-5 border-4 border-white shadow-lg">
                        <img
                          src={person.photo}
                          alt={person.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold mb-2">
                        {person.name}
                      </h3>
                      <p className="text-blue-100 font-semibold text-sm md:text-base">
                        {person.position}
                      </p>
                      {/* Connecting line down */}
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-blue-400 dark:bg-blue-500" />
                    </div>
                  ))}
              </div>

              {/* Level 3 - Direktur */}
              <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 mb-12 relative">
                {/* Horizontal connecting line - hidden on mobile */}
                <div className="hidden md:block absolute top-12 left-1/2 transform -translate-x-1/2 w-80 h-1 bg-blue-400 dark:bg-blue-500" />

                {companyData.company.organizationalStructure
                  .filter((person) => person.level === 3)
                  .map((person, index) => (
                    <div
                      key={person.id}
                      className="relative bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border-2 border-blue-200 dark:border-blue-700 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl max-w-xs mx-auto md:mx-0"
                    >
                      <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-4 border-blue-400">
                        <img
                          src={person.photo}
                          alt={person.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {person.name}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                        {person.position}
                      </p>
                      {/* Vertical line up to horizontal connector - hidden on mobile */}
                      <div className="hidden md:block absolute -top-6 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-blue-400 dark:bg-blue-500" />
                      {/* Vertical line down - hidden on mobile */}
                      <div className="hidden md:block absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-blue-400 dark:bg-blue-500" />
                    </div>
                  ))}
              </div>

              {/* Level 4 - Kepala Bagian */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-4xl">
                  {/* Horizontal connecting line for department heads - hidden on mobile */}
                  <div className="hidden md:block absolute top-10 left-1/2 transform -translate-x-1/2 w-[600px] h-1 bg-blue-300 dark:bg-blue-600" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10 px-4 md:px-0">
                    {companyData.company.organizationalStructure
                      .filter((person) => person.level === 4)
                      .map((person) => (
                        <div
                          key={person.id}
                          className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-700 dark:to-slate-800 rounded-xl p-5 shadow-md border border-blue-200 dark:border-blue-600 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg max-w-xs mx-auto"
                        >
                          <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3 border-3 border-blue-300">
                            <img
                              src={person.photo}
                              alt={person.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="text-md font-bold text-foreground mb-1">
                            {person.name}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                            {person.position}
                          </p>
                          {/* Vertical line up to horizontal connector - hidden on mobile */}
                          <div className="hidden md:block absolute -top-8 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-blue-300 dark:bg-blue-600" />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-900 dark:to-slate-800">
        <div className="container-maritime">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Detail Perusahaan
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Company Information */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Informasi Perusahaan
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-primary" />
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>Nama:</strong> PT. Duta Samudera Bahari
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>Didirikan:</strong> 2010
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>Alamat:</strong> Jakarta, Indonesia
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>Telepon:</strong> +62 (0)21-XXX-XXXX
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>Email:</strong> info@dutasam.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>Website:</strong> dutasam.com
                  </span>
                </div>
              </div>
            </div>

            {/* Certifications & Licenses */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Sertifikasi & Lisensi
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <strong className="text-foreground">
                      Lisensi Pemberangkatan ABK
                    </strong>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Dikeluarkan oleh Kementerian Ketenagakerjaan RI
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <strong className="text-foreground">ISO 9001:2015</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Sistem Manajemen Mutu Internasional
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <strong className="text-foreground">
                      MLC 2006 Compliance
                    </strong>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Maritime Labour Convention Compliance
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <strong className="text-foreground">
                      STCW Training Provider
                    </strong>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Approved STCW Training Center
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container-maritime">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Kemitraan Strategis
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Kami bangga bermitra dengan shipping companies terkemuka di
              seluruh dunia untuk memberikan peluang karir terbaik bagi ABK
              Indonesia
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                icon: Ship,
                title: "Container Lines",
                count: "15+",
                description: "Perusahaan pelayaran kontainer internasional",
              },
              {
                icon: Globe,
                title: "Bulk Carriers",
                count: "12+",
                description: "Operator kapal curah dan tanker",
              },
              {
                icon: Handshake,
                title: "Cruise Lines",
                count: "8+",
                description: "Perusahaan kapal pesiar mewah",
              },
              {
                icon: Users,
                title: "Offshore Companies",
                count: "10+",
                description: "Perusahaan offshore dan oil rig",
              },
            ].map((partner, idx) => {
              const Icon = partner.icon;
              return (
                <div
                  key={idx}
                  className="text-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-lg mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {partner.count}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {partner.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {partner.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Partnership Benefits */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">
                Keunggulan Kemitraan Kami
              </h3>
              <p className="text-blue-100">
                Mengapa shipping companies memilih PT. Duta Samudera Bahari
                sebagai partner
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6" />
                </div>
                <h4 className="font-bold mb-2">Kualitas Terjamin</h4>
                <p className="text-sm text-blue-100">
                  Seleksi ketat dan pelatihan berkelanjutan memastikan ABK
                  berkualitas tinggi
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6" />
                </div>
                <h4 className="font-bold mb-2">Jangkauan Global</h4>
                <p className="text-sm text-blue-100">
                  Network internasional yang luas dengan dukungan 24/7
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="font-bold mb-2">Compliance Penuh</h4>
                <p className="text-sm text-blue-100">
                  Memenuhi semua standar internasional MLC, STCW, dan regulasi
                  maritim
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
