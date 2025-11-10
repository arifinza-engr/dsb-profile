import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";

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

export default async function ContactPage() {
  const companyData = await getCompanyData();

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat Kantor",
      content:
        companyData?.address ||
        "Jl. Pelabuhan No. 123, Jakarta 14120, Indonesia",
      link: "#",
    },
    {
      icon: Phone,
      title: "Telepon",
      content: companyData?.phone || "+62-21-1234-5678",
      link: `tel:${companyData?.phone || "+622112345678"}`,
    },
    {
      icon: Mail,
      title: "Email",
      content: companyData?.email || "info@dutasamudera.com",
      link: `mailto:${companyData?.email || "info@dutasamudera.com"}`,
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
            rekrutmen Pelaut profesional
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
                    {
                      name: "Instagram",
                      icon: FaInstagram,
                      link: "https://www.instagram.com/pt.dutasamuderabahari/",
                    },
                    {
                      name: "Facebook",
                      icon: FaFacebookF,
                      link: "https://www.facebook.com/",
                    },
                    {
                      name: "Twitter",
                      icon: FaXTwitter,
                      link: "https://twitter.com/",
                    },
                    {
                      name: "TikTok",
                      icon: FaTiktok,
                      link: "https://www.tiktok.com/",
                    },
                  ].map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={idx}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
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
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200 dark:bg-slate-800 relative overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.321908532524!2d109.3704338395508!3d-6.880962299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fc552aeddd433%3A0x48e39a1d83022c08!2sPT.%20DUTA%20SAMUDERA%20BAHARI!5e0!3m2!1sid!2sid!4v1762810626836!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="PT. Duta Samudera Bahari Location"
        ></iframe>
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
