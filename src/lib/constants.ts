import data from "@/content/data.json";

// Company Information
export const COMPANY_NAME = data.company.name;
export const COMPANY_LOGO = data.company.logo;
export const COMPANY_DESC =
  "Kami adalah perusahaan terkemuka dalam rekrutmen dan penempatan Anak Buah Kapal (ABK) dengan standar internasional tertinggi.";
export const COMPANY_EMAIL = "info@dutasam.com";
export const COMPANY_PHONE = "+62 (0)21-XXX-XXXX";
export const COMPANY_ADDRESS =
  "Ruko Pelutan Square, Jl. Prof. Moch Yamin No. 4, Pelutan Pemalang - Jawa Tengah 52311, Indonesia";
export const COMPANY_WEBSITE = "https://dutasam.com";

// Navigation
export const NAVIGATION = [
  { name: "Beranda", href: "/" },
  { name: "Tentang", href: "/tentang" },
  { name: "Layanan", href: "/services" },
  { name: "Lowongan Kerja", href: "/lowongan-kerja" },
  { name: "Berita", href: "/news" },
  { name: "Galeri", href: "/gallery" },
  { name: "Kontak", href: "/contact" },
];

// Services
export const SERVICES = [
  {
    id: 1,
    title: "Rekrutmen ABK",
    description:
      "Kami menyediakan layanan rekrutmen Anak Buah Kapal yang ketat dan profesional sesuai standar maritim internasional.",
    icon: "Users",
    features: [
      "Seleksi ketat sesuai standar maritim",
      "Verifikasi dokumen dan kualifikasi",
      "Assessment kompetensi dasar",
      "Placement assistance",
    ],
  },
  {
    id: 2,
    title: "Penempatan Kerja Laut",
    description:
      "Penempatan ABK di berbagai jenis kapal dengan kompensasi kompetitif dan kontrak jangka panjang.",
    icon: "Ship",
    features: [
      "Penempatan di armada global",
      "Kontrak 6-12 bulan",
      "Kompensasi sesuai standar ICCPR",
      "Support penuh selama kontrak",
    ],
  },
  {
    id: 3,
    title: "Kerja Sama Internasional",
    description:
      "Bermitra dengan shipping companies terkemuka di seluruh dunia untuk peluang penempatan kerja ABK.",
    icon: "Globe",
    features: [
      "Network global",
      "Partnership dengan major operators",
      "Multi-national crew",
      "Placement opportunities",
    ],
  },
];

// Blog Categories
export const NEWS_CATEGORIES = [
  { id: "berita", name: "Berita" },
  { id: "tips", name: "Tips & Panduan" },
  { id: "pelatihan", name: "Pelatihan" },
  { id: "karir", name: "Peluang Karir" },
];

// SEO
export const SEO_KEYWORDS = [
  "ABK",
  "rekrutmen ABK",
  "penempatan ABK",
  "kerja laut",
  "rekrutmen maritim",
];
export const SEO_AUTHOR = "PT. Duta Samudera Bahari";
