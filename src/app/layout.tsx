import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "PT. Duta Samudera Bahari - Rekrutmen dan Penempatan Pelaut Profesional",
  description:
    "Rekrutmen dan penempatan Pelaut berkualitas tinggi dengan standar internasional",
  keywords: ["Pelaut", "rekrutmen", "penempatan", "maritim", "kerja", "kapal"],
  authors: [{ name: "PT. Duta Samudera Bahari" }],
  creator: "PT. Duta Samudera Bahari",
  publisher: "PT. Duta Samudera Bahari",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://dutasamudera.com",
    siteName: "PT. Duta Samudera Bahari",
    title: "PT. Duta Samudera Bahari - Rekrutmen dan Penempatan Pelaut Profesional",
    description:
      "Rekrutmen dan penempatan Pelaut berkualitas tinggi dengan standar internasional",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
