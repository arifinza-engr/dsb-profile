import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan Kami - PT. Duta Samudera Bahari",
  description:
    "Layanan lengkap rekrutmen, pelatihan, dan penempatan Pelaut dengan standar internasional",
  openGraph: {
    title: "Layanan Kami - PT. Duta Samudera Bahari",
    description:
      "Layanan lengkap rekrutmen, pelatihan, dan penempatan Pelaut dengan standar internasional",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
