import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Berita & Blog - PT. Duta Samudera Bahari",
  description: "Berita terbaru, tips karir, dan artikel industri maritim",
  openGraph: {
    title: "Berita & Blog - PT. Duta Samudera Bahari",
    description: "Berita terbaru, tips karir, dan artikel industri maritim",
    type: "website",
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
