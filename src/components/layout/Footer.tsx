import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";
import { COMPANY_NAME, COMPANY_LOGO, NAVIGATION } from "@/lib/constants";
import { getPartners } from "@/lib/cms";
import { Partner } from "@/lib/types";

async function getCompanyData() {
  try {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      }/api/company`,
      {
        cache: "no-store",
      }
    );
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error("Error fetching company data:", error);
  }
  return null;
}

async function getPartnersData(): Promise<Partner[]> {
  try {
    return await getPartners();
  } catch (error) {
    console.error("Error fetching partners data:", error);
    return [];
  }
}

export async function Footer() {
  const currentYear = new Date().getFullYear();
  const companyData = await getCompanyData();
  const partners = await getPartnersData();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      <div className="container-maritime py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src={COMPANY_LOGO}
                alt={`${COMPANY_NAME} Logo`}
                width={32}
                height={32}
                className="rounded-lg object-cover"
                priority
              />
              <h3 className="font-bold text-lg">{COMPANY_NAME}</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Perusahaan terkemuka alam pemberangkatan Pelaut dengan standar
              internasional tertinggi.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-blue-700 hover:bg-blue-800 rounded-lg flex items-center justify-center transition-colors"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/pt.dutasamuderabahari/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-pink-500 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-black hover:bg-gray-900 rounded-lg flex items-center justify-center transition-colors"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-black hover:bg-gray-900 rounded-lg flex items-center justify-center transition-colors"
              >
                <FaTiktok className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Menu Utama</h4>
            <ul className="space-y-2 text-sm">
              {NAVIGATION.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Layanan</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Rekrutmen & Pelatihan
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Penempatan Kerja
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Kerja Sama Internasional
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="hover:text-white transition-colors"
                >
                  Berita & Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Kontak</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>
                  {companyData?.address ||
                    "Jl. Pelabuhan No. 123, Jakarta 14120, Indonesia"}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a
                  href={`tel:${companyData?.phone || "+622112345678"}`}
                  className="hover:text-white transition-colors"
                >
                  {companyData?.phone || "+62-21-1234-5678"}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a
                  href={`mailto:${
                    companyData?.email || "info@dutasamudera.com"
                  }`}
                  className="hover:text-white transition-colors"
                >
                  {companyData?.email || "info@dutasamudera.com"}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <h4 className="font-bold text-lg mb-4 text-center">Mitra Kami</h4>
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            {partners
              .sort((a, b) => {
                // Urutkan: Kementerian Perhubungan, Asosiasi Pekerja Perikanan Indonesia, Kementerian Ketenagakerjaan
                const order = [
                  "Kementerian Perhubungan",
                  "Asosiasi Pekerja Perikanan Indonesia",
                  "Kementerian Ketenagakerjaan"
                ];
                return order.indexOf(a.name) - order.indexOf(b.name);
              })
              .map((partner: Partner) => (
                <a
                  key={partner.id}
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center space-y-2 hover:opacity-80 transition-opacity"
                >
                  <div className="w-16 h-16 bg-white rounded-lg p-2 flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs text-gray-300 text-center max-w-[100px]">
                    {partner.name}
                  </span>
                </a>
              ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              &copy; {currentYear} {COMPANY_NAME}. Semua hak dilindungi.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">
                Kebijakan Privasi
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Syarat Layanan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
