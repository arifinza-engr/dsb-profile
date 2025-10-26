import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import {
  COMPANY_NAME,
  COMPANY_EMAIL,
  COMPANY_PHONE,
  COMPANY_ADDRESS,
  NAVIGATION,
} from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white mt-20">
      <div className="container-maritime py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-300 rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold">⚓</span>
              </div>
              <h3 className="font-bold text-lg">{COMPANY_NAME}</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Perusahaan terkempin dalam pemberangkatan ABK dengan standar
              internasional tertinggi.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-pink-600 hover:bg-pink-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-blue-700 hover:bg-blue-800 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
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
                <span>{COMPANY_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a
                  href={`tel:${COMPANY_PHONE}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_PHONE}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_EMAIL}
                </a>
              </li>
            </ul>
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
