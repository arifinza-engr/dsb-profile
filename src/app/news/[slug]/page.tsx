import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { getOptimizedImageProps, IMAGE_SIZES } from "@/lib/image-utils";

interface NewsDetailPageProps {
  params: Promise<{ slug: string }>;
}

// Sample news data - in real app, this would come from a database or CMS
const newsPosts = [
  {
    id: "1",
    title: "Selamat Datang di PT. Duta Samudera Bahari",
    description:
      "Kami menghadirkan solusi terpadu untuk pemberangkatan dan penempatan Pelaut dengan standar internasional.",
    author: "Tim Komunikasi",
    date: "2024-01-20",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    category: "Berita",
    tags: ["pemberangkatan", "abk"],
    slug: "selamat-datang-di-pt-duta-samudera-bahari",
    readingTime: { text: "5 min read", minutes: 5, time: 300000, words: 850 },
    content: `
      <p>PT. Duta Samudera Bahari dengan bangga mengumumkan komitmen kami untuk menyediakan layanan terpadu dalam pemberangkatan dan penempatan Anak Buah Kapal (ABK) dengan standar internasional yang tinggi.</p>
      
      <h2>Visi dan Misi Kami</h2>
      <p>Sebagai perusahaan yang bergerak di bidang maritim, kami memiliki visi untuk menjadi mitra terpercaya dalam menyediakan tenaga kerja maritim berkualitas tinggi. Misi kami adalah:</p>
      <ul>
        <li>Memberikan pelatihan berkualitas sesuai standar STCW</li>
        <li>Memfasilitasi penempatan ABK di kapal-kapal internasional</li>
        <li>Menjaga kesejahteraan dan keselamatan ABK</li>
        <li>Membangun kemitraan strategis dengan perusahaan pelayaran global</li>
      </ul>
      
      <h2>Layanan Unggulan</h2>
      <p>Kami menawarkan berbagai layanan komprehensif untuk mendukung karir maritim Anda:</p>
      <ul>
        <li><strong>Pelatihan STCW:</strong> Program pelatihan sesuai standar internasional</li>
        <li><strong>Job Placement:</strong> Penempatan kerja di kapal-kapal asing</li>
        <li><strong>Career Counseling:</strong> Konsultasi karir dan pengembangan profesional</li>
        <li><strong>Document Processing:</strong> Pengurusan dokumen pelaut</li>
      </ul>
      
      <h2>Komitmen Terhadap Kualitas</h2>
      <p>Kami berkomitmen untuk terus meningkatkan kualitas layanan dan memastikan setiap ABK yang kami tempatkan memiliki kompetensi yang sesuai dengan kebutuhan industri maritim global.</p>
      
      <p>Bergabunglah dengan ribuan ABK yang telah mempercayakan karir maritim mereka kepada PT. Duta Samudera Bahari. Bersama-sama, kita wujudkan impian berkarir di laut lepas!</p>
    `,
  },
  {
    id: "2",
    title: "10 Tips Sukses Menghadapi Interview Kapal Asing",
    description:
      "Pelajari tips dan trik dari HR profesional kami untuk mempersiapkan interview internasional Anda.",
    author: "Budi Hartono",
    date: "2024-01-18",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    category: "Tips",
    tags: ["interview", "karir", "tips"],
    slug: "10-tips-sukses-menghadapi-interview-kapal-asing",
    readingTime: {
      text: "8 min read",
      minutes: 8,
      time: 480000,
      words: 1400,
    },
    content: `
      <p>Interview untuk posisi di kapal asing memerlukan persiapan khusus. Berikut adalah 10 tips yang akan membantu Anda sukses dalam interview tersebut.</p>
      
      <h2>1. Persiapkan Dokumen dengan Lengkap</h2>
      <p>Pastikan semua dokumen pelaut Anda lengkap dan masih berlaku. Ini termasuk:</p>
      <ul>
        <li>Sertifikat STCW</li>
        <li>Seaman's Book</li>
        <li>Medical Certificate</li>
        <li>Passport</li>
        <li>CV dalam bahasa Inggris</li>
      </ul>
      
      <h2>2. Kuasai Bahasa Inggris Maritim</h2>
      <p>Pelajari terminologi maritim dalam bahasa Inggris. Ini sangat penting karena komunikasi di kapal internasional menggunakan bahasa Inggris.</p>
      
      <h2>3. Pelajari Profil Perusahaan</h2>
      <p>Riset tentang perusahaan pelayaran yang akan mewawancarai Anda. Ketahui jenis kapal, rute pelayaran, dan budaya kerja mereka.</p>
      
      <h2>4. Siapkan Jawaban untuk Pertanyaan Umum</h2>
      <p>Beberapa pertanyaan yang sering diajukan:</p>
      <ul>
        <li>"Tell me about yourself"</li>
        <li>"Why do you want to work on our ships?"</li>
        <li>"How do you handle emergency situations?"</li>
        <li>"Describe your experience with safety procedures"</li>
      </ul>
      
      <h2>5. Tunjukkan Pengalaman Praktis</h2>
      <p>Ceritakan pengalaman kerja Anda di kapal sebelumnya dengan detail. Fokus pada pencapaian dan bagaimana Anda mengatasi tantangan.</p>
      
      <h2>6. Demonstrasi Pengetahuan Safety</h2>
      <p>Keselamatan adalah prioritas utama di kapal. Tunjukkan pengetahuan Anda tentang prosedur keselamatan dan emergency response.</p>
      
      <h2>7. Berpakaian Profesional</h2>
      <p>Kenakan pakaian formal yang rapi. First impression sangat penting dalam interview.</p>
      
      <h2>8. Tunjukkan Sikap Positif</h2>
      <p>Tunjukkan antusiasme dan sikap positif. Interviewer ingin melihat bahwa Anda termotivasi untuk bekerja.</p>
      
      <h2>9. Siapkan Pertanyaan untuk Interviewer</h2>
      <p>Siapkan pertanyaan yang menunjukkan minat Anda terhadap posisi dan perusahaan.</p>
      
      <h2>10. Follow Up Setelah Interview</h2>
      <p>Kirim email terima kasih setelah interview. Ini menunjukkan profesionalisme Anda.</p>
      
      <p>Dengan persiapan yang matang dan sikap yang tepat, Anda akan lebih percaya diri menghadapi interview dan meningkatkan peluang untuk diterima bekerja di kapal asing.</p>
    `,
  },
  {
    id: "3",
    title: "Program Beasiswa Pelatihan 2024 Sudah Dibuka",
    description:
      "Kami menawarkan 50 beasiswa penuh untuk program pelatihan STCW tahun ini. Daftar sekarang sebelum kuota penuh!",
    author: "HRD Team",
    date: "2024-01-15",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    category: "Pengumuman",
    tags: ["beasiswa", "pelatihan", "program"],
    slug: "program-beasiswa-pelatihan-2024",
    readingTime: { text: "4 min read", minutes: 4, time: 240000, words: 680 },
    content: `
      <p>PT. Duta Samudera Bahari dengan bangga mengumumkan pembukaan Program Beasiswa Pelatihan 2024. Kami menyediakan 50 beasiswa penuh untuk calon ABK yang ingin mengembangkan karir di industri maritim.</p>
      
      <h2>Detail Program Beasiswa</h2>
      <p>Program beasiswa ini mencakup:</p>
      <ul>
        <li>Pelatihan STCW Basic Safety Training (BST)</li>
        <li>Pelatihan Advanced Fire Fighting</li>
        <li>Pelatihan Medical First Aid</li>
        <li>Pelatihan Survival Craft and Rescue Boats</li>
        <li>Sertifikasi internasional yang diakui IMO</li>
      </ul>
      
      <h2>Syarat dan Ketentuan</h2>
      <p>Untuk mendaftar program beasiswa ini, Anda harus memenuhi syarat berikut:</p>
      <ul>
        <li>Warga Negara Indonesia</li>
        <li>Usia 18-35 tahun</li>
        <li>Pendidikan minimal SMA/SMK</li>
        <li>Sehat jasmani dan rohani</li>
        <li>Tidak buta warna</li>
        <li>Tinggi badan minimal 155 cm</li>
        <li>Mampu berenang minimal 50 meter</li>
      </ul>
      
      <h2>Cara Mendaftar</h2>
      <p>Proses pendaftaran dapat dilakukan dengan langkah berikut:</p>
      <ol>
        <li>Isi formulir pendaftaran online di website kami</li>
        <li>Upload dokumen persyaratan</li>
        <li>Ikuti tes seleksi administrasi</li>
        <li>Mengikuti tes kesehatan</li>
        <li>Interview dengan tim HRD</li>
      </ol>
      
      <h2>Dokumen yang Diperlukan</h2>
      <ul>
        <li>Fotocopy KTP</li>
        <li>Fotocopy ijazah terakhir</li>
        <li>Pas foto 4x6 (3 lembar)</li>
        <li>Surat keterangan sehat dari dokter</li>
        <li>Surat keterangan tidak buta warna</li>
        <li>Sertifikat kemampuan berenang</li>
      </ul>
      
      <h2>Timeline Program</h2>
      <ul>
        <li><strong>Pendaftaran:</strong> 15 Januari - 15 Februari 2024</li>
        <li><strong>Seleksi:</strong> 20 Februari - 5 Maret 2024</li>
        <li><strong>Pengumuman:</strong> 10 Maret 2024</li>
        <li><strong>Pelatihan:</strong> 15 Maret - 15 Mei 2024</li>
      </ul>
      
      <h2>Keuntungan Program</h2>
      <p>Peserta yang lulus program akan mendapatkan:</p>
      <ul>
        <li>Sertifikat STCW yang diakui internasional</li>
        <li>Jaminan penempatan kerja di kapal asing</li>
        <li>Gaji kompetitif sesuai standar internasional</li>
        <li>Pengembangan karir berkelanjutan</li>
      </ul>
      
      <p>Jangan lewatkan kesempatan emas ini! Daftar sekarang dan wujudkan impian berkarir di industri maritim internasional.</p>
    `,
  },
  {
    id: "4",
    title: "Pengalaman Pelaut Kami Bekerja di Kapal Kontainer Terbesar Dunia",
    description:
      "Testimoni menarik dari Andi Kurniawan yang kini bekerja sebagai Chief Engineer di Ever Given.",
    author: "Media Team",
    date: "2024-01-12",
    image:
      "https://images.unsplash.com/photo-1757876804410-6a0702805fbe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlbGF1dCUyMGluZG9uZXNpYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    category: "Testimoni",
    tags: ["karir", "sukses", "testimoni"],
    slug: "pengalaman-abk-kami-bekerja-di-kapal-kontainer",
    readingTime: {
      text: "6 min read",
      minutes: 6,
      time: 360000,
      words: 1050,
    },
    content: `
      <p>Andi Kurniawan, alumni PT. Duta Samudera Bahari, kini telah mencapai puncak karirnya sebagai Chief Engineer di salah satu kapal kontainer terbesar dunia, Ever Given. Berikut adalah kisah inspiratif perjalanan karirnya.</p>
      
      <h2>Awal Perjalanan</h2>
      <p>"Saya memulai karir maritim saya pada tahun 2015 setelah mengikuti program pelatihan di PT. Duta Samudera Bahari," kenang Andi. "Waktu itu saya hanya lulusan SMK Teknik Mesin yang bermimpi bekerja di kapal besar."</p>
      
      <h2>Pelatihan yang Mengubah Hidup</h2>
      <p>Andi mengikuti program pelatihan STCW lengkap di PT. Duta Samudera Bahari. "Pelatihan di sini sangat komprehensif. Tidak hanya teori, tapi juga praktik langsung dengan equipment yang sama seperti di kapal sungguhan," ujarnya.</p>
      
      <p>Program pelatihan yang diikuti Andi meliputi:</p>
      <ul>
        <li>Basic Safety Training (BST)</li>
        <li>Engine Room Simulator</li>
        <li>Advanced Fire Fighting</li>
        <li>Medical First Aid</li>
        <li>Leadership and Teamwork</li>
      </ul>
      
      <h2>Penempatan Pertama</h2>
      <p>Setelah lulus pelatihan, Andi ditempatkan sebagai Oiler di kapal bulk carrier milik perusahaan Yunani. "Pengalaman pertama di kapal sangat menantang. Tapi berkat bekal pelatihan yang solid, saya bisa beradaptasi dengan cepat," ceritanya.</p>
      
      <h2>Perjalanan Karir yang Menanjak</h2>
      <p>Dalam 8 tahun terakhir, Andi telah mengalami perkembangan karir yang luar biasa:</p>
      <ul>
        <li><strong>2015-2017:</strong> Oiler di kapal bulk carrier</li>
        <li><strong>2017-2019:</strong> Third Engineer di kapal tanker</li>
        <li><strong>2019-2021:</strong> Second Engineer di kapal kontainer</li>
        <li><strong>2021-2023:</strong> First Engineer di kapal cruise</li>
        <li><strong>2023-sekarang:</strong> Chief Engineer di Ever Given</li>
      </ul>
      
      <h2>Tantangan di Ever Given</h2>
      <p>"Bekerja di Ever Given adalah tantangan terbesar dalam karir saya," ungkap Andi. "Kapal ini memiliki panjang 400 meter dengan mesin yang sangat kompleks. Sebagai Chief Engineer, saya bertanggung jawab atas seluruh sistem mesin kapal."</p>
      
      <p>Tanggung jawab Andi sebagai Chief Engineer meliputi:</p>
      <ul>
        <li>Mengawasi operasional mesin utama 85.000 HP</li>
        <li>Mengelola tim engineer dari berbagai negara</li>
        <li>Memastikan efisiensi bahan bakar</li>
        <li>Maintenance preventif dan corrective</li>
        <li>Compliance dengan regulasi maritim internasional</li>
      </ul>
      
      <h2>Gaji dan Benefit</h2>
      <p>"Alhamdulillah, sebagai Chief Engineer di kapal sekelas Ever Given, gaji saya sekarang mencapai USD 8.000 per bulan," ungkap Andi. "Belum termasuk bonus dan tunjangan lainnya."</p>
      
      <h2>Pesan untuk Juniornya</h2>
      <p>Andi memberikan pesan kepada calon ABK yang ingin mengikuti jejaknya:</p>
      
      <blockquote>
        <p>"Kunci sukses di industri maritim adalah komitmen untuk terus belajar dan mengembangkan diri. Jangan pernah merasa puas dengan posisi saat ini. Selalu upgrade skill dan sertifikasi. Yang terpenting, pilih tempat pelatihan yang tepat seperti PT. Duta Samudera Bahari yang benar-benar mempersiapkan kita untuk dunia kerja internasional."</p>
      </blockquote>
      
      <h2>Rencana Masa Depan</h2>
      <p>Andi berencana untuk mengambil sertifikasi Master Mariner dalam 2 tahun ke depan. "Saya ingin menjadi Captain suatu hari nanti. Impian saya adalah memimpin kapal kontainer terbesar di dunia," tutupnya dengan penuh semangat.</p>
      
      <p>Kisah sukses Andi membuktikan bahwa dengan pelatihan yang tepat dan dedikasi tinggi, siapa pun bisa meraih kesuksesan di industri maritim internasional.</p>
    `,
  },
  {
    id: "5",
    title: "Standar Keselamatan Maritime IMO 2024: Apa yang Berubah?",
    description:
      "Update terbaru tentang standar keselamatan dan regulasi maritim internasional yang perlu Anda ketahui.",
    author: "Capt. Rudi Santoso",
    date: "2024-01-10",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    category: "Regulasi",
    tags: ["keselamatan", "imo", "regulasi"],
    slug: "standar-keselamatan-maritime-imo-2024",
    readingTime: {
      text: "7 min read",
      minutes: 7,
      time: 420000,
      words: 1200,
    },
    content: `
      <p>International Maritime Organization (IMO) telah mengeluarkan update terbaru untuk standar keselamatan maritim yang berlaku mulai 2024. Perubahan ini sangat penting untuk dipahami oleh seluruh pelaut dan perusahaan pelayaran.</p>
      
      <h2>Perubahan Utama IMO 2024</h2>
      <p>Beberapa perubahan signifikan yang perlu diperhatikan:</p>
      
      <h3>1. Enhanced STCW Requirements</h3>
      <p>IMO memperketat persyaratan sertifikasi STCW dengan penambahan:</p>
      <ul>
        <li>Cyber security awareness training</li>
        <li>Environmental protection procedures</li>
        <li>Enhanced emergency response protocols</li>
        <li>Digital navigation systems proficiency</li>
      </ul>
      
      <h3>2. New Safety Equipment Standards</h3>
      <p>Standar baru untuk peralatan keselamatan meliputi:</p>
      <ul>
        <li>Advanced life jacket dengan GPS tracker</li>
        <li>Enhanced fire detection systems</li>
        <li>Improved emergency communication devices</li>
        <li>Smart evacuation systems</li>
      </ul>
      
      <h3>3. Environmental Compliance</h3>
      <p>Regulasi lingkungan yang lebih ketat:</p>
      <ul>
        <li>Reduced sulfur emission limits</li>
        <li>Ballast water treatment requirements</li>
        <li>Waste management protocols</li>
        <li>Energy efficiency measures</li>
      </ul>
      
      <h2>Impact pada Pelaut Indonesia</h2>
      <p>Perubahan regulasi ini memiliki dampak langsung pada pelaut Indonesia:</p>
      
      <h3>Sertifikasi Tambahan</h3>
      <p>Pelaut harus mengikuti pelatihan tambahan untuk:</p>
      <ul>
        <li>Cyber security awareness</li>
        <li>Environmental protection</li>
        <li>Digital navigation systems</li>
        <li>Advanced emergency procedures</li>
      </ul>
      
      <h3>Renewal Requirements</h3>
      <p>Persyaratan pembaruan sertifikat menjadi lebih ketat dengan penambahan:</p>
      <ul>
        <li>Mandatory refresher courses</li>
        <li>Practical assessment</li>
        <li>Continuous professional development</li>
      </ul>
      
      <h2>Persiapan yang Diperlukan</h2>
      <p>Untuk menghadapi perubahan ini, pelaut perlu:</p>
      
      <h3>1. Update Sertifikasi</h3>
      <p>Pastikan semua sertifikat sesuai dengan standar terbaru:</p>
      <ul>
        <li>STCW Basic Safety Training</li>
        <li>Advanced Fire Fighting</li>
        <li>Medical First Aid</li>
        <li>Survival Craft and Rescue Boats</li>
        <li>Security Awareness</li>
      </ul>
      
      <h3>2. Pelatihan Tambahan</h3>
      <p>Ikuti pelatihan untuk kompetensi baru:</p>
      <ul>
        <li>Cyber security in maritime</li>
        <li>Environmental protection procedures</li>
        <li>Digital navigation systems</li>
        <li>Emergency response leadership</li>
      </ul>
      
      <h3>3. Continuous Learning</h3>
      <p>Komitmen untuk pembelajaran berkelanjutan melalui:</p>
      <ul>
        <li>Online courses</li>
        <li>Industry seminars</li>
        <li>Professional workshops</li>
        <li>Peer learning sessions</li>
      </ul>
      
      <h2>Timeline Implementation</h2>
      <p>Implementasi standar baru mengikuti jadwal berikut:</p>
      <ul>
        <li><strong>Januari 2024:</strong> Cyber security training mandatory</li>
        <li><strong>Maret 2024:</strong> New safety equipment standards</li>
        <li><strong>Juni 2024:</strong> Environmental compliance requirements</li>
        <li><strong>September 2024:</strong> Enhanced STCW certification</li>
        <li><strong>Desember 2024:</strong> Full implementation</li>
      </ul>
      
      <h2>Dukungan PT. Duta Samudera Bahari</h2>
      <p>PT. Duta Samudera Bahari telah mempersiapkan program khusus untuk mendukung pelaut menghadapi perubahan regulasi:</p>
      
      <h3>Program Update Sertifikasi</h3>
      <ul>
        <li>Cyber security awareness course</li>
        <li>Environmental protection training</li>
        <li>Digital navigation workshop</li>
        <li>Advanced emergency response</li>
      </ul>
      
      <h3>Fasilitas Pelatihan Terbaru</h3>
      <ul>
        <li>Simulator navigasi digital</li>
        <li>Cyber security lab</li>
        <li>Environmental training center</li>
        <li>Advanced safety equipment</li>
      </ul>
      
      <h2>Kesimpulan</h2>
      <p>Perubahan standar keselamatan IMO 2024 menuntut pelaut untuk terus mengembangkan kompetensi. Dengan persiapan yang tepat dan dukungan institusi pelatihan yang berkualitas, pelaut Indonesia dapat tetap kompetitif di pasar global.</p>
      
      <p>Jangan tunda untuk mempersiapkan diri menghadapi perubahan ini. Hubungi PT. Duta Samudera Bahari untuk informasi lebih lanjut tentang program pelatihan yang sesuai dengan standar IMO 2024.</p>
    `,
  },
  {
    id: "6",
    title: "Bergabunglah dengan Event Networking Pelaut di Jakarta",
    description:
      "Kesempatan emas bertemu dengan expert industri maritim dan network dengan Pelaut lainnya.",
    author: "Events Team",
    date: "2024-01-08",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    category: "Event",
    tags: ["networking", "event", "community"],
    slug: "bergabunglah-dengan-event-networking-abk-jakarta",
    readingTime: { text: "3 min read", minutes: 3, time: 180000, words: 520 },
    content: `
      <p>PT. Duta Samudera Bahari dengan bangga mengundang seluruh pelaut dan calon pelaut untuk menghadiri acara networking terbesar tahun ini di Jakarta.</p>
      
      <h2>Detail Acara</h2>
      <ul>
        <li><strong>Tanggal:</strong> Sabtu, 15 Februari 2024</li>
        <li><strong>Waktu:</strong> 09:00 - 17:00 WIB</li>
        <li><strong>Tempat:</strong> Hotel Grand Sahid Jaya, Jakarta</li>
        <li><strong>Tema:</strong> "Maritime Career Excellence 2024"</li>
      </ul>
      
      <h2>Agenda Acara</h2>
      <h3>Session 1: Industry Insights (09:00 - 12:00)</h3>
      <ul>
        <li>Keynote: "Future of Maritime Industry"</li>
        <li>Panel Discussion: "Career Opportunities in Global Shipping"</li>
        <li>Workshop: "Digital Skills for Modern Seafarers"</li>
      </ul>
      
      <h3>Session 2: Networking & Exhibition (13:00 - 17:00)</h3>
      <ul>
        <li>Company showcase dari 20+ perusahaan pelayaran</li>
        <li>Job fair dengan 500+ lowongan kerja</li>
        <li>Speed networking session</li>
        <li>Award ceremony untuk outstanding seafarers</li>
      </ul>
      
      <h2>Pembicara Utama</h2>
      <ul>
        <li><strong>Capt. John Smith</strong> - CEO Maersk Line Indonesia</li>
        <li><strong>Ir. Susi Hartono</strong> - Direktur Jenderal Perhubungan Laut</li>
        <li><strong>Capt. Ahmad Yani</strong> - President Indonesian Shipowners Association</li>
      </ul>
      
      <h2>Manfaat Mengikuti Acara</h2>
      <ul>
        <li>Networking dengan industry leaders</li>
        <li>Update terbaru tentang industri maritim</li>
        <li>Kesempatan kerja di perusahaan ternama</li>
        <li>Sertifikat kehadiran</li>
        <li>Goodie bag eksklusif</li>
      </ul>
      
      <h2>Cara Mendaftar</h2>
      <p>Pendaftaran gratis dan terbatas untuk 300 peserta pertama:</p>
      <ol>
        <li>Kunjungi website kami</li>
        <li>Isi formulir pendaftaran</li>
        <li>Upload CV terbaru</li>
        <li>Konfirmasi kehadiran via WhatsApp</li>
      </ol>
      
      <p>Jangan lewatkan kesempatan emas ini untuk mengembangkan karir maritim Anda!</p>
    `,
  },
];

async function getPost(slug: string) {
  // Find post by slug or id
  const post = newsPosts.find((p) => p.slug === slug || p.id === slug);
  return post || null;
}

export async function generateMetadata({
  params,
}: NewsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Artikel Tidak Ditemukan - PT. Duta Samudera Bahari",
    };
  }

  return {
    title: `${post.title} - PT. Duta Samudera Bahari`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = format(new Date(post.date), "dd MMMM yyyy", {
    locale: id,
  });

  return (
    <article className="py-20 bg-white dark:bg-slate-900">
      <div className="container-maritime max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-primary hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Berita
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <div className="mb-4">
            <span className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-foreground mb-4 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            {post.description}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-500 dark:text-gray-400 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formattedDate}</span>
            </div>
            {post.readingTime && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime.text}</span>
              </div>
            )}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-300 px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Featured Image */}
        <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            {...getOptimizedImageProps(post.image, post.title, {
              sizes: IMAGE_SIZES.hero,
            })}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-primary prose-strong:text-foreground prose-ul:text-gray-700 dark:prose-ul:text-gray-300 prose-ol:text-gray-700 dark:prose-ol:text-gray-300 prose-blockquote:border-primary prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-400"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-slate-700">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Bagikan Artikel
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Bagikan artikel ini kepada rekan Anda
              </p>
            </div>
            <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Artikel Terkait
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {newsPosts
              .filter((p) => p.id !== post.id && p.category === post.category)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/news/${relatedPost.slug || relatedPost.id}`}
                  className="group"
                >
                  <div className="bg-gray-50 dark:bg-slate-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                        {...getOptimizedImageProps(relatedPost.image, relatedPost.title, {
                          sizes: IMAGE_SIZES.news,
                        })}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 line-clamp-2">
                        {relatedPost.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mt-4">
                        <span>{format(new Date(relatedPost.date), "dd MMM yyyy", { locale: id })}</span>
                        {relatedPost.readingTime && (
                          <span>{relatedPost.readingTime.text}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </article>
  );
}