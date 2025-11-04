import { GalleryItem, NewsPost, CompanyProfile, Service, Job } from "./types";

// Gallery functions
export async function getGalleryItems(): Promise<GalleryItem[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/gallery`, {
      cache: 'no-store'
    });
    if (!response.ok) return [];
    return await response.json();
  } catch (error) {
    console.error('Error fetching gallery items:', error);
    return [];
  }
}

export async function getGalleryItem(id: string): Promise<GalleryItem | null> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/gallery/${id}`, {
      cache: 'no-store'
    });
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    console.error('Error fetching gallery item:', error);
    return null;
  }
}

// Company functions
export async function getCompanyProfile(): Promise<CompanyProfile> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/company`, {
      cache: 'no-store'
    });
    if (!response.ok) {
      return {
        name: "PT. Duta Samudera Bahari",
        description: "Perusahaan terkemuka dalam pemberangkatan Anak Buah Kapal dengan standar internasional tertinggi.",
        email: "info@dutasam.com",
        phone: "+62 (0)21-XXX-XXXX",
        address: "Jakarta, Indonesia",
        website: "https://dutasam.com",
        founded: 2010,
        employees: 150,
        visionMission: {
          vision: "Menjadi perusahaan pemberangkatan Pelaut terpercaya dan profesional dengan standar internasional.",
          mission: [
            "Menyediakan layanan rekrutmen dan penempatan Pelaut berkualitas tinggi",
            "Memastikan kesejahteraan dan perlindungan Pelaut sesuai hukum internasional",
            "Bermitra dengan shipping companies terkemuka di seluruh dunia",
            "Mengembangkan SDM maritim yang kompeten dan profesional",
          ],
        },
        socialMedia: {
          facebook: "https://facebook.com/dutasam",
          instagram: "https://instagram.com/dutasam",
          linkedin: "https://linkedin.com/company/dutasam",
        },
      };
    }
    const data = await response.json();
    return {
      name: data.name,
      description: data.description,
      email: data.email,
      phone: data.phone,
      address: data.address,
      website: data.website,
      logo: data.logo,
      founded: data.founded,
      employees: data.employees,
      visionMission: {
        vision: data.vision,
        mission: JSON.parse(data.mission || '[]'),
      },
      socialMedia: {
        facebook: "https://facebook.com/dutasam",
        instagram: "https://instagram.com/dutasam",
        linkedin: "https://linkedin.com/company/dutasam",
      },
    };
  } catch (error) {
    console.error('Error fetching company profile:', error);
    return {
      name: "PT. Duta Samudera Bahari",
      description: "Perusahaan terkemuka dalam pemberangkatan Anak Buah Kapal dengan standar internasional tertinggi.",
      email: "info@dutasam.com",
      phone: "+62 (0)21-XXX-XXXX",
      address: "Jakarta, Indonesia",
      website: "https://dutasam.com",
      founded: 2010,
      employees: 150,
      visionMission: {
        vision: "Menjadi perusahaan pemberangkatan Pelaut terpercaya dan profesional dengan standar internasional.",
        mission: [
          "Menyediakan layanan rekrutmen dan penempatan Pelaut berkualitas tinggi",
          "Memastikan kesejahteraan dan perlindungan Pelaut sesuai hukum internasional",
          "Bermitra dengan shipping companies terkemuka di seluruh dunia",
          "Mengembangkan SDM maritim yang kompeten dan profesional",
        ],
      },
      socialMedia: {
        facebook: "https://facebook.com/dutasam",
        instagram: "https://instagram.com/dutasam",
        linkedin: "https://linkedin.com/company/dutasam",
      },
    };
  }
}

// Navigation functions
export function getNavigation() {
  return [
    { name: "Beranda", href: "/" },
    { name: "Tentang", href: "/tentang" },
    { name: "Layanan", href: "/services" },
    { name: "Lowongan Kerja", href: "/lowongan-kerja" },
    { name: "Berita", href: "/news" },
    { name: "Galeri", href: "/gallery" },
    { name: "Kontak", href: "/contact" },
  ];
}

// Services functions
export async function getServices(): Promise<Service[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/services`, {
      cache: 'no-store'
    });
    if (!response.ok) return [];
    const data = await response.json();
    return data.map((service: any) => ({
      id: service.id,
      title: service.title,
      description: service.description,
      icon: service.icon,
      features: JSON.parse(service.features || '[]'),
    }));
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

// News functions
export async function getNews(): Promise<NewsPost[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/news`, {
      cache: 'no-store'
    });
    if (!response.ok) return [];
    const data = await response.json();
    return data.map((news: any) => ({
      id: news.id.toString(),
      title: news.title,
      description: news.description,
      author: news.author,
      date: news.date,
      image: news.image,
      category: news.category,
      tags: JSON.parse(news.tags || '[]'),
      slug: news.slug,
      readingTime: {
        text: news.readingTimeText,
        minutes: news.readingTimeMinutes,
        time: news.readingTimeMs,
        words: news.readingTimeWords,
      },
    }));
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}

export async function getNewsPost(id: string): Promise<NewsPost | null> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/news/${id}`, {
      cache: 'no-store'
    });
    if (!response.ok) return null;
    const news = await response.json();
    return {
      id: news.id.toString(),
      title: news.title,
      description: news.description,
      author: news.author,
      date: news.date,
      image: news.image,
      category: news.category,
      tags: JSON.parse(news.tags || '[]'),
      slug: news.slug,
      readingTime: {
        text: news.readingTimeText,
        minutes: news.readingTimeMinutes,
        time: news.readingTimeMs,
        words: news.readingTimeWords,
      },
    };
  } catch (error) {
    console.error('Error fetching news post:', error);
    return null;
  }
}

// SEO functions
export function getSEOData() {
  return {
    keywords: [
      "Pelaut kapal perikanan",
      "rekrutmen Pelaut perikanan",
      "penempatan Pelaut kapal perikanan",
      "kerja kapal perikanan",
      "rekrutmen maritim perikanan"
    ],
    author: "PT. Duta Samudera Bahari"
  };
}

// News categories
export function getNewsCategories() {
  return [
    { id: "berita", name: "Berita" },
    { id: "tips", name: "Tips & Panduan" },
    { id: "pelatihan", name: "Pelatihan" },
    { id: "karir", name: "Peluang Karir" }
  ];
}

// Services page data - keeping static for now as it's complex
export function getServicesPageData() {
  return {
    processSteps: [
      {
        number: "1",
        title: "Registrasi & Assessment",
        description: "Daftar dan ikuti penilaian kemampuan dasar untuk menentukan kesesuaian dengan posisi yang tersedia",
        icon: "Briefcase"
      },
      {
        number: "2",
        title: "Seleksi & Verifikasi",
        description: "Proses seleksi ketat dan verifikasi dokumen sesuai standar maritim internasional",
        icon: "Award"
      },
      {
        number: "3",
        title: "Matching & Persiapan",
        description: "Matching dengan posisi di kapal perikanan yang sesuai dan persiapan akhir sebelum penempatan",
        icon: "Shield"
      },
      {
        number: "4",
        title: "Penempatan",
        description: "Ditempatkan di kapal perikanan yang sesuai dengan kualifikasi dan pengalaman Anda",
        icon: "CheckCircle2"
      }
    ],
    additionalServices: [
      {
        title: "Verifikasi Dokumen",
        description: "Layanan verifikasi dokumen dan sertifikasi untuk memastikan kualifikasi Anda sesuai standar internasional",
        features: [
          "Verifikasi STCW certificate",
          "Medical certificate validation",
          "Document legalization",
          "Compliance check"
        ]
      },
      {
        title: "Support Selama Kontrak",
        description: "Dukungan penuh selama masa kontrak kerja di kapal untuk memastikan kesejahteraan Anda",
        features: [
          "On-call support 24/7",
          "Contract monitoring",
          "Welfare assistance",
          "Repatriation support"
        ]
      }
    ],
    qualifications: {
      requirements: [
        "Usia minimal 18 tahun, maksimal 55 tahun",
        "Pendidikan minimal SMA/SMK",
        "Kesehatan fisik dan mental terjamin",
        "Tidak memiliki tunggakan hukum",
        "Dapat berbahasa Inggris dasar"
      ],
      documents: [
        "STCW 95/2010 Certificate",
        "IMO Certification",
        "SOLAS & MARPOL compliance",
        "Medical Certificate (IHM)",
        "Valid passport & seaman book"
      ]
    },
    faq: [
      {
        q: "Berapa lama proses rekrutmen?",
        a: "Proses rekrutmen biasanya memakan waktu 2-4 minggu tergantung posisi dan ketersediaan lowongan."
      },
      {
        q: "Apakah ada biaya rekrutmen?",
        a: "Ada biaya administrasi awal yang akan dikembalikan jika Anda berhasil ditempatkan."
      },
      {
        q: "Bagaimana jaminan penempatan?",
        a: "Kami memiliki partnership dengan ratusan perusahaan perikanan internasional yang menjamin penempatan bagi kandidat yang memenuhi syarat."
      },
      {
        q: "Apa saja benefit yang diterima saat bekerja?",
        a: "Gaji kompetitif, asuransi kesehatan, tunjangan keluarga, bonus, dan dukungan selama kontrak."
      }
    ]
  };
}

// Additional functions for partners and testimonials
export async function getPartners() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/partners`, {
      cache: 'no-store'
    });
    if (!response.ok) return [];
    return await response.json();
  } catch (error) {
    console.error('Error fetching partners:', error);
    return [];
  }
}

export async function getTestimonials() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/testimonials`, {
      cache: 'no-store'
    });
    if (!response.ok) return [];
    const data = await response.json();
    return data.map((testimonial: any) => ({
      id: testimonial.id.toString(),
      name: testimonial.name,
      position: testimonial.position,
      company: testimonial.company,
      image: testimonial.image,
      content: testimonial.content,
      rating: testimonial.rating,
      contractDuration: testimonial.contractDuration,
      shipType: testimonial.shipType,
    }));
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
}

export async function getJobs(country?: string): Promise<Job[]> {
  try {
    const url = country
      ? `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/jobs?country=${country}`
      : `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/jobs`;
    const response = await fetch(url, {
      cache: 'no-store'
    });
    if (!response.ok) return [];
    const data = await response.json();
    return data.map((job: any): Job => ({
      id: job.id,
      title: job.title,
      location: job.location,
      type: job.type,
      salary: job.salary,
      duration: job.duration,
      requirements: JSON.parse(job.requirements || '[]'),
      benefits: JSON.parse(job.benefits || '[]'),
      qualifications: JSON.parse(job.qualifications || '[]'),
      featured: job.featured,
      country: job.country,
    }));
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
}
