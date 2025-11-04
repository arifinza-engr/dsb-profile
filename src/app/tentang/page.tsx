import { Metadata } from "next";
import Image from "next/image";
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
import { getCompanyProfile, getPartners } from "@/lib/cms";
import { Partner } from "@/lib/types";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: `${COMPANY_NAME} - Tentang Kami`,
  description:
    "Pelajari lebih lanjut tentang PT. Duta Samudera Bahari, visi misi, struktur perusahaan, dan kemitraan internasional kami.",
};

export default async function TentangPage() {
  const company = await getCompanyProfile();
  const partners = await getPartners();
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
                  perusahaan rekrutmen dan penempatan Anak Buah Kapal (Pelaut)
                  khusus kapal perikanan terdepan di Indonesia. Kami telah
                  membangun reputasi sebagai mitra terpercaya dalam industri
                  perikanan maritim global.
                </p>

                <p className="leading-relaxed">
                  Dengan pengalaman lebih dari satu dekade, kami telah berhasil
                  menempatkan ribuan Pelaut berkualitas di berbagai jenis kapal
                  perikanan dan armada perikanan internasional. Komitmen kami
                  terhadap profesionalisme, transparansi, dan standar
                  internasional menjadikan kami pilihan utama bagi perusahaan
                  perikanan dan Pelaut di seluruh dunia.
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
                    {new Date().getFullYear() - company.founded}+
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Tahun Pengalaman
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    5000+
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Pelaut Ditempatkan
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    15+
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Negara Partner
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {company.employees}+
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
                {company.visionMission.vision}
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
                {company.visionMission.mission.map((mission, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary dark:text-blue-400 font-bold text-lg">
                      ✓
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {mission}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Structure */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container-maritime">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-0">
              Struktur Perusahaan
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full mt-4" />
          </div>

          {/* Organizational Chart Image */}
          <div className="max-w-4xl mx-auto">
            <div className="">
              <div className="relative w-full h-auto">
                <Image
                  src="/Image/struktur1.png"
                  alt="Struktur Organisasi PT. Duta Samudera Bahari"
                  width={2000}
                  height={1080}
                  className="w-full h-auto object-contain rounded-lg"
                  priority
                />
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
                    <strong>Nama:</strong> {company.name}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>Didirikan:</strong> {company.founded}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>Alamat:</strong> {company.address}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>Telepon:</strong> {company.phone}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>Email:</strong> {company.email}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>Website:</strong> {company.website}
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
                      Lisensi Pemberangkatan Pelaut
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
              Kami bangga bermitra dengan perusahaan perikanan terkemuka di
              seluruh dunia untuk memberikan peluang karir terbaik bagi Pelaut
              Indonesia di kapal perikanan
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {partners.map((partner: Partner, idx: number) => (
              <div
                key={partner.id}
                className="text-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-lg mb-4 overflow-hidden">
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <Building2 className="w-8 h-8 text-white" />
                  )}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {partner.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>

          {/* Partnership Benefits */}
          {/* <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">
                Keunggulan Kemitraan Kami
              </h3>
              <p className="text-blue-100">
                Mengapa perusahaan perikanan memilih PT. Duta Samudera Bahari
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
                  Seleksi ketat dan pelatihan berkelanjutan memastikan Pelaut
                  kapal perikanan berkualitas tinggi
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
          </div> */}
        </div>
      </section>
    </>
  );
}
