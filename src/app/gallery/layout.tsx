import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeri - PT. Duta Samudera Bahari",
  description: "Dokumentasi kegiatan, pelatihan, dan pengalaman ABK kami",
  openGraph: {
    title: "Galeri - PT. Duta Samudera Bahari",
    description: "Dokumentasi kegiatan, pelatihan, dan pengalaman ABK kami",
    type: "website",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
