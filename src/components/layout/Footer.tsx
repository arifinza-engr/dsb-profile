"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";
import {
  COMPANY_NAME,
  COMPANY_LOGO,
  COMPANY_EMAIL,
  COMPANY_PHONE,
  COMPANY_ADDRESS,
  NAVIGATION,
} from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      <div className="container-maritime py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src={COMPANY_LOGO}
                alt={`${COMPANY_NAME} Logo`}
                className="w-8 h-8 rounded-lg object-cover"
              />
              <h3 className="font-bold text-lg">{COMPANY_NAME}</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Perusahaan terkempin dalam pemberangkatan ABK dengan standar
              internasional tertinggi.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-blue-700 hover:bg-blue-800 rounded-lg flex items-center justify-center transition-colors"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-pink-500 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-black hover:bg-gray-900 rounded-lg flex items-center justify-center transition-colors"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
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
