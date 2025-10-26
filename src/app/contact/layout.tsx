import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubungi Kami - PT. Duta Samudera Bahari",
  description:
    "Hubungi tim kami untuk informasi lebih lanjut tentang program pelatihan dan penempatan",
  openGraph: {
    title: "Hubungi Kami - PT. Duta Samudera Bahari",
    description:
      "Hubungi tim kami untuk informasi lebih lanjut tentang program pelatihan dan penempatan",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
