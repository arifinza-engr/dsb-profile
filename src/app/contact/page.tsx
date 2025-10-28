"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // In a real app, you'd send this to an API endpoint
      console.log("Form submitted:", formData);

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Reset message after 3 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat Kantor",
      content: "Jl. Pelabuhan No. 123, Jakarta 14120, Indonesia",
      link: "#",
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "+62-21-1234-5678",
      link: "tel:+622112345678",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@dutasamudera.com",
      link: "mailto:info@dutasamudera.com",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      content: "Senin - Jumat: 08:00 - 17:00",
      link: "#",
    },
  ];

  return (
    <>
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800">
        <div className="container-maritime text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 dark:bg-primary/20 rounded-full mb-6">
            <Mail className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Kontak Kami
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-0">
            Hubungi kami untuk konsultasi dan informasi tentang layanan
            rekrutmen ABK profesional
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full mt-4" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container-maritime">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  Informasi Kontak
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-400 rounded-full" />
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={idx}
                      href={info.link}
                      className="flex gap-4 p-6 rounded-xl bg-blue-50 dark:bg-slate-800 hover:shadow-lg transition-shadow group cursor-pointer"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground text-lg mb-1">
                          {info.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {info.content}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Social Media */}
              <div className="pt-8 border-t border-gray-200 dark:border-slate-700">
                <h3 className="font-bold text-foreground text-lg mb-4">
                  Ikuti Kami
                </h3>
                <div className="flex gap-4">
                  {[
                    { name: "Instagram", icon: FaInstagram },
                    { name: "Facebook", icon: FaFacebookF },
                    { name: "Twitter", icon: FaXTwitter },
                    { name: "TikTok", icon: FaTiktok },
                  ].map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={idx}
                        href="#"
                        className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors"
                        title={social.name}
                      >
                        <Icon className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Kirim Pesan
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-400 rounded-full mb-8" />

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nama Lengkap
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nama Anda"
                    required
                    className="w-full"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    required
                    className="w-full"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nomor Telepon
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+62-..."
                    className="w-full"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Subjek
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Pilih Subjek</option>
                    <option value="recruitment">Pemberangkatan ABK</option>
                    <option value="training">Informasi Pelatihan</option>
                    <option value="partnership">Kerjasama Bisnis</option>
                    <option value="complaint">Keluhan/Saran</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tulis pesan Anda di sini..."
                    rows={5}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="p-4 bg-green-100 dark:bg-green-900 border border-green-400 text-green-700 dark:text-green-200 rounded-lg">
                    ✓ Pesan Anda telah dikirim berhasil! Kami akan menghubungi
                    Anda segera.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-100 dark:bg-red-900 border border-red-400 text-red-700 dark:text-red-200 rounded-lg">
                    ✗ Terjadi kesalahan. Silakan coba lagi.
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                  {!isSubmitting && <Send className="w-5 h-5" />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200 dark:bg-slate-800 relative overflow-hidden">
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          <div className="text-center">
            <MapPin className="w-16 h-16 mx-auto mb-4" />
            <p className="text-lg">
              Integrasi Google Maps akan ditampilkan di sini
            </p>
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
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Jawaban untuk pertanyaan yang sering diajukan
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "Bagaimana cara mendaftar program pelatihan?",
                a: "Anda dapat mendaftar melalui formulir di halaman ini atau datang langsung ke kantor kami. Tim kami akan memandu proses pendaftaran Anda.",
              },
              {
                q: "Berapa biaya yang diperlukan untuk pelatihan?",
                a: "Biaya pelatihan bervariasi tergantung program. Silakan hubungi kami untuk mengetahui detail dan penawaran khusus.",
              },
              {
                q: "Apakah ada bantuan finansial tersedia?",
                a: "Kami menyediakan berbagai opsi pembayaran cicilan dan beasiswa untuk kandidat berprestasi.",
              },
              {
                q: "Berapa lama waktu tunggu penempatan?",
                a: "Waktu penempatan biasanya 1-3 bulan setelah lulus pelatihan, tergantung keahlian dan posisi yang diinginkan.",
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
    </>
  );
}
